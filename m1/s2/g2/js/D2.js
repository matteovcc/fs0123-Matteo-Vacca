/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.


*/

/* SCRIVI QUI LA TUA RISPOSTA 

 -String, un insieme di caratteri , è possibile riconoscere una string dagli apici singoli o doppi ("" '')
 -Number, un dato che rappresenta un numero che può essere intero o decimale. Non ha gli apici
 -Undefined, rappresenta una variabile che non è stata dichiarata
 -null, rappresenta il fatto che alla variabile non è stato assegnato deliberatamente un valore
 -boolean, un dato che può assumere il valore di vero o di falso
 -object, insieme di dati collegati tra loro  
 */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

*/

/* SCRIVI QUI LA TUA RISPOSTA 
let nome = "Matteo";
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let a = 12;
let b = 20;
console.log(a + b)
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let x = 12;
*/


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


/* SCRIVI QUI LA TUA RISPOSTA
let nome = "Matteo" 
nome = "vacca"
console.log(nome)
const NOME = "Matteo"
const NOME = "Vacca"
console.log(NOME)*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
console.log(x - 4)*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log("john" != "John")

console.log(name1.toLowerCase() === name2.toLowerCase());