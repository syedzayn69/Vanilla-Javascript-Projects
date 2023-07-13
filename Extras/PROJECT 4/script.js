let timer = document.querySelector('.timer')
let startBtn = document.querySelector('#start-stop-btn')
let resetBtn = document.querySelector('.reset')

let interval = null
let BtnStatus = 'stopped'

let hrs = 0
let min = 0
let sec = 0

let leadHrs = 0
let leadMin = 0
let leadSec = 0



let newFunc = () => {

    sec++

    if(sec === 60){
        sec = 0
        min++
        if(min === 60){
            min = 0
            hrs++
        }
    }
    
    if(sec < 10){
        leadSec = '0' + sec
    }else{
        leadSec = sec
    }
    
    if(min < 10){
        leadMin = '0' + min
    }else{
        leadMin = min
    }
    
    if(hrs < 10){
        leadHrs = '0' + hrs
    }else{
        leadHrs = hrs
    }
    
    timer.innerText = leadHrs + ":" + leadMin + ":" + leadSec
}

startBtn.addEventListener('click',() => {
    if(BtnStatus === 'stopped'){
        interval = setInterval(newFunc,1000)
        document.querySelector('#start-stop-btn').innerText = '⏸'
        document.querySelector('#start-stop-btn').classList.add('pause')
        BtnStatus = 'started'
    }else {
        clearInterval(interval)
        document.querySelector('#start-stop-btn').innerText = '▶'
        document.querySelector('#start-stop-btn').classList.remove('pause')
        BtnStatus = 'stopped'
    }
})

resetBtn.addEventListener('click',() => {
    clearInterval(interval)
    sec = 0
    min = 0
    hrs = 0
    timer.innerText = '00:00:00'
    BtnStatus = 'stopped'
    
    document.querySelector('#start-stop-btn').innerText = '▶'
    document.querySelector('#start-stop-btn').classList.remove('pause')
})

