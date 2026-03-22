// =======================
// Typing effect
// =======================
const text = "Backend Engineer | Microservices | Cloud";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}
type();

// =======================
// Cursor Glow
// =======================
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".cursor-glow");
  glow.style.left = e.clientX - 150 + "px";
  glow.style.top = e.clientY - 150 + "px";
});

// =======================
// Scroll Animation (GSAP)
// =======================
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    }
  });
});

// =======================
// PARTICLES SYSTEM
// =======================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    p.y += 0.3;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();