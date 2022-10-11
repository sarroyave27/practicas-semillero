
const btn = document.querySelector('#btn-game');
const start = document.querySelector('#text-partidas');
const time1 = document.querySelector('reloj')
const rPlayer = document.querySelector('player1')
let turno = 1;


btn.addEventListener('click', () => {
    if (start.value > 0) {
        if (start.value % 2 == 0) {
            alert('Ingrese un numero impar');
            error();
        } else {
            start.readOnly = true;
            if (rPlayer.checked) {
                cronometro(time1);
            } else
                cronometro(time2);
        }
    } else {
        error();
        console.log("Debe ingresar numero de partidas");
    }
})

const error = () => {
    start.style.borderColor = "red";

}

/*function cronometro(pausa){
        time1.innerHTML=0;
        t = setInterval(()=>{
            time1.innerHTML = parseInt(time1.innerHTML)+1
        },1000)
}*/

const clickear = document.querySelector(".game");
//clickear.addEventListener('click',marcar(event))
function evaluar(elemento) {
    //   HORIZONTALES  
    if (clickear.children[4].children[0].innerHTML == elemento &&
        clickear.children[4].children[1].innerHTML == elemento &&
        clickear.children[4].children[2].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
    if (clickear.children[5].children[0].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[5].children[2].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
    if (clickear.children[6].children[0].innerHTML == elemento &&
        clickear.children[6].children[1].innerHTML == elemento &&
        clickear.children[6].children[2].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
    //  VERTICLES    
    if (clickear.children[4].children[0].innerHTML == elemento &&
        clickear.children[5].children[0].innerHTML == elemento &&
        clickear.children[6].children[0].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
    if (clickear.children[4].children[1].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[6].children[1].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
    if (clickear.children[4].children[2].innerHTML == elemento &&
        clickear.children[5].children[2].innerHTML == elemento &&
        clickear.children[6].children[2].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
    //  DIAGONALES 
    if (clickear.children[4].children[0].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[6].children[2].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
    if (clickear.children[4].children[2].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[6].children[0].innerHTML == elemento) {
        console.log("Ha ganado: " + elemento)
    }
}


function marcar(obj) {
    if (turno == 1) {
        if (obj.target.innerHTML === "") {
            obj.target.innerHTML = "X";
            turno = 2;
        }
    } else {
        if (obj.target.innerHTML === "") {
            obj.target.innerHTML = "O";
            turno = 1;
        }
    }
    evaluar(obj.target.innerHTML);
}