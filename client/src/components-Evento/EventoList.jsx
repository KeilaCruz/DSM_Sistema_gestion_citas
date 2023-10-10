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
  <div className="grid grid-cols-3 gap-3">
    {eventos.map(evento => (
        <EventoCard key={evento.idEvento} evento={evento}  />
    ))}
  </div>
  );
}
