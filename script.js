// Activar efecto m�gico cuando se presiona el bot�n
function activateMagic() {
    const button = event.target;
    const body = document.body;
    
    // Agregar clase de activaci�n m�gica al bot�n
    button.classList.add('magic-active');
    
    // Agregar efecto al cuerpo
    body.classList.add('magic-mode');
    
    // Crear part�culas m�gicas
    createMagicParticles();
    
    // Crear estallido de luz
    createLightBurst();
    
    // Remover clases despu�s de la animaci�n
    setTimeout(() => {
        button.classList.remove('magic-active');
        body.classList.remove('magic-mode');
    }, 800);
}

// Crear part�culas m�gicas que caen
function createMagicParticles() {
    const container = document.body;
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '0';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.borderRadius = '50%';
        
        const colors = ['#d4af37', '#9d4edd', '#3a86ff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = 'box-shadow: 0 0 10px ' + color;
        particle.style.opacity = '1';
        
        container.appendChild(particle);
        
        // Animar part�cula
        let top = 0;
        let opacity = 1;
        const speed = Math.random() * 3 + 2;
        const drift = (Math.random() - 0.5) * 2;
        
        const animate = () => {
            top += speed;
            opacity -= 0.015;
            particle.style.top = top + 'px';
            particle.style.left = (parseFloat(particle.style.left) + drift * 0.1) + '%';
            particle.style.opacity = opacity;
            
            if (opacity > 0 && top < window.innerHeight) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Crear estallido de luz en el centro
function createLightBurst() {
    const burst = document.createElement('div');
    burst.style.position = 'fixed';
    burst.style.width = '100px';
    burst.style.height = '100px';
    burst.style.left = '50%';
    burst.style.top = '50%';
    burst.style.transform = 'translate(-50%, -50%)';
    burst.style.pointerEvents = 'none';
    burst.style.zIndex = '9998';
    burst.style.borderRadius = '50%';
    burst.style.background = 'radial-gradient(circle, #d4af37 0%, #9d4edd 100%)';
    burst.style.boxShadow = '0 0 40px #d4af37, 0 0 80px #9d4edd';
    burst.style.opacity = '1';
    
    document.body.appendChild(burst);
    
    // Animar estallido
    let size = 100;
    let opacity = 1;
    
    const animate = () => {
        size += 8;
        opacity -= 0.08;
        burst.style.width = size + 'px';
        burst.style.height = size + 'px';
        burst.style.marginLeft = -(size / 2) + 'px';
        burst.style.marginTop = -(size / 2) + 'px';
        burst.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            burst.remove();
        }
    };
    
    animate();
}

// A�adir efecto de scroll suave
document.addEventListener('DOMContentLoaded', () => {
    // Efecto de aparici�n de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
    
    document.querySelectorAll('.feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
});
