import { serviceDiversos } from "../../services/service-diversos.js";

const obtenerDiversos = (id, img, nombre, precio, link) =>{
    const articulo = document.createElement('article');
    articulo.classList.add('diversos-productos')
    const contenido = `
    <h1>Diversos</h1>
    <div class="contenido">
        <img src="${img}" alt="">
        <p class="producto">${nombre}</p>
        <p><strong>${precio}</strong></p>
        <a href="${link}" class="ver-producto">Ver producto</a>
    </div>
`
articulo.innerHTML = contenido
return articulo
}

const diversos = document.querySelector('[data-diversos]');

serviceDiversos.listaDiversos().then((diverso) => {
    diverso.forEach(({id, img, nombre, precio, link})=>{
        const obtenerDiverso = obtenerDiversos(id, img, nombre, precio, link)

        diversos.appendChild(obtenerDiverso)
    })


})