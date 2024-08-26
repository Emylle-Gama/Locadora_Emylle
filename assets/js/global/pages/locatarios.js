/*
Este arquivo livros.js tem como principal objetivo reunir as funcionalidades que a pagina livro.html irá disponibilizar

1. A listagem dos livros de forma dinamica
  - O Array book gera essa listagem
  - A função renderTable() vai renderizar essa informação contida em Locatarios no HTML
  - A função searchLocatarios() é responsável por fazer a filtragem dos livros listados
2. A funcionalidade da abertura dos modais de editar e deletar um livro
  - 

*/

document.addEventListener("DOMContentLoaded", function() {

    // Aqui será capturado as informações do livro.html para ser armazenado em uma variável e assim podermos manipularmos

    const tableBody = document.getElementById("tableBody");

    var modalAlteraLocatario = document.getElementById("altera_locatario");
    var modalApagaLocatarios = document.getElementById("apaga_locatario");
    var btnCancela = document.getElementsByClassName("cancelar")[0];
    var deleteInfo = document.getElementById("apaga_locatario_info");

  // Dados de livros com funções de editar e deletar
  const locatarios = [
    {
      nome: "Mª Luiza Soares",
      email: "marialuiza@gmail.com",
      telefone: "(85)988345672",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "Joyce Luiza Gomes",
      email: "joyluiza@gmail.com",
      telefone: "(85)976453812",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "Mateus Sales Paes",
      email: "matheusal@gmail.com",
      telefone: "(85)987677809",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "Julia Silva Santos",
      email: "santosjuju@gmail.com",
      telefone: "(85)900456732",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "Victoria Aveyard",
      email: "aveyardvictoria@gmail.com",
      telefone: "(85)949765332",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      },
    },
    {
      nome: "Sandra Gomes Silva",
      email: "asandragomes34@gmail.com",
      telefone: "(85)908456732",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "Carlos Levi Souza",
      email: "souzalevi678@gmail.com",
      telefone: "(85)988346578",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "Ana Fernanda Alves",
      email: "anaalves@gmail.com",
      telefone: "(85)987786540",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "João César Damasceno",
      email: "damascenocesar@gmail.com",
      telefone: "(85)912345321",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    },
    {
      nome: "Leticia Magalhães Gomes",
      email: "letmagalhaes@gmail.com",
      telefone: "(85)940028922",
      actions: {
        delete: function () {
          modalApagaLocatarios.style.display = "block";
          btnCancela.onclick = function () {
            modalApagaLocatarios.style.display = "none";
          }
          deleteInfo.innerHTML = `
        <h2>Deseja excluir o locatario ${this.nome}?</h2>
        `
        }
      }
    }
  ];


  // Função para renderizar a tabela com base nos dados
  function renderTable(data) {
      tableBody.innerHTML = ""; // Limpa a tabela antes de adicionar as novas linhas

      data.forEach((locatario, index) => {
          const row = document.createElement("tr");

          row.innerHTML = `
              <td>${locatario.nome}</td>
              <td>${locatario.email}</td>
              <td>${locatario.telefone}</td>
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
  function searchLocatarios() {
      const searchTerm = document.getElementById("searchInput").value.toLowerCase();

      const filteredLocatarios = locatarios.filter(locatario => 
        locatario.nome.toLowerCase().includes(searchTerm) ||
        locatario.email.toLowerCase().includes(searchTerm) ||
        locatario.telefone.toLowerCase().includes(searchTerm)
      );

      renderTable(filteredLocatarios); // Renderiza a tabela com os resultados filtrados
  }

  // Adiciona o evento de clique no botão de pesquisa
  document.getElementById("searchButton").addEventListener("click", searchLocatarios);

  // Evento para as ações de editar e deletar
  tableBody.addEventListener("click", function(event) {
      if (event.target.tagName === "IMG") {
          const index = event.target.getAttribute("data-index");
          const action = event.target.getAttribute("data-action");

          if (action === "edit") {
              //Locatarios[index].edit();
            modalAlteraLocatario.style.display = "block";
            var span = document.getElementsByClassName("fechar_altera_livro")[0];
            span.onclick = function () {
              modalAlteraLocatario.style.display = "none";
            }
          } else if (action === "delete") {
            locatarios[index].actions.delete()
            
          }
      }
  });

  // Renderiza a tabela com os dados iniciais
  renderTable(locatarios);
});
