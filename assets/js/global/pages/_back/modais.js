// Pegando o ID do modal
var modal = document.getElementById("myModal");

// Pegando o ID para abrir o modal
// onde tiver id="myBtn" será o botão de abertura
var btn = document.getElementById("myBtn");
btn.onclick = function() {
  modal.style.display = "block";
}

// Aqui estou capturando o botão de fechar (x)
// funcionalidade: Ao clicar no botão o modal será fechado.
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

// Aqui é para fechar o model caso seja clicado fora dele.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}