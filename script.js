Você tem um código bem estruturado para um quiz interativo que se baseia em um cenário envolvendo Inteligência Artificial. Para adaptá-lo ao tema automobilismo, vou mostrar como você pode modificar tanto o conteúdo das perguntas quanto as alternativas. Aqui está o código ajustado:

```javascript
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o nome do circuito que sediou a primeira corrida de Fórmula 1 em 1950?",
        alternativas: [
            {
                texto: "Circuito de Mônaco",
                afirmacao: "Você demonstrou conhecimento sobre os circuitos icônicos da Fórmula 1."
            },
            {
                texto: "Circuito de Silverstone",
                afirmacao: "Você sabe que a Fórmula 1 começou em Silverstone, o que é uma ótima base para um fã do automobilismo!"
            }
        ]
    },
    {
        enunciado: "Qual piloto é conhecido por ter o maior número de títulos de campeão mundial na Fórmula 1?",
        alternativas: [
            {
                texto: "Ayrton Senna",
                afirmacao: "Você conhece grandes pilotos, mas ainda não se aprofundou nos recordes atuais."
            },
            {
                texto: "Lewis Hamilton",
                afirmacao: "Você está atualizado sobre os recordes mais recentes da Fórmula 1!"
            }
        ]
    },
    {
        enunciado: "Qual é o nome da famosa corrida de resistência que acontece anualmente em Le Mans, na França?",
        alternativas: [
            {
                texto: "24 Horas de Le Mans",
                afirmacao: "Você conhece as principais corridas de resistência, um grande conhecimento para um entusiasta do automobilismo!"
            },
            {
                texto: "12 Horas de Sebring",
                afirmacao: "Você está familiarizado com outras corridas importantes, o que é excelente para um fã de automobilismo."
            }
        ]
    },
    {
        enunciado: "Qual é o principal objetivo do sistema de recuperação de energia KERS (Kinetic Energy Recovery System) na Fórmula 1?",
        alternativas: [
            {
                texto: "Aumentar a velocidade máxima",
                afirmacao: "Você está explorando diferentes tecnologias, mas o KERS tem um papel mais específico na recuperação de energia."
            },
            {
                texto: "Recuperar energia durante a frenagem",
                afirmacao: "Você entende bem as tecnologias que ajudam a melhorar o desempenho dos carros de Fórmula 1!"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do sistema que ajuda a melhorar a aerodinâmica dos carros de Fórmula 1 ajustando as asas? ",
        alternativas: [
            {
                texto: "Sistema de suspensão ativa",
                afirmacao: "Você está conhecendo os sistemas de ajuste de desempenho, mas a aerodinâmica é ajustada de forma diferente."
            },
            {
                texto: "Sistema de ajuste de asas",
                afirmacao: "Você tem um bom entendimento sobre as tecnologias que afetam a aerodinâmica dos carros de Fórmula 1!"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você agora é um verdadeiro especialista em automobilismo!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
`
