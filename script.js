const url = "https://jsonplaceholder.typicode.com/users/";

let data = [];

async function listaDeUsuarios() {
    try{
        const response = await fetch(url);
        data = await response.json();
        
            const tbody = document.querySelector("table tbody");
            data.forEach((usuario) => {
                
                const tr = document.createElement("tr");

                const tdId = document.createElement("td");
                tdId.textContent = usuario.id;
                tr.appendChild(tdId);

                const tdNome = document.createElement("td");
                tdNome.textContent = usuario.name;
                tr.appendChild(tdNome);

                const tdEmail = document.createElement("td");
                tdEmail.textContent = usuario.email;
                tr.appendChild(tdEmail);

                const tdEndereco = document.createElement("td");
                tdEndereco.textContent = `${usuario.address.street}, ${usuario.address.suite} ` ;
                tr.appendChild(tdEndereco);

                const tdCidade = document.createElement("td");
                tdCidade.textContent = `${usuario.address.city}` ;
                tr.appendChild(tdCidade);

                const tdTelefone = document.createElement("td");
                tdTelefone.textContent = usuario.phone;
                tr.appendChild(tdTelefone);

                const tdEmpresa = document.createElement("td");
                tdEmpresa.textContent = `${usuario.company.name}`;
                tr.appendChild(tdEmpresa);

                tbody.appendChild(tr);

            });

         } catch(error){
            console.log(error);
         }
        }

listaDeUsuarios();


const usuarioFiltrado = document.getElementById("campoBusca").value;
const tipoPesquisa = document.getElementById("select").value;
    function filtrar(event) {
    event.preventDefault();
   

    if (tipoPesquisa) {
        
    }

}

