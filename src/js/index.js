"use strict";

//Inicialización de Service Worker

let sw = null;
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(swRegistered => {
        console.log("[ServiceWorker**] - Registered");
        sw = swRegistered;
    });
}

//Detección de sistema operativo

window.addEventListener('load', function() {
    const platform = navigator.platform.toLowerCase(),
        iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

    if (iosPlatforms.includes(platform)){
      console.log('iOS');
      document.getElementById('instalar-ios').style.display = 'inline';
      document.getElementById('instalar-android').style.display = 'none';
      document.getElementById('escritorio').style.display = 'none';
    }
    else if (/android/.test(navigator.userAgent.toLowerCase())){
      console.log('Android');
      document.getElementById('instalar-ios').style.display = 'none';
      document.getElementById('instalar-android').style.display = 'inline';
      document.getElementById('escritorio').style.display = 'none';
    }
    else{
      console.log('Escritorio');
      document.getElementById('instalar-ios').style.display = 'none';
      document.getElementById('instalar-android').style.display = 'none';
      document.getElementById('escritorio').style.display = 'inline';
    }
});

//Información de la aplicación

function alertInstalarAndroid(){
  alert('Para instalar presiona "Agrega PCultural a la pantalla principal"');
}

function alertInstalariOS(){
  alert('Para instalar presiona "Compartir" y despues "Agregar a inicio"');
}

function alertInfo(){
  alert('PAÉNTESIS CULTURAL es una aplicación de realidad aumentada con modelos educativos. \n\nPara utilizarla presiona "INICIAR" y apunta al marcador con el logo de "PARÉNTESIS CULTURAL"');
}

function alertEquipo(){
  alert('Desarrollado por: \n\nRaúl Sánchez Vázquez \nRogelio Robledo Moreno');
}