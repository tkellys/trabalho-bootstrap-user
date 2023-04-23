const url = "https://jsonplaceholder.typicode.com/users/";

function listaDeUsuarios() {
    
         fetch(url)
         .then((response) => response.json())
         .then((data)=> {
            const tbody = document.querySelector("table tbody");
            data.forEach((usuario) => {
                
                const tr = document.createElement("tr");

                const id = document.createElement("td");
                id.textContent = usuario.id;
                tr.appendChild(id);

            });

         }
         
         )
}
listaDeUsuarios();