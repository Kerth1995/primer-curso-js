// Arreglos o Arrays
let numeros = [10, 20, 30, 40, 50];
console.log(numeros);
//console.table(numeros);
console.log(typeof numeros);

let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
console.log(meses);
//console.table(meses);
console.log(typeof meses);

let arregloMix = ['Hola', 10, true, 'si', null, {nombre: 'Jordan', trabajo: 'Programador'}, [1, 2, 3]];
console.log(arregloMix);
//console.table(arregloMix);
console.log(typeof arregloMix);

// metodos para arreglos

// Agrega elementos al final de un arreglo
console.log("METODOS CON ARREGLOS");
numeros.push(60);
console.log(numeros);
numeros.push(70, 80, 90, 100);
console.log(numeros);

// Agrega elementos al inicio de un arreglo
numeros.unshift(0);
console.log(numeros);
numeros.unshift(-10, -20, -30);
console.log(numeros);

// Elimina el ultimo elemento de un arreglo
meses.pop();
console.log(meses);

// Elimina el primer elemento de un arreglo
meses.shift();
console.log(meses);

// Rest Operator o Spread Operator

// se agrega al final del arreglo
let nuevoArreglo = [...meses, 'Julio', 'Agosto'];
console.log(nuevoArreglo);

// se agrega al inicio del arreglo
let nuevoArregloDos = ['otro', 'valor', ...meses];
console.log(nuevoArregloDos);