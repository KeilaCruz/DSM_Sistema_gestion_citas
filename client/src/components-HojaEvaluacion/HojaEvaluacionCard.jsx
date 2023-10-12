import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function HojaEvaluacionCard({ evaluacion }) {

  const navigate = useNavigate();
  const [citaID, setCitaId] = useState("");
  const [pacienteNombre, setPacienteNombre] = useState("");
  const [pacienteApePaterno, setPacienteApePaterno] = useState("");
  const [pacienteApeMaterno, setPacienteApeMaterno] = useState("");

  useEffect(() => {
    // Obtener el nombre del Paciente
    fetch(`http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/${evaluacion.idPaciente}/`)
      .then((response) => response.json())
      .then((data) =>(
        setPacienteNombre(data.nombre),
        setPacienteApePaterno(data.apePaterno),
        setPacienteApeMaterno(data.apeMaterno)
        ) );
  
    // Obtener el nombre del Usuario
    fetch(`http://localhost:8000/SaludPublica/api/v1/citas/${evaluacion.idCita}/`)
      .then((response) => response.json())
      .then((data) => (
        setCitaId(data.idCita)
        ));
      
  }, [evaluacion]);
  

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-pointer"
      onClick={() => {
        navigate(`/hojaEvaluacion-create/${evaluacion.idHojaClinica}`);
      }}
    >
      <p className="text-sm">Paciente: {pacienteNombre} {pacienteApePaterno} {pacienteApeMaterno}</p>
      <p>Cita No. {citaID}</p>
      <p className="text-sm">Fecha: {evaluacion.fecha_revision}</p>
    </div>
  );
}