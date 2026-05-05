// ============================================
// CATALOG FILTERS
// ============================================
document.querySelectorAll('.filter').forEach(f => {
  f.addEventListener('click', () => {
    if (f.classList.contains('active') && f.textContent.trim().startsWith('All')) return;
    if (!f.querySelector('svg[viewBox*="9 18"]')) {
      f.classList.toggle('active');
    }
  });
});

// ============================================
// NOTIFICATION TABS WITH FILTERING
// ============================================
document.querySelectorAll('.notif-tab').forEach(t => {
  t.addEventListener('click', () => {
    const container = t.closest('.role-view') || t.closest('#page-notifications');

    container.querySelectorAll('.notif-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');

    const filter = t.dataset.filter || 'all';

    container.querySelectorAll('.notif-item').forEach(item => {
      item.classList.toggle('notif-hidden', filter !== 'all' && item.dataset.type !== filter);
    });

    container.querySelectorAll('.notif-group').forEach(group => {
      const hasVisible = group.querySelector('.notif-item:not(.notif-hidden)');
      group.classList.toggle('notif-hidden', !hasVisible);
    });
  });
});

// ============================================
// CATALOG TABS (librarian: Books / Students)
// ============================================
document.querySelectorAll('.catalog-tab').forEach(t => {
  t.addEventListener('click', () => {
    const bar = t.closest('.catalog-tab-bar');
    bar.querySelectorAll('.catalog-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');

    const panel = t.dataset.panel;
    const container = t.closest('.role-view');
    container.querySelectorAll('.catalog-panel').forEach(p => {
      p.style.display = p.dataset.panel === panel ? '' : 'none';
    });
  });
});

// ============================================
// RESERVATION CALENDAR
// ============================================
document.querySelectorAll('.cal-day:not(.muted):not(.disabled)').forEach(d => {
  d.addEventListener('click', () => {
    document.querySelectorAll('.cal-day').forEach(x => x.classList.remove('selected'));
    d.classList.add('selected');
  });
});

// ============================================
// CHATBOT QUICK REPLIES
// ============================================
document.querySelectorAll('.quick-reply').forEach(q => {
  q.addEventListener('click', () => {
    const messages = document.querySelector('.chat-messages');
    if (!messages) return;
    const msg = document.createElement('div');
    msg.className = 'msg user';
    msg.innerHTML = `
      <div class="msg-bubble">${q.textContent}</div>
      <div class="msg-time">Just now</div>
    `;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  });
});
