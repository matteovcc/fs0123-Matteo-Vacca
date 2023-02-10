function aggiungiTasto(elemento){
    let tasto = elemento.getAttribute("data-tasto")
    let display = document.querySelector("#display")

    //Radice Quadrata
    if (tasto === "√") {
    display.value += "Math.sqrt("
    }else {
    display.value += tasto
    }
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
