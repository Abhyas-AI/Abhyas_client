document.getElementById('setupForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const domain = document.getElementById('domain').value.trim();
    const experience = document.getElementById('experience').value;
    const interviewFormat = document.getElementById('interviewFormat').value;
    const duration = document.getElementById('duration').value;

    const userUUID = localStorage.getItem('userUUID');

    if (!domain || !experience || !interviewFormat || !duration) {
        alert('Please fill out all fields before proceeding.');
        return;
    }

    const interviewComponents = {userUUID, domain, experience, interviewFormat, duration };

    try {
        const res = await fetch('http://localhost:5000/info/incomp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(interviewComponents)
        });

        const data = await res.json();
        console.log('Server Response:', data);

        window.location.href = 'resume.html';
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again.');
    }
});
