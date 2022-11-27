import { serviceDiversos } from "../../services/service-diversos.js";

const obtenerDiversos = (id, img, nombre, precio, link) =>{
    const articulo = document.createElement('article');
    articulo.classList.add('articulos')
    const contenido = `
    <div class="contenido">
        <img src="${img}" alt="">
        <p class="productos">${nombre}</p>
        <p><strong>${precio}</strong></p>
        <a href="${link}" class="ver-producto">Ver producto</a>
    </div>
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

const diversos = document.querySelector('[data-diversos]');

serviceDiversos.listaDiversos().then((diverso) => {
    diverso.forEach(({id, img, nombre, precio, link})=>{
        const obtenerDiverso = obtenerDiversos(id, img, nombre, precio, link)

        diversos.appendChild(obtenerDiverso)
    })


})