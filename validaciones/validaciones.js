export function valida(input){
    const tipoInput = input.dataset.tipo
    console.log(tipoInput);
  

    if (input.validity.valid){
        input.parentElement.classList.remove('input-error');
        input.parentElement.querySelector('.mensaje_error').innerHtml = ''
    }else{
        input.parentElement.classList.add('input-error');
        input.parentElement.querySelector('.mensaje_error').innerText= mostrarMensajeDeError(tipoInput, input)
    }
    

}


const tipoDeErrores =[
    "valueMissing",
    "patternMismatch",
    
]

const mensajeDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 40, debe contener una letra minúscula, una letra mayúscula"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 120, debe contener al menos una letra minúscula, una letra mayúscula, números y caracteres especiales"

    }
}

function mostrarMensajeDeError(tipoInput, input){
    let mensaje = " "
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoInput, error);
        console.log(input.validity[error]);
        console.log(mensajeDeError[tipoInput][error]);
        mensaje = mensajeDeError[tipoInput][error];
      }
    })
    return mensaje
}