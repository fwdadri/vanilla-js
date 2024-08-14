// Inserte el código aquí
arreglo = [1,2,3,4,5]

function clonarArreglo() {
    let nuevoArreglo = arreglo
    nuevoArreglo.push(6) 
    return nuevoArreglo
}
console.log (clonarArreglo())


array = [1,2,3,4,5]

function duplicarArray(array) {
    let nuevoArrray =[...array]
    nuevoArrray.push(7)
    return nuevoArrray
}
console.log(duplicarArray([1,2,3,4,5]))



class objeto{
    constructor(tamaño, forma, color){
        this.tamaño=tamaño;//como definir variables
        this.forma=forma;
        this.color=color;
    }
}
let palillo = new objeto("alto", "cuadrada","rosa")

function clonarObjeto() {
    nuevoObjeto = {...palillo}
    return nuevoObjeto
}
console.log (clonarObjeto())



//es como un ciclo while
let numeros = [1,2,3,4,5,6]
let sumar =(...lista)=>{
    let total= lista.reduce((acumulador,numero)=> acumulador+numero,0)
    return total;
}
console.log(sumar(...numeros))



class Name{
    constructor(nombre){
        this.nombre=nombre;
    }
   saludar() {
      return `hola ${this.nombre}`
   }
}
const saludando= new Name (`adri`)
console.log(saludando.saludar())

// NO MODIFICAR
// export { clonarArreglo, clonarObjeto, sumar, saludar };