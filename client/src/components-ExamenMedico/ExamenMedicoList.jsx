import { useEffect, useState } from "react";
import { ExamenMedicoCard } from "./ExamenMedicoCard";
import { getAllNotasEnfermeria } from "../api/notaEnfermeria.api";

export function ExamenMedicoList() {

    const [examenMedicos, setExamenMedicos] = useState([]);

  useEffect(() => {
    async function loadNotasEnfermeria() {
      const res = await getAllNotasEnfermeria();
      setExamenMedicos(res.data);
    }
    loadNotasEnfermeria();
  }, []);

  return (
  <div className="grid grid-cols-3 gap-3">
    {examenMedicos.map(examenMedico => (
        <ExamenMedicoCard key={examenMedico.id} examenMedico={examenMedico}  />
    ))}
  </div>
  );
}
