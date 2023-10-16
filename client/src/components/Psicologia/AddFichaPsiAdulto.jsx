import { useForm } from "react-hook-form"
import { addFichaPsiAdulto } from "../../api/Psico.Adulto.api"

export function AddFichaPsiAdulto() {
    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        const res = await addFichaPsiAdulto(data)
        console.log(data)
        console.log(res)
    })

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="codigo de expediente" {...register("expedienteFicha", { required: true })} />
                <input type="text" placeholder="curp del paciente" {...register("idPaciente", { required: true })} />
                <input type="number" placeholder="num de usurio" {...register("idUsuario", { required: true })} />
                <input type="date" placeholder="fecha de registro" {...register("fecha_registro", { required: true })} />
                <input type="date" placeholder="fecha de nacimiento" {...register("fecha_nacimiento", { required: true })} />
                <input type="text" placeholder="Lugar de nacimiento" {...register("lugar_nacimiento", { required: true })} />
                <input type="number" placeholder="numero de hijos" {...register("numero_hijos", { required: true })} />
                <input type="text" placeholder="edad de los hijos" {...register("edad_hijos")} />
                <input type="text" placeholder="ocupacion de los hijos" {...register("ocupacion_hijos")} />
                <input type="text" placeholder="religion" {...register("religion", { required: true })} />
                <input type="text" placeholder="ocupacion" {...register("ocupacion", { required: true })} />
                <input type="text" placeholder="Nivel socioeconomico" {...register("nivel_socioeconomico", { required: true })} />
                <textarea placeholder="motivo de consulta" {...register("motivo_consulta")}></textarea>
                <input type="text" placeholder="referido por" {...register("referido", { required: true })} />
                <label>¿Ha recibido anteriormente orientación psicologica?</label>
                <label for="orientacion-si">Si
                    <input type="radio" id="orientacion-si" name="option-orientacion" value={true} {...register("recibido_orientacion_psicologica", { required: true })} />
                </label>
                <label for="orientacion-no">No
                    <input type="radio" id="orientacion-no" name="option-orientacion" value={false} {...register("recibido_orientacion_psicologica", { required: true })} />
                </label>
                <textarea placeholder="Motivos de la orientacion" {...register("motivos_orientacion")}></textarea>
                <input type="text" placeholder="Tiempo de orientacion" {...register("tiempo_orientacion")} />
                <textarea placeholder="Historia actual del paciente" {...register("historia_actual_paciente", { required: true })}></textarea>
                <textarea placeholder="Historia de desarrollo" {...register("historia_desarrollo", { required: true })}></textarea>
                <textarea placeholder="Primero cuatro años" {...register("primeros_cuatro_años", { required: true })}></textarea>
                <textarea placeholder="Historia escolar en el kinder" {...register("historia_escolar_kinder", { required: true })}></textarea>
                <textarea placeholder="Historia escolar en la primaria" {...register("historia_escolar_primaria", { required: true })}></textarea>
                <textarea placeholder="Historia escolar en la secundaria" {...register("historia_escolar_secundaria", { required: true })}></textarea>
                <textarea placeholder="Historia escolar en la preparatoria" {...register("historia_escolar_preparatoria", { required: true })}></textarea>
                <textarea placeholder="Historia escolar profesional" {...register("historia_escolar_profesional", { required: true })}></textarea>
                <textarea placeholder="Historia laboral" {...register("historia_laboral", { required: true })}></textarea>
                <input type="text" placeholder="¿Que le gusta de su trabajo?" {...register("gusta_trabajo", { required: true })} />
                <input type="text" placeholder="¿Que no le gusta de su trabajo" {...register("no_gusta_trabajo", { required: true })} />
                <input type="text" placeholder="¿Cómo percibe a sus padres" {...register("percibe_padres")} />
                <input type="text" placeholder="En caso de no haber conocido a sus padres ¿Que le han contado?" {...register("contado_padres")} />
                <input type="text" placeholder="¿Cómo percibe a los que viven con usted?" {...register("percibe_vive_casa", { required: true })} />
                <input type="text" placeholder="¿Cómo percibe a sus hijos?" {...register("percibe_hijos")} />
                <input type="text" placeholder="Otros familiares significativos" {...register("otros_familiares_significativos")} />
                <label>¿Tiene mascotas?</label>
                <label for="mascota-si">Si
                    <input type="radio" id="mascota-si" name="option-mascota" value={true} {...register("tiene_mascotas", { required: true })} />
                </label>
                <label for="mascota-no">No
                    <input type="radio" id="mascota-no" name="option-mascota" value={false} {...register("tiene_mascotas", { required: true })} />
                </label>
                <input type="text" placeholder="padecimientos heredofamiliares" {...register("padecimientos_heredofamiliares")} />
                <input type="text" placeholder="enfermedades que ha padecido" {...register("enfermedades_padecido")} />
                <input type="text" placeholder="Otros familiares significativos" {...register("otros_familiares_significativos")} />
                <label>Padece de sintomas o transtornos psicomaticos</label>
                <label for="psicomaticos-si">Si
                    <input type="radio" id="psicomaticos-si" name="option-psicomatico" value={true} {...register("padece_sintomas_transtornos_psicomaticos", { required: true })} />
                </label>
                <label for="psicomaticos-no">No
                    <input type="radio" id="psicomaticos-no" name="option-psicomatico" value={false} {...register("padece_sintomas_transtornos_psicomaticos", { required: true })} />
                </label>
                <input type="text" placeholder="Cuáles sintomas o transtornos psicomaticos" {...register("cuales_psicomaticos")} />
                <label>Padece enfermedades cronicas</label>
                <label for="cronica-si">Si
                    <input type="radio" id="cronica-si" name="option-cronicas" value={true} {...register("padece_enfermedad_cronica", { required: true })} />
                </label>
                <label for="cronica-no">No
                    <input type="radio" id="cronica-no" name="option-cronicas" value={false} {...register("padece_enfermedad_cronica", { required: true })} />
                </label>
                <input type="text" placeholder="Cuál enfermedad cronica" {...register("cual_cronica")} />
                <label>Bajo tratamiento</label>
                <label for="tratamiento-si">Si
                    <input type="radio" id="tratamiento-si" name="option-tratamiento" value={true} {...register("bajo_tratamiento", { required: true })} />
                </label>
                <label for="tratamiento-no">No
                    <input type="radio" id="tratamiento-no" name="option-tratamiento" value={false} {...register("bajo_tratamiento", { required: true })} />
                </label>
                <input type="text" placeholder="Cuál tratamiento" {...register("cual_tratamiento")} />
                <label>Ha sido intervenido quirurgicamente</label>
                <label for="cirugia-si">Si
                    <input type="radio" id="cirugia-si" name="option-cirugia" value={true} {...register("intervenido_quirurgicamente", { required: true })} />
                </label>
                <label for="cirugia-no">No
                    <input type="radio" id="cirugia-no" name="option-cirugia" value={false} {...register("intervenido_quirurgicamente", { required: true })} />
                </label>
                <input type="text" placeholder="Causa de intervención" {...register("causa_intervencion")} />
                <label>Tiene adicciones</label>
                <label for="adicciones-si">Si
                    <input type="radio" id="adicciones-si" name="option-adicciones" value={true} {...register("tiene_adicciones", { required: true })} />
                </label>
                <label for="adicciones-no">No
                    <input type="radio" id="adicciones-no" name="option-adicciones" value={false} {...register("tiene_adicciones", { required: true })} />
                </label>
                <input type="text" placeholder="Cuál adicción" {...register("cual_adiccion")} />
                <textarea placeholder="Otros datos" {...register("otros_datos", { required: true })}></textarea>
                <label>Ha sido recibido atención médica adecuada</label>
                <label for="atencionmedica-si">Si
                    <input type="radio" id="atencionmedica-si" name="option-atencionmedica" value={true} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                </label>
                <label for="atencionmedica-no">No
                    <input type="radio" id="atencionmedica-no" name="option-atencionmedica" value={false} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                </label>
                <textarea placeholder="Especificar" {...register("especificar")}></textarea>
                <input type="text" placeholder="¿Cuando noto la diferencia de genero?" {...register("cuando_diferencia_genero", { required: true })} />
                <input type="text" placeholder="¿Cómo se dio cuenta de la diferencia de genero?" {...register("como_diferencia_genero", { required: true })} />
                <input type="text" placeholder="¿Cuál se le asigno de niño?" {...register("genero_asignaron_niño", { required: true })} />
                <label>Ha sufrido abuso sexual</label>
                <label for="abusosexual-si">Si
                    <input type="radio" id="abusosexual-si" name="option-abusosexual" value={true} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                </label>
                <label for="abusosexual-no">No
                    <input type="radio" id="abusosexual-no" name="option-abusosexual" value={false} {...register("recibido_atencion_medica_adecuada", { required: true })} />
                </label>
                <input type="number" placeholder="edad en la que fue victima de abuso" {...register("edad_abuso_sexual")} />
                <input type="text" placeholder="¿Por quién?" {...register("por_quien_abuso_sexual")} />
                <label>Sexualmente activo</label>
                <label for="activo-si">Si
                    <input type="radio" id="activo-si" name="option-sexualactivo" value={true} {...register("sexualmente_activo", { required: true })} />
                </label>
                <label for="activo-no">No
                    <input type="radio" id="activo-no" name="option-sexualactivo" value={false} {...register("sexualmente_activo", { required: true })} />
                </label>
                <input type="number" placeholder="edad de primera relacion sexual" {...register("edad_primera_relacion_sexual", { required: true })} />
                <input type="text" placeholder="con quien primera relacion sexual" {...register("con_quien_primera", { required: true })} />
                <input type="text" placeholder="como han sido" {...register("como_hansido_experiencia_sexual", { required: true })} />
                <label>Utiliza algun metodo conceptivo</label>
                <label for="conceptivo-si">Si
                    <input type="radio" id="conceptivo-si" name="option-conceptivo" value={true} {...register("utiliza_metodo_conceptivo", { required: true })} />
                </label>
                <label for="conceptivo-no">No
                    <input type="radio" id="conceptivo-no" name="option-conceptivo" value={false} {...register("utiliza_metodo_conceptivo", { required: true })} />
                </label>
                <input type="text" placeholder="Cuál método conceptivo" {...register("cual_metodo_conceptivo")} />
                <input type="text" placeholder="Ha tenido experiencias sexuales distintas a las heterosexuales" {...register("tenido_relaciones_distintas_heterosexuales")} />
                <input type="number" placeholder="edad menarca" {...register("edad_menarca")} />
                <input type="text" placeholder="¿Que información tenia respecto a la menarca?" {...register("informacion_tenia_menarca")} />
                <input type="text" placeholder="¿Quién le proporciono esa información?" {...register("quien_dio_info_menarca")} />
                <input type="text" placeholder="¿Cómo recibio esa información?" {...register("como_recibio_info_menarca")} />
                <input type="number" placeholder="edad de primeras eyaculaciones nocturnas" {...register("edad_primeras_eyaculaciones_nocturnas")} />
                <input type="text" placeholder="¿Que información tenia al respecto?" {...register("informacion_tenia_eyaculacion")} />
                <input type="text" placeholder="¿Quién le proporciono esa información?" {...register("quien_dio_info")} />
                <input type="text" placeholder="¿Cómo recibio esta información?" {...register("como_recibio_info_eyaculacion")} />
                <button>Guardar</button>
            </form>
        </>
    )
}

