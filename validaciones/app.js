import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll('.contacto');


inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        valida(input.target)
       
    })
})

const enviar = document.querySelector('.btn-enviar')
enviar.addEventListener('click', ()=>{
window.location.href = 'http://127.0.0.1:5500/Challenge-E-commerce2/index.html'
})