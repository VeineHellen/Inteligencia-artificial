const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
const perguntas = [
    {
        enunciado: "Como a escola pode usar a tecnologia para criar um ambiente seguro, combatendo a homofobia de forma proativa e acolhendo estudantes LGBTQIA+?"
        alternativas: [
        {
            texto: "A escola pode implementar plataformas digitais para denúncias anônimas de homofobia e desenvolver aplicativos educativos sobre diversidade.",
            afirmacao: "Ferramentas digitais seguras e informativas fortalecem o suporte a grupos minoritários."
        },
        {
            texto: "Usar realidade virtual (RV) ou jogos educativos pode simular preconceito, desenvolvendo empatia e capacitando os alunos a intervir.",
            afirmacao: "Experiências imersivas aprimoram a compreensão e a sensibilidade social."
        },
    ]
    },
{
    enunciado:" tecnologia pode espalhar homofobia. Qual o papel da escola em mitigar isso e promover o uso responsável entre os jovens?",
    alternativas: [ 
        {
            texto: "Redes sociais propagam cyberbullying. A escola deve educar sobre cidadania digital e pensamento crítico para identificar e combater esses conteúdos.",
            afirmacao: "A educação digital é crucial para navegar em ambientes online complexos."
        },
        {
            texto: "Algoritmos criam "bolhas de filtro". A escola precisa ensinar a questionar informações online e buscar fontes diversas para desconstruir narrativas homofóbicas.",
            afirmacao: "Compreender algoritmos e diversidade de informação evita a polarização."
        },
    ]
},
{
    enunciado:"Pergunta3",
    alternativas: [ 
        {
            texto: "alternativa1",
            afirmacao: "afirmacao1"
        },
        {
            texto: "alternativa2",
            afirmacao: "afirmacao2"
        },
    ]
},
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();