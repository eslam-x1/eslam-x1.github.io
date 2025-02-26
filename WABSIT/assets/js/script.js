// 🔹 تأثير عند تمرير الصفحة
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// 🔹 تأثير زر "تواصل معنا"
document.querySelector('.btn').addEventListener('mouseover', function() {
    this.style.backgroundColor = "#0056b3";
});
document.querySelector('.btn').addEventListener('mouseout', function() {
    this.style.backgroundColor = "#007bff";
});