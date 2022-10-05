let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    
    // extraindo informações do form
    let paciente = obtemInfoForm(form);

    // cria os elementos
    let pacienteTr = montaTr(paciente);

    // adiciona o paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
})

function obtemInfoForm(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente) {
    
    // cria uma linha
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // inclui as colunas na linha
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// função para criar as colunas (td)
function montaTd (dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}