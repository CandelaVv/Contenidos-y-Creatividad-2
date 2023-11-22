window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

document.querySelector('.menu-button').addEventListener('click', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].style.display === 'none') {
            navLinks[i].style.display = 'block';
        } else {
            navLinks[i].style.display = 'none';
        }
    }
});

document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('visible');
});

//Animacion subtitulo
const text = 'El bar del buen pastor en el corazon de Cordoba';
let index = 0;

function writeText() {
    document.getElementById('subtitle').innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 200); 

// Animacion platos

const platoMap = {
    "plato1": "platos/plato_4.PNG",
    "plato2": "platos/plato_10.PNG",
    "plato3": "platos/plato_9.PNG",
    "plato4": "platos/plato_1.PNG",
    "plato5": "platos/plato_8.PNG",
    "plato6": "platos/plato_2.PNG",
    "plato7": "platos/plato_3.PNG",
    "plato8": "platos/plato_5.PNG",
    "plato9": "platos/plato_6.PNG",
    "plato10": "platos/plato_7.PNG",
};

setInterval(() => {
    for (const plato in platoMap) {
        const imgElement = document.getElementById(plato);
        const currentSrc = imgElement.src;
        imgElement.src = platoMap[plato];
        platoMap[plato] = currentSrc;
    }
}, 2000);

// Slider
let slider = document.getElementById('slider');

let slides = slider.getElementsByClassName('slide');

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click'), function() {
      
      for (let j = 0; j < slides.length; j++) {
        slides[j].style.width = '400px';
        slides[j].style.height = '400px';
        slides[j].style.opacity = '0.5';
      }
  
   
      this.style.width = '500px';
      this.style.height = '500px';
      this.style.opacity = '1';
  
    
      let middle = Math.floor(slider.children.length / 2);

      if (this !== slider.children[middle]) {
          slider.insertBefore(this, slider.children[middle]);
      }
  }
}
   //Boton Magico
  document.getElementById('magic-button').addEventListener('click', function() {
    var platos = ["Tabla colores Santos", "Sandwich de bondiola", "Ravioles de carne", "Gohan Cs", "Salmon del pacifico", "Wrap de pollo"];
    var platoDelDia = platos[Math.floor(Math.random() * platos.length)];
    alert("Tu plato de hoy es: " + platoDelDia);
});