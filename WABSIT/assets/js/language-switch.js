// language-switch.js

// التبديل بين اللغات
function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
}

// الكلمات والترجمات
const translations = {
    en: {
        "welcome": "Welcome to White Sand",
        "about_us": "About Us",
        "services": "Our Services",
        "contact": "Contact Us"
    },
    ar: {
        "welcome": "مرحبًا في White Sand",
        "about_us": "من نحن",
        "services": "خدماتنا",
        "contact": "اتصل بنا"
    }
};

// إضافة وظيفة التبديل بين اللغات
document.querySelector('#language-switch').addEventListener('change', function () {
    const selectedLanguage = this.value;
    switchLanguage(selectedLanguage);
});