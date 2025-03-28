// Aluna: Anne Izabelle. Curso: Ciência da Computação.

let listaNomes = ["Anne", "Izabelle", "Thiago", "Amora", "Elvis"];

console.log("Terceiro nome:", listaNomes[2]);

listaNomes.push("Fabio");
listaNomes.unshift("Gabriela");
console.log("Lista atualizada:", listaNomes);

listaNomes.pop();
console.log("Lista após remoção:", listaNomes);

let numerosOriginais = [2, 4, 6, 8];
let numerosDobrados = numerosOriginais.map(function (numero) {
    return numero * 2;
});
console.log("Valores dobrados:", numerosDobrados);

let listaNumeros = [1, 3, 5, 7, 9];
let filtrados = listaNumeros.filter(function (valor) {
    return valor > 5;
});
console.log("Números acima de 5:", filtrados);