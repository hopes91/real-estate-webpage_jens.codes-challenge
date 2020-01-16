const slides = document.querySelectorAll('.slide');

let mainSlide = 0;

const moveSlides = () => {
  setInterval(() => handleArrows(1), 5000);
};

const handleArrows = index => {
  mainSlide === 0 && index === -1 ?
    mainSlide = slides.length - 1 :
  mainSlide === slides.length - 1 && index === 1 ?
    mainSlide = 0 :
    mainSlide += index;

  showSlides();
};

const showSlides = () => {
  slides.forEach(slide => slide.style.display = 'none');

  slides.forEach((slide, index) => {
    if (index === mainSlide) {
      slide.style.display = 'block';

      createDots();
      detectCurrentSlide();
    }
  });
};

const detectCurrentSlide = () => {
  const dots = document.querySelectorAll('.dot');

  dots.forEach(dot => {
    dot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    dot.style.borderColor = 'rgba(0, 0, 0, 0.7)';
  });

  dots.forEach((dot, index) => {
    if (index === mainSlide) {
      dot.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      dot.style.borderColor = 'rgba(0, 0, 0, 1)';
    }
  });
};

const createDots = () => {
  const dotsContainer = document.querySelector('.dots');

  dotsContainer.innerHTML = '';

  slides.forEach(slide => {
    const dot = document.createElement('span');
    dot.setAttribute('class', 'dot');
    dotsContainer.appendChild(dot);
  });
};

window.addEventListener('load', showSlides);
window.addEventListener('load', moveSlides);
