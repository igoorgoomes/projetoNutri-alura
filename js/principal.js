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

    CadPacienteTr.appendChild(CadnomeTd);
    CadPacienteTr.appendChild(CadpesoTd);
    CadPacienteTr.appendChild(CadAlturaTd);
    CadPacienteTr.appendChild(CadGorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(CadPacienteTr);
    
});



