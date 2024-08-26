/*
Este arquivo livros.js tem como principal objetivo reunir as funcionalidades que a pagina livro.html irá disponibilizar

1. A listagem dos livros de forma dinamica
  - O Array book gera essa listagem
  - A função renderTable() vai renderizar essa informação contida em usuarios no HTML
  - A função searchUsuarios() é responsável por fazer a filtragem dos livros listados
2. A funcionalidade da abertura dos modais de editar e deletar um livro
  - 

*/

document.addEventListener("DOMContentLoaded", function() {

  // Aqui será capturado as informações do livro.html para ser armazenado em uma variável e assim podermos manipularmos

  const tableBody = document.getElementById("tableBody");

  var modalAlteraUsuario = document.getElementById("altera_usuario");
  var modalApagaUsuario = document.getElementById("apaga_usuario");
  var btnCancela = document.getElementsByClassName("cancelar")[0];
  var deleteInfo = document.getElementById("apaga_usuario_info");

// Dados de livros com funções de editar e deletar
const usuarios = [
  {
      nome: "Mª Luiza Soares",
      email: "marialuiza@gmail.com",
      credencial: "leitor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Joyce Luiza Gomes",
      email: "joyluiza@gmail.com",
      credencial: "leitor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Mateus Sales Paes",
      email: "matheusal@gmail.com",
      credencial: "leitor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Julia Silva Santos",
      email: "santosjuju@gmail.com",
      credencial: "leitor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Victoria Aveyard",
      email: "aveyardvictoria@gmail.com",
      credencial: "editor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Sandra Gomes Silva",
      email: "asandragomes34@gmail.com",
      credencial: "editor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Carlos Levi Souza",
      email: "souzalevi678@gmail.com",
      credencial: "leitor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Ana Fernanda Alves",
      email: "anaalves@gmail.com",
      credencial: "editor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "João César Damasceno",
      email: "damascenocesar@gmail.com",
      credencial: "editor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Leticia Magalhães Gomes",
      email: "letmagalhaes@gmail.com",
      credencial: "leitor",
      delete: function () {
          modalApagaUsuario.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaUsuario.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  }
];



// Função para renderizar a tabela com base nos dados
function renderTable(data) {
    tableBody.innerHTML = ""; // Limpa a tabela antes de adicionar as novas linhas

    data.forEach((usuario, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.credencial}</td>
            <td class="actions">
              <button id="btn_altera_livro" class="edit-btn">
                <img data-index="${index}" data-action="edit" src="../img/global/editar_icon.png" alt="Editar" width="20" />
              </button>
              <button  id="btn_apaga_livro" class="delete-btn">
                 <img data-index="${index}" data-action="delete" src="../img/global/lixeira_icon.png" alt="Excluir" width="20">
              </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Função de pesquisa
function searchUsuarios() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    const filteredUsuarios = usuarios.filter(usuario => 
      usuario.nome.toLowerCase().includes(searchTerm) ||
      usuario.email.toLowerCase().includes(searchTerm) ||
      usuario.telefone.toLowerCase().includes(searchTerm)
    );

    renderTable(filteredUsuarios); // Renderiza a tabela com os resultados filtrados
}

// Adiciona o evento de clique no botão de pesquisa
document.getElementById("searchButton").addEventListener("click", searchUsuarios);

// Evento para as ações de editar e deletar
tableBody.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        const index = event.target.getAttribute("data-index");
        const action = event.target.getAttribute("data-action");

        if (action === "edit") {
          modalAlteraUsuario.style.display = "block";
          var span = document.getElementsByClassName("fechar_altera_livro")[0];
          span.onclick = function () {
            modalAlteraUsuario.style.display = "none";
          }
        } else if (action === "delete") {
          usuarios[index].delete()
          
        }
    }
});

// Renderiza a tabela com os dados iniciais
renderTable(usuarios);
});
