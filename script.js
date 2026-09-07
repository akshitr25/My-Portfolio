// ============================================================
// AKSHIT RATHOD — PORTFOLIO SCRIPT
// Java • Spring Boot • AWS • Distributed Systems
// ============================================================


// ============================================================
// ACCESSIBILITY / MOTION PREFERENCE
// ============================================================

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// ============================================================
// TYPING ANIMATION
// ============================================================

const roles = [
    "Backend Engineer",
    "Java & Spring Boot Engineer",
    "Distributed Systems Engineer",
    "Cloud Backend Engineer"
];

const typingElement = document.getElementById("typing");

if (typingElement) {

    // Keep the portfolio accessible for users who prefer
    // reduced motion.
    if (prefersReducedMotion) {

        typingElement.textContent = roles[0];

    } else {

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentRole = roles[roleIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentRole.substring(0, charIndex++);

            } else {

                typingElement.textContent =
                    currentRole.substring(0, charIndex--);

            }

            let speed = deleting ? 35 : 60;

            // Pause when the complete role is displayed.
            if (!deleting && charIndex === currentRole.length + 1) {

                deleting = true;
                speed = 1800;

            }

            // Move to the next role.
            if (deleting && charIndex === 0) {

                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;

            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }
}


// ============================================================
// GSAP SCROLL REVEAL
// ============================================================

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    const revealSections = gsap.utils.toArray(".reveal");

    if (prefersReducedMotion) {

        // Show everything immediately when reduced motion
        // is enabled.
        gsap.set(revealSections, {
            opacity: 1,
            y: 0
        });

    } else {

        revealSections.forEach((section) => {

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
                        start: "top 85%",
                        once: true
                    }
                }
            );

        });

    }
}


// ============================================================
// THREE.JS BACKGROUND
// ============================================================

const canvas = document.querySelector("#bg");

if (canvas && typeof THREE !== "undefined") {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 5;


    // ========================================================
    // RENDERER
    // ========================================================

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
    });

    function updatePixelRatio() {

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio || 1, 2)
        );

    }

    updatePixelRatio();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );


    // ========================================================
    // PARTICLES
    // ========================================================

    // Fewer particles on mobile for better performance.
    const particleCount =
        window.innerWidth < 768 ? 600 : 1500;

    const particleGeometry =
        new THREE.BufferGeometry();

    const positions =
        new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {

        positions[i] =
            (Math.random() - 0.5) * 20;

    }

    particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            positions,
            3
        )
    );


    // ========================================================
    // PARTICLE MATERIAL
    // ========================================================

    const particleMaterial =
        new THREE.PointsMaterial({

            color: 0x3b82f6,

            size: 0.02,

            transparent: true,

            opacity: 0.55,

            depthWrite: false

        });


    // ========================================================
    // PARTICLE SYSTEM
    // ========================================================

    const particles =
        new THREE.Points(
            particleGeometry,
            particleMaterial
        );

    scene.add(particles);


    // ========================================================
    // ANIMATION
    // ========================================================

    function animate() {

        requestAnimationFrame(animate);

        // Respect accessibility preferences.
        if (!prefersReducedMotion) {

            particles.rotation.y += 0.00035;

            particles.rotation.x += 0.00008;

        }

        renderer.render(
            scene,
            camera
        );
    }

    animate();


    // ========================================================
    // RESPONSIVE RESIZE
    // ========================================================

    window.addEventListener("resize", () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        updatePixelRatio();

    });


    // ========================================================
    // CLEANUP
    // ========================================================

    window.addEventListener("beforeunload", () => {

        particleGeometry.dispose();

        particleMaterial.dispose();

        renderer.dispose();

    });

}


// ============================================================
// EASTER EGG
// ============================================================

console.log(`
=====================================

Akshit Rathod Portfolio

Java • Spring Boot • Kafka • AWS

AWS Certified Developer Associate

github.com/akshitr25

=====================================
`);