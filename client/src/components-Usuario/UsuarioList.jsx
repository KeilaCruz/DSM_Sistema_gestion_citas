import { useEffect, useState } from "react";
import { UsuarioCard } from "./UsuarioCard";
import { getAllUsuarios } from "../api/usuario.api";
import { Link } from "react-router-dom";

export function UsuarioList() {

    const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadUsuarios() {
      const res = await getAllUsuarios();
      setUsuarios(res.data);
    }
    loadUsuarios();
  }, []);

  return (
 


<div className="container-fluid">
      {/* Titulo */}
      <div className="container">
        <div className="text-with-lines">
          <div className="line line-top"></div>
          <p className="display-5 fw-bold">LISTA DE USUARIOS</p>
          <div className="line line-bottom"></div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={"/usuario-create"} className="btn btn-success mt-3 mb-3">
          Crear Usuario
        </Link>
      </div>

      <div className="py-3">
        <div className="container">
          <div className="row hidden-md-up">
          {usuarios.map(usuario => (
        <UsuarioCard key={usuario.idUsuario} usuario={usuario} />
    ))}
          </div>
        </div>
      </div>
    </div>

  );
}
