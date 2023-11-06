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
<div className="container-fluid">
{/* Titulo */}
<div className="container">
  <div className="text-with-lines">
    <div className="line line-top"></div>
    <p className="display-5 fw-bold">HOJAS DE EVALUACIONES CLÍNICAS</p>
    <div className="line line-bottom"></div>
  </div>
</div>

<div style={{ display: "flex", justifyContent: "center" }}>
  <a href="/hojaEvaluacion-create">
    <button className="btn btn-success mt-3 mb-3">Nueva Hoja de evaluación clínica</button>
  </a>
</div>

<div className="py-3">
  <div className="container">
    <div className="row hidden-md-up">
    {evaluaciones.map(evaluacion => (
        <HojaEvaluacionCard key={evaluacion.idHojaClinica} evaluacion={evaluacion}  />
    ))}
    </div>
  </div>
</div>
</div>

  );
}
