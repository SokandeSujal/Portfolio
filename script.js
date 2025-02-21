// Import required libraries
import Typed from 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js';
import AOS from 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Dynamic Typing Effect for Hero Section
const typed = new Typed('#autoText', {
    strings: [
        'Full Stack Developer',
        'AI Enthusiast',
        'Cybersecurity Researcher',
        'Problem Solver'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500
});

// Smooth Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
const handleScroll = () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #000000cb 0%, #000000dd 100%)';
        navbar.style.boxShadow = 'none';
    }
};

window.addEventListener('scroll', handleScroll);

// Animated Progress Bars for Skills
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Animate Hexagon Fills on Scroll
const skillsSection = document.querySelector('#skills');
const hexagons = document.querySelectorAll('.skill-hexagon');

const animateHexagons = () => {
  hexagons.forEach(hex => {
    const fill = hex.querySelector('.hexagon-fill');
    const progress = hex.getAttribute('data-progress');
    fill.style.height = '0'; // Reset
    setTimeout(() => {
      fill.style.height = `${progress}%`; // Animate to progress
    }, 100);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateHexagons();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Project Cards Hover Effect Enhancement
const projectCards = document.querySelectorAll('.card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('img');
        if (image) {
            image.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('img');
        if (image) {
            image.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });
});

// Enhanced Form Validation and Submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formFields = Object.fromEntries(formData);
        
        // Basic form validation
        let isValid = true;
        const email = formFields.email;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            isValid = false;
        }
        
        if (isValid) {
            try {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
                
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
            } catch (error) {
                showNotification('Failed to send message. Please try again.', 'error');
            }
        }
    });
}

// Custom Notification System
const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '5px',
        color: '#fff',
        backgroundColor: type === 'success' ? '#3d9970' : '#ff4136',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
};

// Parallax Effect for Hero Section
const heroSection = document.querySelector('.hero_section');
const parallaxEffect = () => {
    if (heroSection) {
        const scrolled = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
};

window.addEventListener('scroll', parallaxEffect);

// Add Custom Cursor Effect
const createCustomCursor = () => {
    const cursor = document.createElement('div');
    const dot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    dot.className = 'cursor-dot';
    
    Object.assign(cursor.style, {
        position: 'fixed',
        width: '30px',
        height: '30px',
        border: '2px solid #3d9970',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: 'transform 0.1s, border-color 0.3s',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)'
    });
    
    Object.assign(dot.style, {
        position: 'fixed',
        width: '4px',
        height: '4px',
        backgroundColor: '#3d9970',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)'
    });
    
    document.body.appendChild(cursor);
    document.body.appendChild(dot);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderColor = '#2ecc40';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = '#3d9970';
        });
    });
};

// Initialize custom cursor on desktop devices
if (window.innerWidth > 768) {
    createCustomCursor();
}

// Add lazy loading for images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Hide navbar on scroll
let lastScroll = 0;
const handleNavbarHideShow = () => {
    const currentScroll = window.pageYOffset;

    // If we're at the top of the page
    if (currentScroll <= 0) {
        navbar.classList.remove('hidden');
        return;
    }

    // Scrolling down
    if (currentScroll > lastScroll) {
        navbar.classList.add('hidden');
    } 
    // Scrolling up
    else if (currentScroll < lastScroll) {
        navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;
};

// Debounce the scroll event to improve performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleNavbarHideShow();
            ticking = false;
        });
        ticking = true;
    }
});

// Social Profile Animations on Scroll
const socialSection = document.querySelector('.social-profiles');
const observeSocial = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      socialSection.classList.add('animate-social');
      observeSocial.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observeSocial.observe(socialSection);



