// JavaScript Document

var opennavbar = document.querySelector('.opennav');
var menu = document.querySelector('#hamb');

function klikken () {
    opennavbar.classList.toggle('joehoe');
}

menu.addEventListener('click', klikken);



