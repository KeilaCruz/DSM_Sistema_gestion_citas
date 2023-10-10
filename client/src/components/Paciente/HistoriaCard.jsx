import { deleteHistoriaNutricion } from "../../api/Nutricion.api"

export function HistoriaCard({HistoriaNutricion}) {
    const handleDelete = async (idHistoria) =>{
        const response = await deleteHistoriaNutricion(idHistoria)
        console.log(response)
    } 
    return (
        <>
            <div key={HistoriaNutricion.id} style={{background: 'green'}}>
                <p>{HistoriaNutricion.id}</p>
                <p>{HistoriaNutricion.motivo_consulta}</p>
                <p>{HistoriaNutricion.AHF_diabetes}</p>
                <p>{HistoriaNutricion.quien_diabetes}</p>
                <button onClick={() => handleDelete(HistoriaNutricion.id)}>Eliminar</button>
            </div>
        </>
    )
}

