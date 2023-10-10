import React, { useEffect, useState } from 'react'
import { getAllPacientes } from '../../api/Pacientes.api'
import {PacienteCard} from './PacienteCard'
export function GetAllPacientes() {
    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        async function loadPacientes() {
            const response = await getAllPacientes();
            setPacientes(response.data);
        }
        loadPacientes();
    }, []);

    return (
        <>
            {pacientes.map(paciente => (
                <PacienteCard paciente={paciente} key={paciente.id}/>
            ))}
        </>
    )
}

