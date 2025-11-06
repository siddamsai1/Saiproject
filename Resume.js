const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeBtn.textContent =
    document.body.classList.contains('dark-mode')
      ? 'Light Mode ☀'
      : 'Dark Mode 🌙';
});
