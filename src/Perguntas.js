import Status from "./Status"

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
             <div className="pergunta">
               <span>Pergunta 5</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
             <div className="pergunta">
               <span>Pergunta 5</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
             <div className="pergunta">
               <span>Pergunta 5</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
             <div className="pergunta">
               <span>Pergunta 5</span>
                 <ion-icon name="play-outline"></ion-icon>
             </div>
        </>
    )
}

function Mensagem(){
    return(
        <>
        <div className="mensagem">
            <p> 
                <img src="images/sad.png" alt="sad"></img>
                <strong>Putz...</strong>
            </p>
            <p>Ainda faltam alguns...</p>
            <p>Mas não desanime!</p>
        </div>
    </>
    )
    
}

export default function Perguntas() {
    return (
        <>
            <div className="topo">
            <img src="images/logo-pequena.png" alt="ZapRecall"></img>
            <h3>ZapRecall</h3>
            </div>    
            <RenderizarDeck />
            <Mensagem />
            <Status />
        </>
    )
}
