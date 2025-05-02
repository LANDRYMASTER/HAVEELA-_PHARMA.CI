    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const menuOpenIcon = document.getElementById('menu-open');
    const menuCloseIcon = document.getElementById('menu-close');
    const image = document.querySelector('#image_hero');
    const section = document.getElementById('hero');
    const titre = document.getElementById('infosup');
    const Img_propos = document.querySelector('.Imgpropos');
    const images = ['cover4','cover2','cover3','cover1'];
    const bubble = document.getElementById("contact-bubble");
    const form = document.getElementById("contact-form");
    const closeBtn = document.getElementById("close-btn");
    const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    let index = 0;
    let index1 = 1;
    let isOpen = false;

    
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });

window.addEventListener('scroll', function () {
    if (window.scrollY >=180 &&  window.scrollY <= 1300) {
        Img_propos.classList.remove('Imgpropos');
    }else {
        Img_propos.classList.add('Imgpropos');
    }
});

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

function changerImage() {
        section.classList.remove(section.getAttribute("class"));
        section.classList.add(images[index]);
        index = (index + 1) % images.length;

        switch (index1) {
            case 1:
                titre.innerHTML = 'HAVEELA pharma <br> votre levier de croissance';
                index1 += 1;
                break;
            case 2:
                titre.innerHTML = 'Maitrise de la <br> chaine approvisionnement des produits';
                index1 += 1;
                break;
            case 3:
                titre.innerHTML = 'HAVEELA pharma <br> votre levier de croissance';
                index1 += 1;
                break;
            case 4:
                titre.innerHTML = 'Nous vous offrons <br> des solutions sur mesure';
                index1 = 1;
                break;
        }
}

// Changer d'image toutes les 5 secondes
setInterval(changerImage, 4000);

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
