// Metodos de propiedad

let reproductor = {
    reproducir: function(nomnreCancion){
        console.log(`reproduciendo cancion: ${nomnreCancion}`);
    },

    pausar: function(nomnreCancion){
        console.log(`pausando cancion: ${nomnreCancion}`);
    },

    crearPlayList: function(nomnreCancion){
        console.log(`creando play list: ${nomnreCancion}`);
    }
}

reproductor.reproducir('Hola que tal');
reproductor.pausar('Hola que tal');
reproductor.crearPlayList('Hola que tal');

// Se agrega un metodo fuera del objeto

reproductor.eliminarCancion = function(nomnreCancion){
    console.log(`eliminando cancion: ${nomnreCancion}`);
};

reproductor.eliminarCancion('Hola que tal');

reproductor.eliminarPlayList = function(nomnreCancion){
    console.log(`eliminando play list: ${nomnreCancion}`);
};

reproductor.eliminarPlayList('Hola que tal');