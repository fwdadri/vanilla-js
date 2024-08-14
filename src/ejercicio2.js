class Contador {//las clases siempre van con mayucula, es como el molde
//recordar ejemplo de tazas
  constructor(valor){//a veces no es necesario 
    this.valor = valor;
   // this.valor=0;    
  }

sumar(){
  this.valor++
  return this.valor
}
}

let instancia= new Contador(9);
let x = new Contador(8);

console.log(instancia.sumar())

console.log(x.sumar())

console.log(x.sumar() + (instancia.sumar()))//



//export { instancia }