var inputFiltrar = document.querySelector("#filtrar-paciente");

inputFiltrar.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if ( this.value !== "" ) {
        for ( var i=0; i<pacientes.length; i++ ) {
            var paciente = pacientes[i];

            var nome = paciente.querySelector(".info-nome").textContent;
            var exp  = new RegExp(this.value, "i");

            if ( !exp.test(nome) ) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for ( var i=0; i<pacientes.length; i++ ) {
            var paciente = pacientes[i];

            paciente.classList.remove("invisivel");
        }
    }
});