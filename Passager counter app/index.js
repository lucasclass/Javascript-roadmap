let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // Pegue o elemento count-el, salve na variável countEl.
let count = 0

function increment () {

    count += 1
    countEl.innerText = count

}

function save () {
    
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log("count:", count)
    
}

let welcomeEl = document.getElementById("welcome-el")

let nome = "Lucas Class"
let saudação = "Bem vindo "

welcomeEl.innerText = saudação + nome

welcomeEl.innerText += " 🙌"

// ----> Prática de variáveis

let nome2 = "Lucas"
let sobrenome = "Class"

let nomeCompleto = nome2 + " " + sobrenome

console.log(nomeCompleto)

let myPoints = 3

function add3Points(){
    myPoints += 3
}

function remove1Points(){
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()


console.log(myPoints)

// Produto

let errorParagraph = document.getElementById("error")

function comprar() {
    console.log("Botão clicado")
    errorParagraph.textContent = "Deu ruim padrin, tenta de novo!"
}

let num1 = 10
let num2 = 11

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function soma(){
    let result = num1 + num2
    sumEl.textContent = "Resultado: " + result
}
function sub(){
    let result = num1 - num2
    sumEl.textContent = "Resultado: " + result
}
function div(){
    let result = num1 / num2
    sumEl.textContent = "Resultado: " + result
}
function multi(){
    let result = num1 * num2
    sumEl.textContent = "Resultado: " + result
}
