import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function EventoCard({ evento }) {

  const navigate = useNavigate();

  const [usuarioNombre, setUsuarioNombre] = useState("");
  const [usuarioApePaterno, setUsuarioApePaterno] = useState("");
  const [usuarioApeMaterno, setUsuarioApeMaterno] = useState("");

  useEffect(() => {
    // Obtener el nombre del Usuario
    fetch(`http://127.0.0.1:8000/SaludPublica/api/v1/usuarios/${evento.idUsuario}/`)
      .then((response) => response.json())
      .then((data) => (
        setUsuarioNombre(data.nombre)
        ,setUsuarioApePaterno(data.ape_paterno)
        ,setUsuarioApeMaterno(data.ape_materno)

        ));
  }, [evento]);

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-pointer"
      onClick={() => {
        navigate(`/evento-create/${evento.idEvento}`);
      }}
    >
        <h1 className="font-bold uppercase">
        Evento: {evento.nom_evento}
      </h1>
      <p className="text-sm">
        Creado por: {usuarioNombre} {usuarioApePaterno}{usuarioApeMaterno}
      </p>
      <p className="text-sm">
        Fecha: {evento.fecha} 
      </p>
      <p className="text-sm">
        Hora: {evento.hora} 
      </p>
    </div>
  );
}
