class Monstro {
    constructor(nome, hp) {
        this.nome = nome;
        this.hp = Number(hp);
    }
    receberDano(quantidade) {
        this.hp -= quantidade;
        if (hp <= 0) {
            this.hp = 0;
            return `${this.nome} foi derrotado.`
        }
        return `${this.nome} sofreu ${quantidade} de dano!`;
    }
}

let monstroBatalha;
function iniciarJogo() {
    const nomeDigitado = document.getElementById('nomeMonstro').value;
    const hpDigitado = document.getElementById('hpMonstro').value;
    monstroBatalha = new Monstro(nomeDigitado, hpDigitado);
    if (monstroBatalha.nome != "") {
        function atualizaTela() {
            document.getElementById('painel-criacao').style.display = 'none';
            document.getElementById('painel-combate').style.display = 'block';
            document.getElementById('statusNome').innerText = monstroBatalha.nome;
            document.getElementById('statusHp').innerText = `Vida Atual: ${monstroBatalha.hp}`;
        }

    }
    atualizaTela()
}
function baterNoMonstro() {
    const quantidadeDigitada = document.getElementById('danoInput').value;
    monstroBatalha.receberDano(quantidadeDigitada)
    atualizaTela()
}