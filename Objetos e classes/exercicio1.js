/*
1- Crie uma classe para representar o gasto de gasolina de uma carro
*/
class Carro {
    marca; 
    cor; 
    GastoMedioPorKm;
    constructor (marca, cor, GastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.GastoMedioPorKm = GastoMedioPorKm;
     }
     calculargastopercurso(distancia, precocombustivel){
        return distancia * this.GastoMedioPorKm * precocombustivel;

     }

}
const uno = new Carro('fiat','azul',1/12);

console.log(uno.calculargastopercurso(63, 5.99));