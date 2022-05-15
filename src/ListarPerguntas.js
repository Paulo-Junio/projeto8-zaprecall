import React from "react";


let numeroPergunta=0;
export default function ListarPerguntas({setQuestao,estilo}){
    numeroPergunta ++
    const {classe, icone} = estilo;
    
    return (
        <>
            <div className={classe} onClick={() =>setQuestao("virada")}>
                <span>Pergunta {numeroPergunta}</span>
                <ion-icon name={icone}></ion-icon>
            </div>
        </>
    )
}