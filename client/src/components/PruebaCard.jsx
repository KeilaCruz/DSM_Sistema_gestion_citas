import { useNavigate } from "react-router-dom";

export function PruebaCard({prueba}) {

  const navigate = useNavigate();

  return (
    <div 
    className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-po"
    onClick={() =>{
      navigate(`/prueba/${prueba.id}`);
    }}>
      <h1 className="font-bold uppercase">{prueba.texto}</h1>
      <p className="text-slate-400">{prueba.texto2}</p>
      
    </div>
    
  );
}
