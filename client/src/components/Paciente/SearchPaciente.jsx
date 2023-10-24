import { useEffect, useState } from "react";
import { getPaciente } from "../../api/Pacientes.api";

export function SearchPaciente() {
    const [paciente, setPaciente] = useState([])
    let id_paciente;

    const handleGetSearch = (evt) =>{
        id_paciente = evt.target.value;
    }
    useEffect(async() =>{
        const res = await getPaciente(id_paciente)
        console.log(res)
        setPaciente(res.data.CURP)
    })
    return (
        <>
            <input id="barra_busqueda" type="text" onChange={handleGetSearch}/>
        </>
    )
}

