const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('connectForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('emailInput').value.trim();
  const subject = encodeURIComponent('Portfolio connection');
  const body = encodeURIComponent('Hi Abhishek,\n\nPlease connect with me at: ' + email);
  window.location.href = 'mailto:abhisheknj37@gmail.com?subject=' + subject + '&body=' + body;
});