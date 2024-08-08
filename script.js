const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está na concessionária e vê um novo modelo de carro com tecnologia avançada. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "Ficou empolgado com a nova tecnologia e quer saber mais sobre as funcionalidades do carro."
            },
            {
                texto: "Isso é um desperdício de dinheiro.",
                afirmacao: "Acha que a nova tecnologia é exagerada e não vê a necessidade de gastar tanto em um carro."
            }
        ]
    },
    {
        enunciado: "Com a chegada da tecnologia autônoma, o seu amigo pede sua opinião sobre os carros autônomos. Como você responde?",
        alternativas: [
            {
                texto: "Acredito que eles vão transformar a forma como dirigimos e melhorar a segurança nas estradas.",
                afirmacao: "Vê o potencial dos carros autônomos para reduzir acidentes e otimizar o tráfego."
            },
            {
                texto: "Estou preocupado com a possibilidade de falhas e com a perda de empregos para motoristas.",
                afirmacao: "Tem receios sobre os riscos associados e as consequências econômicas da automação."
            }
        ]
    },
    {
        enunciado: "Durante uma corrida de Fórmula 1, há uma nova regra que limita a quantidade de combustível que os carros podem usar. Como você acha que isso afetará a competição?",
        alternativas: [
            {
                texto: "Vai tornar a corrida mais emocionante e estratégica, pois as equipes terão que gerenciar melhor o consumo.",
                afirmacao: "Acredita que a nova regra adiciona um elemento de estratégia que pode aumentar o interesse pelo esporte."
            },
            {
                texto: "Vai prejudicar a performance dos carros e reduzir a emoção da corrida.",
                afirmacao: "Tem medo de que a regra possa diminuir a performance e o espetáculo das corridas."
            }
        ]
    },
    {
        enunciado: "Você precisa escolher entre um carro esportivo e um SUV para sua próxima compra. Qual fator é mais importante para você?",
        alternativas: [
            {
                texto: "Desempenho e velocidade.",
                afirmacao: "Valoriza a performance e a velocidade, optando por um carro que ofereça uma experiência de condução emocionante."
            },
            {
                texto: "Conforto e espaço.",
                afirmacao: "Prefere um veículo que ofereça mais espaço e conforto para viagens e uso diário."
            }
        ]
    },
    {
        enunciado: "Você está participando de um debate sobre o futuro dos carros elétricos versus carros a combustão. Qual é a sua posição?",
        alternativas: [
            {
                texto: "Os carros elétricos são o futuro e devem ser adotados em larga escala para reduzir as emissões.",
                afirmacao: "Acredita na importância dos carros elétricos para a preservação ambiental e na inovação tecnológica."
            },
            {
                texto: "Os carros a combustão ainda têm muito a oferecer e a transição para elétricos deve ser feita com cautela.",
                afirmacao: "Tem reservas quanto à transição rápida para carros elétricos e defende a continuidade dos veículos a combustão."
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
    caixaPerguntas.textContent = "O futuro do automobilismo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

