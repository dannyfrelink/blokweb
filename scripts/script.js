// JavaScript Document

var hamburgerMenu = document.querySelector('nav div div>img');
var uitgeklaptMenu = document.querySelector('nav div>ul:last-of-type');
var laysLogo = document.querySelector('nav>a img');


function menuUitklappen () {
    uitgeklaptMenu.classList.toggle('uitklapmenu');
}

function logoVerkleinen () {
    var scroll = window.scrollY;

    if (scroll >=50) {
        laysLogo.classList.add('verkleinlogo');
    }
    else {
        laysLogo.classList.remove('verkleinlogo');
    }
}

hamburgerMenu.addEventListener('click', menuUitklappen);
window.addEventListener('scroll', logoVerkleinen);