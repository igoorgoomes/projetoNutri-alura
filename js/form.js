// incluindo no formulario
var botaoCadastrar = document.querySelector("#cadastro-paciente");

botaoCadastrar.addEventListener("click",function(event){
    event.preventDefault();
    // declarando as variáveis form para indicar a inclusão de novos pacientes a tabela
    var form = document.querySelector("#form-adiciona");

    var paciente = NovoPacienteForm(form);

    var pacienteTr = criarTr(paciente);

    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    
});

// funçaõ para cadastro de novo paciente
function NovoPacienteForm (form){
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criarTd (dado, classe) {

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function criarTr (paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}   