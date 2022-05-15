import React from "react";
import logoGrande from "./images/logo.png";

export default function PagInicial({setInicio}) {
    
    
    function MudarPagina (valor) {
        setInicio(valor)
    }

    return (
        <>
            <div className="container">
                <div className="paginaInicial">
                    <img src={logoGrande} alt="ZapRecall"></img>
                    <h3>ZapRecall</h3>
                    <button onClick={()=> MudarPagina("proxima")}>Iniciar Recall!</button>
                </div>
            </div>
        </>
    )
}
