
let screen = document.getElementById('cuadropantalladentro');

const botonderecha = document.getElementById('botondentro2c');

const botonstart = document.getElementById('botonstart');


document.addEventListener('click', (e)=> {

    if(e.target.id === 'botonstart'){

        screen.style.backgroundColor = 'lightgreen';
        return;

    } else if(e.target.id === 'botondentro2c'){

        screen.style.backgroundImage = "url('../img/mario.jpeg')"; 
        return;
    }
});


