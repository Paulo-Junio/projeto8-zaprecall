import React from "react";

export default function PagInicial({setInicio}) {
    
    
    function MudarPagina (valor) {
        setInicio(valor)
    }

    return (
        <>
            <div className="container">
                <div className="paginaInicial">
                    <img src="images/logo.png" alt="ZapRecall"></img>
                    <h3>ZapRecall</h3>
                    <button onClick={()=> MudarPagina("proxima")}>Iniciar Recall!</button>
                </div>
            </div>
        </>
    )
}
