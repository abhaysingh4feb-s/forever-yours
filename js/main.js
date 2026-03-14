console.log("Main.js is loading...");

// ============================================
// 1. GLOBAL VARIABLES & CONFIG
// ============================================
let currentScene = 1;
let isAudioPlaying = false;
let chocolateScore = 0;
let hugTimer = null;
let noButtonAttempts = 0;

const CONFIG = {
    neededChocolates: 5,
    typingSpeed: 50
};

// ============================================
// 2. DEFINE goToScene IMMEDIATELY (Global Scope)
// ============================================
window.goToScene = function(sceneNum) {
    console.log(`Transitioning to Scene ${sceneNum}`);
    
    // Remove active class from current scene
    const activeScene = document.querySelector('.scene.active');
    if (activeScene) {
        activeScene.classList.remove('active');
    }

    // Add active class to new scene
    const nextScene = document.getElementById(`scene${sceneNum}`);
    if (nextScene) {
        nextScene.classList.add('active');
        currentScene = sceneNum;
        
        // Trigger Finale if it's the last scene
        if (sceneNum === 10) {
            playFinale();
        }
    } else {
        console.error(`Scene ${sceneNum} not found!`);
    }
};

// ============================================
// 3. INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Initializing events...");
    setupSound();
    setupNoButton();
    setupHugButton();
    
    // Start the chocolate spawner loop
    setInterval(spawnChocolate, 800);
});

// ============================================
// 4. INTERACTION FUNCTIONS
// ============================================

// Scene 2: Rose Effect
window.handleRoseClick = function() {
    const rose = document.getElementById('roseImg');
    if(rose) {
        rose.style.transform = "scale(1.5) rotate(10deg)";
        rose.style.filter = "brightness(1.5) drop-shadow(0 0 30px red)";
    }
    createConfetti();
    setTimeout(() => window.goToScene(3), 1500);
};

// Scene 4: Chocolate Game
function spawnChocolate() {
    // Only spawn if we are in Scene 4
    if(currentScene !== 4 || chocolateScore >= CONFIG.neededChocolates) return;
    
    const gameArea = document.getElementById('chocolateGameArea');
    if(!gameArea) return;

    const choco = document.createElement('img');
    // Using Verified Link
    choco.src = 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Microsoft-3D-Fluent-Emoji/main/Emojis/Food%20and%20drink/Chocolate%20bar/3d.png';
    choco.onerror = function() { this.src = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f36b.png'; };
    
    choco.className = 'falling-choco';
    choco.style.left = Math.random() * 90 + '%';
    choco.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    choco.onclick = function() {
        chocolateScore++;
        const scoreDisplay = document.getElementById('chocolateScore');
        if(scoreDisplay) scoreDisplay.textContent = chocolateScore;
        
        // Pop effect
        this.style.transform = "scale(2)";
        this.style.opacity = "0";
        setTimeout(() => this.remove(), 200);
        
        if(chocolateScore >= CONFIG.neededChocolates) {
            setTimeout(() => window.goToScene(5), 1000);
        }
    };
    
    gameArea.appendChild(choco);
    
    // Clean up after animation
    setTimeout(() => {
        if(choco.parentNode) choco.remove();
    }, 4000);
}

// Scene 5: Teddy
window.handleTeddyClick = function() {
    const teddy = document.getElementById('teddyImg');
    if(teddy) teddy.style.transform = "scale(1.2) rotate(-5deg)";
    
    const msg = document.getElementById('teddyMessage');
    if(msg) {
        msg.style.opacity = '1';
        msg.style.transform = "translateY(0)";
    }
    
    createConfetti();
    setTimeout(() => window.goToScene(6), 2500);
};

// Scene 6: Promises
window.checkPromises = function() {
    const checkboxes = document.querySelectorAll('.promise-item input');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    const btn = document.getElementById('promiseBtn');
    
    if(btn) {
        if(allChecked) btn.classList.remove('disabled');
        else btn.classList.add('disabled');
    }
};

// Scene 7: Hug
function setupHugButton() {
    const btn = document.getElementById('hugBtn');
    const progress = document.getElementById('hugProgress');
    if(!btn || !progress) return;
    
    const startHug = (e) => {
        if(e.type === 'touchstart') e.preventDefault();
        btn.classList.add('active');
        
        let width = 0;
        // Clear existing timer if any
        if(hugTimer) clearInterval(hugTimer);
        
        hugTimer = setInterval(() => {
            width += 2;
            progress.style.width = width + '%';
            if(width >= 100) {
                clearInterval(hugTimer);
                createConfetti();
                setTimeout(() => window.goToScene(8), 500);
            }
        }, 30);
    };
    
    const endHug = () => {
        if(hugTimer) clearInterval(hugTimer);
        progress.style.width = '0%';
        btn.classList.remove('active');
    };
    
    btn.addEventListener('mousedown', startHug);
    btn.addEventListener('mouseup', endHug);
    btn.addEventListener('mouseleave', endHug); // Handle dragging mouse out
    btn.addEventListener('touchstart', startHug);
    btn.addEventListener('touchend', endHug);
}

// Scene 8: Kiss
window.handleKissClick = function() {
    createConfetti();
    setTimeout(() => window.goToScene(9), 1000);
};

// Scene 9: No Button Logic
function setupNoButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const playfulText = document.getElementById('playfulText');
    
    if(!noBtn || !yesBtn) return;

    const moveNoButton = (e) => {
        if(e) e.preventDefault(); // Stop click
        
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;
        
        const x = Math.max(10, Math.random() * maxX);
        const y = Math.max(10, Math.random() * maxY);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        
        const msgs = ["Nice try! 😉", "Not happening! 🙅‍♂️", "I'm stuck with you! ❤️", "Love is inevitable! ✨"];
        if(playfulText) playfulText.textContent = msgs[noButtonAttempts++ % msgs.length];
    };

    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);
    noBtn.addEventListener('click', moveNoButton);
    
    yesBtn.addEventListener('click', () => {
        createConfetti();
        window.goToScene(10);
    });
}

