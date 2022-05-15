export default function Respostas({resposta}){
    return (
        <>  
            <div className="cardResposta">
                <p>{resposta}</p>
                <div className="botoesCard">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button> 
                    <button>Zap!</button>
                </div>
            </div>
        </>      
    );
}