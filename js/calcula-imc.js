const h1 = document.querySelector('#title');
h1.textContent = 'Aparecida Manipulação';

const paciente = document.querySelector('#primeiro-paciente');
const listPacientes = document.querySelectorAll('.paciente');

for (let i = 0 ; i < listPacientes.length ; i++) {
    
    let paciente = listPacientes[i];

    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');

    let pesoValido = true;
    let alturaValida = true;

    if (peso < 0 || peso > 1000) {
        pesoValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add("paciente-invalido");
    }

    if (altura < 0 || altura > 3) {
        alturaValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr)

    nome = null;
    peso = '';
    altura = '';
    gordura = '';

})