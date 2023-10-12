import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ExamenMedicoCard({ examenMedico }) {

  const navigate = useNavigate();
  const [usuarioNombre, setUsuarioNombre] = useState("");
  const [usuarioApePaterno, setUsuarioApePaterno] = useState("");
  const [usuarioApeMaterno, setUsuarioApeMaterno] = useState("");
  const [pacienteNombre, setPacienteNombre] = useState("");
  const [pacienteApePaterno, setPacienteApePaterno] = useState("");
  const [pacienteApeMaterno, setPacienteApeMaterno] = useState("");

  useEffect(() => {
    // Obtener el nombre del Paciente
    fetch(
      `http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/${examenMedico.idPaciente}/`
    )
      .then((response) => response.json())
      .then(
        (data) => (
          setPacienteNombre(data.nombre),
          setPacienteApePaterno(data.apePaterno),
          setPacienteApeMaterno(data.apeMaterno)
        )
      );
      
    // Obtener el nombre del Usuario
    fetch(
      `http://127.0.0.1:8000/SaludPublica/api/v1/usuarios/${examenMedico.idUsuario}/`
    )
      .then((response) => response.json())
      .then(
        (data) => (
          setUsuarioNombre(data.nombre),
          setUsuarioApePaterno(data.ape_paterno),
          setUsuarioApeMaterno(data.ape_materno)
        )
      );
  }, [examenMedico]);

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-pointer"
      onClick={() => {
        navigate(`/examenMedico-create/${examenMedico.idExamenMedico}`);
      }}
    >
      <h1 className="font-bold uppercase">
        Paciente: {pacienteNombre} {pacienteApePaterno} {pacienteApeMaterno}
      </h1>
      <p className="text-sm">Especialista: {usuarioNombre} {usuarioApePaterno} {usuarioApeMaterno}</p>
      <p className="text-sm">Fecha: {examenMedico.fecha}</p>
    </div>
  );
}
