
const btn = document.querySelector('#btn-game');
const start = document.querySelector('#text-partidas');
const time1 = document.querySelector('reloj')
const rPlayer = document.querySelector('player1')
btn.addEventListener('click', ()=>{
    if(start.value > 0){
        if (start.value % 2 == 0){
            alert('Ingrese un numero impar');
            error();
        }else{
        start.readOnly = true;
        if(rPlayer.checked){
            cronometro(time1);
        }else
        cronometro(time2);
    }
    }else{
        error();
        console.log("Debe ingresar numero de partidas");
    }
})

const jugador = querySelector('')

const error = ()=>{
    start.style.borderColor = "red";

}

/*function cronometro(pausa){
        time1.innerHTML=0;
        t = setInterval(()=>{
            time1.innerHTML = parseInt(time1.innerHTML)+1
        },1000)
}*/