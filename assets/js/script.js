// script.js
// Lógica principal do site e inicialização da aplicação

import { initAnimations, initScrollEffects, initCardHovers, initDarkModeToggle, initLazyImages, throttle } from './animations.js';
import { safeLoadObservableEmbeds } from './observable.js';

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, #home');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initInteractionTracking() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            trackInteraction('Botão Clicado', {
                buttonText: e.target.textContent,
                section: e.target.closest('.section')?.id
            });
        });
    });

    let scrollTracker = { maxScroll: 0, sections_viewed: [] };
    window.addEventListener('scroll', throttle(() => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > scrollTracker.maxScroll) {
            scrollTracker.maxScroll = scrollPercent;
        }
    }, 1000));
}

function trackInteraction(eventName, details = {}) {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    console.log(`[${timestamp}] ${eventName}`, details);
}

function initSite() {
    initAnimations();
    initNavigation();
    initSmoothScroll();
    initScrollEffects();
    initCardHovers();
    initDarkModeToggle();
    initLazyImages();
    initInteractionTracking();
    
    // Carrega embeds do ObservableHQ (async)
    safeLoadObservableEmbeds();
}

document.addEventListener('DOMContentLoaded', initSite);

window.addEventListener('load', () => {
    console.log('✓ Todos os recursos carregados');
    console.log('✓ Animações ativas');
    console.log('✓ Navegação interativa');
});
