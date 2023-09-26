import React, { useEffect, useState } from 'react'
import { getAllPacientes } from '../api/Pacientes.api'

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
                <div key={paciente.id}>
                    <h1>{paciente.id}</h1>
                    <p>{paciente.nombre}</p>
                    <p>{paciente.apePaterno}</p>
                </div>
            ))}
        </>
    )
}

