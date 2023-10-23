import React from 'react';
import { ResultadosDeBusqueda } from './ResultadosDeBusqueda';

export function ListaDeResultados({ resultados }) {

  if (!resultados) {
    return null;  // No hay paciente seleccionado
  }

  return (
    <div className='lista-resultados'>
    {
      resultados.map((resultado, id) =>{
        return <ResultadosDeBusqueda resultado={resultado} key={id}/> /* Talvez CURP en lugar de id, no estoy seguro */
        
      })
    }
      
    </div>
  );
}

      {/* <h2>Información del Paciente</h2>
      <p>Nombre: {paciente.nombre}</p>
      <p>Edad: {paciente.edad}</p> */}
