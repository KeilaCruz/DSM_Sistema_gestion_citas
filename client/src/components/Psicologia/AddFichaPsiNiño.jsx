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
                <label>Antecedentes respecto al padecimiento actual</label>
                <input type="text" placeholder="Asistencia a consulta médica o con otro profesional" {...register("consulta_otro_profesional")} />
                <textarea placeholder="Diagnostico otorgado" {...register("diagnostico_otorgado")}></textarea>
                <label>El niño actualmente toma algún medicamento</label>
                <label for="medicacion-si">Si
                    <input type="radio" id="medicacion-si" name="option-medicacion" value={true} {...register("toma_medicamento", { required: true })} />
                </label>
                <label for="medicacion-no">No
                    <input type="radio" id="medicacion-no" name="option-medicacion" value={false} {...register("toma_medicamento", { required: true })} />
                </label>
                <input type="text" placeholder="Motivo" {...register("motivo")} />
                <input type="text" placeholder="Nombre del medicamento" {...register("nombre_medicamento")} />
                <input type="text" placeholder="Dosis del medicamento" {...register("dosis_medicamento")} />
                <input type="text" placeholder="Se le ha realizado algún otro tipo de estudio (señarlo)" {...register("realizado_estudio")} />
                <label>Antecedentes del desarrollo </label>
                <input type="number" placeholder="Número de embarazos de la madre" {...register("numero_embarazos_madre", { required: true })} />
                <input type="number" placeholder="Tiempo de gestación del niño" {...register("tiempo_gestacion", { required: true })} />
                <textarea placeholder="Problemas, enfermedades o complicaciones durante del embarazo" {...register("problemas_durante_embarazo")}></textarea>
                <label>Ingirió medicamentos durante el embarazo</label>
                <label for="medi-embarazo-si">Si
                    <input type="radio" id="medi-embarazo-si" name="option-embarazo" value={true} {...register("medicamentos_embarazo", { required: true })} />
                </label>
                <label for="medi-embarazo-no">No
                    <input type="radio" id="medi-embarazo-no" name="option-embarazo" value={false} {...register("medicamentos_embarazo", { required: true })} />
                </label>
                <input type="text" placeholder="Motivo" {...register("motivo_medicamento_embarazo")} />
                <input type="text" placeholder="Nombre del medicamento" {...register("nombre_medicamento_embarazo")} />
                <input type="text" placeholder="Dosis del medicameto" {...register("dosis_medicamento_embarazo")} />
                <input type="text" placeholder="Tipo de parto" {...register("tipo_parto", { required: true })} />
                <input type="text" placeholder="Duración" {...register("duracion_parto", { required: true })} />
                <input type="text" placeholder="Complicaciones en el parto" {...register("complicaciones_parto")} />
                <input type="number" step="any" placeholder="Peso al nacer" {...register("peso_nacer", { required: true })} />
                <input type="number" step="any" placeholder="Talla" {...register("talla_nacer", { required: true })} />
                <label>Alimentación por seno materno</label>
                <label for="alimentacion-seno-si">Si
                    <input type="radio" id="alimentacion-seno-si" name="option-alimentacion-seno" value={true} {...register("alimentacion_seno_materno", { required: true })} />
                </label>
                <label for="alimentacion-seno-no">No
                    <input type="radio" id="alimentacion-seno-no" name="option-alimentacion-seno" value={false} {...register("alimentacion_seno_materno", { required: true })} />
                </label>
                <input type="text" placeholder="Tiempo" {...register("tiempo_alimentacion_seno")} />
                <input type="number" placeholder="Edad a la que logro sostén cefálico" {...register("edad_sosten_cefalico", { required: true })} />
                <input type="number" placeholder="Edad de aparicion del balbuceo" {...register("edad_balbuceo", { required: true })} />
                <input type="number" placeholder="Edad a la que logro sentarse" {...register("edad_sentarse", { required: true })} />
                <input type="number" placeholder="Edad a la que logro ponerse de pie" {...register("edad_ponerse_pie", { required: true })} />
                <input type="number" placeholder="Edad a la que camino sin ayuda" {...register("edad_camino", { required: true })} />
                <label>Controla actualmente esfinter</label>
                <label for="controla-esfinter-si">Si
                    <input type="radio" id="controla-esfinter-si" name="option-esfinter" value={true} {...register("controla_esfinter", { required: true })} />
                </label>
                <label for="controla-esfinter-no">No
                    <input type="radio" id="controla-esfinter-no" name="option-esfinter" value={false} {...register("controla_esfinter", { required: true })} />
                </label>
                <input type="number" placeholder="Edad de control" {...register("edad_control_esfinter", { required: true })} />
                <textarea placeholder="Enfermedades significativas durante el primer año de vida" {...register("enfemerdades_primer_año_vida", { required: true })}></textarea>
                <textarea placeholder="Enfermedades, operaciones, crisis febriles, o accidentes posteriores" {...register("enfermedades_posteriores", { required: true })}></textarea>
                <input type="text" placeholder="Antecedentesfamiliares hereditarios vinculados al padecimiento actual" {...register("antecedentes_padecimeinto_actual", { required: true })} />
                <textarea placeholder="Salud física actual (energia, fatiga, regularidad de funciones, sueño, quejas, alimentación " {...register("salud_fisica_actual", { required: true })}></textarea>
                <input type="number" placeholder="Edad de ingreso al sistema escolar" {...register("edad_ingreso_escolar", { required: true })} />
                <input type="text" placeholder="Nivel" {...register("nivel_ingreso", { required: true })} />
                <input type="text" placeholder="Conducta del niño al ingresar a la escuela de acuerdo a padres y maestros" {...register("conducta_ingreso", { required: true })} />
                <button>Guardar</button>
            </form>
        </>
    )
}

