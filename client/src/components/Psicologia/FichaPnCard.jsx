
export function FichaPnCard({ficha}) {
    return (
        <>
            <div style={{background: 'orange'}}>
                <p>{ficha.expedienteFicha}</p>
                <p>{ficha.idPaciente}</p>
                <p>{ficha.motivo_consulta}</p>    
            </div>
        </>
    )
}

