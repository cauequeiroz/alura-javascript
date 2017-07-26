var tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("dblclick", function(event) {
    var paciente = event.target.parentNode;

    paciente.classList.add("fadeOut");

    setTimeout(function() { paciente.remove(); }, 500);
});