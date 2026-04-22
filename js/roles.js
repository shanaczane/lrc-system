// ============================================
// ROLE SWITCHER (top nav)
// ============================================
const roleData = {
  student:   { name: 'Shan Cruz',   initials: 'SC', avatarBg: 'linear-gradient(135deg, #006F3C, #003D20)' },
  librarian: { name: 'Maria Reyes', initials: 'MR', avatarBg: 'linear-gradient(135deg, #B8923D, #7A5E26)' }
};

document.getElementById('roleSwitcher').addEventListener('click', (e) => {
  if (!e.target.matches('.role-btn')) return;
  const role = e.target.dataset.role;

  document.querySelectorAll('.role-btn').forEach(b => b.classList.toggle('active', b.dataset.role === role));

  const data = roleData[role];
  document.getElementById('userName').textContent = data.name;
  const avatar = document.getElementById('userAvatar');
  avatar.textContent = data.initials;
  avatar.style.background = data.avatarBg;

  document.querySelectorAll('.role-view').forEach(v => {
    v.style.display = v.dataset.role === role ? 'block' : 'none';
  });

  document.querySelectorAll('.sidebar-view').forEach(v => {
    v.style.display = v.dataset.role === role ? '' : 'none';
  });

  const fab = document.querySelector('.chat-fab');
  if (fab) fab.style.display = role === 'librarian' ? 'none' : '';

  navigate('dashboard');
});

// ============================================
// LOGIN ROLE SELECTION
// ============================================
let currentLoginRole = 'student';

function selectLoginRole(role) {
  currentLoginRole = role;
  document.querySelectorAll('.role-card').forEach(c => {
    c.classList.toggle('active', c.dataset.loginRole === role);
  });
  const btn = document.getElementById('signInBtn');
  const dest = role === 'librarian' ? 'Librarian Dashboard' : 'Student & Faculty Dashboard';
  btn.textContent = `Sign in → ${dest}`;
}

function loginAndNavigate() {
  const roleBtn = document.querySelector(`.role-btn[data-role="${currentLoginRole}"]`);
  if (roleBtn) roleBtn.click();
  navigate('dashboard');
}
