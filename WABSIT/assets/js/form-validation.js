 // form-validation.js

// التحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// التحقق من صحة كلمة المرور
function validatePassword(password) {
    return password.length >= 8; // الحد الأدنى للطول 8 حروف
}

// تطبيق التحقق عند تقديم النموذج
document.querySelector('form').addEventListener('submit', function (event) {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters.');
        event.preventDefault();
    }
});