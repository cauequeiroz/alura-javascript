document.querySelector('.titulo').textContent = "Caue Queiroz";

var pacientes = document.querySelectorAll('.paciente');

for ( var i=0; i<pacientes.length; i++ ) {
    var paciente = pacientes[i];

    var elemImc  = paciente.querySelector('.info-imc');

    var altura = paciente.querySelector('.info-altura').textContent;
    var peso   = paciente.querySelector('.info-peso').textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if ( !pesoValido ) {
        elemImc.textContent = "Peso inválido!";
        pesoValido = false;

        paciente.classList.add('paciente-invalido');
    }

    if ( !alturaValida ) {
        elemImc.textContent = "Altura inválida!";
        alturaValida = false;

        paciente.classList.add('paciente-invalido');
    }

    if ( pesoValido && alturaValida ) {
        elemImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso) {
    if ( peso >= 0 && peso <= 1000 ) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if ( altura >= 0 && altura <= 3.0 ) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}