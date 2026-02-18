let score = 0;
let lastHole;
let isGameOver = false;
const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');

function randomHole() {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) return randomHole(); 
    lastHole = hole;
    return hole;
}

function showBug() {
    if (isGameOver) return;
    
    const hole = randomHole();
    hole.classList.add('active');
    
   
    const time = Math.random() * (1000 - 600) + 600;
    
    setTimeout(() => {
        hole.classList.remove('active');
        showBug();
    }, time);
}

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('active')) {
            score++;
            scoreDisplay.textContent = score;
            hole.classList.remove('active'); 
        }
    });
});

document.getElementById('start-btn').addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = 0;
    isGameOver = false;
    showBug();
    setTimeout(() => isGameOver = true, 15000); 
});