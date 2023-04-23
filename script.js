const url = "https://jsonplaceholder.typicode.com/users/";

let usuarios = [];

function carregarDados() {
        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            usuarios = data;
            listaDeUsuarios();
        });
           function listaDeUsuarios(){
            const tbody = document.querySelector("table tbody");
            tbody.innerHTML ="";
            usuarios.forEach((usuario) => {
                
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

            })

         }}
         

    function filtrarUsuarios() {

    let filtro = document.getElementById("campoBusca").value;
    let tipoPesquisa = document.getElementById("select").value;
    
       console.log(filtro);
       console.log(tipoPesquisa);

        

         const usuariosFiltrados = usuarios.filter((usuario) => {
  f(tipoPesquisa === "id"){
            
   return usuario.id.toString().toLowerCase().includes(filtro);
            

      } else if (tipoPesquisa === "nome") {
           return usuario.name.toLowerCase().includes(filtro);

        } else if (tipoPesquisa === "cidade") {
          return usuario.address.city.toLowerCase().includes(filtro);
        }
      });
       document.getElementById("myBtn").addEventListener ("click", filtrarUsuarios)
       usuarios = usuariosFiltrados;
   
    }
   carregarDados();
  

