(function() {
  // التبديل بين الصفحات
  const pages = document.querySelectorAll('.page');
  const navBtns = document.querySelectorAll('.nav-btn');
  const footerNavBtns = document.querySelectorAll('.footer-links .nav-btn');

  function showPage(pageId) {
    pages.forEach(p => p.classList.remove('active-page'));
    document.getElementById(pageId + '-page').classList.add('active-page');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.page === pageId) btn.classList.add('active');
    });
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const page = btn.dataset.page;
      if (page) showPage(page);
    });
  });

  footerNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const page = btn.dataset.page;
      if (page) showPage(page);
    });
  });

  // تبويبات المكتبة
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');
      const target = tab.dataset.tab;
      tabContents.forEach(tc => tc.style.display = 'none');
      document.getElementById(target + '-tab').style.display = 'block';
    });
  });

  // شريط البحث
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.video-card, .tool-card');
      cards.forEach(card => {
        const searchData = card.dataset.search || card.textContent || '';
        if (query === '' || searchData.toLowerCase().includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // رسالة "قريب هيكون جاهز" للأزرار الوهمية
  function showSoonMessage() {
    const toast = document.getElementById('toast');
    toast.textContent = '🔥😅 قريب هيكون جاهز';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      toast.textContent = 'تم نسخ الرابط 📋';
    }, 2000);
  }

  // تطبيق الرسالة على أي رابط أو زر ليس له رابط حقيقي (أو يحوي "#" فقط)
  document.querySelectorAll('a[href="#"],[data-soon]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      showSoonMessage();
    });
  });

  // الأزرار التي لا تحتوي على رابط حقيقي (أزرار btn-outline التي لا رابط لها)
  document.querySelectorAll('.btn-outline[href="#"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showSoonMessage();
    });
  });

  // نسخ الرابط
  const toast = document.getElementById('toast');
  function showCopyToast() {
    toast.textContent = 'تم نسخ الرابط 📋';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }

  document.querySelectorAll('.copy-icon').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.dataset.copy || '';
      if (textToCopy === '#' || textToCopy === '') {
        showSoonMessage();
        return;
      }
      try {
        await navigator.clipboard.writeText(textToCopy);
        showCopyToast();
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopyToast();
      }
    });
  });

  // زر "ابدأ من هنا"
  document.getElementById('startHereBtn')?.addEventListener('click', () => {
    showPage('library');
    setTimeout(() => {
      document.querySelector('.tab[data-tab="videos"]').click();
    }, 100);
  });

  // الوضع الليلي
  const darkToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
      darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
})();
