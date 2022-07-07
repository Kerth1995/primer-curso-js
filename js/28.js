// Clases
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    obtenerPrecio(){
        return this.precio;
    }
}

let producto2 = new Producto('televisor', 500);
let producto3 = new Producto('pc', 1500);
console.log(producto2);
console.log(producto3.formatearProducto());

class Libro extends Producto{
    constructor(nombre, precio, isbn, autor){
        super(nombre, precio);
        this.isbn = isbn;
        this.autor = autor;
    }

    formatearProducto(){
        return `${super.formatearProducto()} con el SBN ${this.isbn} del autor ${this.autor}`;
    }

    obtenerPrecio(){
        return super.obtenerPrecio();
    }
}

let libro2 = new Libro('Libro 1', 1500, '123456789', 'Juan Manuel Vargas');
let libro3 = new Libro('Libro 2', 11500, '987654321', 'Mario Vargas Llosa');
console.log(libro2);
console.log(libro2.formatearProducto());
console.log(libro2.obtenerPrecio());