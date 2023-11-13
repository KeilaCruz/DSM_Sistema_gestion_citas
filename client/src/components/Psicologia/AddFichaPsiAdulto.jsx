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
        const opcion = evt.targe.value;
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
        if (option === 'F') {
            setFemenino(false)
        } else if (option === 'M') {
            setMasculino(true)
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
                        <input type="text" placeholder="codigo de expediente" className="form-control" {...register("expedienteFicha", { required: true })} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="fecha_registro" className="form-label">Fecha de registro</label>
                        <input type="date" className="form-control" {...register("fecha_registro", { required: true })} />
                    </div>
                    <div>
                        <label className="label-form mt-1">Sexo</label>
                        <label className="form-label">Femenino
                            <input type="radio" id="sexo_femenino" name="option_sexo" value="F" onChange={handleGeneroFemenino} />
                        </label>
                        <label className="label-form">Masculino
                            <input type="radio" id="sexo_masculino" name="option_sexo" value="M" onChange={handleGeneroMasculino} />
                        </label>
                    </div>
                    <label htmlFor="section_datos_generales">Datos generales</label>
                    <div className="col-md-4 offset-2">
                        <label htmlFor="fecha_nacimiento" className="form-label">Fecha de nacimiento</label>
                        <input type="date" placeholder="fecha de nacimiento" {...register("fecha_nacimiento", { required: true })} />
                    </div>
                    <input type="text" placeholder="curp del paciente" {...register("idPaciente", { required: true })} />
                    <input type="number" placeholder="num de usuario" {...register("idUsuario", { required: true })} />
                    <div>
                        <label htmlFor="lugar_nacimiento">Lugar de nacimiento</label>
                        <input type="text" placeholder="Lugar de nacimiento" {...register("lugar_nacimiento", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="num_hijos">Número de hijos</label>
                        <input type="number" placeholder="numero de hijos" {...register("numero_hijos", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="edad_hijos">Edad de los hijos</label>
                        <input type="text" placeholder="edad" {...register("edad_hijos")} />
                    </div>
                    <div>
                        <label htmlFor="ocupacion_hijos">Ocupación de los hijos</label>
                        <input type="text" placeholder="ocupacion" {...register("ocupacion_hijos")} />
                    </div>
                    <div>
                        <label htmlFor="religion">Religión</label>
                        <input type="text" placeholder="religion" {...register("religion", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="ocupacion">Ocupación</label>
                        <input type="text" placeholder="ocupacion" {...register("ocupacion", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="nivel_socioeconomico">Nivel socioeconómico</label>
                        <input type="text" placeholder="Nivel socioeconomico" {...register("nivel_socioeconomico", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="motivo_consulta">Motivo de la consulta</label>
                        <textarea placeholder="motivo de consulta" {...register("motivo_consulta")}></textarea>
                    </div>
                    <div>
                        <label htmlFor="referido_por">Referido por</label>
                        <input type="text" placeholder="referido por" {...register("referido", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="atencion_psicologica">¿Ha recibido orientación psicológica anteriormente</label>
                        <label>Si
                            <input type="radio" id="orientacion_si" name="option_orientacion" value={true} {...register("recibido_orientacion_psicologica", { required: true })} onChange={handleAtencionPsico} />
                        </label>
                        <label for="orientacion-no">No
                            <input type="radio" id="orientacion_no" name="option_orientacion" value={false} {...register("recibido_orientacion_psicologica", { required: true })} onChange={handleAtencionPsico} />
                        </label>
                    </div>
                    {showAtencionPsico && (
                        <div>
                            <div>
                                <label htmlFor="motivos_orientacion">Explicar los motivos y por quién fue atendido</label>
                                <textarea placeholder="Motivos de la orientacion" {...register("motivos_orientacion")}></textarea>

                            </div>
                            <div>
                                <label htmlFor="tiempo_orientacion">Durante que tiempo</label>
                                <input type="text" placeholder="Tiempo de orientacion" {...register("tiempo_orientacion")} />
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="historial_actual">
                            Historial actual del paciente. Lo que está haciendo en este momento, su vida familiar, laboral, social.
                            Describir como es su vida en este momento
                        </label>
                        <textarea placeholder="Historia actual del paciente" {...register("historia_actual_paciente", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_desarrollo">Historia del desarrollo</label>
                        <label htmlFor="descripcion">
                            Hijo deseado o no; situación de la pareja en ese momento; expectativa de los padres respecto
                            al bebe por nacer; lugar que ocupa en la familia; abortos; si hubo complicaciones o si fue normal
                        </label>
                        <textarea placeholder="Historia de desarrollo" {...register("historia_desarrollo", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="primeros_años">De manera general, como fueron los 4 primeros años de vida del sujeto</label>
                        <textarea placeholder="Primero cuatro años" {...register("primeros_cuatro_años", { required: true })}></textarea>
                    </div>
                    <label htmlFor="historia_escolar">Historia escolar</label>
                    <div>
                        <label htmlFor="historia_escolar_kinder">
                            Checar si asistió a la escuela, como era su relación con compañeros y profesores, calificaciones,
                            problemas específicos, etc.
                        </label>
                        <textarea placeholder="Historia escolar en el kinder" {...register("historia_escolar_kinder", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_escolar_primaria">Primaria</label>
                        <textarea placeholder="Historia escolar en la primaria" {...register("historia_escolar_primaria", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_escolar_secundaria">Secundaria</label>
                        <textarea placeholder="Historia escolar en la secundaria" {...register("historia_escolar_secundaria", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_escolar_preparatoria">Preparatoria</label>
                        <textarea placeholder="Historia escolar en la preparatoria" {...register("historia_escolar_preparatoria", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_profesional">Profesional</label>
                        <textarea placeholder="Historia escolar profesional" {...register("historia_escolar_profesional", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_laboral">
                            Checar desde que la personarecibe una remuneración por realizar determinadas actividades d emanera informal, hasta empleo
                            formales; porque los ha dejado, si se siente a gusto o no, como son las relaciones con sus compañeros y con sus jefes
                        </label>
                        <textarea placeholder="Historia laboral" {...register("historia_laboral", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="gusta_trabajo">¿Qué es lo que más gusta de su trabajo?</label>
                        <input type="text" placeholder="Gusta del trabajo" {...register("gusta_trabajo", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="no_gusta_trabajo">¿Qué es lo que no le gusta de su trabajo?</label>
                        <input type="text" placeholder="No gusta del trabajo" {...register("no_gusta_trabajo", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="historia_familiar">Historia familiar</label>
                        <label htmlFor="percibe_padres">Como percibe el paciente a sus padres</label>
                        <input type="text" placeholder="Percepción de los padres" {...register("percibe_padres")} />
                    </div>
                    <div>
                        <label htmlFor="no_conocer">Si no los conoce, que le han contado de ellos</label>
                        <input type="text" placeholder="Que le han contado" {...register("contado_padres")} />
                    </div>
                    <div>
                        <label htmlFor="percibe_persona_vive">Como percibe el paciente a las personas que viven en su casa</label>
                        <input type="text" placeholder="Percepción de los que vive con usted" {...register("percibe_vive_casa", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="percibe_hijos">Como percibe el paciente a sus hijos</label>
                        <input type="text" placeholder="Percepción de los hijos" {...register("percibe_hijos")} />
                    </div>
                    <div>
                        <label htmlFor="familiares_significativos">Otros miembros de la familia que sean significativos</label>
                        <input type="text" placeholder="Otros familiares significativos" {...register("otros_familiares_significativos")} />
                    </div>
                    <div>
                        <label htmlFor="tiene_mascotas">¿Tiene mascotas?</label>
                        <label>Si
                            <input type="radio" id="mascota_si" name="option_mascota" value={true} {...register("tiene_mascotas", { required: true })} />
                        </label>
                        <label>No
                            <input type="radio" id="mascota_no" name="option_mascota" value={false} {...register("tiene_mascotas", { required: true })} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="historia_medico_quirurgica">Historia médico-quirúrgica</label>
                        <label htmlFor="padecimientos_heredofamiliares">Padecimientos heredofamiliares</label>
                        <input type="text" placeholder="padecimientos heredofamiliares" {...register("padecimientos_heredofamiliares")} />
                    </div>
                    <div>
                        <label htmlFor="enfermedades_padecido">
                            De manera general, ¿Cuáles han sido las enfermedades signicativas que ha padecido?
                        </label>
                        <input type="text" placeholder="enfermedades que ha padecido" {...register("enfermedades_padecido")} />
                    </div>
                    <div>
                        <label htmlFor="sintomas_psicomaticos">¿Presenta síntomas o transtornos psicosomáticos?</label>
                        <label>Si
                            <input type="radio" id="psicomaticos_si" name="option_psicomatico" value={true} {...register("padece_sintomas_transtornos_psicomaticos", { required: true })} onChange={handlePsicomaticos} />
                        </label>
                        <label>No
                            <input type="radio" id="psicomaticos_no" name="option_psicomatico" value={false} {...register("padece_sintomas_transtornos_psicomaticos", { required: true })} onChange={handlePsicomaticos} />
                        </label>
                    </div>
                    {showPsicomaticos && (
                        <div>
                            <label htmlFor="cuales_psicomaticos">¿Cuáles?</label>
                            <input type="text" placeholder="Cuáles sintomas o transtornos psicomaticos" {...register("cuales_psicomaticos")} />
                        </div>
                    )}
                    <div>
                        <label htmlFor="enfermedades_cronicas">Padece enfermedades cronicas</label>
                        <label>Si
                            <input type="radio" id="cronica_si" name="option_cronicas" value={true} {...register("padece_enfermedad_cronica", { required: true })} onChange={handleCronica} />
                        </label>
                        <label>No
                            <input type="radio" id="cronica_no" name="option_cronicas" value={false} {...register("padece_enfermedad_cronica", { required: true })} onChange={handleCronica} />
                        </label>

                    </div>
                    {showCronica && (
                        <div>
                            <label htmlFor="cual_cronica">Cuál</label>
                            <input type="text" placeholder="Cuál enfermedad crónica" {...register("cual_cronica")} />
                        </div>
                    )}
                    <div>
                        <label htmlFor="bajo_tratamiento">¿Actualmente está bajo tratamiento médico?</label>
                        <label>Si
                            <input type="radio" id="tratamiento_si" name="option_tratamiento" value={true} {...register("bajo_tratamiento", { required: true })} onChange={handleTratamientoMedico} />
                        </label>
                        <label>No
                            <input type="radio" id="tratamiento_no" name="option_tratamiento" value={false} {...register("bajo_tratamiento", { required: true })} onChange={handleTratamientoMedico} />
                        </label>

                    </div>
                    {showTratamientoMedico && (
                        <div>
                            <label htmlFor="cual_tratamiento">¿Cuál?</label>
                            <input type="text" placeholder="Cuál tratamiento" {...register("cual_tratamiento")} />
                        </div>
                    )}
                    <div>
                        <label htmlFor="intervenido_quirurgicamente">¿Ha sido intervenido quirúrgicamente?</label>
                        <label>Si
                            <input type="radio" id="cirugia_si" name="option_cirugia" value={true} {...register("intervenido_quirurgicamente", { required: true })} onChange={handleIntervencionQuirur} />
                        </label>
                        <label>No
                            <input type="radio" id="cirugia_no" name="option_cirugia" value={false} {...register("intervenido_quirurgicamente", { required: true })} onChange={handleIntervencionQuirur} />
                        </label>
                    </div>
                    {showIntervencionQuirur && (
                        <div>
                            <label htmlFor="causa_intervencion">Especificar la causa y la edad que tenía cuando sucedió</label>
                            <input type="text" placeholder="Causa de intervención" {...register("causa_intervencion")} />
                        </div>
                    )}

                    <div>
                        <label htmlFor="adicciones">¿Tiene adicciones o ha tenido adicciones de algún tipo?</label>
                        <label>Si
                            <input type="radio" id="adicciones-si" name="option-adicciones" value={true} {...register("tiene_adicciones", { required: true })} onChange={handleAdicion} />
                        </label>
                        <label>No
                            <input type="radio" id="adicciones-no" name="option-adicciones" value={false} {...register("tiene_adicciones", { required: true })} onChange={handleAdicion} />
                        </label>

                    </div>
                    {showAdiccion && (
                        <div>
                            <label htmlFor="cual_adiccion">¿Cuál?</label>
                            <input type="text" placeholder="Cuál adicción" {...register("cual_adiccion")} />
                        </div>
                    )}
                    <div>
                        <label htmlFor="otro_datos">Otros datos que puedan ser signficativos accidentes, intoxicaciones, etc. </label>
                        <textarea placeholder="Otros datos" {...register("otros_datos", { required: true })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="atencion_medica_adecuada">Ha sido recibido atención médica adecuada</label>
                        <label>Si
                            <input type="radio" id="atencionmedica_si" name="option_atencionmedica" value={true} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                        </label>
                        <label>No
                            <input type="radio" id="atencionmedica_no" name="option_atencionmedica" value={false} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="especificacion">Especificar</label>
                        <textarea placeholder="Especificar" {...register("especificar")}></textarea>
                    </div>
                    <div>
                        <label htmlFor="historia_sexual">Historia sexual</label>
                        <label htmlFor="diferencia_sexual">¿Desde cuando y como se dio cuenta de la diferencia de géneros</label>
                        <input type="text" placeholder="¿Cuándo noto la diferencia de genero?" {...register("cuando_diferencia_genero", { required: true })} />
                        <input type="text" placeholder="¿Cómo se dio cuenta de la diferencia de genero?" {...register("como_diferencia_genero", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="genero-asignado">¿Qué genero le asignaron al paciente desde niño? checar los juegos, juguetes, vestidos, etc.</label>
                        <input type="text" placeholder="¿Cuál se le asigno de niño?" {...register("genero_asignaron_niño", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="sufrido_abuso">¿Ha tenido experiencias de abuso sexual?</label>
                        <label>Si
                            <input type="radio" id="abusosexual_si" name="option_abusosexual" value={true} {...register("recibido_atencion_medica_adecuada", { required: true })} onChange={handleAbusoSexual} />
                        </label>
                        <label>No
                            <input type="radio" id="abusosexual_no" name="option_abusosexual" value={false} {...register("recibido_atencion_medica_adecuada", { required: true })} onChange={handleAbusoSexual} />
                        </label>
                    </div>
                    {showAbusoSexual && (
                        <div>
                            <div>
                                <label htmlFor="edad_abuso">¿A qué edad?</label>
                                <input type="number" placeholder="edad" {...register("edad_abuso_sexual")} />
                            </div>
                            <div>
                                <label htmlFor="por_quien">¿Por quién?</label>
                                <input type="text" placeholder="¿Por quién?" {...register("por_quien_abuso_sexual")} />
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="sexualmente_activo">Sexualmente activo</label>
                        <label>Si
                            <input type="radio" id="activo_si" name="option_sexualactivo" value={true} {...register("sexualmente_activo", { required: true })} />
                        </label>
                        <label>No
                            <input type="radio" id="activo_no" name="option_sexualactivo" value={false} {...register("sexualmente_activo", { required: true })} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="edad_primera_relacion">¿A qué edad tuvo la primera relación sexual?</label>
                        <input type="number" placeholder="edad de primera relacion sexual" {...register("edad_primera_relacion_sexual", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="con_quien_">¿Con quién?</label>
                        <input type="text" placeholder="con quien primera relacion sexual" {...register("con_quien_primera", { required: true })} />
                    </div>
                    <div>
                        <label htmlFor="como_han_sido">De manera general, ¿Cómo han sido sus experiencias sexuales?</label>
                        <input type="text" placeholder="como han sido" {...register("como_hansido_experiencia_sexual", { required: true })} />
                    </div>
                    <div>
                        <label>¿Utiliza algún método conceptivo?</label>
                        <label>Si
                            <input type="radio" id="conceptivo_si" name="option_conceptivo" value={true} {...register("utiliza_metodo_conceptivo", { required: true })} onChange={handleMetodoConceptivo} />
                        </label>
                        <label>No
                            <input type="radio" id="conceptivo_no" name="option_conceptivo" value={false} {...register("utiliza_metodo_conceptivo", { required: true })} onChange={handleMetodoConceptivo} />
                        </label>
                    </div>
                    {showMetodoConceptivo && (
                        <div>
                            <label htmlFor="cual_conceptivo">¿Cuál?</label>
                            <input type="text" placeholder="Cuál método conceptivo" {...register("cual_metodo_conceptivo")} />
                        </div>
                    )}

                    <div>
                        <label htmlFor="relaciones_diferentes">¿Ha tenido relaciones distintas a las heterosexuales?</label>
                        <input type="text" placeholder="Cuál relación" {...register("tenido_relaciones_distintas_heterosexuales")} />
                    </div>
                    {isFemenino && (
                        <div>
                            <div>
                                <label htmlFor="edad_menarca">¿A qué edad tuvo la menarca?</label>
                                <input type="number" placeholder="edad menarca" {...register("edad_menarca")} />
                            </div>
                            <div>
                                <label htmlFor="información_menarca">¿Qué información tenia al respecto?</label>
                                <input type="text" placeholder="¿Que información tenia?" {...register("informacion_tenia_menarca")} />
                            </div>
                            <div>
                                <label htmlFor="quien_proporcio_menarca">¿Quién?</label>
                                <input type="text" placeholder="¿Quién le proporciono esa información?" {...register("quien_dio_info_menarca")} />
                            </div>
                            <div>
                                <label htmlFor="como_recibio_info_menarca">¿Cómo?</label>
                                <input type="text" placeholder="¿Cómo recibio esa información?" {...register("como_recibio_info_menarca")} />
                            </div>
                        </div>
                    )}

                    {isMasculino && (
                        <div>
                            <div>
                                <label htmlFor="edad_eyaculaciones">¿A qué edad tuvo las primeras eyaculaciones nocturnas?</label>
                                <input type="number" placeholder="edad de primeras eyaculaciones nocturnas" {...register("edad_primeras_eyaculaciones_nocturnas")} />
                            </div>
                            <div>
                                <label htmlFor="informacion_respecto">¿Qué información tenia al respecto'</label>
                                <input type="text" placeholder="¿Que informacion tenia?" {...register("informacion_tenia_eyaculacion")} />
                            </div>
                            <div>
                                <label htmlFor="quien_proporcion_eyaculacion">¿Quién?</label>
                                <input type="text" placeholder="¿Quién le proporciono esa información?" {...register("quien_dio_info")} />
                            </div>
                            <div>
                                <label htmlFor="como_recibio_info_eyaculacion">¿Cómo?</label>
                                <input type="text" placeholder="¿Cómo recibio esta información?" {...register("como_recibio_info_eyaculacion")} />
                            </div>
                        </div>
                    )}

                    <button>Guardar</button>
                </form>
            </div>
        </>
    )
}

