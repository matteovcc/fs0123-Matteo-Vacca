/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let a = 3;
let b = 5;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
*/


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numero = 20

if (numero != 5){
  console.log("Not Equal")
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let num = 25

if (num % 5 === 0){
  console.log("divisibile per 5")
}
*/
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let a = 5;
let b = 3;

if ((a === 8 || b === 8) || (a + b === 8) || (a - b === 8) || (b - a === 8)) {
  console.log(true);
} else {
  console.log(false);
}
*/



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let totalShoppingCart = Number(prompt("totale"));
let spedizione = 10;
if (totalShoppingCart >= 50) {
  console.log(totalShoppingCart);
} else {
  console.log(totalShoppingCart + spedizione);
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Ogssssgi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let sconto = 20

function percentuale(){
  return(totalShoppingCart / 100) * sconto;
}

if ((totalShoppingCart - percentuale()) >= 50) {
  console.log(totalShoppingCart - percentuale());
} else {
  console.log(totalShoppingCart - percentuale() + spedizione);
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  let a = 1
  let b = 2
  let c = 3

  let arr=[b, a, c]
  arr.sort(function(a,b){
    return b - a;
  });
  console.log(arr)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let franco = 20
function tipodi(){
  return typeof franco
}

if (tipodi() == "number"){
  console.log("è un numero")
}else{
  console.log("non è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)

function pariDispari(num) {
  return num % 2 === 0;
}
let numero = 32
console.log(pariDispari(numero))
let numero2 = 33
console.log(pariDispari(numero2))


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}/*

/* SCRIVI QUI LA TUA RISPOSTA 

me.city = 'Toronto';

console.log(me);
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
};

delete me.lastName;

console.log(me);
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".

me.skills.pop(2)

/* SCRIVI QUI LA TUA RISPOSTA 
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.

var arr = []
for (var i = 1; i <= 10 ; i++ ) {
  arr.push(i);
}
console.log(arr)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers[numbers.length - 1] = 100;

console.log(numbers);
*/
