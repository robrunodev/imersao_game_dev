let imagemCenario;
let imagemPersonagem;
let cenarioJogo;
let personagemJogo;
let somDoJogo;

function preload() {
  imagemCenario = loadImage('images/cenario/floresta.png');
  personagemJogo = loadImage('images/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenarioJogo = new Cenario(imagemCenario, 3);
  personagemJogo = new Personagem(imagemPersonagem);
  somDoJogo.loop();
}

function draw() {
  cenarioJogo.exibe();
  cenarioJogo.move();
  personagemJogo.exibe();
}