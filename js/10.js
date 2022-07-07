// objetos
let producto = {
    nombreProducto: 'Monito LCD',
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['nombreProducto']);
console.log(producto['precio']);
console.log(producto['disponible']);

// Agregar nuevas propiedades a un objeto
producto.image = 'imagen.jpg';
console.log(producto);

// Eliminar propiedades a un objeto
delete producto.precio;
console.log(producto);