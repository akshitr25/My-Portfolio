// Typing effect
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

// Hover animation already handled in CSS