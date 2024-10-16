// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Skill bar animation
    const skillBars = document.querySelectorAll('.languages_bar p span');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-out';
            bar.style.width = width;
        }, 500);
    });

    // Toggle mobile menu
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('.resume_right').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.body.classList.toggle('mobile-menu-open');
    });

    // Form validation for contact form (if you decide to add one)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

 // Contact form submission
 const contactForm = document.getElementById('contact-form');
 if (contactForm) {
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const message = document.getElementById('message').value;

         if (name && email && message) {
             alert('Thank you for your message! I will get back to you soon.');
             contactForm.reset();
         } else {
             alert('Please fill out all fields.');
         }
     });
 }