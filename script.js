document.addEventListener('DOMContentLoaded', () => {
    const featuredBtn = document.getElementById('featured-btn');

    if (featuredBtn) {
        featuredBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("ما قولنا الموقع تحت التطوير 🙄😂");
        });
    }
});
