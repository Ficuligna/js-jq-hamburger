// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.


var logo = $(".header-left");
var condizione= true;

logo.click(
  function (){
    if (condizione) {
      $(".hamburger-menu").fadeIn(1000);
      logo.addClass("close")
      condizione = false
    }else {
      $(".hamburger-menu").fadeOut(1000);
      logo.removeClass("close");
      condizione = true;
    }
  }
);
