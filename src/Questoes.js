import React from "react";
import Status from "./Status"
import ExibirPergunta from "./ExibirPergunta"
import ListarPerguntas from "./ListarPerguntas";


const deck= [
    {
        pergunta:"O que é JSX?",
        resposta:"Uma extensão de linguagem do JavaScript"
    },
    {
        pergunta:"Componentes devem iniciar com __ ",
        resposta:"letra maiúscula"
    },
    {
        pergunta:"Usamos estado (state) para __",
        resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },
    {
        pergunta:"Podemos colocar __ dentro do JSX",
        resposta:"expressões"
    }
]



function RenderizarDeck({index, recall, setStatusDeck, setRespondidas, respondidas, statusDeck}) {
    const [questao, setQuestao] = React.useState("escondida");
    const [estilo, setEstilo]=React.useState(
        {
            classe:"pergunta",
            icone:"play-outline"
        }
    )
    return (
        <>
        {(questao === "escondida") ? <ListarPerguntas setQuestao={setQuestao} estilo={estilo} index={index}/> : <ExibirPergunta alternativa={recall} setestados={[setRespondidas,setStatusDeck, setEstilo, setQuestao]} respondidas={respondidas} statusDeck={statusDeck}/>}
    </>
    )
    
}




export default function Questoes({setStatusDeck, statusDeck}) {

    deck.sort()
    let tamanho = deck.length;
    const [respondidas, setRespondidas] = React.useState(0);
    return (
        <>
            <div className="topo">
            <img src="images/logo-pequena.png" alt="ZapRecall"></img>
            <h3>ZapRecall</h3>
            </div>    
            {deck.map((questao,index)=> <RenderizarDeck key ={index} index={index} recall={questao} setStatusDeck={setStatusDeck} setRespondidas={setRespondidas} respondidas={respondidas} statusDeck={statusDeck}/>)}
            <Status statusDeck={statusDeck} tamanho={tamanho} respondidas={respondidas}/>
        </>
    )
}
