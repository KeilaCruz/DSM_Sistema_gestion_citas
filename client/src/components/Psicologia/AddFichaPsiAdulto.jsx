import { useForm } from "react-hook-form"
import { addFichaPsiAdulto } from "../../api/Psico.Adulto.api"
import { useState } from "react"

export function AddFichaPsiAdulto() {
    const { register, handleSubmit } = useForm()
    const [showAtencionPsico, setAtencionPsico] = useState(false)
    const [showPsicomaticos, setPsicomaticos] = useState(false)
    const [showCronica, setCronica] = useState(false)
    const [showTratamientoMedico, setTratamientoMedico] = useState(false)
    const [showIntervencionQuirur, setIntervencionQuirur] = useState(false)
    const [showAdiccion, setAdicion] = useState(false)
    const [showAbusoSexual, setAbusoSexual] = useState(false)
    const [showMetodoConceptivo, setMetodoConceptivo] = useState(false)
    const [isFemenino, setFemenino] = useState(false)
    const [isMasculino, setMasculino] = useState(false)
    const handleAtencionPsico = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setAtencionPsico(true)
        } else if (opcion === 'false') {
            setAtencionPsico(false)
        }
    }
    const handlePsicomaticos = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setPsicomaticos(true)
        } else if (opcion === 'false') {
            setPsicomaticos(false)
        }
    }
    const handleCronica = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setCronica(true)
        } else if (opcion === 'false') {
            setCronica(false)
        }
    }
    const handleTratamientoMedico = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setTratamientoMedico(true)
        } else if (opcion === 'false') {
            setTratamientoMedico(false)
        }
    }
    const handleIntervencionQuirur = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setIntervencionQuirur(true)
        } else if (opcion === 'false') {
            setIntervencionQuirur(false)
        }
    }
    const handleAdicion = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setAdicion(true)
        } else if (opcion === 'false') {
            setAdicion(false)
        }
    }
    const handleAbusoSexual = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setAbusoSexual(true)
        } else if (opcion === 'false') {
            setAbusoSexual(false)
        }
    }
    const handleMetodoConceptivo = (evt) => {
        const opcion = evt.target.value;
        if (opcion === 'true') {
            setMetodoConceptivo(true)
        } else if (opcion === 'false') {
            setMetodoConceptivo(false)
        }
    }
    const handleGeneroFemenino = (evt) => {
        const option = evt.target.value;
        if (option === 'F') {
            setFemenino(true)
        } else if (option === 'M') {
            setMasculino(false)
        }
    }
    const handleGeneroMasculino = (evt) => {
        const option = evt.target.value;
        if (option === 'M') {
            setMasculino(true)
        } else if (option === 'F') {
            setFemenino(false)
        }
    }
    const onSubmit = handleSubmit(async (data) => {
        const res = await addFichaPsiAdulto(data)
        console.log(res)
    })

    return (
        <>
            <div className="container-fluid">
                <form onSubmit={onSubmit} className="row g-3">
                    <div className="col-md-4 offset-1">
                        <label htmlFor="code_expediente" className="form-label">Número de expediente</label>
                        <input id="code_expediente " type="text" placeholder="codigo de expediente" className="form-control" {...register("expedienteFicha", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="fecha_registro" className="form-label">Fecha de registro</label>
                        <input id="fecha_registro" type="date" className="form-control" {...register("fecha_registro", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label className="form-check-label mx-2">Femenino
                            <input className="form-check-input" type="radio" id="sexo_femenino" name="option_sexo" value="F" onChange={handleGeneroFemenino} />
                        </label>
                        <label className="label-form mx-2">Masculino
                            <input className="form-check-input" type="radio" id="sexo_masculino" name="option_sexo" value="M" onChange={handleGeneroMasculino} />
                        </label>
                    </div>
                    <div className="offset-1 col-md-12">
                        <label htmlFor="section_datos_generales">Datos generales</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="fecha_nacimiento" className="form-label">Fecha de nacimiento</label>
                        <input id="fecha_nacimiento" className="form-control" type="date" placeholder="fecha de nacimiento" {...register("fecha_nacimiento", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="lugar_nacimiento" className="form-label">Lugar de nacimiento</label>
                        <input id="lugar_nacimiento" className="form-control" type="text" placeholder="Lugar de nacimiento" {...register("lugar_nacimiento", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="num_hijos" className="form-label">Número de hijos</label>
                        <input id="num_hijos" className="form-control" type="number" placeholder="numero de hijos" {...register("numero_hijos", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="edad_hijos" className="form-label">Edad de los hijos</label>
                        <input id="edad_hijos" className="form-control" type="text" placeholder="edad" {...register("edad_hijos")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="ocupacion_hijos" className="form-label">Ocupación de los hijos</label>
                        <input id="ocupacion" type="text" placeholder="ocupacion" className="form-control" {...register("ocupacion_hijos")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="religion" className="form-label">Religión</label>
                        <input id="religion" type="text" placeholder="religion" className="form-control" {...register("religion", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="ocupacion" className="form-label">Ocupación</label>
                        <input id="ocupacion" type="text" placeholder="ocupacion" className="form-control" {...register("ocupacion", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="nivel_socioeconomico" className="form-label">Nivel socioeconómico</label>
                        <input type="text" placeholder="Nivel socioeconomico" className="form-control" {...register("nivel_socioeconomico", { required: true })} />
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="motivo_consulta" className="form-label">Motivo de la consulta</label>
                        <textarea id="motivo_consulta" className="form-control" placeholder="motivo de consulta" {...register("motivo_consulta")}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="referido_por" className="form-label">Referido por</label>
                        <input id="referido" type="text" placeholder="referido por" className="form-control" {...register("referido", { required: true })} />
                    </div>
                    <div className="col-md-12 offset-1">
                        <label htmlFor="atencion_psicologica" className="form-label">¿Haz recibido orientación psicológica anteriormente</label>
                    </div>
                    <div className="col-md-12 offset-1">
                        <label className="form-check-label mx-2">Si
                            <input className="form-check-input" type="radio" id="orientacion_si" name="option_orientacion" value={true} {...register("recibido_orientacion_psicologica", { required: true })} onChange={handleAtencionPsico} />
                        </label>
                        <label className="form-check-label mx-2">No
                            <input className="form-check-input" type="radio" id="orientacion_no" name="option_orientacion" value={false} {...register("recibido_orientacion_psicologica", { required: true })} onChange={handleAtencionPsico} />
                        </label>
                    </div>
                    {showAtencionPsico && (
                        <div className="row g-3">
                            <div className="col-md-4 offset-1">
                                <label htmlFor="motivos_orientacion" className="form-label">Explicar los motivos y por quién fue atendido</label>
                                <textarea id="motivos_orientacion" className="form-control" placeholder="Motivos" {...register("motivos_orientacion")}></textarea>
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="tiempo_orientacion">Durante cuanto tiempo de orientacion</label>
                                <input id="tiempo_orientacion" className="form-control" type="text" placeholder="Semanas, días, años" {...register("tiempo_orientacion")} />
                            </div>
                        </div>

                    )}
                    <div className="col-md-12 offset-1">
                        <label htmlFor="label_Historia_paciente">2. Historia actual del paciente </label>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historial_actual" className="form-label">
                            Lo que está haciendo en este momento, su vida familiar, laboral, social.
                            Describir como es su vida en este momento
                        </label>
                        <textarea id="historia_actual" className="form-control" placeholder="Historia actual del paciente" {...register("historia_actual_paciente", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_desarrollo" className="col-md-12 offset-1">3. Historia del desarrollo</label>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="descripcion" className="form-label">
                            Hijo deseado o no; situación de la pareja en ese momento; expectativa de los padres respecto
                            al bebe por nacer; lugar que ocupa en la familia; abortos; si hubo complicaciones o si fue normal
                        </label>
                        <textarea id="historia_desarrollo" className="form-control" placeholder="Historia de desarrollo" {...register("historia_desarrollo", { required: true })}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="primeros_años" className="form-label">De manera general, como fueron los 4 primeros años de vida del sujeto</label>
                        <textarea id="des_primeros_años" className="form-control" placeholder="Primero cuatro años" {...register("primeros_cuatro_años", { required: true })}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historia_escolar">4. Historia escolar</label>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historia_escolar_kinder" className="form-label">
                            Checar si asistió a la escuela, como era su relación con compañeros y profesores, calificaciones,
                            problemas específicos, etc.
                        </label>
                        <textarea id="historia_escolar_kinder" className="form-control" placeholder="Historia escolar en el kinder" {...register("historia_escolar_kinder", { required: true })}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historia_escolar_primaria" className="form-label">Primaria</label>
                        <textarea id="historia_escolar_primaria" className="form-control" placeholder="Historia escolar en la primaria" {...register("historia_escolar_primaria", { required: true })}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historia_escolar_secundaria" className="form-label">Secundaria</label>
                        <textarea id="historia_escolar_secundaria" className="form-control" placeholder="Historia escolar en la secundaria" {...register("historia_escolar_secundaria", { required: true })}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historia_escolar_preparatoria" className="form-label">Preparatoria</label>
                        <textarea id="historia_escolar_prepa" className="form-control" placeholder="Historia escolar en la preparatoria" {...register("historia_escolar_preparatoria", { required: true })}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historia_profesional" className="form-label">Profesional</label>
                        <textarea id="historia_escolar_profesional" className="form-control" placeholder="Historia escolar profesional" {...register("historia_escolar_profesional", { required: true })}></textarea>
                    </div>
                    <div className="col-md-9 offset-1">
                        <label htmlFor="historia_laboral" className="form-label">
                            Checar desde que la persona recibe una remuneración por realizar determinadas actividades de manera informal, hasta empleo
                            formales; porque los ha dejado, si se siente a gusto o no, como son las relaciones con sus compañeros y con sus jefes
                        </label>
                        <textarea id="hsitoria_laboral" className="form-control" placeholder="Historia laboral" {...register("historia_laboral", { required: true })}></textarea>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="gusta_trabajo" className="form-label">¿Qué es lo que más gusta de su trabajo?</label>
                        <input id="gusta_trabajo" className="form-control" type="text" placeholder="Gusta del trabajo" {...register("gusta_trabajo", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="no_gusta_trabajo" className="form-label">¿Qué es lo que no le gusta de su trabajo?</label>
                        <input id="no_gusta_trabajo" className="form-control" type="text" placeholder="No gusta del trabajo" {...register("no_gusta_trabajo", { required: true })} />
                    </div>
                    <div className="col-md-12 offset-1">
                        <label htmlFor="historia_familiar">5. Historia familiar</label>

                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="percibe_padres" className="form-label">Como percibe el paciente a sus padres</label>
                        <input id="percepcion padres" className="form-control" type="text" placeholder="Percepción de los padres" {...register("percibe_padres")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="no_conocer" className="form-label">Si no los conoce, que le han contado de ellos</label>
                        <input id="que_contado_padres" className="form-control" type="text" placeholder="Que le han contado" {...register("contado_padres")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="percibe_persona_vive" className="form-label">Como percibe el paciente a las personas que viven en su casa</label>
                        <input id="percepcion_vive" className="form-control" type="text" placeholder="Percepción de los que vive con usted" {...register("percibe_vive_casa", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="percibe_hijos" className="form-label">Como percibe el paciente a sus hijos</label>
                        <input id="percepcion_hijos" className="form-control" type="text" placeholder="Percepción de los hijos" {...register("percibe_hijos")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="familiares_significativos" className="form-label">Otros miembros de la familia que sean significativos</label>
                        <input id="otros-familiares_significativos" className="form-control" type="text" placeholder="Otros familiares significativos" {...register("otros_familiares_significativos")} />
                    </div>
                    <div className="col-md-4 offset-1 mt-4">
                        <label htmlFor="tiene_mascotas" className="form-label">¿Tiene mascotas?</label>
                        <label className="form-check-label mx-2">Si
                            <input className="form-check-input" type="radio" id="mascota_si" name="option_mascota" value={true} {...register("tiene_mascotas", { required: true })} />
                        </label>
                        <label className="form-check-label mx-2">No
                            <input className="form-check-input" type="radio" id="mascota_no" name="option_mascota" value={false} {...register("tiene_mascotas", { required: true })} />
                        </label>
                    </div>
                    <div className="col-md-12 offset-1">
                        <label htmlFor="historia_medico_quirurgica">6. Historia médico-quirúrgica</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="padecimientos_heredofamiliares" className="form-label">Padecimientos heredofamiliares</label>
                        <input id="padecimientos_heredofamiliares" className="form-control" type="text" placeholder="padecimientos heredofamiliares" {...register("padecimientos_heredofamiliares")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="enfermedades_padecido" className="form-label">
                            De manera general, menciones enfermedades mas significativa que ha padecido
                        </label>
                        <input id="enfermedades_padecido" className="form-control" type="text" placeholder="enfermedades que ha padecido" {...register("enfermedades_padecido")} />
                    </div>
                    <div className="col-md-12 offset-1">
                        <label htmlFor="sintomas_psicomaticos" className="form-label col-md-12">¿Presenta síntomas o transtornos psicosomáticos?</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="psicomaticos_si" name="option_psicomatico" value={true} {...register("padece_sintomas_transtornos_psicomaticos", { required: true })} onChange={handlePsicomaticos} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="psicomaticos_no" name="option_psicomatico" value={false} {...register("padece_sintomas_transtornos_psicomaticos", { required: true })} onChange={handlePsicomaticos} />
                        </label>
                    </div>
                    {showPsicomaticos && (
                        <div className="col-md-4 offset-1">
                            <label htmlFor="cuales_psicomaticos" className="form-label">¿Cuáles?</label>
                            <input id="cuales_psicomaticos" className="form-control" type="text" placeholder="Cuáles sintomas o transtornos psicomaticos" {...register("cuales_psicomaticos")} />
                        </div>
                    )}
                    <div className="col-md-12 offset-1">
                        <label htmlFor="enfermedades_cronicas" className="form-label">¿Padece enfermedades crónicas?</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="cronica_si" name="option_cronicas" value={true} {...register("padece_enfermedad_cronica", { required: true })} onChange={handleCronica} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="cronica_no" name="option_cronicas" value={false} {...register("padece_enfermedad_cronica", { required: true })} onChange={handleCronica} />
                        </label>

                    </div>
                    {showCronica && (
                        <div className="col-md-4 offset-1">
                            <label htmlFor="cual_cronica" className="form-label">¿Cuál?</label>
                            <input id="cual_cronica" className="form-control" type="text" placeholder="Cuál enfermedad crónica" {...register("cual_cronica")} />
                        </div>
                    )}
                    <div className=" col-md-12 offset-1">
                        <label htmlFor="bajo_tratamiento" className="form-label">¿Actualmente está bajo tratamiento médico?</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="tratamiento_si" name="option_tratamiento" value={true} {...register("bajo_tratamiento", { required: true })} onChange={handleTratamientoMedico} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="tratamiento_no" name="option_tratamiento" value={false} {...register("bajo_tratamiento", { required: true })} onChange={handleTratamientoMedico} />
                        </label>

                    </div>
                    {showTratamientoMedico && (
                        <div className="col-md-4 offset-1">
                            <label htmlFor="cual_tratamiento" className="form_label">¿Cuál?</label>
                            <input className="form-control" id="cual_tratamiento_medico" type="text" placeholder="Cuál tratamiento" {...register("cual_tratamiento")} />
                        </div>
                    )}
                    <div className="col-md-12 offset-1">
                        <label htmlFor="intervenido_quirurgicamente" className="form-label">¿Ha sido intervenido quirúrgicamente?</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="cirugia_si" name="option_cirugia" value={true} {...register("intervenido_quirurgicamente", { required: true })} onChange={handleIntervencionQuirur} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="cirugia_no" name="option_cirugia" value={false} {...register("intervenido_quirurgicamente", { required: true })} onChange={handleIntervencionQuirur} />
                        </label>
                    </div>
                    {showIntervencionQuirur && (
                        <div className="col-md-4 offset-1">
                            <label htmlFor="causa_intervencion" className="form-label">Especificar la causa y la edad que tenía cuando sucedió</label>
                            <input className="form-control" id="causa_intervencion" type="text" placeholder="Causa de intervención" {...register("causa_intervencion")} />
                        </div>
                    )}
                    <div className="col-md-12 offset-1">
                        <label htmlFor="adicciones" className="form-label">¿Tiene adicciones o ha tenido adicciones de algún tipo?</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="adicciones-si" name="option-adicciones" value={true} {...register("tiene_adicciones", { required: true })} onChange={handleAdicion} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="adicciones-no" name="option-adicciones" value={false} {...register("tiene_adicciones", { required: true })} onChange={handleAdicion} />
                        </label>

                    </div>
                    {showAdiccion && (
                        <div className="col-md-4 offset-1">
                            <label htmlFor="cual_adiccion" className="form-label">¿Cuál?</label>
                            <input className="form-control" id="cual_adiccion" type="text" placeholder="Cuál adicción" {...register("cual_adiccion")} />
                        </div>
                    )}
                    <div className="col-md-9 offset-1">
                        <label htmlFor="otro_datos" className="form-label">Otros datos que puedan ser signficativos accidentes, intoxicaciones, etc. </label>
                        <textarea className="form-control" id="otros_datos" placeholder="Otros datos" {...register("otros_datos", { required: true })}></textarea>
                    </div>
                    <div className="col-md-12 offset-1">
                        <label htmlFor="atencion_medica_adecuada" className="form-label">Ha sido recibido atención médica adecuada</label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="atencionmedica_si" name="option_atencionmedica" value={true} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="atencionmedica_no" name="option_atencionmedica" value={false} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                        </label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="especificacion" className="form-label">Especificar</label>
                        <textarea className="form-control" id="calidad_atencion_medica" placeholder="Especificar" {...register("especificar")}></textarea>
                    </div>
                    <div className="col-md-12 offset-1">
                        <label htmlFor="historia_sexual_section" className="form-label">7. Historia sexual</label>
                    </div>

                    <div className="row g-3">
                        <div>
                            <label htmlFor="diferencia_sexual" className="form-label offset-1">¿Desde cuando y como se dio cuenta de la diferencia de géneros</label>
                        </div>
                        <div className="col-md-4 offset-1">
                            <input className="form-control" id="cuando_diferencia_genero" type="text" placeholder="¿Cuándo noto la diferencia de genero?" {...register("cuando_diferencia_genero", { required: true })} />
                        </div>
                        <div className="col-md-4 offset-1">
                            <input className="form-control" id="como_diferencia_genero" type="text" placeholder="¿Cómo se dio cuenta de la diferencia de genero?" {...register("como_diferencia_genero", { required: true })} />
                        </div>
                    </div>

                    <div className="col-md-4 offset-1">
                        <label htmlFor="genero-asignado" className="form-label">¿Qué genero le asignaron al paciente desde niño? checar los juegos, juguetes, vestidos, etc.</label>
                        <input className="form-control" id="cual_genero_niño" type="text" placeholder="¿Cuál se le asigno de niño?" {...register("genero_asignaron_niño", { required: true })} />
                    </div>

                    <div className="col-md-4 offset-1">
                        <label htmlFor="sufrido_abuso" className="form-label mx-1">¿Ha tenido experiencias de abuso sexual?</label>
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="abusosexual_si" name="option_abusosexual" value={true} {...register("recibido_atencion_medica_adecuada", { required: true })} onChange={handleAbusoSexual} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="abusosexual_no" name="option_abusosexual" value={false} {...register("recibido_atencion_medica_adecuada", { required: true })} onChange={handleAbusoSexual} />
                        </label>
                    </div>
                    {showAbusoSexual && (
                        <div className="row g-3">
                            <div className="col-md-4 offset-1">
                                <label htmlFor="edad_abuso" className="form-label">¿A qué edad?</label>
                                <input id="edad_abuso" className="form-control" type="number" placeholder="Edad de abuso sexual" {...register("edad_abuso_sexual")} />
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="por_quien" className="form-label">¿Por quién?</label>
                                <input id="por_quien_abuso" className="form-control" type="text" placeholder="¿Por quién sufrió dicho abuso?" {...register("por_quien_abuso_sexual")} />
                            </div>
                        </div>
                    )}
                    <div className="col-md-4 offset-1">
                        <label htmlFor="sexualmente_activo" className="form-label mx-1">Sexualmente activo</label>
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="activo_si" name="option_sexualactivo" value={true} {...register("sexualmente_activo", { required: true })} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="activo_no" name="option_sexualactivo" value={false} {...register("sexualmente_activo", { required: true })} />
                        </label>
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="edad_primera_relacion" className="form-label">¿A qué edad tuvo la primera relación sexual?</label>
                        <input id="edad_primera_relacion_sexual" className="form-control" type="number" placeholder="edad de primera relacion sexual" {...register("edad_primera_relacion_sexual", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="con_quien" className="form-label">¿Con quién?</label>
                        <input className="form-control" id="quien_primera_relacion_sexual" type="text" placeholder="con quien primera relacion sexual" {...register("con_quien_primera", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="como_han_sido" className="form-label">De manera general, ¿Cómo han sido sus experiencias sexuales?</label>
                        <input id="experiencia_sexual" className="form-control" type="text" placeholder="como han sido" {...register("como_hansido_experiencia_sexual", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="metodo_conceptivo" className="form-label mx-1" >¿Utiliza algún método conceptivo?</label>
                        <label className="form-check-label mx-1">Si
                            <input className="form-check-input" type="radio" id="conceptivo_si" name="option_conceptivo" value={true} {...register("utiliza_metodo_conceptivo", { required: true })} onChange={handleMetodoConceptivo} />
                        </label>
                        <label className="form-check-label mx-1">No
                            <input className="form-check-input" type="radio" id="conceptivo_no" name="option_conceptivo" value={false} {...register("utiliza_metodo_conceptivo", { required: true })} onChange={handleMetodoConceptivo} />
                        </label>
                    </div>
                    {showMetodoConceptivo && (
                        <div className="col-md-4 offset-1">
                            <label htmlFor="cual_conceptivo" className="form-label">¿Cuál?</label>
                            <input id="cual_conceptivo" className="form-control" type="text" placeholder="Cuál método conceptivo" {...register("cual_metodo_conceptivo")} />
                        </div>
                    )}

                    {isFemenino && (
                        <div className="row g-3">
                            <div className="col-md-4 offset-1">
                                <label htmlFor="edad_menarca" className="form.label">¿A qué edad tuvo la menarca?</label>
                                <input id="edad_primera_menarca" className="form-control" type="number" placeholder="edad menarca" {...register("edad_menarca")} />
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="información_menarca" className="form.label">¿Qué información tenia al respecto?</label>
                                <input id="info_tenia_menarca" className="form-control" type="text" placeholder="¿Que información tenia?" {...register("informacion_tenia_menarca")} />
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="quien_proporcio_menarca" className="form.label">¿Quién?</label>
                                <input id="proporcion_info_menarca" className="form-control" type="text" placeholder="¿Quién le proporciono esa información?" {...register("quien_dio_info_menarca")} />
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="como_recibio_info_menarca" className="form.label">¿Cómo?</label>
                                <input id="como_info-menarca" className="form-control" type="text" placeholder="¿Cómo recibio esa información?" {...register("como_recibio_info_menarca")} />
                            </div>
                        </div>
                    )}

                    {isMasculino && (
                        <div className="row g-3">
                            <div className="col-md-4 offset-1">
                                <label htmlFor="edad_eyaculaciones" className="form-label">¿A qué edad tuvo las primeras eyaculaciones nocturnas?</label>
                                <input id="edad_primera_eyaculacion" className="form-control" type="number" placeholder="edad de primeras eyaculaciones nocturnas" {...register("edad_primeras_eyaculaciones_nocturnas")} />
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="informacion_respecto" className="form-label">¿Qué información tenia al respecto'</label>
                                <input id="info_tenia_eyaculacion" className="form-control" type="text" placeholder="¿Que informacion tenia?" {...register("informacion_tenia_eyaculacion")} />
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="quien_proporcion_eyaculacion" className="form-label">¿Quién?</label>
                                <input id="quien_dio_info" className="form-control" type="text" placeholder="¿Quién le proporciono esa información?" {...register("quien_dio_info")} />
                            </div>
                            <div className="col-md-4 offset-1">
                                <label htmlFor="como_recibio_info_eyaculacion" className="form-label">¿Cómo?</label>
                                <input id="como_info_eyaculacion" className="form-control" type="text" placeholder="¿Cómo recibio esta información?" {...register("como_recibio_info_eyaculacion")} />
                            </div>
                        </div>
                    )}
                    {/*<input type="text" placeholder="curp del paciente" {...register("idPaciente", { required: true })} />
                    <input type="number" placeholder="num de usuario" {...register("idUsuario", { required: true })} />
                    */ }
                    <div className="col-md-4 offset-1">
                        <label htmlFor="relaciones_diferentes" className="form-label">¿Ha tenido relaciones distintas a las heterosexuales?</label>
                        <input id="cual_relacion" className="form-control" type="text" placeholder="Cuál relación" {...register("tenido_relaciones_distintas_heterosexuales")} />
                    </div>
                    <div>
                        <button>Guardar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

