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

// foreach
carrito.forEach(producto => {
    console.log(producto);
});

let nuevoArreglo = carrito.forEach(producto => {
    return producto;
});
console.log(nuevoArreglo);

// map lo que hace es crear un nuevo arreglo
carrito.map(producto => {
    console.log(producto);
});

let nuevoArregloDos = carrito.map(producto => {
    return producto;
})
console.log(nuevoArregloDos);