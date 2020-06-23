let imagemCenario;
let imagemPersonagem;
let cenario;

function preload() {
  imagemCenario = loadImage('images/cenario/floresta.png');
  imagemPersonagem = loadImage('images/personagem/correndo.png');
}

function setup() {
  cenario = new Cenario(imagemCenario, 50);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  cenario.exibe();
  image(imagemPersonagem, 0, height - 135, 110, 135, 0, 0, 220, 270);
}

class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
  }

  exibe() {
    image(this.imagem, -this.velocidade, 0, width, height);
    image(this.imagem, width, this.velocidade - 1, width, height);
  }

  move() {
  }
}