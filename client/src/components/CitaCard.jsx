
export function CitaCard({cita}) {
    return (
        <>
            <div key={cita.idPaciente} style={{background: 'blue'}}>
                <p>{cita.idPaciente}</p>
                <p>{cita.fecha_cita}</p>
                <p>{cita.especialidad}</p>
            </div>
        </>
    )
}

