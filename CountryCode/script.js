
const btn = document.querySelector('#btn-game');
const start = document.querySelector('#text-partidas');
const time1 = document.querySelector('reloj')
const rPlayer = document.querySelector('player1')
const Reiniciar = document.querySelector('.btn-game2')
let turno = 1;

Reiniciar.addEventListener('click', () => {
    if (turno == 1) {
        turno = 0;
})

let tiempoRef = Date.now()
let cronometrar = false;
let acumulado = 0

let tiempoRef2 = Date.now()
let cronometrar2 = false
let acumulado2 = 0

function iniciar() {
    cronometrar = true
}

function pausar() {
    cronometrar = false
}

function reiniciar() {
    acumulado = 0
}

function iniciar2() {
    cronometrar2 = true
}

function pausar2() {
    cronometrar2 = false
}

function reiniciar2() {
    acumulado2 = 0
}



// btn.addEventListener('click', () => {
//     if(cronometrar === false) {
//             setInterval(() => {
//                 let tiempo = document.getElementById("tiempo")
//                 if (cronometrar) {
//                     acumulado += Date.now() - tiempoRef
//                 }
//                 tiempoRef = Date.now()
//                 tiempo.innerHTML = formatearMS(acumulado)
//             }, 1000 / 60);
//         }
// })
btn.addEventListener('click', () => {
    if (start.value > 0) {
        if (start.value % 2 == 0) {
            alert('Ingrese un numero impar');
            error();
        } else {
            setInterval(() => {
                let tiempo = document.getElementById("tiempo")
                if (cronometrar) {
                    acumulado += Date.now() - tiempoRef
                }
                tiempoRef = Date.now()
                tiempo.innerHTML = formatearMS(acumulado)
            }, 1000 / 60);
            
            setInterval(() => {
                let tiempo2 = document.getElementById("tiempo2")
                if (cronometrar2) {
                    acumulado2 += Date.now() - tiempoRef2
                }
                tiempoRef2 = Date.now()
                tiempo2.innerHTML = formatearMS(acumulado2)
            }, 1000 / 60);
        }
    } else {
        error();
        console.log("Debe ingresar numero de partidas");
    }
})

const error = () => {
    start.style.borderColor = "red";

}


function formatearMS(tiempo_ms) {
    let MS = tiempo_ms % 1000
    
    let St = Math.floor(((tiempo_ms - MS) / 1000))
    
    let S = St%60
    let M = Math.floor((St / 60) % 60)
    let H = Math.floor((St/60 / 60))
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0)
    }

    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2)
        + "." + MS.ceros(3)
}
const clickear = document.querySelector(".game");
//clickear.addEventListener('click',marcar(event))
function evaluar(elemento) {
    //   HORIZONTALES  
    if (clickear.children[4].children[0].innerHTML == elemento &&
        clickear.children[4].children[1].innerHTML == elemento &&
        clickear.children[4].children[2].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)
    }
    if (clickear.children[5].children[0].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[5].children[2].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)
    }
    if (clickear.children[6].children[0].innerHTML == elemento &&
        clickear.children[6].children[1].innerHTML == elemento &&
        clickear.children[6].children[2].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)
        }
    //  VERTICLES    
    if (clickear.children[4].children[0].innerHTML == elemento &&
        clickear.children[5].children[0].innerHTML == elemento &&
        clickear.children[6].children[0].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)

        }
    if (clickear.children[4].children[1].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[6].children[1].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)

        }
    if (clickear.children[4].children[2].innerHTML == elemento &&
        clickear.children[5].children[2].innerHTML == elemento &&
        clickear.children[6].children[2].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)
        }
    //  DIAGONALES 
    if (clickear.children[4].children[0].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[6].children[2].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)
        }
    if (clickear.children[4].children[2].innerHTML == elemento &&
        clickear.children[5].children[1].innerHTML == elemento &&
        clickear.children[6].children[0].innerHTML == elemento) {
        alert("Ha ganado: " + elemento)
        }

    if (alert === true){
        elemento.readOnly = true;
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