
// Header hide on scroll
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 50) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = current;
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

function appearOnScroll() {
  faders.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);













const cards = document.querySelectorAll('.day-card');

const revealCards = () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.classList.add('reveal');
    } else {
      card.classList.remove('reveal');
    }
  });
}

window.addEventListener('scroll', revealCards);
revealCards();






