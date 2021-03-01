const calcular = document.getElementById("calcular");
const valorAltura = document.getElementById("valorAltura");
const valorPeso = document.getElementById("valorPeso");

function altura (value){
    valorAltura.innerHTML = value;
}

function peso (value){
    valorPeso.innerHTML = value;

}


function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
    
    if (nome !== '' && altura !== '' && peso !== '' ) {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC <= 18.5){
            classificacao = 'Abaixo Do Peso.';
        }
        else if(valorIMC <= 24.9){
            classificacao = 'com o Peso Ideal. Parabéns!';
        }
        else if(valorIMC <= 29.9){
            classificacao = 'Levemente Acima Do Peso.';
        }
        else if(valorIMC <= 34.9){
            classificacao = 'com Obesidade Grau I.';
        }
        else if(valorIMC <= 39.9){
            classificacao = 'com Obesidade Grau II.';
        }
        else{
            classificacao = 'Obesidade Grau III. Cuidado!';
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    }
    else{
        resultado.textContent = 'Preencha Todos Os Campos!';
    }

} 

calcular.addEventListener("click", imc);
