// Fetch API

// primera forma
/*
function obtenerEmpleados(){
    const url = 'empleados.json';
    const url2 = 'https://jsonplaceholder.typicode.com/todos';
    
    fetch(url2)
        .then(resultado => {
            console.log(resultado);
            return resultado.json();
        })
        .then(data => {
            let datos = data;
            datos.forEach(element => {
                console.log(element.id + ' ' + element.completed + ' ' + element.title + ' ' + element.userId);
            });
        });
}

obtenerEmpleados();
*/

// segunda forma
async function obtenerEmpleadosDos(){
    const url = 'empleados.json';
    const url2 = 'https://jsonplaceholder.typicode.com/todos';

    debugger;
    let resultado = await fetch(url2);
    let datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleadosDos();