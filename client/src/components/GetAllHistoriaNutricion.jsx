import { useEffect, useState } from "react"
import { getAllHistorialNutricion } from "../api/Nutricion.api"
import { HistoriaCard } from "./HistoriaCard"

export function GetAllHistoriaNutricion() {
    const [historiaClinica, setHistoriaClinica] = useState([])

    useEffect(() => {
        async function loadData() {
            const response = await getAllHistorialNutricion()
            setHistoriaClinica(response.data)
        }
        loadData()
    }, [])
    return (
        <>
            {historiaClinica.map(historia => (
                <HistoriaCard HistoriaNutricion={historia} key={historia.id} />
            ))}
        </>
    )
}
