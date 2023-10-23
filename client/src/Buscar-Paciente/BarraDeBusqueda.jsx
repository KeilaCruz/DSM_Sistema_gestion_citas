import { React, useState } from "react";
import { getPacientes } from "../api/paciente.api";
import { toast } from "react-hot-toast";

export function BarraDeBusqueda({ setResultados }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const fechData = async (value) => {
    await fetch("http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        const resultados = json.filter((paciente) => {
          const nombreCompleto = paciente.nombre + paciente.apePaterno + paciente.apeMaterno + paciente.CURP;
          return (
            value &&
            paciente &&
            nombreCompleto &&
            nombreCompleto.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResultados(resultados);
      });
  };

  const handleChanges = (value) => {
    setTerminoBusqueda(value);
    fechData(value);
  };

  /* const buscarPaciente = async () => {
    try {
      const response = await getPacientes(terminoBusqueda);
      const paciente = response.data;  // Supongamos que la respuesta contiene los datos del paciente
      setResultados(paciente);  // Llama a la función de devolución de llamada con los datos del paciente
    } catch (error) {
      toast.error("Error al realizar la busqueda", {
        // Muestra una notificación de éxito
        duration: 4000,
        style: {
          backgroundColor: "#101010",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "20px",
        },
      });
    }
  } */

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar paciente por nombre"
        value={terminoBusqueda}
        onChange={(e) => handleChanges(e.target.value)}
      />
      {/* <button onClick={buscarPaciente}>Buscar</button> */}
    </div>
  );
}
