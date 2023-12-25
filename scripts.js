
$(document).ready(function() {
    //$('#navbar').load('navbar.html');
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top
            },
            500,
            'linear'
        );
    });
    // Navbar Active Class
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a')
                    .eq(i)
                    .addClass('active');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about');
    const header = document.querySelector('.jumbotron');
    const dailyBlog = document.querySelector('#blog');
    const projects = document.querySelector('#projects');
    
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('animate-on-load');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
    observer.observe(header);
    observer.observe(dailyBlog);
    observer.observe(projects);
});
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const okButton = document.getElementById('okButton');
    
    //Display the popup when the website loads
    overlay.style.display = 'flex';

    //Fundtion to close the popup
    function closePopup() {
        overlay.style.display = 'none';
    }

    //Event listener for the OK button
    okButton.addEventListener('click', closePopup);
});

