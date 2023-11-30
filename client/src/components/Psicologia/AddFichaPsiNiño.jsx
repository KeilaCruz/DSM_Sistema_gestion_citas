import { useForm } from "react-hook-form";
import { addFichaPsiNiño } from "../../api/Psico.Niño.api";
export function AddFichaPsiNiño() {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        const res = await addFichaPsiNiño(data)
        console.log(data)
        console.log(res)
    })
    return (
        <>
            <div className="container-fluid">

            </div>
            <form onSubmit={onSubmit} className="row g-2">

                <div className="col-md-4 offset-1">
                    <label htmlFor="fecha_registro">Fechas registro</label>
                    <input id="fecha_registro" className="form-control" type="date" placeholder="fecha de registo" {...register("fecha_registro", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="codigo_expediente">Expediente</label>
                    <input id="codigo_expediente" className="form-control" type="text" placeholder="Código de expediente" {...register("expedienteFicha", { required: true })} />
                </div>
                {/*  <input type="text" placeholder="Curp del paciente" {...register("idPaciente", { required: true })} />
                <input type="number" placeholder="numero de usuario" {...register("idUsuario", { required: true })} />*/}
                <div className="col-md-4 offset-1">
                    <label htmlFor="años_edad" className="form-label">Años de edad</label>
                    <input id="años_edad" className="form-control" type="number" placeholder="Años" {...register("años", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="meses_edad" className="form-label">Meses de edad</label>
                    <input id="meses_edad" className="form-control" type="number" placeholder="Meses"{...register("meses", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="fecha_nacimiento" className="form-label">Fecha de nacimiento</label>
                    <input id="fecha_nacimiento" className="form-control" type="date" placeholder="fecha de nacimiento" {...register("fecha_nacimiento", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="lugar_nacimiento" className="form-label">Lugar de nacimiento</label>
                    <input id="lugar_nacimiento" className="form-control" type="text" placeholder="lugar de nacimiento" {...register("lugar_nacimiento", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="grado_escolar" className="form-label">Grado escolar</label>
                    <input id="grado_escolar" className="form-control" type="number" placeholder="grado escolar" {...register("grado_escolar", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="nom_escuela" className="form-label">Nombre de la escuela</label>
                    <input id="nom_escuela" className="form-control" type="text" placeholder="nombre de la escuela" {...register("nombre_escuela", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="ubicacion_escuela" className="form-label">Ubicación de la escuela</label>
                    <input id="ubicacion_escuela" className="form-control" type="text" placeholder="ubicación de la escuela" {...register("ubicacion_escuela", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="lugar_ocupa_familia" className="form-label">Lugar que ocupa el niño en la familia</label>
                    <input id="lugar_ocupa_familia" className="form-control" type="text" placeholder="lugar ocupa el niño en la familia" {...register("lugar_ocupa_familia", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="info_hermanos" className="form-label">Informacion de los hermanos</label>
                    <textarea id="info_hermanos" className="form-control" placeholder="Nombres, edades y ocupaciones de los hermanos(orden descendente)"{...register("informacion_hermanos", { required: true })}></textarea>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="nom_padre" className="form-label">Nombre del padre</label>
                    <input id="nom_padre" className="form-control" type="text" placeholder="Nombre del padre" {...register("nombre_padre", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_padre" className="form-label">Edad</label>
                    <input id="edad_padre" className="form-control" type="number" placeholder="Edad" {...register("edad_padre", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="escolaridad_padre" className="form-label">Escolaridad</label>
                    <select id="escolaridad-padre" className="form-control" {...register("escolaridad_padre", { required: true })}>
                        <option value="Primaria">Primaria</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Bachillerato">Bachillerato</option>
                        <option value="Bachillerato">Licenciatura</option>
                    </select>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="ocupacion_padre" className="form-label">Ocupación</label>
                    <input id="ocupacion_padre" className="form-control" type="text" placeholder="Ocupación" {...register("ocupacion_padre", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="nom_madre" className="form-label">Nombre de la madre</label>
                    <input id="nom_madre" className="form-control" type="text" placeholder="Nombre de la madre" {...register("nombre_madre", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_madre" className="form-label">Edad</label>
                    <input id="edad_madre" className="form-control" type="number" placeholder="Edad" {...register("edad_madre", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="escolaridad_madre" className="form-label">Escolaridad</label>
                    <select className="form-control" id="escolaridad-madre" {...register("escolaridad_madre", { required: true })}>
                        <option value="Primaria">Primaria</option>
                        <option value="Secundaria">Secundaria</option>
                        <option value="Bachillerato">Bachillerato</option>
                        <option value="Bachillerato">Licenciatura</option>
                    </select>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="ocupacion_madre" className="form-label">Ocupacion</label>
                    <input id="ocupacion_madre" className="form-control" type="text" placeholder="Ocupación" {...register("ocupacion_madre", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="estado_padres" className="form-label">Estado civil de los padres</label>
                    <select className="form-control" id="estado-padres" {...register("estado_civil_padres", { required: true })}>
                        <option value="Primaria">Casados</option>
                        <option value="Primaria">Divorciados</option>
                    </select>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="años_casados" className="form-label">Años</label>
                    <input id="años_casados" className="form-control" type="number" placeholder="Años" {...register("años_estado_civil", { required: true })} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="no_conocer_padres" className="form-label">En el caso que el niño no viva con los padres</label>
                </div>
                <div className="row g-2">
                    <div className="col-md-4 offset-1">
                        <label htmlFor="edad_tutor" className="form-label">Nombre o nombres</label>
                        <input id="nom_tutor" className="form-control" type="text" placeholder="Nombre del tutor o tutores del niño" {...register("nombre_tutor")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="edad_tutor" className="form-label">Edad</label>
                        <input id="edad_tutor" className="form-control" type="number" placeholder="Edad del tutor" {...register("edad_tutor")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="ocupacion_tutor" className="form-label">Ocupación</label>
                        <input id="ocupacuion" className="form-control" type="text" placeholder="Ocupacion" {...register("ocupacion_tutor")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="motivos_niño_acargo" className="form-label">Motivos por los cuales el niño está a su cargo</label>
                        <input id="motivos_niño_acargo" className="form-control" type="text" placeholder="Motivos por los cuales el niño está a su cargo" {...register("motivos_niño_cargo_tutor")} />
                    </div>
                    <div className="col-md-4 offset-1">
                        <label htmlFor="desde_cuando_acargo" className="form-label">Desde cuándo</label>
                        <input id="desde_cuando_acargo" className="form-control" type="text" placeholder="Desde cuándo" {...register("desde_cuando_tutor")} />
                    </div>
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="info_vive_niño" className="form-label">Información con los que vive el niño</label>
                    <textarea id="info_vive_niño" className="form-control" placeholder="Personas que viven casa con el niño, nombre, edad, parentesco y ocupación de cada uno (no padres ni hermanos)" {...register("descripcion_viven_con_niño")}></textarea>
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="motivo_consulta" className="form-label">Motivo de consulta reportado por los padres</label>
                    <textarea id="motivos_consulta" className="form-control" placeholder="motivo de la consulta" {...register("motivo", { required: true })}></textarea>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="canalizado_por" className="form-label">Canalizador por quién</label>
                    <input id="canalizado_por" className="form-control" type="text" placeholder="Canalizado por" {...register("canalizado_por", { required: true })} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="antecedentes_padecimiento_actual" className="form-label">Antecedentes respecto al padecimiento actual</label>
                </div>
                <div className="col-md-4 offset-1">
                    <input id="asistencia_consulta" className="form-control" type="text" placeholder="Asistencia a consulta médica o con otro profesional" {...register("consulta_otro_profesional")} />
                </div>
                <div className="col-md-4 offset-1">
                    <textarea id="diagnostico_otorgado" className="form-control" placeholder="Diagnostico otorgado" {...register("diagnostico_otorgado")}></textarea>
                </div>
                <div className="col-md-4 offset-1">
                    <label>El niño actualmente toma algún medicamento</label>
                    <label className="form-check-label mx-1">Si
                        <input className="form-check-input" type="radio" id="medicacion-si" name="option-medicacion" value={true} {...register("toma_medicamento", { required: true })} />
                    </label>
                    <label className="form-check-label mx-1">No
                        <input className="form-check-input" type="radio" id="medicacion-no" name="option-medicacion" value={false} {...register("toma_medicamento", { required: true })} />
                    </label>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="motivo_medicamento" className="form-label">Motivo</label>
                    <input id="motivo_medicamento" className="form-control" type="text" placeholder="Motivo" {...register("motivo")} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="nom_medicamento" className="form-label">Nombre</label>
                    <input input="nom_medicamento" className="form-control" type="text" placeholder="Nombre del medicamento" {...register("nombre_medicamento")} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="dosis_medicamento" className="form-label">Dosis</label>
                    <input className="form-control" id="dosis_medicamento" type="text" placeholder="Dosis del medicamento" {...register("dosis_medicamento")} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="otro_estudio" className="form-label">Algún otro estudio</label>
                    <input id="otro_estudio" className="form-control" type="text" placeholder="Se le ha realizado algún otro tipo de estudio (señarlo)" {...register("realizado_estudio")} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="antecedentes_desarrollo" className="form-label">Antecedentes del desarrollo </label>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="num_embarazos" className="form-label">Número de embarazos</label>
                    <input id="numero_embarazos_madre" className="form-control" type="number" placeholder="Número de embarazos de la madre" {...register("numero_embarazos_madre", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="tiempo_gestacion" className="form-label">Tiempo gestación del niño</label>
                    <input className="form-control" type="number" id="tiempo_gestacion" placeholder="Tiempo de gestación del niño" {...register("tiempo_gestacion", { required: true })} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="complicaciones_embarazo" className="form-label">Problemas, enfermedades o complicaciones durante el embarazo</label>
                    <textarea className="form-control" placeholder="Problemas, enfermedades o complicaciones durante del embarazo" {...register("problemas_durante_embarazo")}></textarea>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="medicamentos_embarazo" className="form-label">Ingirió medicamentos durante el embarazo</label>
                    <label className="form-check-label mx-1">Si
                        <input className="form-check-input" type="radio" id="medi-embarazo-si" name="option-embarazo" value={true} {...register("medicamentos_embarazo", { required: true })} />
                    </label>
                    <label className="form-check-label mx-1">No
                        <input className="form-check-input" type="radio" id="medi-embarazo-no" name="option-embarazo" value={false} {...register("medicamentos_embarazo", { required: true })} />
                    </label>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="motivo_medicamento_embarazo" className="form-label">Motivo</label>
                    <input className="form-control" id="motivo_medicamento" type="text" placeholder="Motivo" {...register("motivo_medicamento_embarazo")} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="nom_medicamento_embarazo" className="form-label">Nombre</label>
                    <input id="nom_medicamento_embarazo" className="form-control" type="text" placeholder="Nombre del medicamento" {...register("nombre_medicamento_embarazo")} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="dosis_medicamento_embarazo" className="form-label">Dosis</label>
                    <input id="dosis_medicamento_embarazo" className="form-control" type="text" placeholder="Dosis del medicameto" {...register("dosis_medicamento_embarazo")} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="tipo_parto" className="form-label">Tipo de parto</label>
                    <input type="text" placeholder="Tipo de parto" className="form-control" {...register("tipo_parto", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="duracion_parto" className="form-label">Duración</label>
                    <input id="duracion_parto" className="form-control" type="text" placeholder="Duración" {...register("duracion_parto", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="complicaciones_parto" className="form-label">Complicaciones en el parto</label>
                    <input id="complicaciones_parto" className="form-control" type="text" placeholder="Complicaciones en el parto" {...register("complicaciones_parto")} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="peso_nacer" className="form-label">Peso al nacer</label>
                    <input id="peso_nacer" className="form-control" type="number" step="any" placeholder="Peso al nacer" {...register("peso_nacer", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="talla_nacer" className="form-label">Talla</label>
                    <input className="form-control" type="number" step="any" placeholder="Talla" {...register("talla_nacer", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="alimentacion_seno_materno" className="form-label">Alimentación por seno materno</label>
                    <label className="form-check-label mx-1">Si
                        <input className="form-check-input" type="radio" id="alimentacion-seno-si" name="option-alimentacion-seno" value={true} {...register("alimentacion_seno_materno", { required: true })} />
                    </label>
                    <label className="form-check-label mx-1">No
                        <input className="form-check-input" type="radio" id="alimentacion-seno-no" name="option-alimentacion-seno" value={false} {...register("alimentacion_seno_materno", { required: true })} />
                    </label>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="tiempo_alimentacion_seno" className="form-label">Tiempo de alimentación por seno</label>
                    <input className="form-control" id="tiempo_alimentacion_seno" type="text" placeholder="Tiempo" {...register("tiempo_alimentacion_seno")} />
                </div>

                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_sosten_cefalico" className="form-label">Edad a la que logo sostén cefálico</label>
                    <input id="edad_sosten_cefalico" className="form-control" type="number" placeholder="Edad a la que logro sostén cefálico" {...register("edad_sosten_cefalico", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_aparicion_balbuceo" className="form-label">Edad de aparicion del balbuceo</label>
                    <input id="edad_balbuceo" className="form-control" type="number" placeholder="Edad de aparicion del balbuceo" {...register("edad_balbuceo", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_logro_sentarse" className="form-label">Edad a la que logró sentarse</label>
                    <input id="edad_logro_sentarse" className="form-control" type="number" placeholder="Edad a la que logro sentarse" {...register("edad_sentarse", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_logro_ponerse_pie" className="form-label">Edad a la que logró sentarse</label>
                    <input type="number" className="form-control" id="edad_logro_ponerse_pie" placeholder="Edad a la que logro ponerse de pie" {...register("edad_ponerse_pie", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_camino" className="form-label">Edad a la que caminó sin ayuda</label>
                    <input id="edad_camino" className="form-control" type="number" placeholder="Edad a la que camino sin ayuda" {...register("edad_camino", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label className="form-label">Controla actualmente esfinter</label>
                    <label className="form-check-label mx-1">Si
                        <input className="form-control" type="radio" id="controla-esfinter-si" name="option-esfinter" value={true} {...register("controla_esfinter", { required: true })} />
                    </label>
                    <label className="form-check-label mx-1">No
                        <input className="form-control" type="radio" id="controla-esfinter-no" name="option-esfinter" value={false} {...register("controla_esfinter", { required: true })} />
                    </label>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_control_esfinter" className="form-label">Edad de control</label>
                    <input className="form-control" id="edad_control_esfinter" type="number" placeholder="Edad de control" {...register("edad_control_esfinter", { required: true })} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="enfermedad_primer_año" className="form-label">Enfermedades significativas durante el primer año de vida</label>
                    <textarea id="enfermedad_primer_año" className="form-control" placeholder="Enfermedades significativas durante el primer año de vida" {...register("enfemerdades_primer_año_vida", { required: true })}></textarea>
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="enfermedades_posteriores" className="form-label">Enfermedades posteriores</label>
                    <textarea className="form-control" id="enfermedades_posteriores" placeholder="Enfermedades, operaciones, crisis febriles, o accidentes posteriores" {...register("enfermedades_posteriores", { required: true })}></textarea>
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="antecedentes_padecimiento" className="form-label">Antecedentes familiares hereditarios vinculados al padecimiento actual</label>
                    <input id="antecedentes_padecimiento" className="form-control" type="text" placeholder="Antecedentesfamiliares hereditarios vinculados al padecimiento actual" {...register("antecedentes_padecimeinto_actual", { required: true })} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="salud_fisica_actual">Salud física Actual</label>
                    <textarea id="salud_fisica_actual" className="form-control" placeholder="Salud física actual (energia, fatiga, regularidad de funciones, sueño, quejas, alimentación " {...register("salud_fisica_actual", { required: true })}></textarea>
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="edad_ingreso_sistema" className="form-label">Edad de ingreso al sistema escolar</label>
                    <input id="edad_ingreso_escolar" className="form-control" type="number" placeholder="Edad de ingreso al sistema escolar" {...register("edad_ingreso_escolar", { required: true })} />
                </div>
                <div className="col-md-4 offset-1">
                    <label htmlFor="nivel_ingreso" className="form-label">Nivel</label>
                    <input id="nivel_ingreso" className="form-control" type="text" placeholder="Nivel" {...register("nivel_ingreso", { required: true })} />
                </div>
                <div className="col-md-9 offset-1">
                    <label htmlFor="conducta_niño" className="form-label"> Conducta del niño al ingresar a la escuela de acuerdo a padres y maestros</label>
                    <input id="conducta_niño" className="form-control" type="text" placeholder="Conducta del niño al ingresar a la escuela de acuerdo a padres y maestros" {...register("conducta_ingreso", { required: true })} />
                </div>
                <div>
                    <button>Guardar</button>
                </div>
            </form>
        </>
    )
}

