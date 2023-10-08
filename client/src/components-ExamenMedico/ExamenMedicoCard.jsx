import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ExamenMedicoCard({ examenMedico }) {
  const navigate = useNavigate();
  const [usuarioNombre, setUsuarioNombre] = useState("");
  const [usuarioApePaterno, setUsuarioApePaterno] = useState("");
  const [usuarioApeMaterno, setUsuarioApeMaterno] = useState("");
  const [rolNombre, setRolNombre] = useState("");
  const [pacienteNombre, setPacienteNombre] = useState("");
  const [pacienteApePaterno, setPacienteApePaterno] = useState("");
  const [pacienteApeMaterno, setPacienteApeMaterno] = useState("");

  useEffect(() => {
    // Obtener el nombre del Paciente
    fetch(
      `http://127.0.0.1:8000/Pacientes/api/v1/pacientes/${examenMedico.paciente}/`
    )
      .then((response) => response.json())
      .then(
        (data) => (
          setPacienteNombre(data.nombre),
          setPacienteApePaterno(data.apePaterno),
          setPacienteApeMaterno(data.apeMaterno)
        )
      );

    // Obtener el nombre del Rol
    fetch(`http://127.0.0.1:8000/Pacientes/api/v1/roles/${examenMedico.rol}/`)
      .then((response) => response.json())
      .then((data) => setRolNombre(data.nombre_rol));

    // Obtener el nombre del Usuario
    fetch(
      `http://127.0.0.1:8000/Pacientes/api/v1/usuarios/${examenMedico.usuario}/`
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
        navigate(`/examenMedico-create/${examenMedico.id}`);
      }}
    >
      <h1 className="font-bold uppercase">
        Paciente: {pacienteNombre} {pacienteApePaterno} {pacienteApeMaterno}
      </h1>
      <p className="text-sm">{rolNombre}: {usuarioNombre} {usuarioApePaterno} {usuarioApeMaterno}</p>
      <p className="text-sm">Fecha: {examenMedico.fecha}</p>
    </div>
  );
}
