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

  var modalAlteraAluguel = document.getElementById("altera_aluguel");
  var modalDevolveLivroAlugado = document.getElementById("devolve_aluguel");
  var btnCancela = document.getElementsByClassName("cancelar")[0];
  var devolucaoInfo = document.getElementById("devolucao_aluguel_info");

// Dados de livros com funções de editar e deletar
const livrosAlugados = [
  {
      nome: "Mª Luiza Soares",
      email: "marialuiza@gmail.com",
      telefone: "(85)988345672",
      livro: "A Lágrima de Vidro",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Joyce Luiza Gomes",
      email: "joyluiza@gmail.com",
      telefone: "(85)976453812",
      livro: "Os Mentirosos",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Mateus Sales Paes",
      email: "matheusal@gmail.com",
      telefone: "(85)987677809",
      livro: "A Rainha Vermelha",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Julia Silva Santos",
      email: "santosjuju@gmail.com",
      telefone: "(85)900456732",
      livro: "depois do Sim",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Victoria Aveyard",
      email: "aveyardvictoria@gmail.com",
      telefone: "(85)949765332",
      livro: "É Assim que Acaba",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Sandra Gomes Silva",
      email: "asandragomes34@gmail.com",
      telefone: "(85)908456732",
      livro: "A Cabana",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Carlos Levi Souza",
      email: "souzalevi678@gmail.com",
      telefone: "(85)988346578",
      livro: "É Assim Que Começa",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Ana Fernanda Alves",
      email: "anaalves@gmail.com",
      telefone: "(85)987786540",
      livro: "O Ano Em Que Te Conheci",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "João César Damasceno",
      email: "damascenocesar@gmail.com",
      telefone: "(85)912345321",
      livro: "Jogos Vorazes",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        <p>Alugado por: ${this.nome}</p>
        `
      }
  },
  {
      nome: "Leticia Magalhães Gomes",
      email: "letmagalhaes@gmail.com",
      telefone: "(85)940028922",
      livro: "Diário de um Banana",
      devolver: function () {
        modalDevolveLivroAlugado.style.display = "block";
        btnCancela.onclick = function () {
          modalDevolveLivroAlugado.style.display = "none";
        }
        devolucaoInfo.innerHTML = `
        <h2>Deseja devolver ${this.livro}?</h2>
        `
      }
  }
];



// Função para renderizar a tabela com base nos dados
function renderTable(data) {
    tableBody.innerHTML = ""; // Limpa a tabela antes de adicionar as novas linhas

    data.forEach((aluguel, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${aluguel.nome}</td>
            <td>${aluguel.email}</td>
            <td>${aluguel.telefone}</td>
            <td>${aluguel.livro}</td>
            <td class="actions">
              <button id="btn_altera_livro" class="edit-btn">
                <img data-index="${index}" data-action="edit" src="../img/global/editar_icon.png" alt="Editar" width="20" />
              </button>
              <button  id="btn_apaga_livro" class="delete-btn">
                 <img data-index="${index}" data-action="devolver" src="../img/global/devoluçao_icon.png" alt="Excluir" width="20">
              </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Função de pesquisa
function searchAlugueis() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    const filteredAlugueis = livrosAlugados.filter(aluguel => 
      aluguel.nome.toLowerCase().includes(searchTerm) ||
      aluguel.email.toLowerCase().includes(searchTerm) ||
      aluguel.telefone.toLowerCase().includes(searchTerm) ||
      aluguel.livro.toLowerCase().includes(searchTerm)
    );

    renderTable(filteredAlugueis); // Renderiza a tabela com os resultados filtrados
}

// Adiciona o evento de clique no botão de pesquisa
document.getElementById("searchButton").addEventListener("click", searchAlugueis);

// Evento para as ações de editar e deletar
tableBody.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        const index = event.target.getAttribute("data-index");
        const action = event.target.getAttribute("data-action");

        if (action === "edit") {
          modalAlteraAluguel.style.display = "block";
          var span = document.getElementsByClassName("fechar_altera_livro")[0];
          span.onclick = function () {
            modalAlteraAluguel.style.display = "none";
          }
        } else if (action === "devolver") {
          livrosAlugados[index].devolver()
          
        }
    }
});

// Renderiza a tabela com os dados iniciais
renderTable(livrosAlugados);
});
