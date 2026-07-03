// Corrigido o nome da variável e tamanho inicial condizente com o CSS
let tamanhoFonte = 16; 

function aumentarFonte() { 
    if (tamanhoFonte < 30) { // Limite máximo para não quebrar o layout
        tamanhoFonte += 2;
        // Corrigido para getElementById e fontSize
        document.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
    }
}

function disminuirFonte() { 
    if (tamanhoFonte > 12) { // Limite mínimo para continuar legível
        tamanhoFonte -= 2;
        document.getElementById('texto').style.fontSize = tamanhoFonte + 'px';
    }
}

function altoContraste() {
    // Liga e desliga a classe de alto contraste no body
    document.body.classList.toggle('contraste');
}
