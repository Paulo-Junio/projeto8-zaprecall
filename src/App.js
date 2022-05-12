import React from "react";
import PagInicial from "./PagInicial";
import Perguntas from "./Perguntas";

export default function App(){

    const [inicio, setInicio] = React.useState("inicial");

    return (
        <>
            {
                inicio === "inicial" ? <PagInicial setInicio={setInicio} /> : <Perguntas />
            }
        </>
    )
}