const listaConsolas = () =>{
    return fetch('http://localhost:3000/consolas').then((respuesta) => respuesta.json())
}

const agregarConsola = (id, img, nombre, precio, link)=>{
    return fetch('http://localhost:3000/consolas',{
        method: 'POST',
        headers: {'Content-type': 'application.json'},
        body: JSON.stringify({id, img, nombre, precio, link })
    })
}

const detallesConsola = (id) =>{
    return fetch(`http://localhost:3000/consolas/${id}`).then((respuesta) =>respuesta.json())
}

const actualizarConsola = (id, img, nombre, precio, link) =>{
    return fetch(`http://localhost:3000/consolas/${id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'appication/json'},
        body: JSON.stringify({id, img, nombre, precio, link})
    })
}

const eliminarConsola = (id) => {
    return fetch(`http://localhost:3000/consolas/${id}`,{
        method: 'DELETE'
    })
}

export const consolaService ={
    listaConsolas,
    agregarConsola,
    detallesConsola,
    actualizarConsola,
    eliminarConsola
}