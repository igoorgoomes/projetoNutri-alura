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
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    // o '!' é um operador de negação, ele fica responsável por inverter as condições da função
    if (!pesoValido){
        tdImc.textContent = "Peso inválido!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
        continue;
    }

    if (!alturaValida){
        tdImc.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
        continue;
    }

    if (pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Peso e/ou Altura estão inválidos!"
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso (peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura (altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else {
        return false;
    }
}