let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    
    // extraindo informações do form
    let paciente = obtemInfoForm(form);

    // cria os elementos
    let pacienteTr = montaTr(paciente);

    let erro = validaPaciente(paciente);
    if (erro.length > 0){
        let mensagemErro = document.querySelector(".erro");
        mensagemErro.textContent = erro; //inclui mensagem no span de erro

        let campoPeso = document.querySelector("#peso");
        campoPeso.classList.add("campo-invalido");

        return; //encerra função, sem incluir o paciente na tabela
    }

    // adiciona o paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset(); //limpa o form
    document.querySelector(".erro").textContent = ""; //limpa mensagem de erro do span
    document.querySelector("#peso").classList.remove("campo-invalido"); //tira o erro do campo
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

function validaPaciente(paciente) {
    if(validaPeso(paciente.peso)){
        return "";
    }else{
        return "O peso informado é inválido!";
    }
}