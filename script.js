document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.slider-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        goToSlide(index);
        highlightButton(index);
      });
    });
  
    function goToSlide(index) {
      const translateValue = -(index - 1) * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }
  
    function highlightButton(index) {
      buttons.forEach(button => {
        button.classList.remove('active');
      });
      slides.forEach(slide => {
        slide.classList.remove('active');
    });

    buttons[index - 1].classList.add('active');
    slides[index - 1].classList.add('active');
}
  });
  