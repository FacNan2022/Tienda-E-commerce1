const listaDiversos = ()=>{
    return fetch('http://localhost:3000/diversos').then((respuesta) =>respuesta.json());

}
const agregarDiversos = (id, img, precio, descripcion) =>{
    return fetch('http://localhost:3000/diversos',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id, img, precio, descripcion})
    }).then((respuesta) => console.log(respuesta));
}

const detallesDiversos = (id)=>{
    return fetch(`http://localhost:3000/diversos/${id}`).then((respuesta) => respuesta.json());
}

const actualizarDiversos = (id, img, nombre, precio, descripcion)=>{
    return fetch(`http://localhost:3000/diversos/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({id, img, nombre, precio, descripcion})
    })
}

const eliminarDiversos = (id)=>{
    return fetch(`http://localhost:3000/diversos/${id}`, {
        method: 'DELETE'
    })
}

export const serviceDiversos ={
    listaDiversos,
    agregarDiversos,
    detallesDiversos,
    actualizarDiversos,
    eliminarDiversos
}