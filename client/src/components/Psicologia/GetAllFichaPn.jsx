import { useEffect, useState } from "react"
import { FichaPnCard } from "./FichaPnCard"
import { getAllFichaPsiNiño } from "../../api/Psico.Niño.api"
export function GetAllFichaPn() {
    const [fichaPsicoNiño, setFicha] = useState([])
    useEffect(() => {
        async function loadFichas() {
            const response = await getAllFichaPsiNiño()
            setFicha(response.data)
        }
        loadFichas()
    })
    return (
        <>
            {fichaPsicoNiño.map(ficha => (
                <FichaPnCard ficha={ficha} key={ficha.expedienteFicha}/>
            ))}
        </>
    )
}

export default GetAllFichaPn