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

// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', function() {
  // Get all the "Ver detalhes" buttons
  var buttons = document.querySelectorAll('.btn-details');

  // Add click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the target modal ID from the button's data attribute
      var targetModalId = button.dataset.target;
      
      // Find the modal element with the corresponding ID
      var modal = document.querySelector(targetModalId);

      // Open the modal using Bootstrap's JavaScript function
      var modal = new bootstrap.Modal(modal);
      modal.show();
    });
  });
});


