
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const pmam = document.querySelector(".pmam")

window.addEventListener("DOMContentLoaded", function(){
    time()
})

function time(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    hours.textContent = h  
    minutes.textContent = m 
    seconds.textContent = s

    if(m < 10){
        minutes.textContent = "0" + m
    }
    if(s < 10){
        seconds.textContent = "0" + s
    }
    if(h < 10){
        hours.textContent = "0" + h
    }

    setTimeout(function (){
        time()
    }, 1000);
}
