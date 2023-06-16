// Efeito de scroll suave
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Animação de Fading para o loading
    const body = document.querySelector('body');
    body.style.display = 'block';
    body.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: 1000,
      easing: 'ease-in-out'
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.card-img-top');
  images.forEach((image) => {
  image.addEventListener('error', () => {
  image.src = '/assets/img/pk.png';
    });
  });
});