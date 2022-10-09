let botaoBuscar = document.getElementById("buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
    console.log("Buscando pacientes...");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    })

    xhr.send();

})