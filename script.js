const countdown = () => {
    const countDate = new Date("July 25, 2026 17:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calcular
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    // NUEVO: Calcular segundos
    const textSecond = Math.floor((gap % minute) / second);

    // Escribir en el HTML
    document.getElementById("days").innerText = textDay > 0 ? textDay : 0;
    document.getElementById("hours").innerText = textHour > 0 ? textHour : 0;
    document.getElementById("minutes").innerText = textMinute > 0 ? textMinute : 0;
    // NUEVO: Mostrar segundos
    document.getElementById("seconds").innerText = textSecond > 0 ? textSecond : 0;
};

setInterval(countdown, 1000);
countdown();


const starsContainer = document.querySelector(".stars-background");

function createStars(){

  const totalStars = 200;

  for(let i = 0; i < totalStars; i++){

    const star = document.createElement("i");

    star.className = "fas fa-star star";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    const size = Math.random()*12 + 8;

    star.style.fontSize = size + "px";

    const delay = Math.random()*6;

    star.style.animationDelay = delay + "s";

    starsContainer.appendChild(star);

  }

}

createStars();

const steps = document.querySelectorAll(".progress-step");
const progressBar = document.querySelector(".progress-bar::before");

const section = document.getElementById("eventProgress");

window.addEventListener("scroll", () => {

  const rect = section.getBoundingClientRect();

  if(rect.top < window.innerHeight - 100){

    steps.forEach((step, index) => {

      setTimeout(() => {
        step.classList.add("active");
      }, index * 300);

    });

    const bar = document.querySelector(".progress-bar");

    bar.style.setProperty("--progress", "100%");

    bar.classList.add("active");

  }

});

const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

/* CREAR DOTS */
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if(i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

/* ACTUALIZAR */
function updateSlider(){

  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

}

/* BOTONES */
next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

/* AUTO SLIDE */
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 4000);


const music = document.getElementById("bgMusic");

function activarAudio(){
  music.volume = 0.5; // volumen inicial (0 a 1)
  music.play();

  document.removeEventListener("click", activarAudio);
  document.removeEventListener("touchstart", activarAudio);
}

document.addEventListener("click", activarAudio);
document.addEventListener("touchstart", activarAudio);


const toggleBtn = document.getElementById("toggleMusic");

toggleBtn.addEventListener("click", () => {

  if(music.paused){
    music.play();
    toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    music.pause();
    toggleBtn.innerHTML = '<i class="fas fa-music"></i>';
  }

});