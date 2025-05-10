
document.getElementById('flyBtn').addEventListener('click', () => {
  const plane = document.getElementById('plane');
  const letter = document.getElementById('letter');
  plane.style.left = '100vw';
  letter.style.left = 'calc(100vw - 200px)';
});
