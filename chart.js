async function fetchAndRenderChart() {
    try {
        const userUUID = localStorage.getItem('userUUID');
        const response = await fetch(`https://abhyas-server.onrender.com/results/${userUUID}`);
        if (!response.ok) {
            throw new Error('Failed to fetch results');
        }
        
        const data = await response.json();
        renderChart(data);
        renderDetailedFeedback(data);
        renderResumeFeedback(data);
        calculateAbhyasScore(data); 
    } catch (error) {
        console.error('Error fetching results:', error);
        document.getElementById('feedbackChart').innerHTML = 
            '<p>Error loading analytics. Please try again.</p>';
    }
}

function renderChart(feedback) {
    const ctx = document.getElementById("feedbackChart").getContext("2d");
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                "Grammar", 
                "Confidence", 
                "Technical", 
                "Communication",
                "Body Language",
                "Facial Confidence"
            ],
            datasets: [{
                label: 'Interview Performance',
                data: [
                    feedback.grammar_score || feedback.grammar || 0,
                    feedback.confidence_score || feedback.confidence || 0,
                    feedback.technical_score || feedback.technical || 0,
                    feedback.Communication_score || feedback.Communication || 0,
                    feedback.bodylang_score || feedback.bodylang || 0,
                    feedback.facialconfidence_score || feedback.facialconfidence || 0
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        backdropColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        color: '#333'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20
                    }
                },
                title: {
                    display: true,
                    text: 'Comprehensive Interview Analysis',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}`;
                        }
                    },
                    bodyFont: {
                        size: 14
                    },
                    titleFont: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.1
                }
            }
        }
    });
}

function renderDetailedFeedback(feedback) {
    const container = document.getElementById('detailedFeedback');
    let html = '<h2>Question-wise Feedback</h2>';
    
    feedback.evaluations.forEach((eval, index) => {
        html += `
        <div class="feedback-item">
            <div class="feedback-question">Q${index + 1}: ${eval.question}</div>
            <div class="feedback-scores">
                <div class="score-item grammar-score">
                    <span class="score-label">Grammar:</span>
                    <span class="score-value">${eval.grammar}</span>
                </div>
                <div class="score-item confidence-score">
                    <span class="score-label">Confidence:</span>
                    <span class="score-value">${eval.confidence}</span>
                </div>
                <div class="score-item technical-score">
                    <span class="score-label">Technical:</span>
                    <span class="score-value">${eval.technical}</span>
                </div>
                <div class="score-item communication-score">
                    <span class="score-label">Communication:</span>
                    <span class="score-value">${eval.Communication}</span>
                </div>
                <div class="score-item bodylang-score">
                    <span class="score-label">Body Language:</span>
                    <span class="score-value">${eval.bodylang}</span>
                </div>
                <div class="score-item facialconfidence-score">
                    <span class="score-label">Facial Confidence:</span>
                    <span class="score-value">${eval.facialconfidence}</span>
                </div>
            </div>
            <div class="feedback-text">${eval.feedback}</div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderResumeFeedback(feedback) {
    const container = document.getElementById('resumeFeedbackContent');
    if (feedback.resume_feedback) {
        container.innerHTML = `<p>${feedback.resume_feedback}</p>`;
    } else {
        container.innerHTML = '<p>No resume feedback available yet.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderChart();
    
    const downloadBtn = document.getElementById('downloadReportBtn');
    downloadBtn.addEventListener('click', generatePDF);
});

function calculateAbhyasScore(feedback) {
    const scores = [
        feedback.grammar_score || feedback.grammar || 0,
        feedback.confidence_score || feedback.confidence || 0,
        feedback.technical_score || feedback.technical || 0,
        feedback.Communication_score || feedback.Communication || 0,
        feedback.bodylang_score || feedback.bodylang || 0,
        feedback.facialconfidence_score || feedback.facialconfidence || 0
    ];
    
    const sum = scores.reduce((a, b) => a + b, 0);
    const average = sum / scores.length;
    
    document.getElementById('abhyasScoreValue').textContent = Math.round(average);
    
    return average;
}

async function generatePDF() {
    try {
        const downloadBtn = document.getElementById('downloadReportBtn');
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

        const userUUID = localStorage.getItem('userUUID');
        const response = await fetch(`https://abhyas-server.onrender.com/results/${userUUID}`);
        if (!response.ok) {
            throw new Error('Failed to fetch results');
        }
        const data = await response.json();
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const chartCanvas = document.getElementById('feedbackChart');
        const chartImage = chartCanvas.toDataURL('image/png');
        
        const abhyasScore = calculateAbhyasScore(data);
        
        let pdfHTML = `
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #333;
                padding: 20px;
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
            .header h1 {
                color: #4361ee;
                margin-bottom: 10px;
            }
            .chart-and-score-container-pdf {
                display: flex;
                justify-content: space-between;
                margin: 30px 0;
            }
            .chart-container-pdf {
                flex: 2;
                text-align: center;
            }
            .abhyas-score-pdf {
                flex: 1;
                background: linear-gradient(135deg, #4361ee, #3a0ca3);
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-width: 200px;
            }
            .abhyas-score-value-pdf {
                font-size: 2.5rem;
                font-weight: bold;
                margin: 10px 0;
            }
            .scores-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 15px;
                margin: 30px 0;
            }
            .score-item-pdf {
                padding: 10px 15px;
                border-radius: 8px;
                font-weight: bold;
                width: 150px;
                text-align: center;
            }
            .feedback-section {
                margin: 30px 0;
            }
            .feedback-section h2 {
                color: #4361ee;
                border-bottom: 2px solid #4361ee;
                padding-bottom: 5px;
            }
            .feedback-item-pdf {
                margin-bottom: 20px;
                page-break-inside: avoid;
            }
            .feedback-question-pdf {
                font-weight: bold;
                margin-bottom: 5px;
            }
        </style>
        <div class="header">
            <h1>Abhyas Interview Report</h1>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="chart-and-score-container-pdf">
            <div class="chart-container-pdf">
                <img src="${chartImage}" width="100%">
            </div>
            <div class="abhyas-score-pdf">
                <div>Abhyas Score</div>
                <div class="abhyas-score-value-pdf">${Math.round(abhyasScore)}</div>
                <div style="font-size: 0.8rem;">Average of all 6 evaluation metrics</div>
            </div>
        </div>
        
        <div class="scores-container">
            <div class="score-item-pdf" style="background-color: rgba(244, 67, 54, 0.1); color: #f44336;">
                Grammar: ${data.grammar_score || data.grammar || 0}
            </div>
            <div class="score-item-pdf" style="background-color: rgba(33, 150, 243, 0.1); color: #2196f3;">
                Confidence: ${data.confidence_score || data.confidence || 0}
            </div>
            <div class="score-item-pdf" style="background-color: rgba(76, 175, 80, 0.1); color: #4caf50;">
                Technical: ${data.technical_score || data.technical || 0}
            </div>
            <div class="score-item-pdf" style="background-color: rgba(156, 39, 176, 0.1); color: #9c27b0;">
                Communication: ${data.Communication_score || data.Communication || 0}
            </div>
            <div class="score-item-pdf" style="background-color: rgba(255, 152, 0, 0.1); color: #ff9800;">
                Body Language: ${data.bodylang_score || data.bodylang || 0}
            </div>
            <div class="score-item-pdf" style="background-color: rgba(96, 125, 139, 0.1); color: #607d8b;">
                Facial Confidence: ${data.facialconfidence_score || data.facialconfidence || 0}
            </div>
        </div>
        
        <div class="feedback-section">
            <h2>Question-wise Feedback</h2>`;
        
        data.evaluations.forEach((eval, index) => {
            pdfHTML += `
            <div class="feedback-item-pdf">
                <div class="feedback-question-pdf">Q${index + 1}: ${eval.question}</div>
                <div style="margin-bottom: 10px;">
                    <span style="display: inline-block; margin-right: 10px; background-color: rgba(244, 67, 54, 0.1); color: #f44336; padding: 3px 8px; border-radius: 4px;">Grammar: ${eval.grammar}</span>
                    <span style="display: inline-block; margin-right: 10px; background-color: rgba(33, 150, 243, 0.1); color: #2196f3; padding: 3px 8px; border-radius: 4px;">Confidence: ${eval.confidence}</span>
                    <span style="display: inline-block; margin-right: 10px; background-color: rgba(76, 175, 80, 0.1); color: #4caf50; padding: 3px 8px; border-radius: 4px;">Technical: ${eval.technical}</span>
                    <span style="display: inline-block; margin-right: 10px; background-color: rgba(156, 39, 176, 0.1); color: #9c27b0; padding: 3px 8px; border-radius: 4px;">Communication: ${eval.Communication}</span>
                    <span style="display: inline-block; margin-right: 10px; background-color: rgba(255, 152, 0, 0.1); color: #ff9800; padding: 3px 8px; border-radius: 4px;">Body Language: ${eval.bodylang}</span>
                    <span style="display: inline-block; background-color: rgba(96, 125, 139, 0.1); color: #607d8b; padding: 3px 8px; border-radius: 4px;">Facial Confidence: ${eval.facialconfidence}</span>
                </div>
                <p>${eval.feedback}</p>
            </div>`;
        });
        
        pdfHTML += `
        </div>
            <div class="feedback-section" style="page-break-inside: avoid;">
            <h2>Resume Feedback</h2>
            <div style="white-space: pre-wrap; word-wrap: break-word; padding: 10px; background-color: #f9f9f9; border-radius: 5px;">
                ${data.resume_feedback || 'No resume feedback available yet.'}
            </div>
        </div>`;
        

        const element = document.createElement('div');
        element.innerHTML = pdfHTML;
        document.body.appendChild(element);
        
        const options = {
            margin: 15,
            filename: `Abhyas_Interview_Report_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                logging: true,
                useCORS: true,
                allowTaint: true
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        await html2pdf().set(options).from(element).save();
        
        document.body.removeChild(element);
        
        downloadBtn.classList.remove('loading');
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Report';
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Failed to generate PDF report. Please try again.');
        
        const downloadBtn = document.getElementById('downloadReportBtn');
        downloadBtn.classList.remove('loading');
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Report';
    }
}
