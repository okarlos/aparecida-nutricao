let campoFiltro = document.querySelector("#filtro-nome");
    
    campoFiltro.addEventListener("input", function() {
        console.log(this.value);

        let pacientes = document.querySelectorAll(".paciente");

        if (this.value.length > 0) {

            for (let i = 0; i < pacientes.length; i++) {
                const paciente = pacientes[i];
                let tdNome = paciente.querySelector(".info-nome");
                let nome = tdNome.textContent;

                let expressao = new RegExp(this.value, "i");

                if (!expressao.test(nome)) {
                    paciente.classList.add("invisible");
                } else {
                    paciente.classList.remove("invisible");
                }
            }
        } else {
            for (let i = 0; i < pacientes.length; i++) {
                const paciente = pacientes[i];
                paciente.classList.remove("invisible");
            }
        }
    })
   
