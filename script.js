const intro = document.getElementById("intro");
const main = document.getElementById("main");

setTimeout(() => {
  main.classList.remove("hidden");
}, 2800);

// 3D TILT EFFECT
const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  card.style.transform = `
    rotateY(${x}deg)
    rotateX(${y}deg)
  `;
});

document.addEventListener("mouseleave", () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
