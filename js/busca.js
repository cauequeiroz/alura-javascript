var botaoBusca = document.querySelector("#busca-paciente");
botaoBusca.addEventListener("click", function() {
    
    var url = "http://api-pacientes.herokuapp.com/pacientes";
    var xhr = new XMLHttpRequest();
    var erroAjax = document.querySelector("#erro-ajax");

    xhr.open("GET" , url);
    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;   

        if ( xhr.status === 200 ) {
            erroAjax.classList.add("invisivel");

            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status, resposta);
            erroAjax.classList.remove("invisivel");
        }

        
    });
    xhr.send();

});