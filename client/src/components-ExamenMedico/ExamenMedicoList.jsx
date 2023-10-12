import { useEffect, useState } from "react";
import { ExamenMedicoCard } from "./ExamenMedicoCard";
import { getAllExamenMedico } from "../api/examenMedico.api";

export function ExamenMedicoList() {

    const [examenMedicos, setExamenMedicos] = useState([]);

  useEffect(() => {
    async function loadExamenMedico() {
      const res = await getAllExamenMedico();
      setExamenMedicos(res.data);
    }
    loadExamenMedico();
  }, []);

  return (
  <div className="grid grid-cols-3 gap-3">
    {examenMedicos.map(examenMedico => (
        <ExamenMedicoCard key={examenMedico.idExamenMedico} examenMedico={examenMedico}  />
    ))}
  </div>
  );
}
