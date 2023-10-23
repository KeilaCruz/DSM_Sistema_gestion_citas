import React, { useEffect, useState } from 'react'
import { getAllPacientes } from '../api/paciente.api';
import {PacienteCard} from './PacienteCard'

export function PacienteList() {
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
                <PacienteCard paciente={paciente} key={paciente.CURP}/>
            ))}
        </>
    )
}