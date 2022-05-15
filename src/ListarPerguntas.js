import React from "react";


export default function ListarPerguntas({setQuestao,estilo, index}){
    const {classe, icone} = estilo;
    let numeroPergunta = index + 1;
    return (
        <>
            <div className={classe} onClick={() =>setQuestao("virada")}>
                <span>Pergunta {numeroPergunta}</span>
                <ion-icon name={icone}></ion-icon>
            </div>
        </>
    )
}