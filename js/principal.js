
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

// declarando as variáveis 
var pacientes = document.querySelectorAll(".paciente");

// criando uma estrutura de repetição para que a ação calcular imc passe por todos os pacientes
for(var i = 0; i < pacientes.length;i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    // buscando o contéudo dentro das tags
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    // criando variável que irá fazer o calculo do IMC
    var tdImc = paciente.querySelector(".info-imc");

    // verificando se os dados da tabela estão corretos
    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso inválido!";
        // a variavel agora é falsa
        pesoValido = false;
        // estilizando nossa validação
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3){
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida){
        var imc = peso / (altura*altura);
        // apresentando resultado da conta na tabela
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Peso e/ou Altura estão inválidos!"
    }
}

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

    var CadnomeTr = document.createElement("td");
    var CadpesoTr = document.createElement("td");
    var CadAlturaTr = document.createElement("td");
    var CadGorduraTr = document.createElement("td");
    var CadImcTr = document.createElement("td");

    CadnomeTr.textContent = nome;
    CadpesoTr.textContent = peso;
    CadAlturaTr.textContent = altura;
    CadGorduraTr.textContent = gordura;

    CadPacienteTr.appendChild(CadnomeTr);
    CadPacienteTr.appendChild(CadpesoTr);
    CadPacienteTr.appendChild(CadAlturaTr);
    CadPacienteTr.appendChild(CadGorduraTr);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(CadPacienteTr);
    
});



