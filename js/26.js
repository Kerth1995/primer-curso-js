// palabra reservada this

// Primer caso: sin la palabra this, se hace referencia a alguna variable
// que se tiene fuera del objeto creado 
let nombre = 'Manuel';
let total = 4569;
let reservacionFirst = {
    nombre: 'Jordan',
    apellido: 'Cotrina',
    total: 5000,
    pagado: false,

    informacion: function(){
        console.log(`El cliente ${nombre} reservó y el total a pagar es de ${total}`);
    }
}
reservacionFirst.informacion();

// Segundo caso: con la palabra this, se hace referencia a la variable
// que se tiene creado dentro del objeto 
let reservacionSecond = {
    nombre: 'Jordan',
    apellido: 'Cotrina',
    total: 5000,
    pagado: false,

    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y el total a pagar es de ${this.total}`);
    }
}
reservacionSecond.informacion();

// Tercer caso: con el arrow functions la palabra this, se hace referencia a la variable
// que se tiene creado dentro del DOM de la pagina (window)
window.nombre = 'Karla';
window.total = 654123;
let reservacionThird = {
    nombre: 'Jordan',
    apellido: 'Cotrina',
    total: 5000,
    pagado: false,

    informacion: () => {
        console.log(`El cliente ${this.nombre} reservó y el total a pagar es de ${this.total}`);
    }
}
reservacionThird.informacion();
