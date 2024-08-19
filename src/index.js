// Inserte el código aquí}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());

    const timeString = hours +":"+ minutes +":" + seconds;
    document.getElementById('clock').textContent = timeString;
}

updateClock();// Actualiza el reloj inmediatamente

setInterval(updateClock, 1000);// Actualiza el reloj cada segundo

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


obtenerUsurios = async () => { //todos los asyn necesitan un await, un try y catch
    try { 
      const response = await fetch( "http://localhost:3000/users"); // obtenido los datos los local host 
      const data = await response.json(); //esta volviendo el localhost en un jason para poder ser leidos
      return data

     } catch (error) { 
      console.log(error);//que tipo de error atrapa
     }
  }


  console.log(obtenerUsurios)

  export{obtenerUsurios}