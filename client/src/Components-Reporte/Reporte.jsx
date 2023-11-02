import React, { useState, useEffect } from 'react';
import axios from 'axios';


const pacientesApi = axios.create({
	baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/',
  });


export const Reporte = () => {
	
	const [cantidadPacientes, setCantidadPacientes] = useState(0);

  useEffect(() => {
    // Realiza una solicitud para obtener todos los pacientes
    pacientesApi.get("/")
      .then((response) => {
        // Obtiene la longitud del array de pacientes en la respuesta
        const totalPacientes = response.data.length;
        setCantidadPacientes(totalPacientes);
      })
      .catch((error) => {
        console.error('Error al obtener la cantidad de pacientes:', error);
      });
  }, []);

	return (
		<>
			<p>Cantidad de pacientes registrados: {cantidadPacientes}</p>
		</>
	);
}
