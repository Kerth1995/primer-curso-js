// Async / await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes........');

        setTimeout(() => {
            resolve('Los clientes fueron descargados!!!!!!!!!!!!');
        }, 5000);
    })
}

function descargarNuevosPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos........');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados!!!!!!!!!!!!');
        }, 5000);
    })
}

async function app(){
    try {
        let resultado = await descargarNuevosClientes();
        console.log('hola');
        console.log('hola');
        console.log('hola');
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Se continua con otras cosas por hacer');
console.log('Se continua con otras cosas por hacer');
console.log('Se continua con otras cosas por hacer');
console.log('Se continua con otras cosas por hacer');


async function app2(){
    try {
        let resultado = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app2();
console.log('buuuu');
console.log('buuuu');
console.log('buuuu');
console.log('buuuu');