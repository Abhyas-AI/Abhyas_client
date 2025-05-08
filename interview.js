let currentQuestionIndex = 0;
let questions = [];
let timer;
let recognition;
let currentQuestionResponses = [];
let isQuestionChanging = false;
const userUUID = localStorage.getItem('userUUID');

document.addEventListener('DOMContentLoaded', () => {
    const rulesPopup = document.getElementById('rulesPopup');
    const closeRulesBtn = document.getElementById('closeRulesBtn');
    rulesPopup.style.display = 'flex';
    
    closeRulesBtn.addEventListener('click', () => {
      rulesPopup.style.display = 'none';
    });
  });

function clearSpeechQueue() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
}

function initializeSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript;
        
        if (event.results[last].isFinal) {
            currentQuestionResponses[currentQuestionIndex] = {
                question: questions[currentQuestionIndex],
                answer: transcript.trim()
            };
            console.log("Final transcript:", transcript);
        }
    };
    
    recognition.onend = () => {
        if (!isQuestionChanging && currentQuestionIndex < questions.length) {
            console.log("Recognition ended, restarting...");
            recognition.start();
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (!isQuestionChanging && currentQuestionIndex < questions.length) {
            setTimeout(() => {
                recognition.start();
            }, 1000);
        }
    };
}

async function startInterview() {
    document.documentElement.requestFullscreen().catch((e)=>{
        console.log(e);
    });

    try {
        clearSpeechQueue();
        clearInterval(timer);
        currentQuestionIndex = 0;
        currentQuestionResponses = [];
        
        document.getElementById('question-text').textContent = 'Loading questions...';
        document.getElementById('timer').textContent = '';
        document.querySelector('button').disabled = true;

        const response = await fetch(`http://localhost:5000/interview/${userUUID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.questions && data.questions.length > 0) {
            questions = data.questions;
            initializeSpeechRecognition();

            if (currentQuestionIndex === 0) {
                displayQuestion(0);
            }
        } else {
            alert('No questions found. Please try again.');
            document.querySelector('button').disabled = false;
        }
    } catch (error) {
        console.error('Error starting interview:', error);
        document.querySelector('button').disabled = false;
    }
}

function speakQuestion(question, onComplete) {
    clearSpeechQueue(); 
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(question);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.name.includes('English')) || voices[0];
        
        utterance.onend = function() {
            if (onComplete) onComplete();
        };
        
        setTimeout(() => {
            speechSynthesis.speak(utterance);
        }, 100);
    } else {
        if (onComplete) onComplete();
    }
}

function displayQuestion(index) {
    console.log(`Displaying question at index: ${index}`);
    if (index >= questions.length) {
        endInterview();
        return;
    }

    isQuestionChanging = true;
    
    if (recognition) {
        try {
            recognition.stop();
        } catch (e) {
            console.log("Recognition wasn't running");
        }
    }

    currentQuestionIndex = index;
    const questionElement = document.getElementById('question-text');
    questionElement.textContent = questions[index];
    
    document.getElementById('timer').textContent = 'Narrating question...';
    
    if (!currentQuestionResponses[currentQuestionIndex]) {
        currentQuestionResponses[currentQuestionIndex] = {
            question: questions[currentQuestionIndex],
            answer: ""
        };
    }
    
    clearSpeechQueue();
    
    speakQuestion(questions[index], () => {
        document.getElementById('timer').textContent = 'Listening...';
        
        startTimer(60, () => {
            isQuestionChanging = true;
            if (recognition) {
                recognition.stop();
            }
            displayQuestion(currentQuestionIndex + 1);
        });
        
        setTimeout(() => {
            isQuestionChanging = false;
            try {
                if (recognition) {
                    recognition.start();
                }
            } catch (e) {
                console.error("Failed to start recognition:", e);
                setTimeout(() => {
                    if (recognition) recognition.start();
                }, 500);
            }
        }, 300); 
    });
}

function startTimer(duration, callback) {
    clearInterval(timer);
    
    const timerElement = document.getElementById('timer');
    let timeLeft = duration;
    
    timerElement.textContent = `Time left: ${timeLeft}s`;
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            callback();
        }
    }, 1000);
}

function exitFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error("Error exiting fullscreen:", err);
      });
    }
  }

async function endInterview() {
    clearInterval(timer);
    clearSpeechQueue();
    exitFullscreen();

    if (recognition) {
        try {
            recognition.stop();
        } catch (e) {
            console.log("Recognition wasn't running");
        }
    }
    
    const formattedResponses = currentQuestionResponses.filter(response => response && response.answer);

    document.getElementById('question-text').textContent = 'Submitting your responses...';
    
    try {
        const response = await fetch(`http://localhost:5000/process-interview/${userUUID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                responses: formattedResponses
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const audioResponse = await fetch(`http://localhost:5000/save-responses/${userUUID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                responses: formattedResponses
            })
        });

        if (!audioResponse.ok) {
            console.warn('Failed to save responses to Audio collection, but interview processing succeeded');
        }

        const resumeFeedbackResponse = await fetch(`http://localhost:5000/generate-resume-feedback/${userUUID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                responses: formattedResponses
            })
        });

        if (!resumeFeedbackResponse.ok) {
            console.warn('Failed to generate resume feedback, but interview processing succeeded');
        }

        document.getElementById('question-text').textContent = 'Interview completed! Results are being analyzed.';
        document.getElementById('btnn').textContent = 'Start Interview Again';
        document.getElementById('timer').textContent = '';
        document.querySelector('button').disabled = false;

        setTimeout(() => {
            window.location.href = 'chart.html';
        }, 3000);
    } catch (error) {
        console.error('Error submitting interview responses:', error);
        document.getElementById('question-text').textContent = 'Error submitting interview. Please try again.';
        document.querySelector('button').disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    speechSynthesis.onvoiceschanged = function() {
        console.log("Voices loaded");
    };
    
    document.querySelector('button').addEventListener('click', () => {
        document.querySelector('button').disabled = true;
        document.getElementById('btnn').textContent = 'Interview in progress...';
        startInterview();
    });
});