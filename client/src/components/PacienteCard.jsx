
export function PacienteCard({paciente}) {
    return (
        <>
            <div key={paciente.id}>
                <h1>{paciente.id}</h1>
                <p>{paciente.nombre}</p>
                <p>{paciente.apePaterno}</p>
            </div>
        </>
    )
}
