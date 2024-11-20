function validar() {

  let resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8, resp9, resp10;

  let totalRespuestas = 0;
  resp1 = document.getElementById('op1').value;
  resp2 = document.getElementById('op2').value;
  resp3 = document.getElementById('op3').value;
  resp4 = document.getElementById('op4').value;
  resp5 = document.getElementById('op5').value;
  resp6 = document.getElementById('op6').value;
  resp7 = document.getElementById('op7').value;
  resp8 = document.getElementById('op8').value;
  resp9 = document.getElementById('op9').value;
  resp10 = document.getElementById('op10').value;

  let mensaje = "";

  let ventanaPopup;
  let mensajePopup;

  let botonCerrar = document.getElementsByClassName('boton');


    // Diccionario de respuestas correctas
    const respuestas = {
      1: "Azotar baldosa",
      2: "Chuspa",
      3: "Dar un borondo",
      4: "Destrampe",
      5: "Enchusparse",
      6: "Toposo",
      7: "Pegarle a los aliños",
      8: "Estoy asao",
      9: "Songo sorongo",
      10: "Tetiao"
    };

    if(resp1 == respuestas[1]){
      totalRespuestas = totalRespuestas + 10;
    }

    if(resp2 == respuestas[2]){
      totalRespuestas = totalRespuestas + 10;
    }

    if(resp3 == respuestas[3]){
      totalRespuestas = totalRespuestas + 10;
    }

    if(resp4 == respuestas[4]){
      totalRespuestas = totalRespuestas + 10;
    }

    
    if(resp5 == respuestas[5]){
      totalRespuestas = totalRespuestas + 10;
    }

    if(resp6 == respuestas[6]){
      totalRespuestas = totalRespuestas + 10;
    }

    if(resp7 == respuestas[7]){
      totalRespuestas = totalRespuestas + 10;
    }

    if(resp8 == respuestas[8]){
      totalRespuestas = totalRespuestas + 10;
    }

    if(resp9 == respuestas[9]){
      totalRespuestas = totalRespuestas + 10;
    }

    
    if(resp10 == respuestas[10]){
      totalRespuestas = totalRespuestas + 10;
    }

    ventanaPopup = document.getElementById ('popup');
    ventanaPopup.style.display ="block";

   if (totalRespuestas <= 40){ 
    document.getElementById("mensaje").innerHTML = 'Estás más perdido que aguja en chontaduro.' + ' ' +'Tu puntaje es' + ' ' +totalRespuestas; 
  } else if (totalRespuestas <= 80){
    document.getElementById("mensaje").innerHTML = 'Ya casi decís ¡ve, qué chimba!, como todo un caleño.' +  ' ' + 'Tu puntaje es'+ ' ' +totalRespuestas;
  } else if (totalRespuestas <= 100){
    document.getElementById("mensaje").innerHTML = 'Ya sos más caleño que la salsa en la sangre.'  +  ' ' + 'Tu puntaje es' + ' ' +totalRespuestas;
  }

}