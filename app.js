const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");
const signUpBtn = document.querySelector("#SignUpBtn");
const signInBtn = document.querySelector("#SignInBtn");

function loginFunction(){
    loginForm.style.left = "50%";
    loginForm.style.opacity = 1;
    registerForm.style.left = "150%";
    registerForm.style.opacity = 0;
    wrapper.style.height = "450px";
    wrapper.classList.remove('register-active'); 
    loginTitle.style.top = "50%";
    loginTitle.style.opacity = 1;
    registerTitle.style.top = "50px";
    registerTitle.style.opacity = 0;
    wrapper.scrollTo({ top: 0, behavior: 'smooth' });
}

function registerFunction(){
    loginForm.style.left = "-50%";
    loginForm.style.opacity = 0;
    registerForm.style.left = "50%";
    registerForm.style.opacity = 1;
    wrapper.style.height = "660px";
    wrapper.classList.add('register-active');
    loginTitle.style.top = "-60px";
    loginTitle.style.opacity = 0;
    registerTitle.style.top = "50%";
    registerTitle.style.opacity = 1;
    wrapper.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelector('.btn-submit-reg').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-pass').value;

    try {
        const response = await fetch('https://abhyas-server.onrender.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('OTP sent to your email!');
            document.getElementById('otp-section').style.display = 'block'; 
        } else {
            alert(data.error || 'Registration failed');
        }
    } catch (error) {
        alert('Error sending OTP');
    }
});

document.querySelector('.btn-submit').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const otp = document.getElementById('reg-otp').value.trim();
    const agreeCheckbox = document.getElementById('agree');

    if (!agreeCheckbox.checked) {
        alert('Please agree to terms!');
        return;
    }

    try {
        const response = await fetch('https://abhyas-server.onrender.com/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, otp })
        });
        
        const data = await response.json();
        if (response.ok && data.verified) {
            localStorage.setItem('userUUID', data.userUUID);
            alert('Registration successful!');

            document.getElementById('reg-name').value = '';
            document.getElementById('reg-email').value = '';
            document.getElementById('reg-pass').value = '';
            document.getElementById('reg-otp').value = '';
            document.getElementById('agree').checked = false;

            document.getElementById('otp-section').style.display = 'none';
            loginFunction();
            
        } else {
            alert(data.error || 'OTP verification failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error verifying OTP');
    }
});

document.querySelector('#SignInBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('log-email').value.trim().toLowerCase();
    const password = document.getElementById('log-pass').value;

    try {
        const response = await fetch('https://abhyas-server.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('Successfully logged in!');
            localStorage.setItem('username', data.username);
            localStorage.setItem('userUUID', data.userUUID);
            setTimeout(() => {
                window.location.href = 'setup.html';
            }, 1000);
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error during login');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const termsLink = document.querySelector('label[for="agree"] a');
    if (termsLink) {
        termsLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('termsPopup').style.display = 'flex';
        });
    }

    const privacyLink = document.querySelector('.privacy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('privacyPopup').style.display = 'flex';
        });
    }

    document.querySelector('.close-terms').addEventListener('click', function() {
        document.getElementById('termsPopup').style.display = 'none';
    });

    document.querySelector('.close-privacy').addEventListener('click', function() {
        document.getElementById('privacyPopup').style.display = 'none';
    });

    document.getElementById('termsPopup').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });

    document.getElementById('privacyPopup').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});

document.querySelector('a[href="/change_pass"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('forgotPasswordPopup').style.display = 'flex';
});


document.querySelector('#submitReset').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('reset-email').value.trim().toLowerCase();
    
    try {
        const response = await fetch('https://abhyas-server.onrender.com/request-password-reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('Password reset link sent to your email!');
            document.getElementById('forgotPasswordPopup').style.display = 'none';
        } else {
            alert(data.error || 'Failed to send reset link');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending reset link');
    }
});
