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


export default function ExibirPergunta({alternativa}) {
    const {pergunta,resposta} = alternativa;
    const [respostaCorreta, setRespostaCorreta] = React.useState("escondida");

    return (
        <>
            {(respostaCorreta === "escondida") ? <ExibirEnunciado pergunta={pergunta} setRespostaCorreta={setRespostaCorreta} />
            : <Respostas resposta={resposta} />}
        </>
    );
}
