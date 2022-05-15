import React from "react"
import Respostas from "./Respostas"


function ExibirEnunciado({pergunta, setRespostaCorreta}) {
    return (
        <div className="cardResposta">
            <p>{pergunta}</p>
            <img src="images/setinha.png" alt="setinha" onClick={() =>setRespostaCorreta("mostrar")}>
            </img>
        </div>
    );
}


export default function ExibirPergunta({alternativa,setestados,respondidas, statusDeck}) {
    const {pergunta,resposta} = alternativa;
    const [respostaCorreta, setRespostaCorreta] = React.useState("escondida");
    const novoSetestados = [...setestados, setRespostaCorreta]


    return (
        <>
            {(respostaCorreta === "escondida") ? <ExibirEnunciado pergunta={pergunta} setRespostaCorreta={setRespostaCorreta} />
            : <Respostas resposta={resposta} setes={novoSetestados} respondidas={respondidas} statusDeck={statusDeck}/>}
        </>
    );
}
