let botaoBuscar = document.getElementById("buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
    console.log("Buscando pacientes...");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        
        if(xhr.status == 200) {
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                incluiPacienteNaTabela(paciente);
            })
            console.log("Pacientes carregados e adicionados na tabela!")
        }else {
            console.log(`Erro - ${xhr.status} - ${xhr.responseText}`)
        }
    })

    xhr.send();

})