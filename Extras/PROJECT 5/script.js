let body = document.querySelector('body')
let textbox = document.querySelector('#textbox')
let submit = document.querySelector('#submit')



submit.addEventListener('click',() => {

    let newElem = document.createElement('div')
    newElem.classList.add('newElem')
    
    let li = document.createElement('li')
    li.classList.add('items')
    li.innerText = `${textbox.value}`
    newElem.append(li)
    
    let doneBtn = document.createElement('button')
    doneBtn.setAttribute('class','fa-solid fa-check')
    doneBtn.classList.add('done')
    newElem.append(doneBtn)
    
    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class',"fa-solid fa-trash-can")
    deleteBtn.classList.add('delete')
    newElem.append(deleteBtn)
    

    if(/^\s+/.test(textbox.value) === true || textbox.value === ""){
        alert('Unable to Proceed!(Enter a value first)')
    }
    else{
        body.append(newElem)
    }


    doneBtn.addEventListener('click',function(){
        li.style.textDecoration = 'line-through'
        console.log(doneBtn.parentElement.innerHTML)
    })
    
    deleteBtn.addEventListener('click' , (e) => {
        e.target.parentElement.remove()
    })

})