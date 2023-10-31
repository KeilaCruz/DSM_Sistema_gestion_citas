import { useForm } from "react-hook-form"
import { addPaciente, getAllPacientes } from "../../api/Pacientes.api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../css/styles.css"
export function RegisterPaciente() {
    const { register, handleSubmit } = useForm()
    const [pacientes, setPacientes] = useState([])
    const [showCualEstatal, setShowEstatal] = useState(false)
    const [showCualFederal, setShowFederal] = useState(false)
    const [showCualMunicipal, setShowMunicipal] = useState(false)
    const navigate = useNavigate()

    async function loadPacientes() {
        const res = await getAllPacientes()
        setPacientes(res.data)
    }
    loadPacientes()
    //Validar curp si existe o no antes de guardar
    const onSubmit = handleSubmit(async (data) => {
        let existe = pacientes.some((paciente) => paciente.CURP === data.CURP)
        console.log(existe)
        if (existe) {
            alert("Ya se encuentra registrada esa CURP")
        } else {
            const res = await addPaciente(data)
            console.log(res)
            navigate('/get-pacientes')
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
            <h3 className="title">FICHA DE IDENTIDAD DEL PACIENTE</h3>
            <form onSubmit={onSubmit}>
                <label className="label-form">Nombres(s)</label>
                <input className="input-form" type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                <label className="label-form">Apellido paterno</label>
                <input className="input-form" type="text" placeholder="Apellido paterno" {...register("apePaterno", { required: true })} />
                <label className="label-form">Apellido materno</label>
                <input className="input-form" type="text" placeholder="Apellido materno" {...register("apeMaterno", { required: true })} />
                <label className="label-form">Edad</label>
                <input className="input-form" type="number" placeholder="Edad" {...register("edad", { required: true })} />
                <label className="label-form">Estado civil</label>
                <select className="input-form" name="estado_civil" {...register("estado_civil", { required: true })}>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                </select>
                <label className="label-form">CURP</label>
                <input className="input-form" type="text" placeholder="CURP" {...register("CURP", { required: true })} />
                <label className="label-form">Escolaridad</label>
                <select className="input-form" name="escolaridad" {...register("escolaridad", { required: true })}>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachillerato">Bachillerato</option>
                    <option value="Divorciado">Universidad</option>
                </select>
                <label className="label-form">Colonia</label>
                <input className="input-form" type="text" placeholder="Colonia" {...register("colonia", { required: true })} />
                <label className="label-form">Calle</label>
                <input className="input-form" type="text" placeholder="Calle" {...register("calle", { required: true })} />
                <label className="label-form">Número exterior</label>
                <input className="input-form" type="number" placeholder="Número" {...register("numero_exterior", { required: true })} />
                <label className="label-form">Entre que calles o referencia</label>
                <textarea className="input-form" placeholder="Entre calles o referencia" {...register("referencia", { required: true })}></textarea>
                <label className="label-form">CP</label>
                <input className="input-form" type="number" placeholder="CP" {...register("CP", { required: true })} />
                <label className="label-form">Teléfono</label>
                <input className="input-form" type="text" placeholder="Telefono" {...register("telefono", { required: true })} />
                <label className="label-form">Derechohabiencia</label>
                <select className="input-form" name="derecho_habiencia" {...register("derecho_habiencia", { required: true })}>
                    <option value="IMSS">IMSS</option>
                    <option value="ISSSTE">ISSSTE</option>
                    <option value="PEMEX">PEMEX</option>
                    <option value="SEDENA">SEDENA</option>
                    <option value="SEDMAR">SEDMAR</option>
                    <option value="SSA/SESVER">SSA/SESVER</option>
                </select>
                <label className="label-form">Unidad de salud</label>
                <input className="input-form" type="text" placeholder="Unidad de salud" {...register("unidad_salud", { required: true })} />
                <label className="label-form">Última visita al médico</label>
                <input className="input-form" type="date" placeholder="Ultima visita con su medico" {...register("ultima_visita_medico", { required: true })} />

                <label className="label-form">Es beneficiario de algún programa de gobierno</label>
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
                        <input className="input-form" type="text" placeholder="Nombre del programa federal" {...register("cual_programa_federal")} />
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
                        <input className="input-form" type="text" placeholder="Nombre del programa estatal" {...register("cual_programa_estatal")} />
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
                        <input className="input-form" type="text" placeholder="Nombre del programa municipal" {...register("cual_programa_municipal")} />
                    </div>
                )}
                <input className="input-form" type="number" placeholder="Cuantas personas vive con usted" {...register("numero_personas_vive", { required: true })} />
                <button className="button-form">Registrar</button>
            </form>
        </>
    )
}

