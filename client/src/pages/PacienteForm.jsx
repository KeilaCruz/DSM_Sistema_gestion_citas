
export function PacienteForm() {
  return (
    <>
      <div>
        <form >
          <input type="text" placeholder="Nombre" id="nombre" />
          <input type="text" placeholder="Apellido paterno" id="apePater" />
          <input type="text" placeholder="Apellido materno" id="apeMater" />
          <input type="number" placeholder="Edad" id="edad" />
          <select name="estado_civil">
            <option value="Soltero">Soltero</option>
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
          </select>
          <input type="text" placeholder="CURP" />
          <select name="escolaridad">
            <option value="Primaria">Primaria</option>
            <option value="Secundaria">Secundaria</option>
            <option value="Bachillerato">Bachillerato</option>
          </select>
          <input type="text" placeholder="Calle" id="calle" />
          <input type="number" placeholder="Número" id="numero-calle" />
          <input type="text" placeholder="Colonia" id="colonia" />
          <textarea placeholder="Entre calles o referencia" id="referencia"></textarea>
          <input type="number" placeholder="CP" id="cp" />
          <input type="text" placeholder="Calle" id="calle" />
          <input type="text" placeholder="Telefono" id="telefono" />
          <input type="text" placeholder="Derechohabiencia" id="derechohabiencia" />
          <input type="text" placeholder="Derechohabiencia" id="derechohabiencia" />
          <input type="date" placeholder="Ultima visita con su medico" id="ultima visita"/>
          <input type="number" placeholder="Cuantas personas vive con usted" id="num_personas_vive"/>
          <button>Guardar</button>
        </form>
      </div>
    </>
  )
}

