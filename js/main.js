
let screen = document.getElementById('cuadropantalladentro');

const botonselect = document.getElementById('botonselect');

const botonstart = document.getElementById('botonstart');

const botonderecha = document.getElementById('botondentro2c');

let fondo1 = "url('../img/mario.jpeg')";

let fondo2 = "url('../img/pacman.jpeg')";

let fondo3 = "url('../img/tetris.png')";

let fondos = [fondo1, fondo2, fondo3];

let i = 0;


document.addEventListener('click', (e)=> {

    switch (e.target.id){
       case 'botonstart':
        screen.style.backgroundColor = 'lightgreen';
        break;

       case 'botonselect':
        screen.style.backgroundImage = "url('../img/mario.jpeg')";
        break;

        case 'botondentro2c':
         if (i<=2){
         screen.style.backgroundImage = (fondos[i]);
         i++;
         }
         break;
         

    }


    
});




