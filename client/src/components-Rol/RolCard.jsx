import { useNavigate } from "react-router-dom";

export function RolCard({rol}) {

  const navigate = useNavigate();

  return (
    <div 
    className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-po"
    onClick={() =>{
      navigate(`/rol-create/${rol.idRol}`);
    }}>
      <h1 className="font-bold uppercase">{rol.nombre_rol}</h1>
      <p className="text-slate-400">{rol.descripcion}</p>
      
    </div>
    
  );
}