const text = "Backend Engineer | Distributed Systems | Cloud";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type, 40);
  }
}
type();

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      }
    }
  );
});

// Subtle background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bg"), alpha: true });

renderer.setSize(innerWidth, innerHeight);
camera.position.z = 5;

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 1200; i++) {
  vertices.push((Math.random()-0.5)*10,(Math.random()-0.5)*10,(Math.random()-0.5)*10);
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({
  color: 0x3b82f6,
  size: 0.01,
  opacity: 0.6,
  transparent: true
});

const points = new THREE.Points(geometry, material);
scene.add(points);

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.0003;
  renderer.render(scene, camera);
}
animate();

console.log("👋 You can’t see me");