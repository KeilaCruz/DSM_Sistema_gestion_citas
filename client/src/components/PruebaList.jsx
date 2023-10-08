import { useEffect, useState } from "react";
import { PruebaCard } from "./PruebaCard"; 
import { getAllPruebas } from "../api/prueba.api";

export function PruebaList() {

    const [pruebas, setPruebas] = useState([]);

  useEffect(() => {
    async function loadPruebas() {
      const res = await getAllPruebas();
      setPruebas(res.data);
    }
    loadPruebas();
  }, []);

  return (
  <div className="grid grid-cols-3 gap-3">
    {pruebas.map(prueba => (
        <PruebaCard key={prueba.id} prueba={prueba} />
    ))}
  </div>
  );
}
