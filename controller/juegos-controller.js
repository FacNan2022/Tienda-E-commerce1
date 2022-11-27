import { juegosServices } from "../services/service.js"

const obtenerJuegos = (id, img, nombre, precio, link) =>{
    const articulo = document.createElement('article')
    articulo.classList.add('articulos')

    const contenido = `   
   
        <img class="populares__img" src="${img}" alt="">
        <p class="productos">${nombre}</p>
        <p><strong>${precio}</strong></p>
        <a href="${link}" class="ver-producto">Ver producto</a>
    
`
articulo.innerHTML = contenido

//filtrar productos en el buscador

const buscador = document.querySelector('.buscar')
buscador.addEventListener('keyup', (e)=>{
const respuesta = e.target.value;
if(e.key){
    document.querySelectorAll('.productos').forEach((producto)=>{
       producto.textContent.toLowerCase().includes(respuesta.toLowerCase())
       ?producto.parentElement.style.display = 'block'
       :producto.parentElement.style.display = 'none'

    })
}

})

return articulo
}

const juegos = document.querySelector('[data-juegos]');

juegosServices.listaJuegos().then((starWars)=>{
    starWars.forEach(({id, img, nombre, precio, link})=>{
        const agregarJuego = obtenerJuegos(id, img, nombre, precio, link)
        juegos.appendChild(agregarJuego)
    })
})