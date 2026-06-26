let tamamnhoFonte= 18;
function aumentarFonte() { 
tamanhoFonte += 2;
document.getelementbyid('texto').style.fortsize= tamanhoFonte + 'px';
}

function diminuirFonte() { 
tamanhoFonte -= 2;
document.getelementbyid('texto').style.fortsize= tamanhoFonte + 'px';
}

function altoContraste () {
  document.body.classList.toggle ('contraste');
}


