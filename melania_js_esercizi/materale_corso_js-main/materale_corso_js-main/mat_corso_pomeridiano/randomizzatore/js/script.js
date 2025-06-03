function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let arrayStudenti = ["deborah", "alessandro", "valentino", "marco", "melania", "rafaela", "lorenzo", "giorgia", "wilmar", "gesu"];
let nomiRimanenti = [...arrayStudenti];//Spread operator:copia
let selected = document.getElementById("studentName");

function pickRandomStudent() {
    if (nomiRimanenti.length == 0) {
        alert("SO FINITI!!!!!");
        document.getElementById("pickBtn").disabled = true;
        document.getElementById("resetBtn").style.display = "inline-block";



    } else {
        const randomIndex = Math.floor(Math.random() * nomiRimanenti.length);// per recuperare un numero random partendo da 0 
        // fino alla lunghezza dell'array
        const capName = capitalizeFirstLetter(nomiRimanenti[randomIndex])
        selected.innerHTML = "Il prescelto: " + capName;
        nomiRimanenti.splice(randomIndex, 1)
        console.log(arrayStudenti, nomiRimanenti);
    }

}










function resetStudents() {
    nomiRimanenti = [...arrayStudenti];
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("pickBtn").disabled = false;
    selected.innerHTML = ""








}