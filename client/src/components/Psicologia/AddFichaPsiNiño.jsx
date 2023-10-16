import { useForm } from "react-hook-form";
import { addFichaPsiNiño } from "../../api/Psico.Niño.api";
export function AddFichaPsiNiño() {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async(data) =>{
        const res = await addFichaPsiNiño(data)
        console.log(data)
        console.log(res)
    }) 
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Código de expediente" {...register("expedienteFicha", { required: true })} />
                <input type="text" placeholder="Curp del paciente" {...register("idPaciente", { required: true })} />
                <input type="number" placeholder="numero de usuario" {...register("idUsuario", { required: true })} />
                <input type="date" placeholder="fecha de registo" {...register("fecha_registro", { required: true })} />
                <label>Edad
                    <input type="number" placeholder="años" {...register("años", { required: true })} />
                    <input type="number" placeholder="meses"{...register("meses", { required: true })} />
                </label>
                <input type="date" placeholder="fecha de nacimiento" {...register("fecha_nacimiento", { required: true })} />
                <input type="text" placeholder="lugar de nacimiento" {...register("lugar_nacimiento", { required: true })} />
                <input type="number" placeholder="grado escolar" {...register("grado_escolar", { required: true })} />
                <input type="text" placeholder="nombre de la escuela" {...register("nombre_escuela", { required: true })} />
                <input type="text" placeholder="ubicación de la escuela" {...register("ubicacion_escuela", { required: true })} />
                <input type="text" placeholder="lugar ocupa el niño en la familia" {...register("lugar_ocupa_familia", { required: true })} />
                <textarea placeholder="Nombres, edades y ocupaciones de los hermanos(orden descendente)"{...register("informacion_hermanos", { required: true })}></textarea>
                <input type="text" placeholder="Nombre del padre" {...register("nombre_padre", { required: true })} />
                <input type="number" placeholder="Edad" {...register("edad_padre", { required: true })} />
                <select id="escolaridad-padre" {...register("escolaridad_padre", { required: true })}>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachillerato">Bachillerato</option>
                    <option value="Bachillerato">Licenciatura</option>
                </select>
                <input type="text" placeholder="Ocupación" {...register("ocupacion_padre", { required: true })} />
                <input type="text" placeholder="Nombre de la madre" {...register("nombre_madre", { required: true })} />
                <input type="number" placeholder="Edad" {...register("edad_madre", { required: true })} />
                <select id="escolaridad-madre" {...register("escolaridad_madre", { required: true })}>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachillerato">Bachillerato</option>
                    <option value="Bachillerato">Licenciatura</option>
                </select>
                <input type="text" placeholder="Ocupación" {...register("ocupacion_madre", { required: true })} />
                <select id="estado-padres" {...register("estado_civil_padres", { required: true })}>
                    <option value="Primaria">Casados</option>
                    <option value="Primaria">Divorciados</option>
                </select>
                <input type="number" placeholder="años" {...register("años_estado_civil", { required: true })} />
                <label> En caso que el niño no viva con los padres
                    <input type="text" placeholder="Nombre del tutor o tutores del niño" {...register("nombre_tutor")} />
                    <input type="number" placeholder="Edad del tutor" {...register("edad_tutor")} />
                    <input type="text" placeholder="Ocupacion" {...register("ocupacion_tutor")} />
                    <input type="text" placeholder="Motivos por los cuales el niño está a su cargo" {...register("motivos_niño_cargo_tutor")} />
                    <input type="text" placeholder="Desde cuándo" {...register("desde_cuando_tutor")} />
                </label>
                <textarea placeholder="Personas que viven casa con el niño, nombre, edad, parentesco y ocupación de cada uno (no padres ni hermanos)" {...register("descripcion_viven_con_niño")}></textarea>
                <textarea placeholder="motivo de la consulta" {...register("motivo", { required: true })}></textarea>
                <input type="text" placeholder="Canalizado por" {...register("canalizado_por", { required: true })} />
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

