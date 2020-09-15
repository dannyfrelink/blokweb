// JavaScript Document

var hamburgerMenu = document.querySelector('nav div div>img');
var uitgeklaptMenu = document.querySelector('nav div>ul:last-of-type');


function menuUitklappen () {
    uitgeklaptMenu.classList.toggle('uitklapmenu');
}

hamburgerMenu.addEventListener('click', menuUitklappen);

