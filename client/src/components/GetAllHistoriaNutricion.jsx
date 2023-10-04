import { useEffect, useState } from "react"
import { getAllHistorialNutricion } from "../api/Nutricion.api"

export function GetAllHistoriaNutricion() {
    const [historiaClinica, setHistoriaClinica] = useState([])

    useEffect(() => {
        async function loadData(){
            const response = await getAllHistorialNutricion()
            setHistoriaClinica(response.data)
        }
    }, [])
    return (
        <>

        </>
    )
}
