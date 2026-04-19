// Cursor Custom con lag suave
const cursor = document.getElementById('cursor-glow');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;
    cursorX = cursorX + (distX * 0.1);
    cursorY = cursorY + (distY * 0.1);
    
    cursor.style.left = cursorX - 12 + 'px';
    cursor.style.top = cursorY - 12 + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Crear estrellas aleatorias al hacer click
document.addEventListener('mousedown', (e) => {
    createStar(e.clientX, e.clientY);
    cursor.style.transform = 'scale(1.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 15 + 10 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = x - 10 + 'px';
    star.style.top = y - 10 + 'px';
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.animate([
            { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
            { opacity: 0, transform: 'translateY(-100px) rotate(180deg)' }
        ], { duration: 1000, easing: 'ease-out' });
        
        setTimeout(() => star.remove(), 1000);
    }, 10);
}

// Mensaje de bienvenida en consola (easter egg)
console.log("%c ✨ Hey Koffii! Tu portafolio está listo ✨ ", "color: #c3a6ff; font-weight: bold; font-size: 15px;");
