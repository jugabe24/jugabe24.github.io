// Año del footer
document.getElementById("year").textContent = new Date().getFullYear();

// Texto que se escribe solo
const frases = [
  "estudiante de Ing. Informática + Matemáticas",
  "mención en Computación y Sistemas Inteligentes",
  "me gustan los algoritmos y la IA",
  "5.º curso · última recta",
];
const typed = document.getElementById("typed");
let f = 0, c = 0, borrando = false;

function escribir() {
  const frase = frases[f];
  typed.textContent = frase.slice(0, c);
  if (!borrando && c < frase.length) { c++; return setTimeout(escribir, 55); }
  if (!borrando) { borrando = true; return setTimeout(escribir, 1400); }
  if (c > 0) { c--; return setTimeout(escribir, 28); }
  borrando = false;
  f = (f + 1) % frases.length;
  setTimeout(escribir, 350);
}
escribir();

// Aparición al hacer scroll
document.querySelectorAll("section:not(.hero) .card, section h2").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Fondo tipo "matrix" en verde lima
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
const simbolos = "01{}[]<>/=+∑∫∂λπ∞≈".split("");
let columnas, gotas;

function ajustar() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  columnas = Math.floor(canvas.width / 18);
  gotas = Array(columnas).fill(0).map(() => Math.random() * -50);
}
ajustar();
addEventListener("resize", ajustar);

function dibujar() {
  ctx.fillStyle = "rgba(11, 15, 10, .12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#c8ff6b";
  ctx.font = "15px JetBrains Mono, monospace";
  gotas.forEach((y, i) => {
    ctx.fillText(simbolos[Math.floor(Math.random() * simbolos.length)], i * 18, y * 18);
    gotas[i] = y * 18 > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(dibujar, 60);
