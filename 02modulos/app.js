//importar modulo somar e multiplicar
var calculos = require('./calculos');

// obter a função para multiplicar
var multiplicar = calculos.multiplicar;

//realizar um calculo de multiplicação
console.log(multiplicar(5, 6));

// realizar um calculo de soma
let somar = calculos.somar;
console.log(somar(10, 30));