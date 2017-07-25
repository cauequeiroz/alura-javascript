var form = document.querySelector("#form-adiciona");
var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var pacienteInfo = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    adicionarPacienteNaTabela(pacienteInfo);

    form.reset();
});

function adicionarPacienteNaTabela(paciente) {
    var html = gerarHtml(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(html);
}

function gerarHtml(paciente) {
    var tr = document.createElement("tr");
    tr.classList.add("paciente");

    var tdList = [
        gerarTd(paciente.nome, "info-nome"),
        gerarTd(paciente.peso, "info-peso"),
        gerarTd(paciente.altura, "info-altura"),
        gerarTd(paciente.gordura, "info-gordura"),
        gerarTd(paciente.imc, "info-imc")
    ];

    for ( var i=0; i<tdList.length; i++ ) {
        tr.appendChild(tdList[i]);
    }

    return tr;
}

function gerarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}