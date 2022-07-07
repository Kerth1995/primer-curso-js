// unir varios objetos con el Spead operator
let producto = {
    nombreProducto: 'Monitor LCD',
    precio: 300,
    disponible: true
}

let medidas = {
    peso: '5 KG',
    alto: '300 cm',
    ancho: '200 cm'
}

let otrosDatos = {
    color: 'negro',
    modelo: 'nuevo diseño',
    stock: 5000
}

let nuevoProducto = {...producto, ...medidas, ...otrosDatos}
let nuevoProductoOtro = {
    producto: producto,
    medidas: medidas,
    otrosDatos: otrosDatos
}

console.log(producto);
console.log(medidas);
console.log(otrosDatos);
console.log(nuevoProducto);
console.log(nuevoProductoOtro);