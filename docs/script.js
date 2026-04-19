// 1. Movimiento del Cursor Personalizado
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Efecto de click (pequeña expansión)
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.7)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// 2. Efecto de Burbujas al hacer clic en cualquier lugar
document.addEventListener('click', (e) => {
    createBubble(e.clientX, e.clientY);
});

function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * 20 + 10 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    
    bubble.style.left = x - 10 + 'px';
    bubble.style.top = y - 10 + 'px';
    
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, 1000);
}

// 3. Función especial para el botón de saludo
function sparkleEffect() {
    alert("¡Gracias por visitar mi portafolio! Que tengas un día mágico ✨💖");
    
    // Lanzar muchas burbujas
    for(let i=0; i<15; i++) {
        setTimeout(() => {
            createBubble(
                window.innerWidth / 2 + (Math.random() - 0.5) * 200,
                window.innerHeight / 2 + (Math.random() - 0.5) * 200
            );
        }, i * 50);
    }
}

// 4. Animación suave de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    observer.observe(card);
});
