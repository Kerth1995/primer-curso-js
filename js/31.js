// Notification API

let btn = document.querySelector('#btnAlert');
btn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {console.log(`El resultado es: ${resultado}`)});

});

if(Notification.permission == 'granted'){
    debugger;
    new Notification('Esta es una notificacion', {
        icon: 'jorda.png',
        body: 'Código con Jordan Cotrina'
    })
}