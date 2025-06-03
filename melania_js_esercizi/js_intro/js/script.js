// alert('il mio primo alert');

console.log("Questo è un messaggio a console");

// comandi JS
/** commento a piu righe
 * ciaooooo
*/
//comando:input da far inserire all'utente


//Variabili java
//dichiarare una variabile vuol dire dichiarare che esiste
/*let x;

let numeri = [0, "carciofo", 2, 3];
console.log(numeri['1'])

let inputUtente;
inputUtente = prompt("Inserisci il tuo nome");
console.log("Ciao," + inputUtente);
let myH1 = document.getElementById("welcome");
myH1.innerText = ("Ciao " + inputUtente + ", benvenut*!!!")
*/

// esercizio di gruppo- pomeriggio
//generaare psw
//nome+cognome+n.preferito+col.preferito
//inserisci in h1 "La tua password è"

//1- variabile nome= chiedere all'utente di inserire  il nome (prompt)
/*let myName = prompt("Inserisci il tuo nome");
//2- variabile cognome= chiedere all'utente di inserire  il Cognome (prompt)
let surname = prompt("Inserisci il tuo cognome");
//3- variabile numPRef= chiedere all'utente di inserire  il num.pref (prompt)
let favNum = prompt("Inserisci il tuo numero preferito");
//4- variabile colPRef= chiedere all'utente di inserire  il col.Pref (prompt)
let favCol = prompt("Inserisci il tuo Colore preferito");
//5?- variabile psw= nome + cognome + numPRef + colPref
let psw = myName + surname + favNum + favCol;
//6 console.log('La tua password è: '+ psw);
let myH1 = document.getElementById('welcome')

myH1.innerText = 'Ciao, la tua pawword è: ' + psw;*/

//FUNZIONI: blocchi di codice  riutilizzabile
//fase 1: dichiarazione
let nome = prompt("nome")
let cognome = prompt("cognome")

function saluta(nome, cognome) {
    /*console.log("Ciao, " + nome + " " + cognome)*/
    let myH1 = document.getElementById("welcome");
    myH1.innerText = "Ciao, " + nome + " " + cognome;

}
//Fase 2. invocazione
saluta(nome, cognome);


//

