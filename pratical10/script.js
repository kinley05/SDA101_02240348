document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitButton = document.getElementById('submitButton');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    usernameInput.addEventListener('input', validateUsername);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);

    function validateUsername() {
        const username = usernameInput.value;
        if (username.length < 3 || username.length > 20) {
            usernameError.textContent = 'Username must be between 3 and 20 characters.';
            submitButton.disabled = true;
        } else {
            usernameError.textContent = '';
            validateForm();
        }
    }

    function validateEmail() {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            submitButton.disabled = true;
        } else {
            emailError.textContent = '';
            validateForm();
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!passwordPattern.test(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long, contain uppercase, lowercase, number, and special character.';
            submitButton.disabled = true;
        } else {
            passwordError.textContent = '';
            validateConfirmPassword();
            validateForm();
        }
    }

    function validateConfirmPassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            submitButton.disabled = true;
        } else {
            confirmPasswordError.textContent = '';
            validateForm();
        }
    }

    function validateForm() {
        if (!usernameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
            submitButton.disabled = false;
        }
    }
});
