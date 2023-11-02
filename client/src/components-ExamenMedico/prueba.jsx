import { useForm } from "react-hook-form"
import { addPaciente } from "../../api/Pacientes.api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function RegisterPaciente() {
    const { register, handleSubmit } = useForm()
    const [showCualEstatal, setShowEstatal] = useState(false)
    const [showCualFederal, setShowFederal] = useState(false)
    const [showCualMunicipal, setShowMunicipal] = useState(false)
    const navigate = useNavigate()
    //Al definir la curp como unica en el back ya se valida si existe o no
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await addPaciente(data)
            console.log(res)
            navigate('/get-pacientes')
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("El paciente que desea registrar ya se encuentra registrado")
            } else {
                console.log("Error de solicitud")
            }
        }
    })
    //activar campo para ingresar nombre de programa en el cuál es beneficiario
    const handleRadioFederalChange = (evt) => {
        const optionSeleccionada = evt.target.value;
        if (optionSeleccionada == 'true') {
            setShowFederal(true)
        } else if (optionSeleccionada == 'false') {
            setShowFederal(false)
        }
    }
    const handleRadioEstatalChange = (evt) => {
        const optionSeleccionada = evt.target.value;
        if (optionSeleccionada == 'true') {
            setShowEstatal(true)
        } else if (optionSeleccionada == 'false') {
            setShowEstatal(false)
        }
    }

    const handleRadioMunicipalChange = (evt) => {
        const optionSeleccionada = evt.target.value;
        if (optionSeleccionada == 'true') {
            setShowMunicipal(true)
        } else if (optionSeleccionada == 'false') {
            setShowMunicipal(false)
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                <input type="text" placeholder="Apellido paterno" {...register("apePaterno", { required: true })} />
                <input type="text" placeholder="Apellido materno" {...register("apeMaterno", { required: true })} />
                <input type="number" placeholder="Edad" {...register("edad", { required: true })} />
                <select name="estado_civil" {...register("estado_civil", { required: true })}>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                </select>
                <input type="text" placeholder="CURP" {...register("CURP", { required: true })} />
                <select name="escolaridad" {...register("escolaridad", { required: true })}>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachillerato">Bachillerato</option>
                    <option value="Divorciado">Universidad</option>
                </select>
                <input type="text" placeholder="Colonia" {...register("colonia", { required: true })} />
                <input type="text" placeholder="Calle" {...register("calle", { required: true })} />
                <input type="number" placeholder="Número" {...register("numero_exterior", { required: true })} />
                <textarea placeholder="Entre calles o referencia" {...register("referencia", { required: true })}></textarea>
                <input type="number" placeholder="CP" {...register("CP", { required: true })} />
                <input type="text" placeholder="Telefono" {...register("telefono", { required: true })} />
                <select name="derecho_habiencia" {...register("derecho_habiencia", { required: true })}>
                    <option value="IMSS">IMSS</option>
                    <option value="ISSSTE">ISSSTE</option>
                    <option value="PEMEX">PEMEX</option>
                    <option value="SEDENA">SEDENA</option>
                    <option value="SEDMAR">SEDMAR</option>
                    <option value="SSA/SESVER">SSA/SESVER</option>
                </select>
                <input type="text" placeholder="Unidad de salud" {...register("unidad_salud", { required: true })} />
                <input type="date" placeholder="Ultima visita con su medico" {...register("ultima_visita_medico", { required: true })} />

                <label>Es beneficiario de algún programa de gobierno</label>
                <label>Federal</label>
                <label for="federal_si">Si
                    <input type="radio" id="federal_si" name="federal_option" value={true} {...register("programa_gobierno_federal", { required: true })} onChange={handleRadioFederalChange} />
                </label>
                <label for="federal_no">No
                    <input type="radio" id="federal_no" name="federal_option" value={false} {...register("programa_gobierno_federal", { required: true })} onChange={handleRadioFederalChange} />
                </label>
                {showCualFederal && (
                    <div>
                        <label>¿Cuál</label>
                        <input type="text" placeholder="Nombre del programa federal" {...register("cual_programa_federal")} />
                    </div>
                )}
                <label>Estatal</label>
                <label for="estatal_si">Si
                    <input type="radio" id="estatal_si" name="estatal_option" value={true} {...register("programa_gobierno_estatal", { required: true })} onChange={handleRadioEstatalChange} />
                </label>
                <label for="estatal_no">No
                    <input type="radio" id="estatal_no" name="estatal_option" value={false} {...register("programa_gobierno_estatal", { required: true })} onChange={handleRadioEstatalChange} />
                </label>
                {showCualEstatal && (
                    <div>
                        <label>¿Cuál</label>
                        <input type="text" placeholder="Nombre del programa estatal" {...register("cual_programa_estatal")} />
                    </div>
                )}
                <label>Municipal</label>
                <label for="municipal_si">Si
                    <input type="radio" id="municipal_si" name="municipal_option" value={true} {...register("programa_gobierno_municipal", { required: true })} onChange={handleRadioMunicipalChange} />
                </label>
                <label for="municipal_no">No
                    <input type="radio" id="municipal_no" name="estatal_option" value={false} {...register("programa_gobierno_municipal", { required: true })} onChange={handleRadioMunicipalChange} />
                </label>
                {showCualMunicipal && (
                    <div>
                        <label>¿Cuál</label>
                        <input type="text" placeholder="Nombre del programa municipal" {...register("cual_programa_municipal")} />
                    </div>
                )}
                <input type="number" placeholder="Cuantas personas vive con usted" {...register("numero_personas_vive", { required: true })} />
                <button>Registrar</button>
            </form>
        </>
    )
}