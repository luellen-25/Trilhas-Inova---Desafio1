// 1- Questão
// Atribuindo o nome á variável
let nome = "Luellen";
console.log(nome)

// 2- Questão
// Criando as variáveis
let idade = 25;
let altura = 1.75;

// Exibindo os valores
console.log("idade:", idade);
console.log("altura:", altura);

// 3- Questão
let preco = 50;
let desconto = 0.2;
let precoComDesconto = preco -(preco * desconto);
console.log("preço com desconto:", precoComDesconto);

// 4- Questão
let temperatura = 30;
if (temperatura > 25) {

    console.log("Está muito quente!");
} else {
    console.log("Está muito fresco!");
}

// 5- Questão
// Atribua o valor da variável

let idade = 21;
if (idade >= 18) {
    console.log("Você é maior de idade");

} else {
    console.log("Você é menor de idade");
}

// 6- Questão
// Atribua o valor desejado
let nota = 9;
if (nota >= 7){
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 7- Questão
//Atribuindo 10 á variável numero1
let numero1 = 10;
//Atribuindo 20 á variável numero2
let numero2 = 20;
if (numero1 === numero2) {
    // Mensagem se os números forem iguais
    console.log ("Os números são iguas") ;
} else {
    // Mensagem se os números forem diferentes
    console.log ("Os números são diferentes");
}



// 8- Questão
// Criando uma variável nome
let nome = "Luellen";
// Criando uma variével idade
let idade = "17";
// Exibindo a mensagem
console.log ("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");

// 9- Questão
// Loop que imprime os números de 1 a 10 na tela
for (let i = 1; <= 10; i++){
    // Imprima os números de 1 a 10
    console.log(i);
}


// 10- Questão
// Loop que pede ao usúario para digitar um número até que ele digite
let numero;
// Declare a variável 'número'
do{
    // Solicitar ao usúario que digite um número
    numero = prompt,("Digite um número");
    // Continuar pedindo até que ele digite o número 5
} while (numero !== '5');


// 11-Questão
// Loop que imprima a tabuada do número 7, de 1 a 10
for (let i = i=1; i <= 10; i++){
    // Imprime os pares de 0 a 20
    console.log(7* i);


}


// 12-Questão
// Loop que exibe todos os números pares de 0 a 20
for (let i = 0; i <= 20, i += 2) {
    // Imprima os números pares de 0 a 20
    console.log(i);
}
 
// 13-Questão
// Função para calcular a área de um circulo
function calcularAreaCirculo(raio) {
    // Receber o raio e retorna a área do circulo
    return Math.PI * raio * raio;
}
// Exemplo de uso da função
// Calcula a área de um circulo com raio de 5
let area = calcularAreaCirculo(5);
// Exibe a área calculada
console.log("A área do circulo com raio de 5 é: " + area);

// 14- Questão
// Programa simples que calcula a soma de dois números , com comentários
// Função que soma dois números
function somar(a, b) {
    // Retorna a soma dos números
    return a + b;
}
// Definindo os números a serem somados
// Primeiro número
let num1 = 10;
// Segundo número
let num2 = 20;
// Chama a função e armazena o resultado
// Exiba o resultado
console.log("A soma de " + num1 + "e" + num2 + "é:" + resultado);


// 15- Questão
// Refatoração do codigo para melhor legibilidade
function somaValores(valor1,valor2){
    // Função que retorna a soma de valor1 e valor 2
    return valor1 + valor2;
}
// Atribuindo valores
// Atribui 10 á variável x  
const x = 10;
// Atribui 20 á variável y
const y = 20;
// Chamando a função para somar x e y
// Calcular a soma de x e y
const z = somaValores(x, y);
// Exibe o resultado da soma
console.log("A soma de " + x + "e" + y + "é:" +z)



