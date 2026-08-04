// ================= TYPING ANIMATION =================

const roles = [
  "Backend Engineer",
  "Java & Spring Boot Developer",
  "AWS Certified Developer",
  "Distributed Systems Engineer",
  "Kafka • AWS • Kubernetes"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 35 : 60;

    if (!deleting && charIndex === currentRole.length + 1) {
        deleting = true;
        speed = 1800;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================= GSAP =================

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach((section) => {

    gsap.fromTo(
        section,
        {
            opacity: 0,
            y: 60
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: section,
                start: "top 85%"
            }
        }
    );

});


// ================= THREE JS =================

const canvas = document.querySelector("#bg");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.setSize(window.innerWidth, window.innerHeight);


// ================= PARTICLES =================

const particleCount = 1500;

const particleGeometry = new THREE.BufferGeometry();

const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {

    positions[i] = (Math.random() - 0.5) * 20;

}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
);

const particleMaterial = new THREE.PointsMaterial({

    color: 0x3b82f6,

    size: 0.02,

    transparent: true,

    opacity: 0.55

});

const particles = new THREE.Points(
    particleGeometry,
    particleMaterial
);

scene.add(particles);


// ================= ANIMATION =================

function animate() {

    requestAnimationFrame(animate);

    particles.rotation.y += 0.00035;

    particles.rotation.x += 0.00008;

    renderer.render(scene, camera);

}

animate();


// ================= RESIZE =================

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

});


// ================= EASTER EGG =================

console.log(`
=====================================

Akshit Rathod Portfolio

Java • Spring Boot • Kafka • AWS

AWS Certified Developer Associate

github.com/akshitr25

=====================================
`);