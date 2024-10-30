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
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #000000cb 0%, #000000dd 100%)';
        navbar.style.boxShadow = 'none';
    }
});

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

// Trigger progress bar animation when skills section is in view
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Project Cards Hover Effect Enhancement
const projectCards = document.querySelectorAll('.card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const image = card.querySelector('img');
        if (image) {
            image.style.transform = 'translate(-50%, -50%) scale(1.1)';
        }
    });

    card.addEventListener('mouseleave', (e) => {
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
window.addEventListener('scroll', () => {
    if (heroSection) {
        const scrolled = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

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
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
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