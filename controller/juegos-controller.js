import { juegosServices } from "../services/service.js"

const obtenerJuegos = (id, img, nombre, precio, link) =>{
    const articulo = document.createElement('article')
    articulo.classList.add('starwars')

    const contenido = `   
    <h1>Star Wars</h1>
    <div class="starwars-producto">
        <img class="populares__img" src="${img}" alt="">
        <p class="producto">${nombre}</p>
        <p><strong>${precio}</strong></p>
        <a href="${link}" class="ver-producto">Ver producto</a>
    </div>
`
articulo.innerHTML = contenido
return articulo
}

const juegos = document.querySelector('[data-juegos]');

juegosServices.listaJuegos().then((starWars)=>{
    starWars.forEach(({id, img, nombre, precio, link})=>{
        const agregarJuego = obtenerJuegos(id, img, nombre, precio, link)
        juegos.appendChild(agregarJuego)
    })
})