// Minimal Three.js 3D Nebula Scene
let scene, camera, renderer, stars;

function initNebula() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById('nebula-canvas'), alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Starfield
    const starCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for(let i=0;i<starCount;i++){
        positions.push((Math.random()-0.5)*200);
        positions.push((Math.random()-0.5)*200);
        positions.push((Math.random()-0.5)*200);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions,3));

    const material = new THREE.PointsMaterial({color:0xff6ec7, size:0.5});
    stars = new THREE.Points(geometry, material);
    scene.add(stars);

    camera.position.z = 50;

    window.addEventListener('resize', onWindowResize, false);
    animate();
}

function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(){
    requestAnimationFrame(animate);
    stars.rotation.y += 0.0005;
    stars.rotation.x += 0.0002;
    renderer.render(scene, camera);
}

// Initialize Nebula
initNebula();
