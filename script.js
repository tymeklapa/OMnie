// Prosty lightbox do powiększania zdjęć z galerii
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
const boxCap = box.querySelector('p');

document.querySelectorAll('.gallery figure').forEach(fig => {
  fig.addEventListener('click', () => {
    const img = fig.querySelector('img');
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    boxCap.textContent = fig.querySelector('figcaption').textContent;
    box.hidden = false;
  });
});

const close = () => { box.hidden = true; };
box.addEventListener('click', close);
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
