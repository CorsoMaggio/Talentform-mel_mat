// check dell'età:maggiorenne o minorenne _
// al submit del form, vogliamo controllare il valore dell'input data di daniscita
document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const dateOfBirthValue = document.getElementById("dob").value;

    const dateOfBirth = new Date(dateOfBirthValue);
    const localDate = new Date();
    let age = localDate.getFullYear() - dateOfBirth.getFullYear();
    let message = document.getElementById("message");
    message.innerHTML = "";






    if (
        localDate.getMonth() < dateOfBirth.getMonth() ||
        (localDate.getMonth() === dateOfBirth.getMonth() &&
            localDate.getDate() < dateOfBirth.getDate())) {
        age--;
    }

    console.log(age)


    if (age >= 21) {

        let p = document.createElement("p")
        p.innerText = "sei maggiorenne ovunque";
        message.appendChild(p);
        console.log(p);



        //alert("sei maggiorenne ovunque");

    } else if (age >= 18) {
        let p = document.createElement("p")
        p.innerText = "sei maggiorenne in Italia";
        message.appendChild(p);
        message.removeChild(p);
        console.log(p);

        //alert("Sei maggiorenne in Italia");
        //message.appendChild(p);

    } else {

        let p = document.createElement("p")
        p.innerText = "Sei minorenne, non puoi procedere";
        message.appendChild(p);
        console.log(p);
        //message.appendChild(p);
        //alert("Sei minorenne, non puoi procedere");
    }





});






