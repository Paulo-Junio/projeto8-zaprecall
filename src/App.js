import React from "react";
import PagInicial from "./PagInicial";
import Questoes from "./Questoes";
//AQUI WU VOU CRIAR O ARRAY DE SIMBOLOS PARA RENDERIZAR EM BAIXO DA CONTAGEM E TBM O NUMERO DE QUESTÕES QUE VÃO SER EXIBIDAS E QUANTAS JÁ FORAM RESPONDIDAS PODER SER O LENGTH DO ARRAY DE ICON
export default function App(){

    const [inicio, setInicio] = React.useState("inicial");
    const [statusDeck, setStatusDeck] = React.useState([])

    return (
        <>
            {
                inicio === "inicial" ? <PagInicial setInicio={setInicio} /> : <Questoes setStatusDeck={setStatusDeck} statusDeck={statusDeck}/>
            }
        </>
    )
}