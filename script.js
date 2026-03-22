// Typing
const text = "Backend Engineer | Distributed Systems";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(type, 40);
  }
}
type();

// Cursor
document.addEventListener("mousemove", e => {
  document.querySelector(".cursor").style.transform =
    `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Scroll animation
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: { trigger: el }
  });
});

// THREE.JS background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bg") });

renderer.setSize(innerWidth, innerHeight);
camera.position.z = 5;

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  );
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x3b82f6, size: 0.02 });
const points = new THREE.Points(geometry, material);

scene.add(points);

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();