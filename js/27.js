// POO

function Producto(nombre, precio){
    this.nombre = nombre,
    this.precio = precio
}

let producto2 = new Producto('televisor', 500);
let producto3 = new Producto('pc', 1500);
console.log(producto2);
console.log(producto3);

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
};
console.log(producto3.formatearProducto());



function Cliente(nombre, apellido){
    this.nombre = nombre,
    this.apellido = apellido
}
let cleinte1 = new Producto('Jordan', 'Cotrina');
console.log(cleinte1);

Cliente.prototype.formatearProducto = function(){
    return `El cleinte1 ${this.nombre} tiene un precio de: $ ${this.apellido}`;
};
console.log(cleinte1.formatearProducto());