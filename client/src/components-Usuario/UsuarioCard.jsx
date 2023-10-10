import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function UsuarioCard({usuario}) {

  const navigate = useNavigate();
  const [rolNombre, setRolNombre] = useState("");

  useEffect(() => {  
    // Obtener el nombre del Rol
    fetch(`http://127.0.0.1:8000/SaludPublica/api/v1/roles/${usuario.rol}/`)
      .then((response) => response.json())
      .then((data) => setRolNombre(data.nombre_rol));
  
      
  }, [usuario]);
  

  return (
    <div 
    className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-po"
    onClick={() =>{
      navigate(`/usuario-create/${usuario.id}`);
    }}>
      <h1 className="font-bold uppercase">Usuario: {`${usuario.nombre} ${usuario.ape_paterno} ${usuario.ape_materno}`}</h1>    
      <h1 className="font-bold uppercase">Rol: {rolNombre}</h1>      
    </div>
    
  );
}