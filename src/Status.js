import Mensagem from "./Mensagem";

function EstilosIcon({icon}) {
    let classe;
    if (icon === "close-circle") {
        classe = "respostaErrada";
    } else if (icon === "help-circle") {
        classe = "respostaMedia";
    } else {
        classe = "respostaCerta"
    }

    return (
        <>
            <div className={classe}><ion-icon name={icon}></ion-icon></div>
        </>
    )
}

export default function Status({statusDeck, tamanho,respondidas}){
    return (
        <>
            <div className="rodape">
                <p>{respondidas}/{tamanho} CONCLUIDOS</p>
                <div className="alinhamento">
                    {statusDeck.map((icon,index) => <EstilosIcon key={index} icon={icon}/>)}
                </div>
            </div> 

            {tamanho === respondidas ? <Mensagem statusDeck={statusDeck}/>: ''}
        </>
    )
}