// Finale
function playFinale() {
    const msg = "Anamika,\n\nEvery day with you is a celebration.\nYou are my home, my love, and my life.\nI love you forever. ❤️";
    const typingElement = document.getElementById('typingText');
    const signature = document.querySelector('.signature');
    
    if(!typingElement) return;

    let i = 0;
    const type = () => {
        if(i < msg.length) {
            typingElement.textContent += msg.charAt(i);
            i++;
            setTimeout(type, CONFIG.typingSpeed);
        } else {
            if(signature) signature.classList.remove('hidden');
        }
    };
    type();
}

// Utils
function setupSound() {
    const toggle = document.getElementById('soundToggle');
    const audio = document.getElementById('bgMusic');
    
    if(!toggle || !audio) return;

    toggle.addEventListener('click', () => {
        if(isAudioPlaying) {
            audio.pause();
            toggle.innerHTML = '<span class="sound-icon">🔇</span>';
        } else {
            audio.play().catch(e => console.log("Audio prevented:", e));
            toggle.innerHTML = '<span class="sound-icon">🎵</span>';
        }
        isAudioPlaying = !isAudioPlaying;
    });
}

function createConfetti() {
    const container = document.getElementById('confettiContainer') || document.body;
    
    for(let i=0; i<30; i++) {
        const c = document.createElement('div');
        c.style.position = 'fixed';
        c.style.left = Math.random() * 100 + '%';
        c.style.top = '-10px';
        c.style.width = '10px'; 
        c.style.height = '10px';
        c.style.backgroundColor = ['#ff0055', '#ffd700', '#fff'][Math.floor(Math.random()*3)];
        c.style.zIndex = '999';
        c.style.pointerEvents = 'none';
        
        // Animation
        const duration = Math.random() * 2 + 1;
        c.style.transition = `top ${duration}s linear, opacity ${duration}s ease`;
        
        container.appendChild(c);
        
        // Trigger animation
        setTimeout(() => {
            c.style.top = '100vh';
            c.style.opacity = '0';
        }, 50);

        setTimeout(()=> c.remove(), duration * 1000);
    }
}