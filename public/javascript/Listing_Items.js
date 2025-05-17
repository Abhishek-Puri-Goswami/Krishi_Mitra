
  const sliders = document.querySelectorAll('.image-slider');

  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    let current = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
    }

    prev.addEventListener('click', () => {
      current = (current === 0) ? slides.length - 1 : current - 1;
      showSlide(current);
    });

    next.addEventListener('click', () => {
      current = (current === slides.length - 1) ? 0 : current + 1;
      showSlide(current);
    });

    // Optional: auto-slide
    // setInterval(() => {
    //   next.click();
    // }, 3000);

    showSlide(current);
  });