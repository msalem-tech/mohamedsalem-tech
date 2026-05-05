document.addEventListener('DOMContentLoaded', () => {
    const featuredBtn = document.getElementById('featured-btn');
    const recentVideosBtn = document.getElementById('recent-videos-btn');

    if (featuredBtn) {
        featuredBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("ما قولنا الموقع تحت التطوير 🙄😂");
        });
    }

    if (recentVideosBtn) {
        recentVideosBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("استنى شوية.. بنرتب الفيديوهات وهتشتغل علطول 🎬⏳");
        });
    }
});
