const listaConsolas = () =>{
    return fetch('http://localhost:3000/consolas').then((respuesta) => respuesta.json())
}

const agregarConsola = (img, nombre, precio, descripcion)=>{
    return fetch('http://localhost:3000/consolas',{
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({img, nombre, precio, descripcion, id:uuid.v4() })
    }).then((respuesta)=>{
        console.log(respuesta);
    })
}

const detallesConsola = (id) =>{
    return fetch(`http://localhost:3000/consolas/${id}`).then((respuesta) =>respuesta.json())
}

const actualizarConsola = (id, img, nombre, precio, descripcion) =>{
    return fetch(`http://localhost:3000/consolas/${id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'appication/json'},
        body: JSON.stringify({id, img, nombre, precio, descripcion})
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