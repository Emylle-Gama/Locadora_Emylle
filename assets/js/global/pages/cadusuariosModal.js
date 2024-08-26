/*
  Modal que abre a tela de sucesso no cadastro
*/

// Pegando o ID do modal
var modalCadastroSucesso = document.getElementById("cadastro_sucesso");

// Pegando o ID para abrir o modal
// onde tiver id="myBtn" será o botão de abertura
var btnCadastroSucesso = document.getElementById("btn_cadastro_sucesso");
btnCadastroSucesso.onclick = function () {
  modalCadastroSucesso.style.display = "block";
}

// Aqui estou capturando o botão de fechar (x)
// funcionalidade: Ao clicar no botão o modal será fechado.
var btnFechar = document.getElementsByClassName("close")[0];
btnFechar.onclick = function() {
  modalCadastroSucesso.style.display = "none";
}

// Aqui é para fechar o model caso seja clicado fora dele.
window.onclick = function(event) {
  if (event.target == modalCadastroSucesso) {
    modalCadastroSucesso.style.display = "none";
  }
}