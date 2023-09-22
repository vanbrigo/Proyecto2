
let screen = document.getElementById('cuadropantalladentro');

const botonselect = document.getElementById('botonselect');

const botonstart = document.getElementById('botonstart');

const botonderecha = document.getElementById('botondentro2c');

const incio = "url('../img/startgif.gif')";

const fondo1 = "url('../img/mario.jpeg')";

const fondo2 = "url('../img/pacman.jpeg')";

const fondo3 = "url('../img/tetris.png')";

let fondos = [fondo1, fondo2, fondo3];

let fondosreversa = fondos.slice().reverse();

let i = 0;


document.addEventListener('click', (e)=> {

    switch (e.target.id){
       case 'botonstart':
        screen.style.backgroundColor = 'lightgreen';
        break;

       case 'botonselect':
        screen.style.backgroundImage = ("");
        screen.style.backgroundImage = "url('../img/startgif.gif')";
        break;

        case 'botondentro2c':
         if (i<=2){
            screen.style.backgroundImage = ("");
           screen.style.backgroundImage = (fondos[i]);
           
         i++;
         }
        break;

         case 'botondentro2a':
         if (i<=2){
            screen.style.backgroundImage = ("");
            screen.style.backgroundImage = (fondosreversa[i]); 
         i++;
        break;  
        
         }
         

    }


    
});




