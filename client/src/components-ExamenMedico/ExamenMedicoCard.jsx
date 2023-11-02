import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
<div className="col-md-4 mb-4">
<div className="card ">
  <div className="card-body">
    <h4 className="card-title">{pacienteNombre} {pacienteApePaterno} {pacienteApeMaterno}</h4>
    <p className="card-text">
      {" "}
      <b>Especialista:</b> {usuarioNombre} {usuarioApePaterno} {usuarioApeMaterno}
    </p>
    <p className="card-text">
      <b>Fecha:</b> {examenMedico.fecha}{" "}
    </p>
    {/* <Link
      href=""
      className="btn btn-primary me-3"
      to={`/evento-create/visualizar/${examenMedico.idExamenMedico}`}
    >
      Visualizar
    </Link> */}
    <Link
      href=""
      className="btn btn-primary"
      to={`/examenMedico-create/${examenMedico.idExamenMedico}`}
    >
      Editar
    </Link>
  </div>
</div>
</div>

  );
}
