const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.getElementById('closeBtn');

// Открыть модалку
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

// Закрыть по крестику
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Закрыть по клику на overlay
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});