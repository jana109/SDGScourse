// script.js
const shapes = document.querySelectorAll('.shape');

shapes.forEach(shape => {
    shape.addEventListener('mouseover', () => {
        shape.style.transform = 'scale(1.2)';
    });

    shape.addEventListener('mouseout', () => {
        shape.style.transform = 'scale(1)';
    });
});