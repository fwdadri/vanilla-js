// Inserte el código aquí

class Calculadora {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sumar() {
        return this.x + this.y;
    }

    restar() {
        return this.x - this.y;
    }

    multiplicar() {
        return this.x * this.y;
    }

    dividir() {
        if (this.y === 0) {
            throw new Error("es imposible mamawebo.");
        }
        return this.x / this.y;
    }
}

export {Calculadora};