let variable = ["Q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","?"]
let passworda1 = document.getElementById('output_a1')
let passworda2 = document.getElementById('output_a2')
let passwordb1 = document.getElementById('output_b1')
let passwordb2 = document.getElementById('output_b2')

let inputLenght = document.getElementById('input')

let randomNumber
function getRandomNumber() {
    randomNumber = Math.floor(Math.random()*variable.length)
    return randomNumber
}





function getRandomPasswords() {
    let r = variable[getRandomNumber()]
    for(let i = 0; i < inputLenght.value; i++) {
        r += variable[getRandomNumber()]
    } return r
}

function generate() {
    passworda1.innerText = getRandomPasswords()
    passworda2.innerText = getRandomPasswords()
    passwordb1.innerText = getRandomPasswords()
    passwordb2.innerText = getRandomPasswords()
}

function copya1() {
    str = passworda1.innerText
    let el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
function copya2() {
    str = passworda2.innerText
    let el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
function copyb1() {
    str = passwordb1.innerText
    let el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
function copyb2() {
    str = passwordb2.innerText
    let el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}

