export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove('input-error')
        const span = input.parentElement.querySelector('.mensaje_error')
        span.style.display = 'none'

    
    }else{
        input.parentElement.classList.add('input-error')
        const span = input.parentElement.querySelector('.mensaje_error')
        span.innerText = mostrarMensajeDeError(tipoDeInput, input)
        span.style.display = 'inherit'
    }
}

const tipoDeErrores =
[
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajeDeError = {
    email: {
        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'EL correo no es válido'
    },
    password: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'Debe contener al menos un mínimo de 6 hasta 12 caracteres, una mayúscula, una minúscula y un número'
    }
}

function mostrarMensajeDeError(tipoDeInput, input){  

    let mensaje = " "
    tipoDeErrores.forEach((error)=>{
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    })
    return mensaje
}

