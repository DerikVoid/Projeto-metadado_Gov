/**
 * DATA STORYTELLING - Script Principal
 * Animações, interatividade e efeitos visuais
 */

// ===== CONFIGURAÇÕES GLOBAIS =====
const config = {
    scrollThreshold: 0.1,
    animationDuration: 600,
    easing: 'ease-out'
};

// ===== OBSERVER PARA ANIMAÇÕES DE SCROLL =====
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

// ===== INICIALIZAÇÃO DO DOCUMENTO =====
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initNavigation();
    initSmoothScroll();
    initScrollEffects();
    initCardHovers();
    safeLoadObservableEmbeds();
    // logs de carregamento desativados para maior clareza no console
});

// ===== INICIALIZAR ANIMAÇÕES =====
function initAnimations() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach((element, index) => {
        // Define delay de animação baseado na posição
        const delay = index * 0.1;
        element.style.animationDelay = `${delay}s`;
        
        // Observa cada elemento para animar ao entrar no viewport
        observer.observe(element);
    });

    // Anima elementos de estatísticas
    animateStatsOnScroll();
}

// ===== ANIMAÇÃO DE NÚMEROS EM STATS =====
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

// ===== EXTRAI NÚMEROS DO TEXTO =====
function extractNumber(text) {
    const numbers = text.replace(/\D/g, '');
    return parseInt(numbers) || 0;
}

// ===== ANIMA VALOR NUMÉRICO =====
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

// ===== NAVEGAÇÃO SUAVE =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove classe ativa anterior
            navLinks.forEach(l => l.classList.remove('active'));
            // Adiciona classe ativa ao link clicado
            link.classList.add('active');
        });
    });

    // Marca seção ativa durante scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// ===== ATUALIZA LINK ATIVO DA NAVEGAÇÃO =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, #home');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
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

// ===== SCROLL SUAVE =====
function initSmoothScroll() {
    // Suporta navegadores antigos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== EFEITOS DE SCROLL =====
function initScrollEffects() {
    let lastScrollY = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Efeito de elevação da navbar em scroll
        if (currentScrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(10, 37, 64, 0.2)';
        } else {
            navbar.style.boxShadow = '0 4px 12px rgba(10, 37, 64, 0.15)';
        }

        // Parallax suave no hero
        const hero = document.querySelector('.hero');
        if (hero && currentScrollY < window.innerHeight) {
            const offset = currentScrollY * 0.5;
            hero.style.backgroundPosition = `0 ${offset}px`;
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}

// ===== ADICIONA EFEITO AOS CARDS AO PASSAR MOUSE =====
function initCardHovers() {
    const cards = document.querySelectorAll('.intro-card, .insight-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 5;
            const rotateY = -(x / rect.width) * 5;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
        });
    });
}

// ===== FUNÇÃO UTILITÁRIA: THROTTLE =====
function throttle(func, wait) {
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

// ===== FUNÇÃO UTILITÁRIA: DEBOUNCE =====
function debounce(func, wait) {
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

// ===== LOG DE EVENTOS IMPORTANTES =====
window.addEventListener('load', () => {
    console.log('✓ Todos os recursos carregados');
    console.log('✓ Animações ativas');
    console.log('✓ Navegação interativa');
});

// ===== SUPORTE A MODO ESCURO (OPCIONAL) =====
function initDarkModeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (prefersDark.matches) {
        console.log('Sistema em modo escuro');
        // Aqui você poderia aplicar temas diferentes
    }
}

initDarkModeToggle();

// ===== PERFORMANCE: Lazy Loading para Imagens =====
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

// ===== ANÁLISE: RASTREAR INTERAÇÕES =====
function trackInteraction(eventName, details = {}) {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    console.log(`[${timestamp}] ${eventName}`, details);
}

// Rastreia cliques em botões principais
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackInteraction('Botão Clicado', {
            buttonText: e.target.textContent,
            section: e.target.closest('.section')?.id
        });
    });
});

// Rastreia scroll para análise de engajamento
let scrollTracker = { maxScroll: 0, sections_viewed: [] };
window.addEventListener('scroll', throttle(() => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > scrollTracker.maxScroll) {
        scrollTracker.maxScroll = scrollPercent;
    }
}, 1000));

// ===== UTILITÁRIOS PARA EMBEDS DO OBSERVABLEHQ =====
/**
 * Função para inserir embeds do ObservableHQ
 * Uso: insertObservableEmbed(elementId, notebookId, cellName)
 */
function insertObservableEmbed(elementId, notebookId, cellName) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Elemento com ID "${elementId}" não encontrado`);
        return;
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
import define from "https://api.observablehq.com/${notebookId}.js?v=3";
const runtime = new Runtime();
const main = runtime.module(define, name => {
  if (name === "${cellName}") {
    return new Inspector(document.getElementById("${elementId}"));
  }
});
    `;
    element.innerHTML = '';
    element.appendChild(script);
}

function loadObservableEmbeds() {
    const notebookId = '@jeanderson-lima/analise-visual-de-contratacoes-e-compras-publicas';

    insertObservableEmbed('observable-embed-01', notebookId, 'viewof view1');
    insertObservableEmbed('observable-embed-02', notebookId, 'viewof view2');
    insertObservableEmbed('observable-embed-03', notebookId, 'viewof view3');
    insertObservableEmbed('observable-embed-04', notebookId, 'viewof view4');
    insertObservableEmbed('observable-embed-05', notebookId, 'viewof view5');
    insertObservableEmbed('observable-embed-06', notebookId, 'viewof view6');
    insertObservableEmbed('observable-embed-07', notebookId, 'viewof view7');
    insertObservableEmbed('observable-embed-08', notebookId, 'viewof view8');
    insertObservableEmbed('observable-embed-09', notebookId, 'viewof view9');
}

function safeLoadObservableEmbeds() {
    try {
        loadObservableEmbeds();
    } catch (error) {
        console.warn('Falha ao carregar embeds do ObservableHQ:', error);
    }
}

// ===== MENSAGEM DE BOAS-VINDAS NO CONSOLE =====
// Console limpo: logs de desenvolvimento removidos.
