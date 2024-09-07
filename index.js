const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
const timer=document.getElementById("timer");

let timeLeft=1500;
let interval;

const updateTimer = ()=> {
    let minutes = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    timer.innerHTML= `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

}

const startTimer=()=>{
    interval=setInterval(()=>{
        timeLeft--;
        updateTimer();

        if(timeLeft===0){
            clearInterval(interval);
            alert('Time is Up');
            timeLeft=1500;

        }


    },1000)
}

const stopTimer=()=>{
    clearInterval(interval);
}

const restTimer=()=>{
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click",restTimer);

