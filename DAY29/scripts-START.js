// CAPTURING THE ELEMENTS
let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const beBackAt = document.querySelector('.display__end-time')
const inputBox = document.customForm
const buttons = document.querySelectorAll('[data-time]')
const alarm = document.querySelector('audio')

// FUNCTION THAT PROVIDES FUNCTIONALITY TO TIMER
function timer(seconds){
    clearInterval(countdown)  // CLEARS ANY PREVIOUSLY RUNNING INTERVALS

    const now = Date.now()
    const then = (seconds * 1000) + now

    displayTimeLeft(seconds)
    displayEndTime(then)
    
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        displayTimeLeft(secondsLeft)

        // TO STOP INTERVAL
        if(secondsLeft < 1){
            clearInterval(countdown)
            alarm.play()
            return
        }
    },1000)
}

// FUNCTIONS THAT UPDATES TIMER'S HTML
function displayTimeLeft(seconds){
    let minutes = Math.floor(seconds / 60)
    let remainderSeconds = seconds % 60
    let hours = 0 

        while(minutes > 59){
            hours++
            minutes -= 60
        }

    updatedSecs = (remainderSeconds < 10 ? '0':'') + remainderSeconds
    updatedMin = (minutes < 10 ? '0':'') + minutes
    updatedHrs = (hours < 10 ? '0':'') + hours

    let display = `${updatedHrs}:${updatedMin}:${updatedSecs}`

        if(updatedHrs === '00' && updatedMin === '00'){
            display = `${updatedSecs}`
        }
        else if(updatedHrs === '00'){
            display = `${updatedMin}:${updatedSecs}`
        }

    timerDisplay.textContent = display
    document.title = display
}

function displayEndTime(timestamp){
    const endTime = new Date(timestamp)
    let minutes = endTime.getMinutes()
    let hours = endTime.getHours()

    hours = hours > 12 ? hours -= 12 : hours    // conversion to 12hrs format
    beBackAt.textContent = `Be Back At ${hours}:${(minutes < 10 ? '0' : '') + minutes}`
}

// BUTTONS FUNCTIONALITY
function updateTimer(){
    let seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(btn => {
    btn.addEventListener('click' , updateTimer)
})

// INPUT'S FUNCTIONALITY
inputBox.addEventListener('submit', function(e){
    e.preventDefault()
    mins = this.minutes.value
    timer(mins * 60)
    this.reset()
})
