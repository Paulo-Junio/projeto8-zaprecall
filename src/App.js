import React from "react";
import PagInicial from "./PagInicial";
import Questoes from "./Questoes";

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
        pergunta:"O React é __ ",
        resposta:"uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta:"Podemos colocar __ dentro do JSX",
        resposta:"expressões"
    }
]


export default function App(){

    const [inicio, setInicio] = React.useState("inicial");
    const [statusDeck, setStatusDeck] = React.useState([])

    return (
        <>
            {
                inicio === "inicial" ? <PagInicial setInicio={setInicio} /> : <Questoes setStatusDeck={setStatusDeck} statusDeck={statusDeck} deck={deck}/>
            }
        </>
    )
}