function RenderizarDeck() {
     return (
         <>
             <div className="pergunta">
                 <span>Pergunta 1</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
             <div className="pergunta">
                 <span>Pergunta 2</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
             <div className="pergunta">
                 <span>Pergunta 3</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
             <div className="pergunta">
                 <span>Pergunta 4</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
             <div className="pergunta">
               <span>Pergunta 5</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
        </>
    )
}

function Respostas(){
    return (
        <>  
            <div className="cardResposta">
                <p>JSX é uma sitexe para escrever HTML dentro do JS</p>
                <div className="botoesCard">
                    <button className="vermelho">Não Lembrei</button>
                    <button className="laranja">Quase não lembrei</button> 
                    <button className="verde">Zap!</button>
                </div>
            </div>
        </>      
    );
}

export default function Perguntas() {
    return (
        <>
            <div className="topo">
            <img src="images/logo-pequena.png" alt="ZapRecall"></img>
            <h3>ZapRecall</h3>
            </div>    
            <RenderizarDeck />
            <Respostas />
        </>
    )
}
