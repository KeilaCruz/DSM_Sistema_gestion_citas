import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPaciente, updatePaciente } from "../../api/Pacientes.api"
import { useForm } from "react-hook-form"
export function ViewPaciente() {
  const { register, handleSubmit, setValue } = useForm()
  const { idPaciente } = useParams()
  const [paciente, setPaciente] = useState([])
  const [activateEdit, setActiEdit] = useState(false)
  useEffect(() => {
    async function loadPaciente() {
      const res = await getPaciente(idPaciente)
      //carga de datos del paciente en un objeto para realizar validaciones
      setPaciente(res.data)
      //establecer los valores que tendran las input de manera predeterminada
      const paciente = res.data
      setValue("nombre", paciente.nombre)
      setValue("apePaterno", paciente.apePaterno)
      setValue("apeMaterno", paciente.apeMaterno)
      setValue("edad", paciente.edad)
      setValue("estado_civil", paciente.estado_civil)
      setValue("CURP", paciente.CURP)
      setValue("escolaridad", paciente.escolaridad)
      setValue("colonia", paciente.colonia)
      setValue("calle", paciente.calle)
      setValue("numero_exterior", paciente.numero_exterior)
      setValue("referencia", paciente.referencia)
      setValue("CP", paciente.CP)
      setValue("telefono", paciente.telefono)
      setValue("derecho_habiencia", paciente.derecho_habiencia)
      setValue("unidad_salud", paciente.unidad_salud)
      setValue("ultima_visita_medico", paciente.ultima_visita_medico)
      setValue("programa_gobierno_federal", paciente.programa_gobierno_federal)
      setValue("cual_programa_federal", paciente.cual_programa_federal)
      setValue("programa_gobierno_municipal", paciente.programa_gobierno_municipal)
      setValue("cual_programa_municipal", paciente.cual_programa_municipal)
      setValue("programa_gobierno_municipal", paciente.programa_gobierno_estatal)
      setValue("cual_programa_estatal", paciente.cual_programa_estatal)
      setValue("numero_personas_vive", paciente.numero_personas_vive)
    }
    loadPaciente()
  }, [])
  const handleActivateEditar = () => {
    setActiEdit(!activateEdit)
  }
  //Actualizar la información del paciente
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await updatePaciente(idPaciente, data)
    } catch (error) {
      console.log(error)
    }
  })
  return (
    <>
      <h2>Ficha de identidad del paciente</h2>
      <form onSubmit={onSubmit}>
        <label>CURP</label>
        <input id="CURP"  {...register("CURP")} disabled={true} />
        <label>Nombre(s)</label>
        <input type="text" id="nombre" {...register("nombre")} disabled={true} />
        <label>Apellido paterno</label>
        <input type="text" id="apePaterno"  {...register("apePaterno")} disabled={true} />
        <label>Apellido materno</label>
        <input type="text" id="apeMaterno"  {...register("apeMaterno")} disabled={true} />
        <label>Estado civil</label>
        <select id="estado_civil" {...register("estado_civil")} disabled={!activateEdit}>
          <option value="Soltero">Soltero</option>
          <option value="Casado">Casado</option>
          <option value="Divorciado">Divorciado</option>
        </select>
        <label>Escolaridad</label>
        <select name="escolaridad" {...register("escolaridad")} disabled={!activateEdit}>
          <option value="Primaria">Primaria</option>
          <option value="Secundaria">Secundaria</option>
          <option value="Bachillerato">Bachillerato</option>
          <option value="Divorciado">Universidad</option>
        </select>
        <label>Colonia</label>
        <input type="text" id="colonia" {...register("colonia")} disabled={!activateEdit} />
        <label>Calle</label>
        <input type="text" id="calle" {...register("calle")} disabled={!activateEdit} />
        <label>Entre calles o referencia</label>
        <textarea type="" id="referencia" {...register("referencia")} disabled={!activateEdit} />
        <label>Telefono</label>
        <input type="text" id="telefono" {...register("telefono")} disabled={!activateEdit} />
        <label>Derechohabiencia</label>
        <input id="derecho_habiencia" {...register("derecho_habiencia")} disabled={!activateEdit} />
        <label>Georeferencia</label>
        <input type="text" id="georeferencia" {...register("unidad_salud")} disabled={!activateEdit} />
        <label>Última visita al médico</label>
        <input type="date" id="ultima_visita_medico" {...register("ultima_visita_medico")} disabled={!activateEdit} />
        <label>Es beneficiario de algún programa de gobierno</label>
        <label>Federal</label>
        <label>Si
          <input type="radio" id="federal_si" name="programa_gobierno_federal" checked={paciente.programa_gobierno_federal === true} {...register("programa_gobierno_federal")} disabled={!activateEdit} />
        </label>
        <label>No
          <input type="radio" id="federal_no" name="programa_gobierno_federal" checked={paciente.programa_gobierno_federal === false} {...register("programa_gobierno_federal")} disabled={!activateEdit} />
        </label>
        {paciente.programa_gobierno_federal && (
          <div>
            <input type="text" id="programa_federal" {...register("cual_programa_federal")} disabled={!activateEdit} />
          </div>
        )}
        <label>Estatal</label>
        <label>Si
          <input type="radio" id="estatal_si" name="programa_gobierno_estatal" checked={paciente.programa_gobierno_estatal === true} {...register("programa_gobierno_estatal")} disabled={!activateEdit} />
        </label>
        <label>No
          <input type="radio" id="estatal_no" name="programa_gobierno_estatal" checked={paciente.programa_gobierno_estatal === false} {...register("programa_gobierno_estatal")} disabled={!activateEdit} />
        </label>
        {paciente.programa_gobierno_estatal && (
          <div>
            <input type="text" id="programa_municipal" {...register("cual_programa_estatal")} disabled={!activateEdit} />
          </div>
        )}
        <label>Municipal</label>
        <label>Si
          <input type="radio" id="municipal_si" name="programa_gobierno_municipal" defaultChecked={paciente.programa_gobierno_municipal === true} {...register("programa_gobierno_municipal")} disabled={!activateEdit} />
        </label>
        <label>No
          <input type="radio" id="municipal_no" name="programa_gobierno_municipal" defaultChecked={paciente.programa_gobierno_municipal === false} {...register("programa_gobierno_municipal")} disabled={!activateEdit} />
        </label>
        {paciente.programa_gobierno_municipal && (
          <div>
            <input type="text" id="programa_federal" {...register("cual_programa_municipal")} disabled={!activateEdit} />
          </div>
        )}
        <input type="number" id="num_per_vive"  {...register("numero_personas_vive")} disabled={!activateEdit}></input>
        {activateEdit && (
          <div>
            <button>Guardar</button>
          </div>
        )}
      </form>
      <button onClick={handleActivateEditar}>Editar</button>
    </>
  )
}




