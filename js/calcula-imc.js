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

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = 'Peso inválido!';
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = 'Altura inválida!';
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 400) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.0) {
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}