/* Walking SVG Animation by Diaco m.lotfollahi */
// Walking SVG Animation by Diaco m.lotfollahi (Adapted for updated IDs)
document.addEventListener('DOMContentLoaded', () => {
    var Doc = document,
        TwL = TweenLite,
        E0 = Sine.easeInOut,
        E1 = Sine.easeIn,
        E2 = Sine.easeOut,
        walkerBody = Doc.getElementById('walkerBody'),
        upperBody = Doc.getElementById('upperBody'),
        walkerFeet = Doc.getElementById('walkerFeet'),
        walkerHand = Doc.getElementById('walkerHand');
  
    // Ensure SVG is visible and set initial states
    TwL.set('#walkingSvg', { opacity: 1 });
    TwL.set(walkerBody, { y: 10 });
    TwL.set(upperBody, { fill: '#151515', transformOrigin: '50% 100%' });
    TwL.set(walkerHand, { transformOrigin: '-5px 0px', rotation: -10, fill: '#454545', y: -1 });
    TwL.set(walkerFeet, { transformOrigin: '55% 10px', rotation: -37, fill: '#DC002E' });
    TwL.set('#walkerHead', { transformOrigin: '5px 50px', fill: '#454545', scale: 0.967, rotation: -5 });
    TwL.set('.hand1', { rotation: -20, transformOrigin: '0px 5px', y: -5 });
    TwL.set('.hand2', { transformOrigin: '10% 0%', rotation: -10, y: -1.5, scaleY: 1.03 });
    TwL.set('.foot1', { transformOrigin: '21px 2px' });
    TwL.set('.foot2', { transformOrigin: '25px 0px' });
    TwL.set('.foot3', { transformOrigin: '4.2px 4.2px' });
  
    // Clone nodes for additional animation parts
    var walkerFeet2 = walkerFeet.cloneNode(true),
        walkerHand2 = walkerHand.cloneNode(true);
    walkerFeet2.id = 'walkerFeetBase';
    walkerHand2.id = 'walkerHandBase';
    walkerBody.insertBefore(walkerFeet2, upperBody);
    walkerBody.insertBefore(walkerHand2, walkerFeet2);
  
    TwL.set('.walkerFootBase', { fill: '#DC002E' });
    TwL.set('#walkerFeetBase', { fill: '#A50018' });
    TwL.set('#walkerHandBase', { y: -3, fill: '#333' });
  
    // Animation function
    function animateWalker(p1, p2) {
      var tl = new TimelineMax({ repeat: -1 })
        .add("l1", 0).add("l2", .25).add("l3", .5).add("l4", .75).add("l5", 1)
        .to(p1, .5, { rotation: 27, ease: E0 }, 'l1')
        .to(p1, .25, { rotation: -37, ease: E1 }, 'l3')
        .to(p1 + ' .foot1', .25, { rotation: 15, ease: E0 }, 'l2')
        .to(p1 + ' .foot1', .25, { rotation: 80, ease: E1 }, 'l3')
        .to(p1 + ' .foot1', .25, { rotation: 0, ease: E2 }, 'l4')
        .to(p1 + ' .foot2', .25, { rotation: 45, repeat: 1, yoyo: true }, 'l3')
        .to(p1 + ' .foot3', .25, { rotation: -35, repeat: 1, yoyo: true, scaleX: .925 }, 'l2')
        .to(p2, .5, { rotation: 25, ease: E0, yoyo: true, repeat: 1 }, 'l1')
        .to(p2 + ' .hand1', .5, { rotation: 15, ease: E0, yoyo: true, repeat: 1 }, 'l1')
        .to(p2 + ' .hand2', .5, { rotation: 0, ease: E0, yoyo: true, repeat: 1 }, 'l1');
      return tl;
    }
  
    // Start the animation
    var walkerTl = new TimelineLite()
      .add(animateWalker('#walkerFeet', '#walkerHandBase'))
      .add(animateWalker('#walkerFeetBase', '#walkerHand'), 0.5)
      .to(walkerBody, .25, { y: '+=20', repeat: -1, yoyo: true, ease: E0 }, 0)
      .to('#walkerHead', .25, { rotation: 1, repeat: -1, yoyo: true, ease: E0 }, 0)
      .to('#walkingShadow', .25, { scaleX: .6, repeat: -1, yoyo: true, ease: E1, transformOrigin: 'center' }, 0)
      .time(.5);
  });