const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');
const image = document.querySelector('#image_hero');
const section = document.getElementById('hero');
const Img_propos = document.querySelector('.Imgpropos');
const images = ['cover4','cover2','cover3','cover1'];
const bubble = document.getElementById("contact-bubble");
const form = document.getElementById("contact-form");
const closeBtn = document.getElementById("close-btn");
const links = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');
const container = document.getElementById('bubble-container');
const body = document.querySelector('body');

let index = 0;
let isOpen = false;

const currentFile = window.location.pathname.split("/").pop();
console.log("Fichier actuel :", currentFile);

if (currentFile === "index.html") {

  window.addEventListener('scroll', function () {
    if (window.scrollY >=180 &&  window.scrollY <= 1300) {
        Img_propos.classList.remove('Imgpropos');
    }else {
        Img_propos.classList.add('Imgpropos');
    }

    if (window.scrollY >= 50 ) {
      nav.classList.remove('bg-[#4a86b0]');
      nav.classList.add('bg-[#4a85b099]');
    }
    else {
      nav.classList.remove('bg-[#4a85b099]');
      nav.classList.add('bg-[#4a86b0]');
    }
  });
  function changerImage() {
        section.classList.remove(section.getAttribute("class"));
        section.classList.add(images[index]);
        index = (index + 1) % images.length;
}

// Changer d'image toutes les 5 secondes
setInterval(changerImage, 2500);

function openForm() {
    form.classList.remove("opacity-0", "scale-95", "pointer-events-none");
    form.classList.add("opacity-100", "scale-100", "pointer-events-auto");
    bubble.classList.toggle('invisible');
    isOpen = true;
  }

  function closeForm() {
    form.classList.add("opacity-0", "scale-95", "pointer-events-none");
    form.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
    bubble.classList.toggle('invisible');
    isOpen = false;
  }

  bubble.addEventListener("click", () => {
    isOpen ? closeForm() : openForm();
  });

  closeBtn.addEventListener("click", closeForm);

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 20 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * window.innerWidth}px`;
  bubble.style.bottom = `0px`;
  container.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 5000);
}

// Créer une bulle toutes les 300ms
setInterval(createBubble, 500);
}

btn.addEventListener('click', () => {
    if (menu.classList.contains('max-h-0')) {
    menu.classList.remove('max-h-0');
    menu.classList.add('max-h-screen');
    menuOpenIcon.classList.add('hidden');
    menuCloseIcon.classList.remove('hidden');
    } else {
    menu.classList.remove('max-h-screen');
    menu.classList.add('max-h-0');
    menuOpenIcon.classList.remove('hidden');
    menuCloseIcon.classList.add('hidden');
    }
});

function afficherHeure() {
    const maintenant = new Date();
    const heure = maintenant.toLocaleTimeString();
    document.querySelector('#heure').textContent = heure;
  }

setInterval(afficherHeure, 1000);
afficherHeure();

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const splash = document.getElementById("splash-screen");
      splash.classList.add("opacity-0");
      setTimeout(() => { 
        splash.classList.add('hide');
      }, 500); // disparaît après 0.5s
    }, 2000); // visible pendant 2s
  });

