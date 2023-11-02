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
    <div className="container-fluid">
      {/* Titulo */}
      <div className="container" >
        <div className="text-with-lines">
          <div className="line line-top"></div>
          <p className="display-5 fw-bold">EXAMENES MÉDICOS</p>
          <div className="line line-bottom"></div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="/examenMedico-create">
          <button className="btn btn-primary">Crear Examen médico</button>
        </a>
      </div>

      <div className="py-3">
        <div className="container">
          <div className="row hidden-md-up">
          {examenMedicos.map(examenMedico => (
        <ExamenMedicoCard key={examenMedico.idExamenMedico} examenMedico={examenMedico}  />
            ))}
          </div>
        </div>
      </div>

    </div>
  
  );
}
