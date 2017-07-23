document.querySelector('.titulo').textContent = "Caue Queiroz";

var pacientes = document.querySelectorAll('.paciente');

for ( var i=0; i<pacientes.length; i++ ) {
    var paciente = pacientes[i];

    var elemImc  = paciente.querySelector('.info-imc');

    var altura = paciente.querySelector('.info-altura').textContent;
    var peso   = paciente.querySelector('.info-peso').textContent;

    var pesoValido = true;
    var alturaValida = true;

    if ( peso <= 0 || peso >= 1000 ) {
        elemImc.textContent = "Peso inválido!";
        pesoValido = false;

        paciente.classList.add('paciente-invalido');
    }

    if ( altura <= 0 || altura >= 3 ) {
        elemImc.textContent = "Altura inválida!";
        alturaValida = false;

        paciente.classList.add('paciente-invalido');
    }

    if ( pesoValido && alturaValida ) {
        elemImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}