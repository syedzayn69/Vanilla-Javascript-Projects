let modelBox = document.querySelector('#model-box')
let modelBtn = document.querySelector('#model-btn')
let close = document.querySelector('span')
let body = document.querySelector('body')

modelBtn.addEventListener('click',() => {
    body.style.backgroundBlendMode = 'darken';
    modelBox.style.top = '40%'
    body.style.backgroundColor = 'rgba(0,0,0,0.7)'
    modelBox.style.transition = "top .5s";
})

close.addEventListener('click',() => {
    modelBox.style.transition = "top 0s";
    modelBox.style.top = '-30%'
    body.style.backgroundColor = 'transparent'
})