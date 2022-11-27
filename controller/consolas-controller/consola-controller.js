import { consolaService } from "../../services/consola-service.js"

const informacionConsola = (id, img, nombre, precio, link) =>{
    const articulo = document.createElement('article')
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

const consolas = document.querySelector('[data-consolas]');
consolaService.listaConsolas().then((consola) =>{
    consola.forEach(({id, img, nombre, precio, link})=>{
        const agregarConsola = informacionConsola(id, img, nombre, precio, link);

        consolas.appendChild(agregarConsola)
    })
})
