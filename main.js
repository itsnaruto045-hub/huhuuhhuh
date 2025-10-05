// --------------------------
// 1. Nebula / Starfield
// --------------------------
let scene, camera, renderer, stars;

function initNebula() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('nebula-canvas'),
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create particles for nebula
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];
  for (let i = 0; i < 2000; i++) {
    positions.push(
      (Math.random() - 0.5) * 400,
      (Math.random() - 0.5) * 400,
      (Math.random() - 0.5) * 400
    );
    // Random purple-pink colors
    colors.push(0.64 + Math.random() * 0.36, 0, 1); 
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 1.2,
    vertexColors: false,
    color: 0xff6ec7,
    transparent: true,
    opacity: 0.8,
  });

  stars = new THREE.Points(geometry, material);
  scene.add(stars);

  camera.position.z = 150;

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animateNebula();
}

function animateNebula() {
  requestAnimationFrame(animateNebula);
  stars.rotation.y += 0.0005;
  stars.rotation.x += 0.0002;
  renderer.render(scene, camera);
}

initNebula();

// --------------------------
// 2. Smooth Scroll
// --------------------------
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// --------------------------
// 3. Gallery Lightbox
// --------------------------
const lightbox = document.getElementById('lightbox');
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.querySelector('.lightbox-img').src = img.src;
    lightbox.setAttribute('aria-hidden', 'false');
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
  lightbox.setAttribute('aria-hidden', 'true');
});

// --------------------------
// 4. Animated Counters
// --------------------------
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const update = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const c = parseInt(counter.innerText);
    const increment = target / 200;
    if (c < target) {
      counter.innerText = Math.ceil(c + increment);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// --------------------------
// 5. Dark Mode Toggle
// --------------------------
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
