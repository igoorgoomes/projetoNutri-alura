// incluindo no formulario
var botaoCadastrar = document.querySelector("#cadastro-paciente");

botaoCadastrar.addEventListener("click",function(event){
    event.preventDefault();
    // declarando as variáveis form para indicar a inclusão de novos pacientes a tabela
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
   
    // para pegar os valores informados dentro dos inputs usamos o.value pra buscar esse valor

    var CadPacienteTr = document.createElement("tr");

    var CadnomeTd = document.createElement("td");
    var CadpesoTd = document.createElement("td");
    var CadAlturaTd = document.createElement("td");
    var CadGorduraTd = document.createElement("td");
    var CadImcTd = document.createElement("td");

    CadnomeTd.textContent = nome;
    CadpesoTd.textContent = peso;
    CadAlturaTd.textContent = altura;
    CadGorduraTd.textContent = gordura;
    CadImcTd.textContent = calculaImc(peso,altura);
    

    CadPacienteTr.appendChild(CadnomeTd);
    CadPacienteTr.appendChild(CadpesoTd);
    CadPacienteTr.appendChild(CadAlturaTd);
    CadPacienteTr.appendChild(CadGorduraTd);
    CadPacienteTr.appendChild(CadImcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(CadPacienteTr);
    
});

function NovoPacienteForm (form){
    var paciente = {
        nome:form.nome.value;
        peso:form.peso.value;
        altura:form.altura.value;
        gordura:form.gordura.valuer;
        imc:calculaImc(form.peso.value, form.altura.value);
    }

    return paciente;
}