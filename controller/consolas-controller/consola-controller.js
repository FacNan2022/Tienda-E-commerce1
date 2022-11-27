import { consolaService } from "../../services/consola-service.js"

const informacionConsola = (id, img, nombre, precio, link) =>{
    const articulo = document.createElement('article')
    articulo.classList.add('consolas-producto')
    const contenido = `
    <h1>Consolas</h1>
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

const consolas = document.querySelector('[data-consolas]');
consolaService.listaConsolas().then((consola) =>{
    consola.forEach(({id, img, nombre, precio, link})=>{
        const agregarConsola = informacionConsola(id, img, nombre, precio, link);

        consolas.appendChild(agregarConsola)
    })
})
