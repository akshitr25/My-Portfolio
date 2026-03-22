document.querySelectorAll(".glass").forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.style.transform = "scale(1.03)";
    el.style.transition = "0.3s";
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)";
  });
});