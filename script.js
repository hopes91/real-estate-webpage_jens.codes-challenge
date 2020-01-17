const titleH1 = document.querySelector('.title h1');
const arrowLeft = document.querySelector('.arrows .arrow-left');
const arrowRight = document.querySelector('.arrows .arrow-right');
const slides = document.querySelectorAll('.slide');

const handleAnimation = () => {
  const titleH2 = document.querySelector('.title h2');
  const lineThrough1 = document.querySelector('.line-through.one');
  const lineThrough2 = document.querySelector('.line-through.two');
  const lineThrough3 = document.querySelector('.line-through.three');
  const slider = document.querySelector('.slider');
  const dotsContainer = document.querySelector('.dots');

  setTimeout(() => {
    slider.style.right = '0';
    createDots();
    showSlide();
  }, 0);

  setTimeout(() => {
    arrowLeft.style.left = '0';
    arrowRight.style.right = '0';
    dotsContainer.style.bottom = '1em';
  }, 1000);

  setTimeout(() => {
    titleH1.style.opacity = '1';
  }, 1500);

  setTimeout(() => {
    titleH2.style.opacity = '1';
  }, 2000);

  if (window.innerWidth > 1200) {
    setTimeout(() => {
      lineThrough1.style.width = '20em';
      lineThrough2.style.width = '30em';
    }, 2500);
  }

  if (window.innerWidth <= 1200) {
    setTimeout(() => {
      lineThrough1.style.width = '17em';
      lineThrough2.style.width = '26em';
    }, 2500);
  }

  if (window.innerWidth <= 1024) {
    setTimeout(() => {
      lineThrough2.style.width = '13em';
      lineThrough3.style.width = '15.5em';
    }, 2500);
  }

  if (window.innerWidth <= 800) {
    setTimeout(() => {
      lineThrough1.style.width = '16.3em';
      lineThrough2.style.width = '12.8em';
      lineThrough3.style.width = '14.8em';
    }, 2500);
  }

  setTimeout(() => {
    moveSlides();
  }, 3000);
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

let mainSlide = 0;

const isArrowFocused = () => {
  return document.activeElement === arrowLeft ||
         document.activeElement === arrowRight;
};

const handleArrowsOnKeyDown = event => {
  if (isArrowFocused()) {
    event.key === 'ArrowLeft' &&
      handleArrows(-1);

    event.key === 'ArrowRight' &&
      handleArrows(1);
  }
};

const handleArrows = index => {
  mainSlide === 0 && index === -1 ?
    mainSlide = slides.length - 1 :
  mainSlide === slides.length - 1 && index === 1 ?
    mainSlide = 0 :
    mainSlide += index;

  showSlide();
};

const showSlide = () => {
  slides.forEach(slide => slide.style.display = 'none');

  slides.forEach((slide, index) => {
    if (index === mainSlide) {
      slide.style.display = 'block';

      detectCurrentSlide();
    }
  });
};

const detectCurrentSlide = () => {
  const dots = document.querySelectorAll('.dot');

  dots.forEach(dot => {
    dot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  });

  dots.forEach((dot, index) => {
    if (index === mainSlide) {
      dot.style.backgroundColor = 'rgba(127, 131, 140, 0.5)';
    }
  });
};

const moveSlides = () => {
  setInterval(() => handleArrows(1), 5000);
};

const indicateHoverOverTitle = () => {
  const linesThrough = document.querySelectorAll('.line-through');

  linesThrough.forEach(line => line.style.backgroundColor = '#7f838c');
};

const indicateHoverOffTitle = () => {
  const linesThrough = document.querySelectorAll('.line-through');

  linesThrough.forEach(line => line.style.backgroundColor = '#b8b6b7');
};

const handleTitleDecor = () => {
  const lineThrough1 = document.querySelector('.line-through.one');
  const lineThrough2 = document.querySelector('.line-through.two');
  const lineThrough3 = document.querySelector('.line-through.three');

  if (window.innerWidth > 1200) {
    lineThrough1.style.width = '20em';
    lineThrough2.style.width = '30em';
    lineThrough3.style.transitionDuration = '0s';
    lineThrough3.style.width = '0';
  }

  if (window.innerWidth <= 1200) {
    lineThrough1.style.width = '17em';
    lineThrough2.style.width = '26em';
    lineThrough3.style.transitionDuration = '0s';
    lineThrough3.style.width = '0';
  }

  if (window.innerWidth <= 1024) {
    lineThrough2.style.width = '13em';
    lineThrough3.style.width = '15.5em';
  }

  if (window.innerWidth <= 800) {
    lineThrough1.style.width = '16.3em';
    lineThrough2.style.width = '12.8em';
    lineThrough3.style.width = '14.8em';
  }
};

window.addEventListener('load', handleAnimation);
window.addEventListener('resize', handleTitleDecor);
window.addEventListener('keydown', handleArrowsOnKeyDown);
arrowLeft.addEventListener('click', () => handleArrows(-1), false);
arrowRight.addEventListener('click', () => handleArrows(1), false);
titleH1.addEventListener('mouseenter', indicateHoverOverTitle);
titleH1.addEventListener('mouseleave', indicateHoverOffTitle);
