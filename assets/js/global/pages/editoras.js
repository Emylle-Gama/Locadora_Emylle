/*
Este arquivo livros.js tem como principal objetivo reunir as funcionalidades que a pagina livro.html irá disponibilizar

1. A listagem dos livros de forma dinamica
  - O Array book gera essa listagem
  - A função renderTable() vai renderizar essa informação contida em usuarios no HTML
  - A função searchEditoras() é responsável por fazer a filtragem dos livros listados
2. A funcionalidade da abertura dos modais de editar e deletar um livro
  - 

*/

document.addEventListener("DOMContentLoaded", function() {

  // Aqui será capturado as informações do livro.html para ser armazenado em uma variável e assim podermos manipularmos

  const tableBody = document.getElementById("tableBody");

  var modalAlteraEditora = document.getElementById("altera_editora");
  var modalApagaEditora = document.getElementById("apaga_editora");
  var btnCancela = document.getElementsByClassName("cancelar")[0];
  var deleteInfo = document.getElementById("apaga_editora_info");

// Dados de livros com funções de editar e deletar
const editoras = [
  {
      nome: "Rocco",
      email: "rocco@gmail.com",
      telefone: "(85)988345672",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Arqueiro",
      email: "arqueiro@gmail.com",
      telefone: "(85)976453812",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Moderna",
      email: "moderna@gmail.com",
      telefone: "(85)987677809",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Galera",
      email: "galera@gmail.com",
      telefone: "(85)900456732",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Coerência",
      email: "coerencia@gmail.com",
      telefone: "(85)949765332",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Paralela",
      email: "paralela@gmail.com",
      telefone: "(85)908456732",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Novo Conceito",
      email: "novoconceito@gmail.com",
      telefone: "(85)988346578",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Seguinte",
      email: "seguinte@gmail.com",
      telefone: "(85)987786540",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Calíban",
      email: "caliban@gmail.com",
      telefone: "(85)912345321",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o usuário ${this.nome}?</h2>
        `
        }
  },
  {
      nome: "Arte Nova",
      email: "novaarte@gmail.com",
      telefone: "(85)940028922",
      delete: function () {
          modalApagaEditora.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaEditora.style.display = "none";
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

    data.forEach((editora, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${editora.nome}</td>
            <td>${editora.email}</td>
            <td>${editora.telefone}</td>
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
function searchEditoras() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    const filteredEditoras = editoras.filter(editora => 
      editora.nome.toLowerCase().includes(searchTerm) ||
      editora.email.toLowerCase().includes(searchTerm) ||
      editora.telefone.toLowerCase().includes(searchTerm)
    );

    renderTable(filteredEditoras); // Renderiza a tabela com os resultados filtrados
}

// Adiciona o evento de clique no botão de pesquisa
document.getElementById("searchButton").addEventListener("click", searchEditoras);

// Evento para as ações de editar e deletar
tableBody.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        const index = event.target.getAttribute("data-index");
        const action = event.target.getAttribute("data-action");

        if (action === "edit") {
          modalAlteraEditora.style.display = "block";
          var span = document.getElementsByClassName("fechar_altera_livro")[0];
          span.onclick = function () {
            modalAlteraEditora.style.display = "none";
          }
        } else if (action === "delete") {
          editoras[index].delete()
          
        }
    }
});

// Renderiza a tabela com os dados iniciais
renderTable(editoras);
});
