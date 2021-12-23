
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
    console.log("Oi, cliquei no botão!");
});



