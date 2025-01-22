function trocarCor() {
    const cores = ["RED", "GREEN", "YELLOW", "BLUE", "PINK", "ORANGE"];
    const corpo = document.body;
    const textoCor = document.getElementById("textoCor");
    let corAtual = textoCor.textContent.split(': ')[1];
    let novaCor = cores[(cores.indexOf(corAtual) + 1) % cores.length];
    
    corpo.style.backgroundColor = novaCor.toLowerCase();
    textoCor.textContent = `background-color: ${novaCor}`;
}