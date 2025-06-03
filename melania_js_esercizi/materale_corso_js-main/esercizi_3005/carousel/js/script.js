const images = [
    {
        image: './img/01.webp',
        title: 'Spiderman'
    },
    {
        image: './img/02.webp',
        title: 'Warrior cats'
    },
    {
        image: './img/03.webp',
        title: 'Superheros'
    },
    {
        image: './img/04.webp',
        title: 'Cat'
    },
    {
        image: './img/05.webp',
        title: 'Avengers'
    }
];
// const slider = document.querySelector(".slider");
// const thumbSlider = document.querySelector(".thumb-slider");
// let slides = "";
// let thumbs = "";
// //creare dinamicamente le slider con le card
// images.forEach(obj => {
//     slides += `<div class="slide" > <img src="${obj.image} " class= "object-fit-cover" alt="${obj.title}">
//     <div class="overlay">
//     <h2 class="display-2  fw-bold text-center pt-5">${obj.title}</h2></div></div>
//     `
//     thumsbs += `<div class="thumb"><img src="${obj.image} " alt="${obj.title}">
//     </div>`
//     console.log(slides);
//     console.log(thumsbs);

// })
// slider.innerHTML += `${slides}`;
// slider.innerHTML += `${thumsbs}`;

const slider = document.querySelector('.slider');
const thumbSlider = document.querySelector('.thumb-slider');

let slides = ""
let thumbs = ""

images.forEach(obj => {
    slides += `<div class="slide">
    <img src ="${obj.image}" alt = "${obj.title}" class="object-fit-cover">
    <div class="overlay">
        <h2 class="display-2  fw-bold text-center pt-5">${obj.title}</h2>
    </div>
    </div>`
    thumbs += `<div class="thumb">
    <img src ="${obj.image}" alt = "${obj.title}">
</div>`
    console.log(slides)
    console.log(thumbs)

})// indice attivo, aumenta e diminuisce con il click del moune
let indiceAttivo = 0;
slider.innerHTML += `${slides}`;
thumbSlider.innerHTML += `${thumbs}`;
document.querySelectorAll(".slide")[indiceAttivo].classList.add("active");
document.querySelectorAll(".thumb")[indiceAttivo].classList.add("active");

function goNext() {

    //togliere la classe active alla slide corrente e attibuirlo all'indice + 1
    document.querySelectorAll(".slide")[indiceAttivo].classList.remove("active");
    document.querySelectorAll(".thumb")[indiceAttivo].classList.remove("active");
    if (indiceAttivo === images.length - 1) {
        indiceAttivo = 0;
    } else {
        indiceAttivo++;
    }
    document.querySelectorAll(".slide")[indiceAttivo].classList.add("active");
    document.querySelectorAll(".thumb")[indiceAttivo].classList.add("active");

}
/*POSSO ANCHE FARE
        indiceAttivo++
        if (indiceAttivo === images.length){
        indiceAttivo = 0;
    } ed evitare l'else
        */
function goPrev() {

    //togliere la classe active alla slide corrente e attibuirlo all'indice + 1
    document.querySelectorAll(".slide")[indiceAttivo].classList.remove("active");
    document.querySelectorAll(".thumb")[indiceAttivo].classList.remove("active");
    if (indiceAttivo === 0) {
        indiceAttivo = images.length - 1;
    } else {
        indiceAttivo--;
    }
    document.querySelectorAll(".slide")[indiceAttivo].classList.add("active");
    document.querySelectorAll(".thumb")[indiceAttivo].classList.add("active");

}
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);
console.log(nextBtn);

let interval;
function start() {
    // metto l'intervallo e lo salvo in una variabile
    //setInterval(funzione da eseguire, tempo in millisecondi tra le ripetizioni)
    interval = setInterval(goNext, 1000);
}

function stop() {
    //uso la variabile per fermare l'intervallo 
    clearInterval(interval);
}
const container = document.querySelector('.bg-black');
//al caricamento della pagina invoco start che fa iniziare lo scorrimento della immagini
start();
//quando il mouse passa sopra stoppo (chiamo il clearInterval)
container.addEventListener('mouseover', stop);
//quando il mouse passa sopra avvio (chiamo il setInterval)
container.addEventListener('mouseout', start);


