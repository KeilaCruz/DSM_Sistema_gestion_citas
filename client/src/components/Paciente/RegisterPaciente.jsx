import { useForm } from "react-hook-form"
import { addPaciente, getAllPacientes } from "../../api/Pacientes.api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../css/styles.css"
export function RegisterPaciente() {
    const { register, handleSubmit } = useForm()
    const [pacientes, setPacientes] = useState([])
    const [showCualEstatal, setShowEstatal] = useState(false)
    const [showCualFederal, setShowFederal] = useState(false)
    const [showCualMunicipal, setShowMunicipal] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        async function loadPacientes() {
            const res = await getAllPacientes()
            setPacientes(res.data)
        }
        loadPacientes()
    })
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
            <div className="container-fluid">
                <div>
                    <hr />
                    <h3 className="title">FICHA DE IDENTIDAD DEL PACIENTE</h3>
                    <hr />
                </div>
                <form onSubmit={onSubmit} className="row g-3">
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="Nombre" className="form-label">Nombres(s)</label>
                        <input className="form-control" type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="apePaterno" className="form-label">Apellido paterno</label>
                        <input className="form-control" type="text" placeholder="Apellido paterno" {...register("apePaterno", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="apeMaterno" className="form-label" >Apellido materno</label>
                        <input className="form-control" type="text" placeholder="Apellido materno" {...register("apeMaterno", { required: true })} />
                    </div>
                    <div className="col-md-2 offset-md-1">
                        <label htmlFor="edad" className="form-label" >Edad</label>
                        <input className="form-control" type="number" placeholder="Edad" {...register("edad", { required: true })} />
                    </div>
                    <div className="col-md-2 offset-md-0.6">
                        <label htmlFor="estado_civil" className="form-label" >Estado civil</label>
                        <select className="form-control" name="estado_civil" {...register("estado_civil", { required: true })}>
                            <option value="Soltero">Soltero</option>
                            <option value="Casado">Casado</option>
                            <option value="Divorciado">Divorciado</option>
                        </select>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="curp" className="form-label" >CURP</label>
                        <input className="form-control" type="text" placeholder="CURP" {...register("CURP", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="escolaridad" className="form-label">Escolaridad</label>
                        <select className="form-control" name="escolaridad" {...register("escolaridad", { required: true })}>
                            <option value="Primaria">Primaria</option>
                            <option value="Secundaria">Secundaria</option>
                            <option value="Bachillerato">Bachillerato</option>
                            <option value="Divorciado">Universidad</option>
                        </select>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="colonia" className="form-label" >Colonia</label>
                        <input className="form-control" type="text" placeholder="Colonia" {...register("colonia", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label className="form-label" >Calle</label>
                        <input className="form-control" type="text" placeholder="Calle" {...register("calle", { required: true })} />
                    </div>
                    <div className="col-md-2 offset-md-1">
                        <label htmlFor="numero_exterior" className="form-label" >Número exterior</label>
                        <input className="form-control" type="number" placeholder="Número" {...register("numero_exterior", { required: true })} />
                    </div>
                    <div className="col-md-2 offset-md-0.8">
                        <label htmlFor="cp" className="form-label" >CP</label>
                        <input className="form-control" type="number" placeholder="CP" {...register("CP", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="referencia" className="form-label" >Entre que calles o referencia</label>
                        <textarea className="form-control" placeholder="Entre calles o referencia" {...register("referencia", { required: true })}></textarea>
                    </div>
                    <div className="col-md-2 offset-md-1">
                        <label htmlFor="telefono" className="form-label" >Teléfono</label>
                        <input className="form-control" type="text" placeholder="Telefono" {...register("telefono", { required: true })} />
                    </div>
                    <div className="col-md-2 offset-md-0.8">
                        <label htmlFor="derecho_habiencia" className="form-label" >Derechohabiencia</label>
                        <select className="form-control" name="derecho_habiencia" {...register("derecho_habiencia", { required: true })}>
                            <option value="IMSS">IMSS</option>
                            <option value="ISSSTE">ISSSTE</option>
                            <option value="PEMEX">PEMEX</option>
                            <option value="SEDENA">SEDENA</option>
                            <option value="SEDMAR">SEDMAR</option>
                            <option value="SSA/SESVER">SSA/SESVER</option>
                        </select>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="unidad_salud" className="form-label" >Unidad de salud</label>
                        <input className="form-control" type="text" placeholder="Unidad de salud" {...register("unidad_salud", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label className="form-label" >Última visita al médico</label>
                        <input className="form-control" type="date" placeholder="Ultima visita con su medico" {...register("ultima_visita_medico", { required: true })} />

                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="num_persona_vive" className="form-label">Número de personas con la que vive</label>
                        <input className="form-control" type="number" placeholder="¿Cuantas personas vive con usted?" {...register("numero_personas_vive", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="federal" className="form-label">Federal</label>
                        <label htmlFor="federal_si" className="form-label mx-2" for="federal_si">Si
                            <input className="form-check-input" type="radio" id="federal_si" name="federal_option" value={true} {...register("programa_gobierno_federal", { required: true })} onChange={handleRadioFederalChange} />
                        </label>
                        <label className="form-label mx-2" for="federal_no">No
                            <input className="form-check-input" type="radio" id="federal_no" name="federal_option" value={false} {...register("programa_gobierno_federal", { required: true })} onChange={handleRadioFederalChange} />
                        </label>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        {showCualFederal && (
                            <div>
                                <label htmlFor="cual_programa_federal" className="form-label mx-2">¿Cuál</label>
                                <input className="form-control" type="text" placeholder="Nombre del programa federal" {...register("cual_programa_federal")} />
                            </div>
                        )}
                    </div>

                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="estatal">Estatal</label>
                        <label className="form-label mx-2" for="estatal_si">Si
                            <input className="form-check-input" type="radio" id="estatal_si" name="estatal_option" value={true} {...register("programa_gobierno_estatal", { required: true })} onChange={handleRadioEstatalChange} />
                        </label>
                        <label className="form-label mx-2" for="estatal_no">No
                            <input className="form-check-input" type="radio" id="estatal_no" name="estatal_option" value={false} {...register("programa_gobierno_estatal", { required: true })} onChange={handleRadioEstatalChange} />
                        </label>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        {showCualEstatal && (
                            <div>
                                <label htmlFor="cual_estatal" className="form-label">¿Cuál</label>
                                <input className="form-control" type="text" placeholder="Nombre del programa estatal" {...register("cual_programa_estatal")} />
                            </div>
                        )}
                    </div>


                    <div className="col-md-4 offset-md-1">
                        <label htmlFor="municipal" className="form-label">Municipal</label>
                        <label htmlFor="municipal_si" className="form-label mx-2" for="municipal_si">Si
                            <input className="form-check-input" type="radio" id="municipal_si" name="municipal_option" value={true} {...register("programa_gobierno_municipal", { required: true })} onChange={handleRadioMunicipalChange} />
                        </label>
                        <label htmlFor="municipal_no" className="form-label mx-2" for="municipal_no">No
                            <input className="form-check-input" type="radio" id="municipal_no" name="estatal_option" value={false} {...register("programa_gobierno_municipal", { required: true })} onChange={handleRadioMunicipalChange} />
                        </label>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        {showCualMunicipal && (
                            <div>
                                <label htmlFor="cual_municipal" className="form-label">¿Cuál</label>
                                <input className="form-control" type="text" placeholder="Nombre del programa municipal" {...register("cual_programa_municipal")} />
                            </div>
                        )}
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <button className="button-form">Registrar</button>
                    </div>
                </form>
            </div>

        </>
    )
}

