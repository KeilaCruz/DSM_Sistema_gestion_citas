import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function UsuarioCard({usuario}) {

  const navigate = useNavigate();
  const [rolNombre, setRolNombre] = useState("");

  useEffect(() => {  
    // Obtener el nombre del Rol
    fetch(`http://127.0.0.1:8000/SaludPublica/api/v1/roles/${usuario.idRol}/`)
      .then((response) => response.json())
      .then((data) => setRolNombre(data.nombre_rol));
  
      
  }, [usuario]);
  

  return (
<div className="col-md-4 mb-4">
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{`${usuario.nombre} ${usuario.ape_paterno} ${usuario.ape_materno}`}</h5>
          <p className="card-text">
            {" "}
            <b>Rol:</b> {rolNombre}
          </p>
          <Link
            href=""
            className="btn btn-primary me-3"
            to={`/usuario-create/visualizar/${usuario.idUsuario}`}
          >
            Visualizar
          </Link>
          <Link
            href=""
            className="btn btn-primary"
            to={`/usuario-create/${usuario.idUsuario}`}
          >
            Editar
          </Link>
        </div>
      </div>
    </div>
    
  );
}