import React from "react";
import Status from "./Status"
import ExibirPergunta from "./ExibirPergunta"
import ListarPerguntas from "./ListarPerguntas";





function RenderizarDeck({index, recall, setStatusDeck, setRespondidas, respondidas, statusDeck}) {
    const [questao, setQuestao] = React.useState("escondida");
    const [estilo, setEstilo]=React.useState(
        {
            classe:"pergunta",
            icone:"play-outline"
        }
    );
    return (
        <>
        {(questao === "escondida") ? <ListarPerguntas setQuestao={setQuestao} estilo={estilo} index={index}/> : <ExibirPergunta alternativa={recall} setestados={[setRespondidas,setStatusDeck, setEstilo, setQuestao]} respondidas={respondidas} statusDeck={statusDeck}/>}
    </>
    )

}


function comparador() { 
	return Math.random(); 
}

export default function Questoes({setStatusDeck, statusDeck,deck}) {

    deck.sort(comparador)
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
