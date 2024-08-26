/*
  Modal que abre a tela para exclusão de um livro
*/

// Pegando o ID do modal
var modalApagaLivro = document.getElementById("apaga_editora");

// Pegando o ID para abrir o modal
// onde tiver id="myBtn" será o botão de abertura
var btnApagaLivro = document.getElementById("btn_apaga_editora");
btnApagaLivro.onclick = function () {
  modalApagaLivro.style.display = "block";
}

// Aqui estou capturando o botão de fechar (x)
// funcionalidade: Ao clicar no botão o modal será fechado.
var btnCancela = document.getElementsByClassName("cancelar")[0];
btnCancela.onclick = function() {
  modalApagaLivro.style.display = "none";
}

// Aqui é para fechar o model caso seja clicado fora dele.
window.onclick = function(event) {
  if (event.target == modalApagaLivro) {
    modalApagaLivro.style.display = "none";
  }
}

/*
  Modal que abre a tela para alteração de um livro
*/

// Pegando o ID do modal
var modalAlteraLivro = document.getElementById("altera_editora");

// Pegando o ID para abrir o modal
// onde tiver id="myBtn" será o botão de abertura
var btnApagaLivro = document.getElementById("btn_altera_editora");
btnApagaLivro.onclick = function () {
  modalAlteraLivro.style.display = "block";
}

// Aqui estou capturando o botão de fechar (x)
// funcionalidade: Ao clicar no botão o modal será fechado.
var span = document.getElementsByClassName("fechar_altera_editora")[0];
span.onclick = function() {
  modalAlteraLivro.style.display = "none";
}

// Aqui é para fechar o model caso seja clicado fora dele.
window.onclick = function(event) {
  if (event.target == modalAlteraLivro) {
    modalAlteraLivro.style.display = "none";
  }
}