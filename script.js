//EXEMPLO: //Tabuada de numeros pares exemplo
function gerarTabuadaPar() {
    // Pega o valor do input
    const numero = parseInt(document.getElementById("inputNumero").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoTabuada");

    // Verifica se o número é válido
    if (isNaN(numero)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    // Gera a tabuada apenas para os multiplicadores pares
    let tabuada = `Tabuada do ${numero} (somente multiplicadores pares):\n`;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) { // Apenas números pares
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
    }

    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = tabuada;
}

//Calculador de Media exercicio 1
    function calcularMedia() {
        // Pega os valores das notas
        const nota1 = parseInt(document.getElementById('nota1').value);
        const nota2 = parseInt(document.getElementById('nota2').value);
        const nota3 = parseInt(document.getElementById('nota3').value);
        
        // Verifica se todas as notas são válidas
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Por favor, preencha todas as notas corretamente.");
            return;
        }

        // Calcula a média
        const media = (nota1 + nota2 + nota3) / 3;

        // Exibe o resultado
        document.getElementById('resultadoMedia').innerText = `A média das notas é: ${media.toFixed(2)}`;
    }
// verificador de numeros pares ou ímpar exercicio 2
function verificarParImpar() {

    const numero = parseInt(document.getElementById("numParImpar").value);

    const resultadoElemento = document.getElementById("resultadoParImpar");

    if (isNaN(numero)) {
        resultadoElemento.innerText = "Insira um numero.";
        return;
    }

    let imparoupar = `O Numero ${numero} é :\n`;
    if(numero % 2 === 0) {
        imparoupar+= `par`;
    } else {
        imparoupar += `impar`;
    }
    resultadoElemento.innerText= imparoupar; 
}
//exercicio 3
function somarPares() {
    // Captura o valor inserido no campo de input
    const numero = parseInt(document.getElementById("numSomaPares").value);
    const resultadoElemento = document.getElementById("resultadoSomaPares");

    // Verifica se o valor inserido é um número válido
    if (isNaN(numero) || numero <= 0) {
        resultadoElemento.innerText = "Digite um número positivo válido.";
        return;
    }

    let somatoria = 0;

    // Loop para somar os números pares até o número informado
    for (let i = 2; i <= numero; i += 2) { // Começa de 2 e aumenta de 2 em 2
        somatoria += i;
    }

    // Exibe o resultado da soma
    resultadoElemento.innerText = `A soma dos números pares até ${numero} é: ${somatoria}`;
}

// Esse evento é acionado quando o documento HTML foi completamente carregado e analisado, ou seja, o DOM (Document Object Model) está pronto para ser manipulado.
// A função passada como argumento será executada assim que o evento DOMContentLoaded for disparado. Isso é útil para garantir que o código seja executado apenas depois que os elementos da página estejam disponíveis.
document.addEventListener("DOMContentLoaded", () => {
    const botaoTabuada = document.getElementById("btnTabuada");
    botaoTabuada.addEventListener("mouseover", gerarTabuadaPar);
});

//exercicio 4

function validarLogin() {
    // Captura os valores dos campos de usuário e senha
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const resultadoLogin = document.getElementById("resultadoLogin");

    // Usuário e senha corretos
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    // Limpa a mensagem anterior
    resultadoLogin.innerText = "";

    // Verifica se o usuário e a senha estão corretos
    if (username === usuarioCorreto && password === senhaCorreta) {
        resultadoLogin.style.color = "green";
        resultadoLogin.innerText = "Login realizado com sucesso!";
    } else {
        resultadoLogin.style.color = "red";
        resultadoLogin.innerText = "Usuário ou senha inválidos.";
    }
}
//exercicio 5 calculadora fatorial

function calcularFatorial() {
    // Captura o valor do input
    const numero = parseInt(document.getElementById("numFatorial").value);
    const resultadoElemento = document.getElementById("resultadoFatorial");

    // Verifica se o número é válido (não é NaN e é um número inteiro maior ou igual a 0)
    if (isNaN(numero) || numero < 0) {
        resultadoElemento.innerText = "Por favor, insira um número inteiro positivo.";
        return;
    }

    // Inicializa o fatorial como 1
    let fatorial = 1;

    // Calcula o fatorial
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    // Exibe o resultado
    resultadoElemento.innerText = `O fatorial de ${numero} é ${fatorial}.`;
}

    

     


   


// função utilitaria
function bloquearCopia() {
    // Bloqueia o clique direito
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Cópia desabilitada no site.");
    });

    // Bloqueia a seleção de texto
    document.addEventListener("selectstart", (e) => {
        e.preventDefault();
        alert("Seleção de texto desabilitada.");
    });

    // Bloqueia atalhos de teclado (Ctrl+C, Ctrl+X, Ctrl+U)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "u")) {
            e.preventDefault();
            alert("Este atalho está desabilitado no site.");
        }
    });
}




