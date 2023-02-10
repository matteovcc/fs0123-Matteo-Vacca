function aggiungiTasto(elemento){
    let tasto = elemento.getAttribute("data-tasto")
    let display = document.querySelector("#display")

    display.value += tasto
    
}

function quadrato(){
    display.value = Math.pow(display.value, 2)
}
function radice(){
    display.value = Math.sqrt(display.value)
}

function totale(){
    let display = document.querySelector("#display")
    let risultato = eval(display.value)
    if(!isNaN(risultato)){
        display.value = risultato
    }
}

function cancella() {
    let display = document.querySelector("#display")
    display.value = ""
}
 

//Tasti Salva e Mostra 


let memoria = 0

function addMemory() {
    let display = document.querySelector("#display")
    document.querySelector("#salva-memoria").addEventListener("click", addMemory)
    memoria = eval(display.value)
}

function recallMemory() {
    let display = document.querySelector('#display')
    document.querySelector("#salva-memoria").addEventListener("click", recallMemory)
    display.value = memoria
}
