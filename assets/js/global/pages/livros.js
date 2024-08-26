/*
Este arquivo livros.js tem como principal objetivo reunir as funcionalidades que a pagina livro.html irá disponibilizar

1. A listagem dos livros de forma dinamica
  - O Array book gera essa listagem
  - A função renderTable() vai renderizar essa informação contida em books no HTML
  - A função searchBooks() é responsável por fazer a filtragem dos livros listados
2. A funcionalidade da abertura dos modais de editar e deletar um livro
  - 

*/

document.addEventListener("DOMContentLoaded", function() {

    // Aqui será capturado as informações do livro.html para ser armazenado em uma variável e assim podermos manipularmos

    const tableBody = document.getElementById("tableBody");

    var modalAlteraLivro = document.getElementById("altera_livro");
    var modalApagaLivro = document.getElementById("apaga_livro");
    var btnCancela = document.getElementsByClassName("cancelar")[0];
    var deleteInfo = document.getElementById("apaga_livro_info");

  // Dados de livros com funções de editar e deletar
  const books = [
    {
      nome: "A Hipótese do Amor", autor: "Aly Hazelwood", editora: "Arqueiro", disponiveis: 45, alugados: 35, lancamento: "13/04/2022",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "A Cabana", autor: "William P. Young", editora: "Arqueiro", disponiveis: 15, alugados: 55, lancamento: "06/04/2017",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "É Assim Que Acaba", autor: "Collen Hoover", editora: "Galera", disponiveis: 30, alugados: 22, lancamento: "29/02/2016",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "É Assim Que Começa", autor: "Collen Hoover", editora: "Galera", disponiveis: 15, alugados: 27, lancamento: "18/10/2022",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "A Lagrima de Vidro", autor: "Gabriela Rocha", editora: "Coerência", disponiveis: 17, alugados: 30, lancamento: "15/06/2020",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "Depois do Sim", autor: "Taylor Jenkins Reid", editora: "Paralela", disponiveis: 16, alugados: 32, lancamento: "15/06/2020",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "O Ano Em Que Te Conheci", autor: "Cecelia Ahern", editora: "Novo Conceito", disponiveis: 27, alugados: 32, lancamento: "09/10/2014",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "Os Mentirosos", autor: "E. Lockhart", editora: "Seguinte", disponiveis: 10, alugados: 30, lancamento: "13/05/2014",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "Rainha Vermelha", autor: "Victoria Aveyard", editora: "Seguinte", disponiveis: 27, alugados: 32, lancamento: "09/06/2014",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    },
    {
      nome: "Jogos Vorazes", autor: "Suzanne Collins", editora: "Rocco", disponiveis: 30, alugados: 32, lancamento: "09/06/2014",
      delete: function () {
        modalApagaLivro.style.display = "block";
        btnCancela.onclick = function () {
          modalApagaLivro.style.display = "none";
        }
        deleteInfo.innerHTML = `
        <h2>Deseja excluir o livro ${this.nome}</h2>
        `
      }
    }
  ];


  // Função para renderizar a tabela com base nos dados
  function renderTable(data) {
      tableBody.innerHTML = ""; // Limpa a tabela antes de adicionar as novas linhas

      data.forEach((book, index) => {
          const row = document.createElement("tr");

          row.innerHTML = `
              <td>${book.nome}</td>
              <td>${book.autor}</td>
              <td>${book.editora}</td>
              <td>${book.disponiveis}</td>
              <td>${book.alugados}</td>
              <td>${book.lancamento}</td>
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
  function searchBooks() {
      const searchTerm = document.getElementById("searchInput").value.toLowerCase();

      const filteredBooks = books.filter(book => 
          book.nome.toLowerCase().includes(searchTerm) ||
          book.autor.toLowerCase().includes(searchTerm) ||
          book.editora.toLowerCase().includes(searchTerm)
      );

      renderTable(filteredBooks); // Renderiza a tabela com os resultados filtrados
  }

  // Adiciona o evento de clique no botão de pesquisa
  document.getElementById("searchButton").addEventListener("click", searchBooks);

  // Evento para as ações de editar e deletar
  tableBody.addEventListener("click", function(event) {
      if (event.target.tagName === "IMG") {
          const index = event.target.getAttribute("data-index");
          const action = event.target.getAttribute("data-action");

          if (action === "edit") {
              //books[index].edit();
            modalAlteraLivro.style.display = "block";
            var span = document.getElementsByClassName("fechar_altera_livro")[0];
            span.onclick = function () {
              modalAlteraLivro.style.display = "none";
            }
          } else if (action === "delete") {
            books[index].delete()
            
          }
      }
  });

  // Renderiza a tabela com os dados iniciais
  renderTable(books);
});
