var tabela = document.getElementById("tabela");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.remove();
})