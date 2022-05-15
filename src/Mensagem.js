import party from "./images/party.png";
import sad from "./images/sad.png";


function MensagemFinal({icon, mensagem, status,motivacao}) {
    return (
        <>
        <div className="mensagem">
            <p> 
                <img src={icon} ></img>
                <strong>{mensagem}</strong>
            </p>
            <p>{status}</p>
            <p>{motivacao}</p>
        </div>
    </>
    );
}

export default function Mensagem({statusDeck}){
    let erradas = (statusDeck.includes("close-circle"))

    return(
        <>
            {erradas === true ? <MensagemFinal icon={sad} mensagem={"Putz..."}status={"Ainda faltam alguns..."} motivacao={"Mas não desanime!"}/>
            :
            <MensagemFinal icon={party} mensagem={"Parabéns!"} status={"Voce não esqueceu de nenhum flashcard!"} motivacao={""}/>}
        </>
    );
    
}