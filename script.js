let tamanhoFonte = 16; 

function aumentarFonte() { 
    if (tamanhoFonte < 30) { 
        tamanhoFonte += 2;
        document.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
    }
}

function diminuirFonte() { 
    if (tamanhoFonte > 12) { 
        tamanhoFonte -= 2;
        document.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
    }
}

function altoContraste() {
    document.body.classList.toggle('contraste');
}
