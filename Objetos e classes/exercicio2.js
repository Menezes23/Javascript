/* Crie uma classe para representar pessoas e calcular seu imc */
class Pessoa {
    idade;
    peso;
    altura;
    nome;
    constructor(idade,peso,altura,nome){
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.nome = nome;
}
calcularImc(){
    return this.peso /( this.altura * this.altura); 
}


}
const fernando = new Pessoa(34,70,1.75,'Fernando');

console.log(fernando);
console.log(fernando.calcularImc());
