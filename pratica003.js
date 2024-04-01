//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

numeroDigitado = prompt('Informe algum número:');

//estrutura de condição
if(numeroDigitado < 0)
    {
        alert('Esse número é negativo.');
    }
    else if(numeroDigitado > 0)
    {
        alert('Esse número é positivo.');
    }