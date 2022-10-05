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
    tabela.appendChild(pacienteTr)
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

    // cria as colunas
    let nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    let pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    let alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    let gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    let imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    // preenche as colunas com os dados do paciente
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    // inclui as colunas na linha
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}