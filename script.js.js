// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Hide loading screen after page loads
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hidden');
        
        // Trigger initial animations
        setTimeout(initAnimations, 300);
    }, 1000);
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add micro-interactions to buttons
    initButtonInteractions();
    
    // Initialize email click tracking
    initEmailTracking();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll-based navbar effects
    initNavbarScroll();
    
    // Initialize chart animations
    initChartAnimations();
});

// Initialize animations on page load
function initAnimations() {
    // Hero section animations
    const heroElements = [
        document.getElementById('heroTitle'),
        document.getElementById('heroSubtitle'),
        document.getElementById('heroRole'),
        document.getElementById('heroDescription'),
        document.getElementById('socialLogos'),
        document.getElementById('heroCta'),
        document.getElementById('adVisual')
    ];
    
    heroElements.forEach((el, index) => {
        if (el) {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, 200 * index);
        }
    });
    
    // About section animations
    const aboutElements = [
        document.getElementById('aboutImage'),
        document.getElementById('aboutTitle'),
        document.getElementById('aboutText1'),
        document.getElementById('aboutText2'),
        document.getElementById('aboutStats')
    ];
    
    aboutElements.forEach((el, index) => {
        if (el) {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, 200 * index + 400);
        }
    });
    
    // CTA section animations
    const ctaElements = [
        document.getElementById('ctaTitle'),
        document.getElementById('ctaDescription'),
        document.getElementById('ctaButton'),
        document.getElementById('emailCta'),
        document.getElementById('emailContact')
    ];
    
    ctaElements.forEach((el, index) => {
        if (el) {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, 200 * index + 600);
        }
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.service-card, .skill-item, .process-step, #trackingTitle, #trackingText1, #trackingText2, #trackingText3, #trackingVisual'
    );
    
    // Create Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe each animated element
    animatedElements.forEach(el => {
        if (el) observer.observe(el);
    });
}

// Initialize button micro-interactions
function initButtonInteractions() {
    const buttons = document.querySelectorAll('.cta-button, .cta-button-secondary, .social-link, .service-card, .skill-item, .ad-cta');
    
    buttons.forEach(button => {
        // Add hover effect
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('cta-button') || this.classList.contains('cta-button-secondary') || this.classList.contains('ad-cta')) {
                this.style.transform = 'translateY(-5px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (this.classList.contains('cta-button') || this.classList.contains('cta-button-secondary') || this.classList.contains('ad-cta')) {
                this.style.transform = 'translateY(0)';
            }
        });
        
        // Add click effect
        button.addEventListener('mousedown', function() {
            if (this.classList.contains('cta-button') || this.classList.contains('cta-button-secondary') || this.classList.contains('ad-cta')) {
                this.style.transform = 'scale(0.98)';
            }
        });
        
        button.addEventListener('mouseup', function() {
            if (this.classList.contains('cta-button') || this.classList.contains('cta-button-secondary') || this.classList.contains('ad-cta')) {
                this.style.transform = '';
            }
        });
    });
}

// Initialize email tracking
function initEmailTracking() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Email link clicked:', this.href);
        });
    });
}

// Initialize navigation
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNav = document.getElementById('mobileNav');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close mobile menu
    mobileNavClose.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking overlay
    navOverlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mobileNav.classList.remove('active');
                    navOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    });
}

// Initialize navbar scroll effects
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize chart animations
function initChartAnimations() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    // Set initial height to 0 for animation
    chartBars.forEach(bar => {
        bar.style.height = '0%';
    });
    
    // Start animation after a delay
    setTimeout(() => {
        chartBars.forEach(bar => {
            bar.style.animation = 'growBar 4s ease-in-out infinite';
        });
    }, 1000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});