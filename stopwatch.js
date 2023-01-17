let seconds = 00;
let tens = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-Stop');
let btnReset = document.querySelector('.btn-Reset');
let interval;


function StartTimer(){
    tens++
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML =  tens;
    }
    if(tens > 99){
        seconds++
        getSeconds.innerHTML =  '0' + seconds;
        tens=0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML =  seconds;
    }
}


btnStart.addEventListener('click', () => {
    inveral = setInterval(StartTimer, 20)
})

btnStop.addEventListener('click', () => {
    
    clearInterval(inveral)
})

btnReset.addEventListener('click', () => {
    clearInterval(inveral);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
})


