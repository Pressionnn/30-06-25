const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você gosta de programação?",
    alternativas: [
      { texto: "Sim", afirmacao: "positivo" },
      { texto: "Não", afirmacao: "negativo" },
    ],
  },
  {
    enunciado: "Você é programador?",
    alternativas: [
      { texto: "Sim", afirmacao: "positivo" },
      { texto: "Não", afirmacao: "negativo" },
    ],
  },
  {
    enunciado: "Você já programou algo?",
    alternativas: [
      { texto: "Sim", afirmacao: "positivo" },
      { texto: "Não", afirmacao: "negativo" },
    ],
  },
  {
    enunciado: "Qual sua linguagem de programação preferida?",
    alternativas: [
      { texto: "JavaScript", afirmacao: "javascript" },
      { texto: "Python", afirmacao: "python" },
    ],
  },
];

let atual = 0; // índice da pergunta atual
let respostas = []; // armazena as afirmações escolhidas

function mostraPergunta() {
  textoResultado.textContent = "";        // limpa resultado final
  caixaAlternativas.innerHTML = "";       // limpa botões anteriores

  if (atual < perguntas.length) {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas(perguntaAtual.alternativas);
  } else {
    exibeResultado();
  }
}

function mostraAlternativas(alternativas) {
  for (const alternativa of alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", function () {
      // Armazena a resposta escolhida
      respostas.push(alternativa.afirmacao);

      // Avança para próxima pergunta
      atual++;
      mostraPergunta();
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function exibeResultado() {
  caixaPerguntas.textContent = "Fim do questionário!";
  caixaAlternativas.innerHTML = "";

  // Exemplo: contagem de respostas positivas
  const positivas = respostas.filter(r => r === "positivo").length;
  const linguagem = respostas.find(r => r === "javascript" || r === "python");

  textoResultado.textContent = `Você respondeu ${positivas} de ${perguntas.length - 1} perguntas com "Sim".
  Linguagem preferida: ${linguagem ? linguagem : "Não informado"}.`;
}

// Inicializa
mostraPergunta();
