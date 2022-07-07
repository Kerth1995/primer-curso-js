// Array Methods
let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');

let carrito = [
    {nombre: 'Monito 20 pulgadas', precio: 200},
    {nombre: 'Monito 30 pulgadas', precio: 300},
    {nombre: 'Monito 40 pulgadas', precio: 400},
    {nombre: 'Monito 50 pulgadas', precio: 500},
    {nombre: 'Monito 60 pulgadas', precio: 600},
    {nombre: 'Monito 70 pulgadas', precio: 700},
    {nombre: 'Monito 80 pulgadas', precio: 800},
    {nombre: 'Monito 90 pulgadas', precio: 900}
];

// permite validar si existe un valor en un arreglo plano
let rpta = meses.includes('Enero');
console.log(rpta);
let rptaDos = meses.includes('Enerosssssss');
console.log(rptaDos);

// permite validar si existe un objeto con en especifico un arreglo de objetos
let existe = carrito.some(data => {
    return data.nombre == 'Monito 20 pulgadas'
});
console.log(existe);

let existeDos = carrito.some(producto => {
    return producto.nombre == 'Monito 20 pulgadas dfdfdfdf'
});
console.log(existeDos);

// permite hacer calculo y retornar el total
let resultado = carrito.reduce((total, producto) => {
    return total + producto.precio;
}, 0);
console.log(resultado);

// permite filtrar los objeto basado en un condición en específico
let filtrado = carrito.filter(producto => {
    return producto.precio >= 500;
});
console.log(filtrado);