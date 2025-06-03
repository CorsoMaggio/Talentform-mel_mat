/*<div class="card">
                <img src="https://i.pravatar.cc/150?img=1" alt="Avatar di Mario Rossi" class="avatar" />
                <h2>Mario Rossi</h2>
                <p><strong>Email:</strong> mario.rossi@example.com</p>
                <p><strong>Azienda:</strong> Rossi S.p.A.</p>
                <p><strong>Città:</strong> Roma</p>
            </div>*/

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {

        console.log(response);
        return response.json();

    }).then(users => {
        console.log(users);
        // const userCards = document.getElementById("userCards");
        // users.slice(0, 5).forEach(user => {//slice per recuperare solo i primi 5 elementi;

        //     const card =
        //         `<img src="https://i.pravatar.cc/150?img = ${user.id}" alt="Avatar di ${user.name}" class="avatar" />
        //          <h2>${user.name}</h2>
        //          <p><strong>Email:</strong>${user.email}</p>
        //          <p><strong>Azienda:</strong> ${user.company.name} </p>
        //          <p><strong>Città:</strong> ${user.address.city}</p>`
        //     console.log(card);
        //     let cardDiv = document.createElement("div");
        //     cardDiv.classList.add("card");
        //     cardDiv.innerHTML = card;
        //     userCards.appendChild(cardDiv);

        // });



        //metodo 2. adjacent HTML
        const userCards = document.getElementById("userCards");
        //users
        users.slice(0, 5).forEach(user => {
            const card = `
            <div class= "card"><img src="https://i.pravatar.cc/150?img = ${user.id}" alt="Avatar di ${user.name}" class="avatar" />
                <h2>${user.name}</h2>
                 <p><strong>Email:</strong>${user.email}</p>
                 <p><strong>Azienda:</strong> ${user.company.name} </p>
                 <p><strong>Città:</strong> ${user.address.city}</p>
             </div>`

            userCards.insertAdjacentHTML("beforeend", card);
        })

    }).catch(error => {
        console.error("Errore nel caricamento nei dati:", error);
        document.getElementById("userCards").innerText = "Errore nel caricamento dei dati";

    }
    )

