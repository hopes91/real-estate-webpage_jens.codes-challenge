const slides = document.querySelectorAll('.slide');

const handleAnimation = () => {
  const titleH1 = document.querySelector('.title h1');
  const titleH2 = document.querySelector('.title h2');
  const lineThrough1 = document.querySelector('.line-through.one');
  const lineThrough2 = document.querySelector('.line-through.two');
  const lineThrough3 = document.querySelector('.line-through.three');
  const socialMediaIconsContainer = document.querySelector('.social-media-icons');
  const slider = document.querySelector('.slider');
  const arrowLeft = document.querySelector('.arrows .arrow-left');
  const arrowRight = document.querySelector('.arrows .arrow-right');
  const dotsContainer = document.querySelector('.dots');

  setTimeout(() => {
    slider.style.right = '0';
    showSlides();
    moveSlides();
  }, 0);

  setTimeout(() => {
    arrowLeft.style.left = '0';
    arrowRight.style.right = '0';
    dotsContainer.style.bottom = '1em';
  }, 1000);

  if (window.innerWidth > 800) {
    setTimeout(() => {
      socialMediaIconsContainer.style.top = '0';
    }, 1000);
  }

  setTimeout(() => {
    titleH1.style.opacity = '1';
  }, 1500);

  setTimeout(() => {
    titleH2.style.opacity = '1';
  }, 2000);

  if (window.innerWidth > 1366) {
    setTimeout(() => {
      lineThrough1.style.width = '20em';
      lineThrough2.style.width = '30em';
    }, 2500);
  }

  if (window.innerWidth <= 1366) {
    setTimeout(() => {
      lineThrough1.style.width = '14.5em';
      lineThrough2.style.width = '21em';
    }, 2500);
  }

  if (window.innerWidth <= 1024) {
    setTimeout(() => {
      lineThrough2.style.width = '11em';
      lineThrough3.style.width = '17em';
    }, 2500);
  }

  if (window.innerWidth <= 800) {
    setTimeout(() => {
      lineThrough1.style.width = '15.5em';
      lineThrough2.style.width = '12em';
      lineThrough3.style.width = '17.5em';
    }, 2500);
  }
};

const handleTitleDecor = () => {
  const lineThrough1 = document.querySelector('.line-through.one');
  const lineThrough2 = document.querySelector('.line-through.two');
  const lineThrough3 = document.querySelector('.line-through.three');

  if (window.innerWidth > 1366) {
    lineThrough1.style.width = '20em';
    lineThrough2.style.width = '30em';
    lineThrough3.style.width = '0';
  }

  if (window.innerWidth <= 1366) {
    lineThrough1.style.width = '14.5em';
    lineThrough2.style.width = '21em';
    lineThrough3.style.width = '0';
  }

  if (window.innerWidth <= 1024) {
    lineThrough2.style.width = '11em';
    lineThrough3.style.width = '17em';
  }

  if (window.innerWidth <= 800) {
    lineThrough1.style.width = '15.5em';
    lineThrough2.style.width = '12em';
    lineThrough3.style.width = '17.5em';
  }
};

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

window.addEventListener('load', handleAnimation);
window.addEventListener('resize', handleTitleDecor);
