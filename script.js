// Initialize AOS
AOS.init();

const typed = new Typed("#typed-output", {
    strings: ["What is Your Financial Score?"], // Sentence to type
    typeSpeed: 100,       // Slower typing speed
    backSpeed: 0,         // No backspacing
    showCursor: true,     // Enable blinking cursor
    cursorChar: "|",      // Customize cursor character (optional)
    startDelay: 500,      // Delay before typing starts (500ms)
    loop: false,          // Disable looping
    loopCount: 1          // Type only once (ensures no looping)
});

const typed2 = new Typed("#typed-output2", {
    strings: ["Trading is Essential"], // Sentence to type
    typeSpeed: 200,       // Slower typing speed
    backSpeed: 0,         // No backspacing
    showCursor: false,     // Enable blinking cursor
    cursorChar: "/",      // Customize cursor character (optional)
    startDelay: 500,      // Delay before typing starts (500ms)
    loop: false,          // Disable looping
    loopCount: 1          // Type only once (ensures no looping)
});

// Three.js Animation
const canvas = document.getElementById("threejs-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xD2B48C, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
camera.position.z = 50; //this changes the size of the donut

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

// Responsive canvas
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true, // Animation occurs once on scroll
  });
  


document.getElementById("get-started-btn").addEventListener("click", () => {
    // Create light-speed effect container
    const lightSpeedEffect = document.createElement("div");
    lightSpeedEffect.id = "light-speed-effect";
    document.body.appendChild(lightSpeedEffect);
  
    // Generate streaks
    for (let i = 0; i < 50; i++) {
      const streak = document.createElement("div");
      streak.className = "streak";
      streak.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      streak.style.animationDelay = `${Math.random() * 0.5}s`;
      lightSpeedEffect.appendChild(streak);
    }
  
    // Scroll to the bottom after a short delay
    setTimeout(() => {
      document.getElementById("bottom-section").scrollIntoView({ behavior: "smooth" });
    }, 200);
  
    // Remove light-speed effect after animation completes
    setTimeout(() => {
      document.body.removeChild(lightSpeedEffect);
    }, 800);
  });
  
  
