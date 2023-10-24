import { useNavigate } from "react-router-dom"

export function PacienteCard({paciente}) {
    
    const navigate = useNavigate()

    const deleteClick = () =>{ navigate(`/paciente/${paciente.id}`); }

    return (
        <>
            <div key={paciente.CURP} style={{background: "gray"}} onClick={deleteClick}>
                <h1>{paciente.CURP}</h1>
                <p>{paciente.nombre}</p>
                <p>{paciente.apePaterno}</p>
            </div>
        </>
    )
}
