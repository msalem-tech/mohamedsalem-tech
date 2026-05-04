document.addEventListener('DOMContentLoaded', () => {
    const featuredBtn = document.getElementById('featured-btn');
    const recentVideosBtn = document.getElementById('recent-videos-btn');

    // رسالة زر الفيديوهات المميزة
    if (featuredBtn) {
        featuredBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("ما قولنا الموقع تحت التطوير 🙄😂");
        });
    }

    // رسالة زر الفيديوهات الأخيرة
    if (recentVideosBtn) {
        recentVideosBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("استنى شوية.. بنرتب الفيديوهات وهتشتغل فوراً علطول 🎬⏳");
        });
    }
});
