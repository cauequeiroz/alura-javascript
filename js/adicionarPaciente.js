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
    
    apagarErrosAnteriores();

    var erros = validaPaciente(pacienteInfo);

    if ( erros.length > 0 ) {
        mostraErros(erros);
        return;
    }

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

function validaPaciente(paciente) {
    var erros = [];

    if ( paciente.peso.length > 0 && !validaPeso(paciente.peso) ) {
        erros.push("Peso inválido!");
    }
    if ( paciente.altura.length > 0 && !validaAltura(paciente.altura) ) {
        erros.push("Altura inválida!");
    }
    
    if ( paciente.nome.length === 0 ) { erros.push("Preencha um nome."); }
    if ( paciente.peso.length === 0 ) { erros.push("Preencha um peso."); }
    if ( paciente.altura.length === 0 ) { erros.push("Preencha a altura."); }
    if ( paciente.gordura.length === 0 ) { erros.push("Preencha uma gordura."); }
    
    return erros;
}

function mostraErros(erros) {
    var listaErros = document.querySelector(".lista-erros");

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        listaErros.appendChild(li);
    });
}

function apagarErrosAnteriores() {
    document.querySelector(".lista-erros").innerHTML = "";
}