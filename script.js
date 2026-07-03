let tamanhoFonte = 16; 

function aumentarFonte() { 
    if (tamanhoFonte < 30) { // Evita que a fonte fique grande demais
        tamanhoFonte += 2;
        document.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
    }
}

function diminuirFonte() { // Função corrigida e testada
    if (tamanhoFonte > 12) { // Evita que a fonte fique pequena demais
        tamanhoFonte -= 2;
        document.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
    }
}

function altoContraste() {
    document.body.classList.toggle('contraste');
}
