// objetos - 
let producto = {
    nombreProducto: 'Monitor LCD',
    precio: 300,
    disponible: true
}

/*
// Freeze
Object.freeze(producto);
producto.total = 53.654; // el freeze no permite crear una nueva variable
delete producto.nombreProducto; // el freeze no permite eliminar una variable existente
producto.precio = 'nuevo precio'; // el freeze no permite editar el valor una variable existente
console.log(producto);
*/

/*
// Seal
Object.seal(producto);
producto.total = 53.654; // el seal no permite crear una nueva variable
delete producto.nombreProducto; // el seal no permite eliminar una variable existente
producto.precio = 'nuevo precio'; // el seal si permite editar el valor una variable existente
console.log(producto);
*/