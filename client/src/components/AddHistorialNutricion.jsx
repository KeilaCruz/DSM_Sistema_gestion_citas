import { useForm } from "react-hook-form"
import { addHistoriaNutricion } from "../api/Nutricion.api"

export function AddHistorialNutricion() {
    const { register, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async (data) => {
        const res = await addHistoriaNutricion(data);
        console.log(data)
        console.log(res)
    })
    return (
        <>
            <form onSubmit={onSubmit}>
                <textarea placeholder="Motivo de consulta" {...register("motivo_consulta", { required: true })}></textarea>
                <label>AHF</label>
                <label>Diabetes</label>
                <label for="diabetes-si">Si
                    <input type="radio" id="diabetes-si" name="option-diabetes" value={true} {...register("AHF_diabetes", { required: true })} />
                </label>
                <label for="diabetes-no">No
                    <input type="radio" id="diabetes-no" name="option-diabetes" value={false} {...register("AHF_diabetes", { required: true })} />
                </label>
                <input type="text" placeholder="¿Quién?" {...register("quien_diabetes", { required: true })} />
                <label>Hipertension</label>
                <label for="hipertension-si">Si
                    <input type="radio" id="hipertension-si" name="option-hipertension" value={true} {...register("AHF_hipertension", { required: true })} />
                </label>
                <label for="hipertension-no">No
                    <input type="radio" id="hipertension-no" name="option-hipertension" value={false} {...register("AHF_hipertension", { required: true })} />
                </label>
                <input type="text" placeholder="¿Quién?" {...register("quien_hipertension", { required: true })} />
                <label>Dislipidemias</label>
                <label for="dislipidemias-si">Si
                    <input type="radio" id="dislipidemias-si" name="option-dislipidemias" value={true} {...register("AHF_dislipidemias", { required: true })} />
                </label>
                <label for="dislipidemias-no">No
                    <input type="radio" id="dislipidemias-no" name="option-dislipidemias" value={false} {...register("AHF_dislipidemias", { required: true })} />
                </label>
                <input type="text" placeholder="¿Quién?" {...register("quien_dislipidemias", { required: true })} />
                <label>Antecedentes patologicos</label>
                <label>Diabetes mellitus</label>
                <label for="diabetesmellitus-si">Si
                    <input type="radio" id="diabetesmellitus-si" name="option-diabetesmellitus" value={true} {...register("AP_diabetes_mellitus", { required: true })} />
                </label>
                <label for="diabetesmellitus-no">No
                    <input type="radio" id="diabetesmellitus-no" name="option-diabetesmellitus" value={false} {...register("AP_diabetes_mellitus", { required: true })} />
                </label>
                <label>Hipertension</label>
                <label for="ap_hipertension-si">Si
                    <input type="radio" id="ap_hipertension-si" name="option-ap-hipertension" value={true} {...register("AP_hipertension", { required: true })} />
                </label>
                <label for="ap_hipertension-no">No
                    <input type="radio" id="ap_hipertension-no" name="option-ap-hipertension" value={false} {...register("AP_hipertension", { required: true })} />
                </label>
                <label>Dislipidemias</label>
                <label for="ap-dislipidemias-si">Si
                    <input type="radio" id="ap-dislipidemias-si" name="option-ap-dislipidemias" value={true} {...register("AP_dislipidemias", { required: true })} />
                </label>
                <label for="ap-dislipidemias-no">No
                    <input type="radio" id="ap-dislipidemias-no" name="option-ap-dislipidemias" value={false} {...register("AP_dislipidemias", { required: true })} />
                </label>
                <label>¿Presenta problemas gastrointestinales como diarrea, gastritis, colitis, estreñimiento, ulceras, diarrea?</label>
                <label for="problema-gastro-si">Si
                    <input type="radio" id="problema-gastro-si" name="option-gastro" value={true} {...register("problema_gastrointestinal", { required: true })} />
                </label>
                <label for="problema-gastro-no">No
                    <input type="radio" id="problema-gastro-no" name="option-gastro" value={false} {...register("problema_gastrointestinal", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_problema_gastrointestinal", { required: true })} />
                <textarea placeholder="Observaciones" {...register("observaciones_patologicas", { required: true })}></textarea>
                <label>Intervenciones quirurgicas</label>
                <label for="inter-quirurgica-si">Si
                    <input type="radio" id="inter-quirurgica-si" name="option-quirurgica" value={true} {...register("intervencion_quirurgica", { required: true })} />
                </label>
                <label for="inter-quirurgica-no">No
                    <input type="radio" id="inter-quirurgica-no" name="option-quirurgica" value={false} {...register("intervencion_quirurgica", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_intervencion_quirurgica", { required: true })} />
                <label>Alergia/Intolerancia a un alimento</label>
                <label for="aler-alimento-si">Si
                    <input type="radio" id="aler-alimento-si" name="option-aler-alimento" value={true} {...register("alergia_alimento", { required: true })} />
                </label>
                <label for="aler-alimento-no">No
                    <input type="radio" id="aler-alimento-no" name="option-aler-alimento" value={false} {...register("alergia_alimento", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_alergia_alimento", { required: true })} />
                <label>¿Consume algun farmaco?</label>
                <label for="consume-farmaco-si">Si
                    <input type="radio" id="consume-farmaco-si" name="option-consume-farmaco" value={true} {...register("consume_farmaco_alergia", { required: true })} />
                </label>
                <label for="consume-farmaco-no">No
                    <input type="radio" id="consume-farmaco-no" name="option-consume-farmaco" value={false} {...register("consume_farmaco_alergia", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_alergia_farmaco", { required: true })} />
                <input type="text" placeholder="¿Desde cuándo?" {...register("desde_cuando_farmaco", { required: true })} />
                <label>Realiza actividad fisica</label>
                <label for="actividad-fisica-si">Si
                    <input type="radio" id="actividad-fisica-si" name="option-actividad-fisica" value={true} {...register("realiza_actividad_fisica", { required: true })} />
                </label>
                <label for="actividad-fisica-no">No
                    <input type="radio" id="actividad-fisica-no" name="option-actividad-fisica" value={false} {...register("realiza_actividad_fisica", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_actividad_fisica", { required: true })} />
                <input type="text" placeholder="duracion" {...register("duracion", { required: true })} />
                <label>Consume alcohol</label>
                <label for="consume-alcohol-si">Si
                    <input type="radio" id="consume-alcohol-si" name="option-consume-alcohol" value={true} {...register("consume_alcohol", { required: true })} />
                </label>
                <label for="consume-alcohol-no">No
                    <input type="radio" id="consume-alcohol-no" name="option-consume-alcohol" value={false} {...register("consume_alcohol", { required: true })} />
                </label>
                <label>Consume tabaco</label>
                <label for="consume-tabaco-si">Si
                    <input type="radio" id="consume-tabaco-si" name="option-consume-tabaco" value={true} {...register("consume_tabaco", { required: true })} />
                </label>
                <label for="consume-tabaco-no">No
                    <input type="radio" id="consume-tabaco-no" name="option-consume-tabaco" value={false} {...register("consume_tabaco", { required: true })} />
                </label>
                <label>Consume drogas</label>
                <label for="consume-drogas-si">Si
                    <input type="radio" id="consume-drogas-si" name="option-consume-drogas" value={true} {...register("consume_droga", { required: true })} />
                </label>
                <label for="consume-drogas-no">No
                    <input type="radio" id="consume-drogas-no" name="option-consume-tabaco" value={false} {...register("consume_droga", { required: true })} />
                </label>
                <input type="number" placeholder="Número de gestas" {...register("numero_gestas")} />
                <input type="number" placeholder="Número de partos cesarea" {...register("numero_partos_cesarea")} />
                <input type="number" placeholder="Número de abortos" {...register("numero_abortos")} />
                <label>Actualmente lactando</label>
                <label for="lactando-si">Si
                    <input type="radio" id="lactando-si" name="option-lactando" value={true} {...register("actualmente_lactando")} />
                </label>
                <label for="lactando-no">No
                    <input type="radio" id="lactando-no" name="option-lactando" value={false} {...register("actualmente_lactando")} />
                </label>
                <input type="date" placeholder="Ultima menstruación" {...register("fecha_ultima_menstruacion")} />
                <label>Presenta menoupasia</label>
                <label for="menopausia-si">Si
                    <input type="radio" id="menopausia-si" name="option-menopausia" value={true} {...register("presenta_menoupasia")} />
                </label>
                <label for="menopausia-no">No
                    <input type="radio" id="menopausia-no" name="option-menopausia" value={false} {...register("presenta_menoupasia")} />
                </label>
                <input type="text" placeholder="Frecuencia de cereales" {...register("frecuencia_cereales", { required: true })} />
                <input type="text" placeholder="Frecuencia de frutas" {...register("frecuencia_frutas", { required: true })} />
                <input type="text" placeholder="Frecuencia de verduras" {...register("frecuencia_verduras", { required: true })} />
                <input type="text" placeholder="Frecuencia de verduras" {...register("frecuencia_verduras", { required: true })} />
                <input type="text" placeholder="Frecuencia de carne roja" {...register("frecuencia_carne_roja", { required: true })} />
                <input type="text" placeholder="Frecuencia de pollo" {...register("frecuencia_pollo", { required: true })} />
                <input type="text" placeholder="Frecuencia de lacteos" {...register("frecuencia_lacteos", { required: true })} />
                <input type="text" placeholder="Frecuencia de leguminosas" {...register("frecuencia_leguminosas", { required: true })} />
                <input type="text" placeholder="Frecuencia de azucar" {...register("frecuencia_azucar", { required: true })} />
                <input type="text" placeholder="Frecuencia de grasas" {...register("frecuencia_grasas", { required: true })} />
                <input type="text" placeholder="Frecuencia de pescado" {...register("frecuencia_pescado", { required: true })} />
                <input type="number" placeholder="¿Cuantas veces come?" {...register("cuantas_veces_come", { required: true })} />
                <input type="text" placeholder="¿Quién prepara los alimentos?" {...register("quien_prepara_alimentos", { required: true })} />
                <input type="number" placeholder="Litros de agua que consume" step="0.0" {...register("litro_consume_agua", { required: true })} />
                <input type="number" placeholder="Litros de refresco que consume" step="0.0" {...register("litro_consume_refresco", { required: true })} />
                <input type="number" placeholder="Litros de cafe que consume" step="0.0" {...register("litro_consume_cafe", { required: true })} />
                <textarea placeholder="Alimentos que causan malestar" {...register("alimentos_causan_malestar", { required: true })} ></textarea>
                <input type="text" placeholder="Tipo de grasa para prepara alimentos" {...register("tipo_grasa_preparar_alimentos", { required: true })} />
                <textarea placeholder="Diagnostico nutricional" {...register("diagnostico_nutricio", { required: true })} ></textarea>
                <textarea placeholder="Tratamiento nutricional" {...register("tratamiento_nutricional", { required: true })} ></textarea>
                <button>Guardar</button>
            </form>
        </>
    )
}

