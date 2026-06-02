// animations.js
// Responsável por animações, efeitos de scroll e hover

const config = {
    scrollThreshold: 0.1,
    animationDuration: 600,
    easing: 'ease-out'
};

const observerOptions = {
    threshold: config.scrollThreshold,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

export function initAnimations() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element, index) => {
        const delay = index * 0.1;
        element.style.animationDelay = `${delay}s`;
        observer.observe(element);
    });
    animateStatsOnScroll();
}

function animateStatsOnScroll() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(el => {
                    const value = el.textContent;
                    animateValue(el, 0, extractNumber(value), 2000);
                });
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

function extractNumber(text) {
    const numbers = text.replace(/\D/g, '');
    return parseInt(numbers) || 0;
}

function animateValue(element, start, end, duration) {
    const originalText = element.textContent;
    const suffix = originalText.replace(/[\d,]/g, '');
    let current = start;
    const increment = (end - start) / (duration / 16);

    const animate = () => {
        current += increment;
        if (current < end) {
            element.textContent = Math.floor(current).toLocaleString('pt-BR') + suffix;
            requestAnimationFrame(animate);
        } else {
            element.textContent = originalText;
        }
    };

    animate();
}

export function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (navbar) {
            navbar.style.boxShadow = currentScrollY > 50 ? '0 10px 30px rgba(10, 37, 64, 0.2)' : '0 4px 12px rgba(10, 37, 64, 0.15)';
        }

        const hero = document.querySelector('.hero');
        if (hero && currentScrollY < window.innerHeight) {
            const offset = currentScrollY * 0.5;
            hero.style.backgroundPosition = `0 ${offset}px`;
        }
    }, { passive: true });
}

export function initCardHovers() {
    const cards = document.querySelectorAll('.intro-card, .insight-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mousemove', () => {});
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
        });
    });
}

export function initDarkModeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
        console.log('Sistema em modo escuro');
    }
}

export function initLazyImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
    }
}

export function throttle(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
    };
}

export function debounce(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
