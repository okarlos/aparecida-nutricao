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
        tdImc.textContent = 'Peso inválido'
    }

    if (altura < 0 || altura > 3) {
        alturaValida = false;
        tdImc.textContent = 'Altura inválida!'
    }

    if (pesoValido && alturaValida) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
        console.log(`Peso = ${peso}, Altura = ${altura}, Imc = ${imc}`);
    }

}
