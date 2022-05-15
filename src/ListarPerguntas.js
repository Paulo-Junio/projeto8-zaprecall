import React from "react";


function Imprimir ({setQuestao,classe, icone, index, acao}){
    let numeroPergunta = index + 1;
    console.log(acao)
    return (
        <>
        {acao === "virar" ? <div className={classe} onClick={() =>setQuestao("virar")}>
                <span>Pergunta {numeroPergunta}</span>
                <ion-icon name={icone}></ion-icon>
        </div>
        :
        <div className={classe} onClick={() =>setQuestao("escondida")}>
                <span>Pergunta {numeroPergunta}</span>
                <ion-icon name={icone}></ion-icon>
        </div>}
        
        </>
    );
}

export default function ListarPerguntas({setQuestao,estilo, index}){
    const {classe, icone} = estilo;
    console.log(icone)
    return (
        <>
            {icone === "play-outline" ? <Imprimir setQuestao={setQuestao} classe={classe} icone={icone} index={index} acao={"virar"} /> :<Imprimir setQuestao={setQuestao} classe={classe} icone={icone} index={index} acao={"escondida"} />}
        </>
    )
}