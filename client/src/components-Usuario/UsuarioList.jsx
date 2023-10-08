import { useEffect, useState } from "react";
import { UsuarioCard } from "./UsuarioCard";
import { getAllUsuarios } from "../api/usuario.api";

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
  <div className="grid grid-cols-3 gap-3">
    {usuarios.map(usuario => (
        <UsuarioCard key={usuario.id} usuario={usuario} />
    ))}
  </div>
  );
}
