


console.log(pessoa2)




let carro = new Object();
carro.nome = "Corola";
carro.ano = 2020;
console.log(carro);

class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let p1 = new Pessoa("Joao, 25");
let p2 = new Pessoa("Ana", 24);

console.log(p1);
console.log(p2);

let pessoas = []