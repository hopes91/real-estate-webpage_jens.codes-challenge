const titleH1 = document.querySelector('.title h1');
const titleH2 = document.querySelector('.title h2');
const linesThrough = document.querySelectorAll('.line-through');
const lineThrough1 = document.querySelector('.line-through.one');
const lineThrough2 = document.querySelector('.line-through.two');
const lineThrough3 = document.querySelector('.line-through.three');
const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.arrows .arrow-left');
const arrowRight = document.querySelector('.arrows .arrow-right');
const dotsContainer = document.querySelector('.dots');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
// const socialMediaIconsContainer = document.querySelector('.social-media-icons');

const handleAnimation = () => {
  setTimeout(() => {
    slider.style.right = '0';
    showSlides();
  }, 0);

  setTimeout(() => {
    arrowLeft.style.left = '0';
    arrowRight.style.right = '0';
    dotsContainer.style.bottom = '1em';
  }, 1000);

  // if (window.innerWidth > 800) {
  //   setTimeout(() => {
  //     socialMediaIconsContainer.style.top = '0';
  //   }, 1000);
  // }

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

  setTimeout(() => {
    moveSlides();
  }, 3000);
};

const handleTitleDecor = () => {
  if (window.innerWidth > 1366) {
    lineThrough1.style.width = '20em';
    lineThrough2.style.width = '30em';
    lineThrough3.style.transitionDuration = '0s';
    lineThrough3.style.width = '0';
  }

  if (window.innerWidth <= 1366) {
    lineThrough1.style.width = '14.5em';
    lineThrough2.style.width = '21em';
    lineThrough3.style.transitionDuration = '0s';
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
  dotsContainer.innerHTML = '';

  slides.forEach(slide => {
    const dot = document.createElement('span');
    dot.setAttribute('class', 'dot');
    dotsContainer.appendChild(dot);
  });
};

const indicateHoverOverTitle = () => {
  linesThrough.forEach(line => line.style.backgroundColor = '#7f838c');
};

const indicateHoverOffTitle = () => {
  linesThrough.forEach(line => line.style.backgroundColor = '#b8b6b7');
};

window.addEventListener('load', handleAnimation);
window.addEventListener('resize', handleTitleDecor);
window.addEventListener('keydown', handleArrowsOnKeyDown);
arrowLeft.addEventListener('click', () => handleArrows(-1), false);
arrowRight.addEventListener('click', () => handleArrows(1), false);
titleH1.addEventListener('mouseenter', indicateHoverOverTitle);
titleH1.addEventListener('mouseleave', indicateHoverOffTitle);
