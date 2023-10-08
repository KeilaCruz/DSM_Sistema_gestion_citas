import { useEffect, useState } from "react";
import { HojaEvaluacionCard } from "./HojaEvaluacionCard";
import { getAllHojaEvaluaciones } from "../api/hojaEvaluacion.api";

export function HojaEvaluacionList() {

    const [evaluaciones, setEvaluaciones] = useState([]);

  useEffect(() => {
    async function loadHojaEvaluacion() {
      const res = await getAllHojaEvaluaciones();
      setEvaluaciones(res.data);
    }
    loadHojaEvaluacion();
  }, []);

  return (
  <div className="grid grid-cols-3 gap-3">
    {evaluaciones.map(evaluacion => (
        <HojaEvaluacionCard key={evaluacion.id} evaluacion={evaluacion}  />
    ))}
  </div>
  );
}
