/**
 * 
 * 1. Stampa in console tutti i numeri da 1 a 10
 * 
 * 
 * 2. Stampa in console tutti i numeri pari da 1 a 20
 * 
 * 3. Riprendi l'elenco della tua classe. Accettando un nome dato dall'utente in un prompt, controlla se quel nome è presente nell'elenco.
 *    Se è presente stampa in console il messaggio "Puoi accedere", altrimenti "Non Puoi accedere"
 */
// esercizio 1

for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);

}

//esercizio 2

for (let numero2 = 1; numero2 <= 20; numero2++) {

    if (numero2 % 2 == 0) {
        console.log(numero2);

    } else {
        console.log(numero2 + " non è pari.");
    }


}

//esercizio 3
let arrayStudenti = ["deborah", "alessandro", "valentino", "marco", "melania", "rafaela", "lorenzo", "giorgia", "wilmar", "gesu"];
let nome = prompt("Inserisci un nome");
let control = false;


/*for (let i of arrayStudenti) {

    if (i == nome) {
        console.log("puoi accedere");
        control = true;
        break;

    }
} if (control == false) {
    console.log("non puoi accedere");
}*/

for (let i = 0; i < arrayStudenti.length; i++) {
    if (arrayStudenti[i].toLowerCase() == nome.toLowerCase) {
        alert("puoi accedere");
        control = true;
        break;
    }

} if (control == false) {
    alert("non puoi accedere");
}


