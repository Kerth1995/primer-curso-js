// objetos - destructuring de objetos
let producto = {
    nombreProducto: 'Monitor LCD',
    precio: 300,
    disponible: true
}

let nombreProductoFirst = producto.nombreProducto;
let precioFirst = producto.precio;
let disponibleFirst = producto.disponible;

console.log(nombreProductoFirst);
console.log(precioFirst);
console.log(disponibleFirst);

// destructuring de objetos
let {nombreProducto, precio, disponible} = producto;
console.log(nombreProducto);
console.log(precio);
console.log(disponible);