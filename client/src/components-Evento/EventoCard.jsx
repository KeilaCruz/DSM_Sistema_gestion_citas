import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function EventoCard({ evento }) {

  const [usuarioNombre, setUsuarioNombre] = useState("");
  const [usuarioApePaterno, setUsuarioApePaterno] = useState("");
  const [usuarioApeMaterno, setUsuarioApeMaterno] = useState("");

  useEffect(() => {
    // Obtener el nombre del Usuario
    fetch(
      `http://127.0.0.1:8000/SaludPublica/api/v1/usuarios/${evento.idUsuario}/`
    )
      .then((response) => response.json())
      .then(
        (data) => (
          setUsuarioNombre(data.nombre),
          setUsuarioApePaterno(data.ape_paterno),
          setUsuarioApeMaterno(data.ape_materno)
        )
      );
  }, [evento]);

  return (
    <div className="col-md-4 mb-4">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{evento.nom_evento}</h5>
          <p className="card-text">
            {" "}
            <b>Creado por:</b> {usuarioNombre} {usuarioApePaterno}{" "}
            {usuarioApeMaterno}
          </p>
          <p className="card-text">
            <b>Fecha:</b> {evento.fecha}{" "}
          </p>
          <p className="card-text">
            <b>Hora:</b> {evento.hora}{" "}
          </p>
          <Link
            href=""
            className="btn btn-primary me-3"
            to={`/evento-create/visualizar/${evento.idEvento}`}
          >
            Visualizar
          </Link>
          <Link
            href=""
            className="btn btn-primary"
            to={`/evento-create/${evento.idEvento}`}
          >
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
}
