import { juegosServices } from "../services/service.js"

let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

//fncion que agrega contenido al modal
const agregarContenido = (id, img, nombre, precio, descripcion)=>{

    //div que contiene el contenido
    const divContenido = document.createElement('div')
    divContenido.classList.add('contenido')

    //contenido del modal
    const cont = `<p class = "close">X</p>
    <img src="${img}">
    <h2>${nombre}</h2>
    <p>${precio}</p>
    <p>${descripcion}</p>                                            
    `
    divContenido.innerHTML= cont;

    //se agrega el contenido al div
    modal.appendChild(divContenido);

    let cerrar = divContenido.querySelector('.close');
           console.log(cerrar)
           cerrar.addEventListener('click', () =>{

            modal.classList.toggle('modal-close')
         
            setTimeout(()=>{
                modalC.style.opacity = '0'
                modalC.style. visibility = 'hidden'
                modal.innerHTML='';
            }, 900)
        })

}


export const obtenerJuegos = (id, img, nombre, precio, descripcion) =>{
    const articulo = document.createElement('article')
    articulo.classList.add('articulos')

    const contenido = `
        <img class="populares__img" src="${img}" alt="">
        <p class="productos">${nombre}</p>
        <p><strong>${precio}</strong></p>
        <a href="${descripcion}" class="ver-producto act" id="${id}">Ver producto</a>
    
`
articulo.innerHTML = contenido


const nombres = articulo.querySelectorAll('.act');

nombres.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const ides = btn.id;
        juegosServices.detallesJuego(ides).then(({id, img, nombre, precio, descripcion})=>{
            agregarContenido(id, img, nombre, precio, descripcion) 
        })

    })
})

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
//Abrir modal en Ver productos

let abrir = articulo.querySelectorAll('.ver-producto')
abrir.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        modalC.style.opacity = '1'
        modalC.style.visibility = 'visible';
        modal.classList.toggle("modal-close");
    })
})
return articulo
}

const juegos = document.querySelector('[data-juegos]');

juegosServices.listaJuegos().then((starWars)=>{
    starWars.forEach(({id, img, nombre, precio, descripcion})=>{
        const agregarJuego = obtenerJuegos(id, img, nombre, precio, descripcion)
        juegos.appendChild(agregarJuego)
    })
})