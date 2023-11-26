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

   /*  return (
        <>
            {pacientes.map(paciente => (
                <PacienteCard paciente={paciente} key={paciente.CURP}/>
            ))}
        </>
    ) */

    return (
        <div className="container-fluid">
          {/* Titulo */}
          <div className="container">
            <div className="text-with-lines">
              <div className="line line-top"></div>
              <p className="display-5 fw-bold">LISTA DE PACIENTES</p>
              <div className="line line-bottom"></div>
            </div>
          </div>
    
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="/paciente-create">
              <button className="btn btn-primary">Crear Paciente</button>
            </a>
          </div>
    
          <div className="py-3">
            <div className="container">
              <div className="row hidden-md-up">
              {pacientes.map(paciente => (
                <PacienteCard paciente={paciente} key={paciente.CURP}/>
            ))}
              </div>
            </div>
          </div>
        </div>
      );

}