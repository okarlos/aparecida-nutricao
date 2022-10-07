let botaoAdicionar = document.getElementById("adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.getElementById("form-adiciona");
    
    // extraindo informações do form
    let paciente = obtemInfoForm(form);

    // cria os elementos
    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);

    if (erros.length > 0){
        exibeMensagensErro(erros);
        return; //encerra função, sem incluir o paciente na tabela
    }

    // adiciona o paciente na tabela
    let tabela = document.getElementById("tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset(); //limpa o form
    let ul = document.getElementById("mensagens-erro");
    ul.innerHTML = ""; //apaga das tags "li" que mostram os erros
})

function exibeMensagensErro(erros) {
    var ul = document.getElementById("mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("mensagem-erro");
        ul.appendChild(li);
        console.log(erro);
    })
}

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

    let erros = [];

    if(paciente.nome.length == 0) {
        erros.push("Informe um nome válido!");
    }

    if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
        erros.push("Informe um peso válido!");
    }

    if(!validaAltura(paciente.altura) || paciente.altura.length == 0){
        erros.push("Informe uma altura válida!");
    }

    if(paciente.gordura.length == 0) {
        erros.push("Informe um percentual de gordura válido!");
    }

    return erros;
}