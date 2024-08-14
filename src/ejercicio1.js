

let contador = {
  valor: 0,
  
  siguiente: function () {
    this.valor++
    return this.valor
  },
};

export { contador }