import React from "react";

export default function Respostas({resposta,setes,respondidas, statusDeck}){
    const [setRespondidas, setStatusDeck, setEstilo, setQuestao, setRespostaCorreta] = setes;
    const errada = {classe:"pergunta respostaErrada", icone:"close-circle"};
    const media = {classe:"pergunta respostaMedia", icone:"help-circle"};
    const certa = {classe:"pergunta respostaCerta", icone:"checkmark-circle"};

    function Atualizar(estilo){
        const {classe, icone} = estilo;
        let icones = [...statusDeck, icone]
        let numeroRespondidas = respondidas+1;
        setRespondidas(numeroRespondidas)
        setEstilo(estilo)
        setStatusDeck(icones)
        setRespostaCorreta("escondida")
        setQuestao("escondida")
        
    }

    return (
        <>  
            <div className="cardResposta">
                <p>{resposta}</p>
                <div className="botoesCard">
                    <button onClick={() => Atualizar(errada)}>Não lembrei</button>
                    <button onClick={() => Atualizar(media)}>Quase não lembrei</button> 
                    <button onClick={() => Atualizar(certa)}>Zap!</button>
                </div>
            </div>
        </>      
    );
}