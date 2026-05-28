class Monstro {
    constructor(nome, hp){
        this.nome = nome;
        this.hp = Number(hp);
    }
    receberDano(quantidade){
        this.hp = quantidade;
        if(hp <= 0){
            this.hp = 0;
            return `${this.nome} foi derrotado.`
        }
        return `${this.nome} sofreu ${quantidade} de dano!`;
    }
}

let monstroBatalha;
function iniciarJogo(){
    const nomeDigitado = document.getElementById('nomeMonstro').value;
    const hpDigitado = document.getElementById('hpMonstro').value;
    monstroBatalha = new Monstro(nomeDigitado, hpDigitado);
    function atualizaTela(){
        document.getElementById('painel-criacao').style.display = 'none';
        document.getElementById('painel-combate').style.display = 'block';
    }

}