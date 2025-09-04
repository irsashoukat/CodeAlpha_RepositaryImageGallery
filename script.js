// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;

function openLightbox(index) {
  lightbox.classList.remove('hidden');
  lightboxImg.src = cards[index].querySelector('img').src;
  currentIndex = index;
}

function closeLightbox() {
  lightbox.classList.add('hidden');
}

function showNext() {
  currentIndex = (currentIndex + 1) % cards.length;
  lightboxImg.src = cards[currentIndex].querySelector('img').src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  lightboxImg.src = cards[currentIndex].querySelector('img').src;
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'Escape') closeLightbox();
});

// Filtering
const filterButtons = document.querySelectorAll('.filter-bar button');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-bar .active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    cards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  });
});
