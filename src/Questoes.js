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
        pergunta:"O ReactDOM nos ajuda __ ",
        resposta:"interagindo com a DOM para colocar componentes React na mesma"
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



function RenderizarDeck({recall}) {
    const [questao, setQuestao] = React.useState("escondida");
    const [estilo, setEstilo]=React.useState(
        {
            classe:"pergunta",
            icone:"play-outline"
        }
    )
    return (
        <>
        {(questao === "escondida") ? <ListarPerguntas setQuestao={setQuestao} estilo={estilo}/> : <ExibirPergunta alternativa={recall} estilo={estilo}/>}
    </>
    )
    
}




export default function Questoes() {

    deck.sort()
     
    return (
        <>
            <div className="topo">
            <img src="images/logo-pequena.png" alt="ZapRecall"></img>
            <h3>ZapRecall</h3>
            </div>    
            {deck.map((questao,index)=> <RenderizarDeck key ={index} recall={questao}/>)}
            <Status />
        </>
    )
}
