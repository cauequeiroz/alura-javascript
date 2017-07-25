var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {    
    var pacienteInfo = {
        peso: paciente.querySelector(".info-peso").textContent,
        altura: paciente.querySelector(".info-altura").textContent
    };

    var pesoValido = true;
    var alturaValida = true;

    if ( !validaPeso(pacienteInfo.peso) ) {
        pesoValido = false;
        paciente.classList.add("error");
        paciente.querySelector(".info-imc").textContent = "Peso inválido!";
    }

    if ( !validaAltura(pacienteInfo.altura) ) {
        alturaValida = false;
        paciente.classList.add("error");
        paciente.querySelector(".info-imc").textContent = "Altura inválida!";
    }

    if ( pesoValido && alturaValida ) {
        var imc = calculaImc(pacienteInfo.peso, pacienteInfo.altura);
        paciente.querySelector(".info-imc").textContent = imc;
    }
});

function validaPeso(peso) {
    return peso > 0 && peso < 1000;
}

function validaAltura(altura) {
    return altura > 0 && altura < 3;
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}