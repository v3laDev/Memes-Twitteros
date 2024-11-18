/*    
      NO TOQUES NADA DE ACA SI NO SABES JAVASCRIPT
      PARA AGREGAR MEMES TIENES QUE HACER LO SIGUIENTE:
      Agregar tu meme / imagen a la carpeta assets
      luego abrir este archivo, y en la ultima linea, agregar una coma ","
      luego escribir lo siguiente:
      chrome.runtime.getURL("assets/<nombre de tu archivo.formato>")
      Claramente dentro de la constancia "images".
      Desarrollado por homicidiomental
      https://twitter.com/homicidiomental
*/
const images = [
  chrome.runtime.getURL("assets/1.jpg"),
  chrome.runtime.getURL("assets/2.jpg"),
  chrome.runtime.getURL("assets/3.jpg"),
  chrome.runtime.getURL("assets/4.jpg"),
  chrome.runtime.getURL("assets/5.jpg"),
  chrome.runtime.getURL("assets/6.jpg"),
  chrome.runtime.getURL("assets/7.png"),
  chrome.runtime.getURL("assets/8.png"),
  chrome.runtime.getURL("assets/9.jpg"),
  chrome.runtime.getURL("assets/10.jpg"),
  chrome.runtime.getURL("assets/11.jpg"),
  chrome.runtime.getURL("assets/12.jpg"),
  chrome.runtime.getURL("assets/13.jpg"),
  chrome.runtime.getURL("assets/14.jpg"),
  chrome.runtime.getURL("assets/15.jpg"),
  chrome.runtime.getURL("assets/16.jpg"),
  chrome.runtime.getURL("assets/17.jpg"),
  chrome.runtime.getURL("assets/18.jpg"),
  chrome.runtime.getURL("assets/19.jpg"),
  chrome.runtime.getURL("assets/20.jpg"),
  chrome.runtime.getURL("assets/21.jpg"),
  chrome.runtime.getURL("assets/22.jpg"),
  chrome.runtime.getURL("assets/23.jpg"),
  chrome.runtime.getURL("assets/24.jpg"),
  chrome.runtime.getURL("assets/25.jpg"),
  chrome.runtime.getURL("assets/26.jpg"),
  chrome.runtime.getURL("assets/27.jpg"),
  chrome.runtime.getURL("assets/28.jpg"),
  chrome.runtime.getURL("assets/29.jpg"),
  chrome.runtime.getURL("assets/30.jpg"),
  chrome.runtime.getURL("assets/31.jpg"),
  chrome.runtime.getURL("assets/32.jpg"),
  chrome.runtime.getURL("assets/casademiamigo.jpg"),
  chrome.runtime.getURL("assets/chad.jpg"),
  chrome.runtime.getURL("assets/concha.jpg"),
  chrome.runtime.getURL("assets/dondechotaestoy.jpg"),
  chrome.runtime.getURL("assets/elsuperjunte.jpg"),
  chrome.runtime.getURL("assets/filaparacuchala.jpg"),
  chrome.runtime.getURL("assets/fundarpoliticas.jpg"),
  chrome.runtime.getURL("assets/javo.jpg"),
  chrome.runtime.getURL("assets/sabado.jpg"),
  chrome.runtime.getURL("assets/snoopy.jpg"),
  chrome.runtime.getURL("assets/voutevender.jpg"),
  chrome.runtime.getURL("assets/sube.gif"),
  chrome.runtime.getURL("assets/caruflo.jpg"),
  chrome.runtime.getURL("assets/sube2.gif"),
  chrome.runtime.getURL("assets/sube3.gif"),
  chrome.runtime.getURL("assets/ARREPENTIMIENTO.jpg"),
  chrome.runtime.getURL("assets/balcon.jpg"),
  chrome.runtime.getURL("assets/chancletas.jpg"),
  chrome.runtime.getURL("assets/chechona.jpg"),
  chrome.runtime.getURL("assets/ciatica.jpg"),
  chrome.runtime.getURL("assets/dufour.jpg"),
  chrome.runtime.getURL("assets/elecc.jpg"),
  chrome.runtime.getURL("assets/escraches.jpg"),
  chrome.runtime.getURL("assets/humedad.jpg"),
  chrome.runtime.getURL("assets/insomnio.jpg"),
  chrome.runtime.getURL("assets/jueves.jpg"),
  chrome.runtime.getURL("assets/leiva.jpg"),
  chrome.runtime.getURL("assets/limpieza.jpg"),
  chrome.runtime.getURL("assets/lunes.jpg"),
  chrome.runtime.getURL("assets/martes.jpg"),
  chrome.runtime.getURL("assets/mate.jpg"),
  chrome.runtime.getURL("assets/meircoles.jpg"),
  chrome.runtime.getURL("assets/mentitas.jpg"),
  chrome.runtime.getURL("assets/paro.jpg"),
  chrome.runtime.getURL("assets/pastas.jpg"),
  chrome.runtime.getURL("assets/pizzetas.jpg"),
  chrome.runtime.getURL("assets/quilombo.jpg"),
  chrome.runtime.getURL("assets/quini.jpg"),
  chrome.runtime.getURL("assets/siatica.jpg"),
  chrome.runtime.getURL("assets/suicidio.jpg"),
  chrome.runtime.getURL("assets/template.jpg"),
  chrome.runtime.getURL("assets/terere.jpg"),
  chrome.runtime.getURL("assets/tetra.jpg"),
  chrome.runtime.getURL("assets/tinto.jpg"),
  chrome.runtime.getURL("assets/tropi.jpg"),
  chrome.runtime.getURL("assets/viernes.jpg"),
  chrome.runtime.getURL("assets/zen_rVNrYVsmOP-2.jpg"),
  chrome.runtime.getURL("assets/zen_rVNrYVsmOP.jpg")
];

console.log("Desarrolada por https://x.com/homicidiomental");

function setBackground(imageUrl) {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    
    document.body.style.backgroundSize = "50%"; 
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat"; 
  };
}


function setRandomBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  setBackground(randomImage);
}


setRandomBackground();
