import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function HojaEvaluacionCard({ evaluacion }) {
  const navigate = useNavigate();
  const [citaID, setCitaId] = useState("");
  const [pacienteNombre, setPacienteNombre] = useState("");
  const [pacienteApePaterno, setPacienteApePaterno] = useState("");
  const [pacienteApeMaterno, setPacienteApeMaterno] = useState("");

  useEffect(() => {
    // Obtener el nombre del Paciente
    fetch(
      `http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/${evaluacion.idPaciente}/`
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
      `http://localhost:8000/SaludPublica/api/v1/citas/${evaluacion.idCita}/`
    )
      .then((response) => response.json())
      .then((data) => setCitaId(data.idCita));
  }, [evaluacion]);

  return (
    <div className="col-md-4 mb-4">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">
            {pacienteNombre} {pacienteApePaterno} {pacienteApeMaterno}
          </h5>
          <p className="card-text">
            <b>Fecha:</b> {evaluacion.fecha_revision}{" "}
          </p>
          <Link
            href=""
            className="btn btn-primary me-3"
            to={`/hojaEvaluacion-create/visualizar/${evaluacion.idHojaClinica}`}
          >
            Visualizar
          </Link>
          <Link
            href=""
            className="btn btn-primary"
            to={`/hojaEvaluacion-create/${evaluacion.idHojaClinica}`}
          >
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
}
