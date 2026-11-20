console.log('Happy developing ✨')


let enrollButton = document.querySelector('#enrollBtn')
let ststus = document.querySelector('#status')

enrollButton.addEventListener('click', function (){
    ststus.textContent = "yay"
    ststus.classList.add('success')
    enrollButton.textContent = "okay"
})

let studentsName = document.querySelector('#studentsName')
let welcome = document.querySelector('#welcome')

studentsName.addEventListener('input', function (){
    let name = studentsName.value.trim()
    if (name === ""){
        welcome.textContent = "yo, guest"
    }
    else {
        welcome.textContent = "yo, " + name
    }
})

let format = document.querySelector('#format')

let price = document.querySelector('#price')

format.addEventListener('change', function (){
    let selectPrice = Number(format.value)
    price.textContent = selectPrice + "uah"
})

let detailButton = document.querySelector('#detailBtn')

let details = document.querySelector('#details')

detailButton.addEventListener('click', function (){
    details.classList.toggle('hidden')
    if (details.classList.contains('hidden')) {
        detailButton.textContent = "show desc"
    }
    else {
        detailButton.textContent = "hide desc"
    }
})

let card = document.querySelector('#card')

let themeButton = document.querySelector('#themeBtn')

themeButton.addEventListener('click', function (){
    card.classList.toggle('dark')

    if (card.classList.contains('dark')) {
        themeButton.textContent = "light"
    }
    else{
        themeButton.textContent = "dark"
    }
})

