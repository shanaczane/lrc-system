// ============================================
// PAGE NAVIGATION
// ============================================
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');

  document.querySelectorAll('[data-nav]').forEach(b => {
    b.classList.toggle('active', b.dataset.nav === pageId);
  });

  document.body.classList.toggle('on-landing', pageId === 'landing');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show login screen on load
navigate('landing');
