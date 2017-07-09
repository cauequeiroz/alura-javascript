// Change tittle
document.querySelector('.titulo').textContent = "Caue Queiroz";

// Calculate IMC
var paciente = document.querySelector('#primeiro-paciente');
var elemImc  = paciente.querySelector('.info-imc');

var altura = paciente.querySelector('.info-altura').textContent;
var peso   = paciente.querySelector('.info-peso').textContent;

var pesoValido = true;
var alturaValida = true;

if ( peso <= 0 || peso >= 1000 ) {
    elemImc.textContent = "Peso inválido!";
    pesoValido = false;
}

if ( altura <= 0 || altura >= 3 ) {
    elemImc.textContent = "Altura inválida!";
    alturaValida = false;
}

if ( pesoValido && alturaValida ) {
    var imc = peso / (altura * altura);
    elemImc.textContent = imc;
}
