import { PacienteList } from "../components-paciente/PacienteList";
import { BarraDeBusqueda } from "../Buscar-Paciente/BarraDeBusqueda";
import { ListaDeResultados } from "../Buscar-Paciente/ListaDeResultados";
import { useState } from 'react';

export function PacientePage({resultado}) {


  const [resultados, setResultados] = useState([]);

/* const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  const handlePacienteSeleccionado = (paciente) => {
    setPacienteSeleccionado(paciente);
  } */

  return (
    <div>
      <h1>Buscador de Pacientes</h1>
      
      <BarraDeBusqueda setResultados={setResultados} />
      <ListaDeResultados resultados={resultados} />

        <PacienteList/>
    </div>
  )
}

