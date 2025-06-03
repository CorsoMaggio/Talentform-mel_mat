



//milestone 1/** 
// funzione 1: ADD alt-click del btn add, la task passa alla li-to do
let ulElement;

function addToList() {
    let inputToAdd = document.getElementById("inputText");
    let inputValue = inputToAdd.value;
    inputToAdd.value = "";
    let liElement = document.createElement("li");
    let btnCheck = document.createElement("button");
    let span = document.createElement("span");
    ulElement = document.querySelector(".to-do-list");
    btnCheck.innerHTML = "&check;"
    btnCheck.classList.add("btn-check");

    liElement.classList.add("li-to-do");
    span.textContent = inputValue + " ";

    ulElement.appendChild(liElement);
    liElement.appendChild(span);
    liElement.appendChild(btnCheck);
    btnCheck.addEventListener("click", (e) => completeTask(e, btnCheck));


}
let btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", addToList);

//funzione 2: COMPLETED al click del btn check, la  task passa alla li-completed

function completeTask(e, btnCheck) {
    e.preventDefault();
    let li = btnCheck.parentElement;
    console.log(ulElement);
    ulElement.removeChild(li);
    btnCheck.classList.remove("btn-check");
    btnCheck.classList.add("btn-remove");
    btnCheck.innerHTML = "&cross;";
    let ulCompleted = document.querySelector(".completed-list");
    ulCompleted.appendChild(li);
    btnCheck.addEventListener((e) => removeChecked(e, btnCheck));

}


/*let btnCompleteList = document.querySelectorAll(".btn-check");
btnCompleteList.forEach(btn => {
    btn.addEventListener("click", completeTask(btn))
})*/



// completed
//FUNZIONE 3: REMOVE al click del btn-remove, si rimuove la task
function removeChecked(e, btnRemove) {
    btnRemove.addEventListener("click",)
    e.preventDefault();
    let liElement = btnRemove.parentElement;
    btnCheck
    ulElement.removeChild(li);

}
// */
