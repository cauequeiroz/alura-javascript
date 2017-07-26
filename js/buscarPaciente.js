var url = "http://api-pacientes.herokuapp.com/pacientes";
var xhr = new XMLHttpRequest();
var btnBuscar = document.querySelector("#buscar-paciente");

btnBuscar.addEventListener("click", function() {
    xhr.open("GET", url);

    xhr.addEventListener("load", function(response) {
        if (response.target.status === 200) {
            var result = JSON.parse(response.target.responseText);
            
            result.forEach(function(paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            document.querySelector(".erros-requisicao").classList.remove("invisivel");
        }
    });

    xhr.send();
});

