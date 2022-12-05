import { consolaService } from "../services/consola-service.js";
import { serviceDiversos } from "../services/service-diversos.js";
import { juegosServices } from "../services/service.js";

const modalC = document.querySelector('[data-form]');
const agregar = document.querySelector('[data-agregar]');
const modalA = document.querySelector('[data-modalA]');
const cerrar = document.querySelector('[data-cerrar]');

agregar.addEventListener('click', (e) => {
    e.preventDefault();
    modalA.classList.toggle('modal-clos')
    modalC.style.visibility = 'visible'
    modalC.style.opacity = '1'
})

cerrar.addEventListener('click', () => {
    modalA.classList.add('modal-clos');
    setTimeout(() => {
        modalC.style.opacity = '0'
        modalC.style.visibility = 'hidden'
    }, 900)
})

const enviar = document.querySelector('[data-enviar]');
enviar.addEventListener('click', () => {
    const nombre = document.querySelector('[data-nombre]').value
    const imagen = document.querySelector('[data-imagen]').value
    const precio = document.querySelector('[data-precio]').value
    const descripcion = document.querySelector('[data-descripcion]').value

    const juego = document.querySelector('#juegos');
    const consola = document.querySelector('#consola');
    const diverso = document.querySelector('#diversos');

    if(juego.checked){
       juegosServices.agregarJuego(imagen, nombre, precio, descripcion).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/Challenge-E-commerce2/index.html'
       })
    }
    if(consola.checked){
       consolaService.agregarConsola(imagen, nombre, precio, descripcion).then(()=>{
        window.location.href = 'http://127.0.0.1:5500/Challenge-E-commerce2/index.html'
       })
    }
     if(diverso.checked){
        console.log('usted seleccionó diverso')
    }

    console.log(consola);

})


