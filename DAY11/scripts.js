// CAPTURING ELEMENTS
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenBtn = player.querySelector('.fullscreen-btn')


// FUNCTIONS
function togglePlay() {
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function btnChange(){
    toggle.textContent = this.paused ? '►' : '❚ ❚'
}

function skip(){
    video.currentTime += parseInt(this.dataset.skip)
}

function rangeChange(){
    video[this.name] = this.value
}

function handleProgress(){
    let progressTime = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = progressTime + "%"
}

function scrub(e){
    let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}


// EVENT LISTENERS
video.addEventListener('click',togglePlay)
toggle.addEventListener('click',togglePlay)

video.addEventListener('play',btnChange)
video.addEventListener('pause',btnChange)

video.addEventListener('timeupdate',handleProgress)
fullscreenBtn.addEventListener('click',() => {
    player.classList.toggle('fs')
    // METHOD BELOW ALSO WORKS BUT CONTROLS ARE VANISING FOR SOME REASONS
    // video.requestFullscreen()
})

skipButtons.forEach(btn => {
    btn.addEventListener('click',skip)
})

ranges.forEach(slider => {
    slider.addEventListener('change',rangeChange)
    slider.addEventListener('mousemove',rangeChange)
})


// DRAG AND DROP FUNCTIONALITY
let flag = false
progress.addEventListener('mousedown',() => {
    flag = true
})
progress.addEventListener('mouseup',() => {
    flag = false
})

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove',(e) => flag && scrub(e))