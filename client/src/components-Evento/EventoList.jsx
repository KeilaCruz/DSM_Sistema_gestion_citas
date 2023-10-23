import { useEffect, useState } from "react";
import { EventoCard } from "./EventoCard";
import { getAllEventos } from "../api/evento.api";

export function EventoList() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function loadEventos() {
      const res = await getAllEventos();
      setEventos(res.data);
    }
    loadEventos();
  }, []);

  return (
    <div className="container-fluid">
      {/* Titulo */}
      <div className="container" >
        <div className="text-with-lines">
          <div className="line line-top"></div>
          <p className="display-5 fw-bold">LISTA DE EVENTOS</p>
          <div className="line line-bottom"></div>
        </div>

      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
  <a href="/evento-create"><button className="btn btn-primary">Crear Evento</button></a>
</div>
        

      <div className="py-3">
        <div className="container">
          <div className="row hidden-md-up">
            {eventos.map((evento) => (
              <EventoCard key={evento.idEvento} evento={evento} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
