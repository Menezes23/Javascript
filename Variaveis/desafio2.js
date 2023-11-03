 const etanol = 3.99;
 const gasolina = 5.99;
 var combustivel = gasolina;
 const kmlitro = 10;
 const distancia = 100;
 const consumo = distancia/kmlitro ;
 if (combustivel === "etanol")
 {
const valorgasto = consumo*etanol;
console.log(valorgasto);
}
else{
    const valorgasto = consumo*gasolina;
console.log(valorgasto);
}
