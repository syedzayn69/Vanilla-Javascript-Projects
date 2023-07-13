let box = document.querySelectorAll('.box')

for (let i = 0; i < box.length; i++) {

    box[i].addEventListener('click' , function(){
        this.classList.toggle('active')
    })

}

// IMPORTANT NOTE : this. doesn't works with anonymous function