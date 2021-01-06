// JavaScript Document

// HET OPENEN VAN DE NAVIGATIEBAR 

var opennavbar = document.querySelector('.opennav');
var menu = document.querySelector('.hamburgermenu');

function klikken () {
  opennavbar.classList.toggle('menuopenen');
}

menu.addEventListener('click', klikken);

// HET OPENEN VAN DE ZOEK KNOP

var weergavezoeken = document.querySelector('.zoekenweergeven');
var zoekicoon = document.querySelector('.zoek');

function zoekenopen () {
  weergavezoeken.classList.toggle('zoekenopenklappen');
}

zoekicoon.addEventListener('click', zoekenopen);

// HET OPENEN VAN HET MENU VOOR HET INLOGGEN

var weergaveinlogopties = document.querySelector('.optiesvoorinloggen');
var icoonvoorinloggen = document.querySelector('.knopinloggen');

function hoveroverinlog () {
   weergaveinlogopties.classList.toggle('hoveroveroptiesvoorinloggen');
}

icoonvoorinloggen.addEventListener('click', hoveroverinlog);

// DE AUDIO AFSPELEN VAN DE IND

var Mp3IND = document.querySelector('.audioIND');
var afspeelknop = document.querySelector('.wiezijnwijknop');
var afbeeldingheadset = document.querySelector('.headset');

function afspelen() {
  Mp3IND.play();
  Mp3IND.volume = 0.6;

}

afspeelknop.addEventListener('click', afspelen)
afbeeldingheadset.addEventListener('click', afspelen)


// HET ACCORDION MENU

var acc = document.getElementsByClassName("AccordionInfoMenu");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("hover");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}