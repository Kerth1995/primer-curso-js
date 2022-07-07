// Promesas en js

// 3 tipos de valores en las Promesas
// Pendding: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: No se ha rechazado o no se pudo cumplir


let usuarioAutenticado = new Promise((resolve, reject)=> {
    let auth = false;

    if(auth){
        resolve('Usuario autenticado');
    }else{
        reject('No se pudo iniciar sesión');
    }    
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then((estadoCorrecto) => {console.log(estadoCorrecto)})
    .catch((error) => {console.log(error)})





