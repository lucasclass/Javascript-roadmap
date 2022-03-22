


let countEl = document.getElementById("count-el") // Pegue o elemento count-el, salve na variável countEl.
let count = 0

function increment () {

    count += 1
    countEl.innerText = count

}

function save () {
    
    console.log("count:", count)
    
}

let welcomeEl = document.getElementById("welcome-el")

let nome = "Lucas Class"
let saudação = "Bem vindo "

welcomeEl.innerText = saudação + nome




