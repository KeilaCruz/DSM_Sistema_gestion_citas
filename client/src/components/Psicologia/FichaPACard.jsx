
export function FichaPACard({ficha}) {
    
    return (
        <>
            <div style={{background: 'yellow'}}>
                <p>{ficha.expedienteFicha}</p>
                <p>{ficha.idPaciente}</p>
                <p>{ficha.motivo_consulta}</p>
            </div>
        </>
    )
}

