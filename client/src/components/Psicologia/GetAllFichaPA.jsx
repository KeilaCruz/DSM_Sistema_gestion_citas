import { useEffect, useState } from "react"
import { getAllFichaPsiAdulto } from "../../api/Psico.Adulto.api"
import { FichaPACard } from "./FichaPACard"

export function GetAllFichaPA() {
    const [fichaPsicoAdulto, setFichaPsico] = useState([])
    useEffect(() => {
        async function loadFichas() {
            const response = await getAllFichaPsiAdulto()
            setFichaPsico(response.data)
        }
        loadFichas();
    })
    return (
        <>
            {fichaPsicoAdulto.map(ficha => (
                <>
                    <FichaPACard ficha={ficha} key={ficha.expedienteFicha}/>
                </>
            ))}
        </>
    )
}

