// String o cadenas de texto
let producto = 'primer producto primer producto'; /// Se crea un string tradicional
let producto2 = String('segundo producto segundo producto'); // se crea un string tradicional
let producto3 = new String('tercer producto tercer producto');  // se crea un objeto de tipo string

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto); // string
console.log(typeof producto2); // string
console.log(typeof producto3); // objeto de tipo String

// diferentes metodos con string

// devuelve el caractere es un posicion especifica de la cadena
console.log(producto.charAt(9)); 
// devuelve la posición en donde encuentra al texto ingresado. si no encuentra nada retornará -1. Esta funcion es sensible a mayusculas y minusculas
console.log(producto.indexOf('producto')); 
// devuel true si existe el valor ingresado y false si no existe
console.log(producto.includes('producto')); 
// retorna un arreglo basado en el parametro que se quiere cambiar
console.log(producto.split('')); 
// retorna un arreglo basado en el parametro que se quiere cambiar
// e invierte el orden los elementos del arreglo
console.log(producto.split('').reverse());
// retorna un string separado por "," basado en el parametro que se quiere cambiar
// e invierte el orden los elementos del arreglo
console.log(producto.split('').reverse().join());
// retorna un string basado en el parametro que se quiere cambiar
// e invierte el orden los elementos del arreglo
// ademas elimina elimina el caracter que delimita al texto
console.log(producto.split('').reverse().join().replace(/,/g, ''));