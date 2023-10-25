import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPaciente } from "../../api/Pacientes.api"
export function ViewPaciente() {
  const [paciente, setPaciente] = useState([])
  const { idPaciente } = useParams()

  async function loadPaciente() {
    const res = await getPaciente(idPaciente)
    setPaciente(res.data)
  }
  loadPaciente()
  
  return (
    <>
      <h2>Ficha de identificación del paciente</h2>
      <label>Nombre(s)</label>
      <input id="nombre" value={paciente.nombre} />
      <label>Apellido paterno</label>
      <input id="apePaterno" value={paciente.apePaterno} />
      <label>Apellido materno</label>
      <input id="apeMaterno" value={paciente.apeMaterno} />
      <label>Estado civil</label>
      <input id="estado_civil" value={paciente.estado_civil} />
      <label>CURP</label>
      <input id="CURP" value={paciente.CURP} />
      <label>Colonia</label>
      <input id="colonia" value={paciente.colonia} />
      <label>Calle</label>
      <input id="calle" value={paciente.calle} />
      <label>Entre calles o referencia</label>
      <input id="referencia" value={paciente.referencia} />
      <label>Telefono</label>
      <input id="telefono" value={paciente.telefono} />
      <label>Derechohabiencia</label>
      <input id="derecho_habiencia" value={paciente.derecho_habiencia} />
      <label>Georeferencia</label>
      <input id="georeferencia" value={paciente.unidad_salud} />
      <label>Última visita al médico</label>
      <input id="ultima_visita_medico" value={paciente.ultima_visita_medico} />
      <label>Es beneficiario de algún programa de gobierno</label>
      <label>Federal</label>
      <label for="federal_si">Si
        <input type="radio" id="federal_si" name="federal_option" value={true} />
      </label>
      <label for="federal_no">No
        <input type="radio" id="federal_no" name="federal_option" value={false} />
      </label>
      <label>Estatal</label>
      <label for="estatal_si">Si
        <input type="radio" id="estatal_si" name="estatal_option" value={true} />
      </label>
      <label for="estatal_no">No
        <input type="radio" id="estatal_no" name="estatal_option" value={false} />
      </label>
      <label>Municipal</label>
      <label for="municipal_si">Si
        <input type="radio" id="municipal_si" name="municipal_option" value={true} />
      </label>
      <label for="municipal_no">No
        <input type="radio" id="municipal_no" name="estatal_option" value={false} />
      </label>
    </>
  )
}




