import { useForm } from "react-hook-form"
import { addHistoriaNutricion } from "../../api/Nutricion.api"
import { useEffect, useState } from "react";
import { getAllPacientes } from "../../api/Pacientes.api";
import { PacienteCard } from "../Paciente/PacienteCard"
export function AddHistorialNutricion() {
    const [criterio_search, setCriterioSearch] = useState("")
    const [pacientes, setPacientes] = useState([])
    const [pacienteResult, setPacienteResult] = useState([])
    const [showCampusFem, setShowCampus] = useState(false)
    let regCurp = /^\D{1,4}\d{1,6}/;
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        async function loadPacientes() {
            const res = await getAllPacientes()
            setPacientes(res.data)
        }
        loadPacientes()
    }, [])
    const handleBarraChange = (evt) => {
        setCriterioSearch(evt.target.value)
    }
    //Realizar la busqueda para el paciente a registrar su historia de nutricion
    const handleSearchPaciente = async () => {
        //revisar si el criterio de busqueda es por CURP
        const revisarCurp = regCurp.test(criterio_search)

        if (revisarCurp) {
            // busca el paciente por curp
            let resultado = pacientes.filter((paciente) => paciente.CURP === criterio_search)
            setPacienteResult(resultado)
        } else {
            //separa el nombre si el criterio es por nombre
            const criterio_nombre = criterio_search.split(" ")
            let resultado = pacientes.filter((paciente) => paciente.nombre === criterio_nombre[0] && paciente.apePaterno === criterio_nombre[1])
            setPacienteResult(resultado)
        }
    }
    const handleCampusFemenino = (evt) => {
        const valor = evt.target.value
        if (valor === "F") {
            setShowCampus(true)
        } else if (valor === "M") {
            setShowCampus(false)
        }
    }
    const onSubmit = handleSubmit(async (data) => {
        const res = await addHistoriaNutricion(data);
        console.log(data)
        console.log(res)
    })
    return (
        <>
            <input id="barra_busqueda" type="text" placeholder="Buscar por CURP o nombre" onChange={handleBarraChange} />
            <button onClick={handleSearchPaciente}>Buscar</button>
            <label>Datos personales</label>
            {pacienteResult.map(resultado => (
                <PacienteCard paciente={resultado} key={resultado.CURP} />
            ))}
            <form onSubmit={onSubmit}>
                <input id="num_expediente" placeholder="numero_expediente" type="number" {...register("num_expediente", { required: true })} />
                <textarea placeholder="Motivo de consulta" {...register("motivo_consulta", { required: true })}></textarea>
                <label>AHF</label>

                <label>Femenino
                    <input type="radio" id="sexo_femenino" name="option_sexo" value="F" {...register("sexo", { required: true })} onChange={handleCampusFemenino} />
                </label>
                <label>Masculino
                    <input type="radio" id="sexo_masculino" name="option_sexo" value="M" {...register("sexo", { required: true })} onChange={handleCampusFemenino} />
                </label>
                <input type="date" id="fecha_nacimiento" placeholder="Fecha de nacimiento" {...register("fecha_nacimiento", { required: true })} />
                <input type="text" id="municipio_nacimiento" placeholder="Municipio de nacimiento" {...register("municipio_nacimiento", { required: true })} />
                <input type="text" id="estado_nacimiento" placeholder="Estado de nacimiento" {...register("estado_nacimiento", { required: true })} />

                <label>Indicadores clínicos</label>
                <label>Diabetes</label>
                <label>Si
                    <input type="radio" id="diabetes_si" name="option_diabetes" value={true} {...register("AHF_diabetes", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="diabetes_no" name="option_diabetes" value={false} {...register("AHF_diabetes", { required: true })} />
                </label>
                <input type="text" placeholder="¿Quién?" {...register("quien_diabetes", { required: true })} />
                <label>Hipertension</label>
                <label>Si
                    <input type="radio" id="hipertension_si" name="option_hipertension" value={true} {...register("AHF_hipertension", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="hipertension_no" name="option_hipertension" value={false} {...register("AHF_hipertension", { required: true })} />
                </label>
                <input type="text" placeholder="¿Quién?" {...register("quien_hipertension", { required: true })} />
                <label>Dislipidemias</label>
                <label>Si
                    <input type="radio" id="dislipidemias_si" name="option_dislipidemias" value={true} {...register("AHF_dislipidemias", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="dislipidemias_no" name="option_dislipidemias" value={false} {...register("AHF_dislipidemias", { required: true })} />
                </label>
                <input type="text" placeholder="¿Quién?" {...register("quien_dislipidemias", { required: true })} />

                <label>Antecedentes patologicos</label>
                <label>Diabetes mellitus</label>
                <label>Si
                    <input type="radio" id="diabetesmellitus_si" name="option_diabetesmellitus" value={true} {...register("AP_diabetes_mellitus", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="diabetesmellitus_no" name="option_diabetesmellitus" value={false} {...register("AP_diabetes_mellitus", { required: true })} />
                </label>
                <label>Hipertension</label>
                <label>Si
                    <input type="radio" id="ap_hipertension_si" name="option_ap_hipertension" value={true} {...register("AP_hipertension", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="ap_hipertension-no" name="option_ap_hipertension" value={false} {...register("AP_hipertension", { required: true })} />
                </label>
                <label>Dislipidemias</label>
                <label>Si
                    <input type="radio" id="ap_dislipidemias_si" name="option_ap_dislipidemias" value={true} {...register("AP_dislipidemias", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="ap_dislipidemias_no" name="option_ap_dislipidemias" value={false} {...register("AP_dislipidemias", { required: true })} />
                </label>
                <label>¿Presenta problemas gastrointestinales como diarrea, gastritis, colitis, estreñimiento, ulceras, diarrea?</label>
                <label>Si
                    <input type="radio" id="problema_gastro_si" name="option_gastro" value={true} {...register("problema_gastrointestinal", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="problema_gastro_no" name="option_gastro" value={false} {...register("problema_gastrointestinal", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_problema_gastrointestinal", { required: true })} />
                <textarea placeholder="Observaciones" {...register("observaciones_patologicas", { required: true })}></textarea>
                <label>Intervenciones quirurgicas</label>
                <label>Si
                    <input type="radio" id="inter_quirurgica_si" name="option_quirurgica" value={true} {...register("intervencion_quirurgica", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="inter_quirurgica_no" name="option_quirurgica" value={false} {...register("intervencion_quirurgica", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_intervencion_quirurgica", { required: true })} />
                <label>Alergia/Intolerancia a un alimento</label>
                <label>Si
                    <input type="radio" id="aler_alimento_si" name="option_aler_alimento" value={true} {...register("alergia_alimento", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="aler_alimento_no" name="option_aler_alimento" value={false} {...register("alergia_alimento", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_alergia_alimento", { required: true })} />
                <label>¿Consume algun farmaco?</label>
                <label>Si
                    <input type="radio" id="consume_farmaco_si" name="option_consume_farmaco" value={true} {...register("consume_farmaco_alergia", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="consume_farmaco_no" name="option-consume-farmaco" value={false} {...register("consume_farmaco_alergia", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_alergia_farmaco", { required: true })} />
                <input type="text" placeholder="¿Desde cuándo?" {...register("desde_cuando_farmaco", { required: true })} />

                <label>ANP</label>
                <label>Realiza actividad fisica</label>
                <label>Si
                    <input type="radio" id="actividad_fisica_si" name="option_actividad_fisica" value={true} {...register("realiza_actividad_fisica", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="actividad_fisica_no" name="option_actividad_fisica" value={false} {...register("realiza_actividad_fisica", { required: true })} />
                </label>
                <input type="text" placeholder="¿Cuál" {...register("cual_actividad_fisica", { required: true })} />
                <input type="text" placeholder="duracion" {...register("duracion", { required: true })} />
                <label>Consume alcohol</label>
                <label>Si
                    <input type="radio" id="consume_alcohol_si" name="option_consume_alcohol" value={true} {...register("consume_alcohol", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="consume_alcohol_no" name="option_consume_alcohol" value={false} {...register("consume_alcohol", { required: true })} />
                </label>
                <label>Consume tabaco</label>
                <label>Si
                    <input type="radio" id="consume_tabaco_si" name="option_consume_tabaco" value={true} {...register("consume_tabaco", { required: true })} />
                </label>
                <label for="consume-tabaco-no">No
                    <input type="radio" id="consume-tabaco-no" name="option-consume-tabaco" value={false} {...register("consume_tabaco", { required: true })} />
                </label>
                <label>Consume drogas</label>
                <label>Si
                    <input type="radio" id="consume_drogas_si" name="option_consume_drogas" value={true} {...register("consume_droga", { required: true })} />
                </label>
                <label>No
                    <input type="radio" id="consume_drogas_no" name="option_consume_drogas" value={false} {...register("consume_droga", { required: true })} />
                </label>

                {showCampusFem && (
                    <div>
                        <label>AGO</label>
                        <input type="number" placeholder="Número de gestas" {...register("numero_gestas")} />
                        <input type="number" placeholder="Número de partos cesarea" {...register("numero_partos_cesarea")} />
                        <input type="number" placeholder="Número de abortos" {...register("numero_abortos")} />
                        <label>Actualmente lactando</label>
                        <label>Si
                            <input type="radio" id="lactando_si" name="option_lactando" value={true} {...register("actualmente_lactando")} />
                        </label>
                        <label>No
                            <input type="radio" id="lactando_no" name="option_lactando" value={false} {...register("actualmente_lactando")} />
                        </label>
                        <input type="date" placeholder="Ultima menstruación" {...register("fecha_ultima_menstruacion")} />
                        <label>Presenta menoupasia</label>
                        <label>Si
                            <input type="radio" id="menopausia-si" name="option_menopausia" value={true} {...register("presenta_menoupasia")} />
                        </label>
                        <label>No
                            <input type="radio" id="menopausia_no" name="option_menopausia" value={false} {...register("presenta_menoupasia")} />
                        </label>
                    </div>
                )}

                <label>Indicadores dietéticos</label>
                <label>Frecuencia de grupo de alimentos</label>
                <input type="text" id="frecuencia_cereales" placeholder="Frecuencia de cereales" {...register("frecuencia_cereales", { required: true })} />
                <input type="text" id="frecuencia_frutas" placeholder="Frecuencia de frutas" {...register("frecuencia_frutas", { required: true })} />
                <input type="text" id="frecuencia_verduras" placeholder="Frecuencia de verduras" {...register("frecuencia_verduras", { required: true })} />
                <input type="text" id="frecuencia_carne" placeholder="Frecuencia de carne roja" {...register("frecuencia_carne_roja", { required: true })} />
                <input type="text" id="frecuencia_pollo" placeholder="Frecuencia de pollo" {...register("frecuencia_pollo", { required: true })} />
                <input type="text" id="frecuencias_lacteos" placeholder="Frecuencia de lacteos" {...register("frecuencia_lacteos", { required: true })} />
                <input type="text" id="frecuencia_leguminosas" placeholder="Frecuencia de leguminosas" {...register("frecuencia_leguminosas", { required: true })} />
                <input type="text" id="frecuencias_azucar" placeholder="Frecuencia de azucar" {...register("frecuencia_azucar", { required: true })} />
                <input type="text" id="frecuencias_grasas" placeholder="Frecuencia de grasas" {...register("frecuencia_grasas", { required: true })} />
                <input type="text" id="frecuencia_pescado" placeholder="Frecuencia de pescado" {...register("frecuencia_pescado", { required: true })} />
                <input type="number" id="veces_come" placeholder="¿Cuantas veces come?" {...register("cuantas_veces_come", { required: true })} />
                <input type="text" id="quien_prepara_ali" placeholder="¿Quién prepara los alimentos?" {...register("quien_prepara_alimentos", { required: true })} />
                <input type="number" id="litros_agua" placeholder="Litros de agua que consume" step="0.0" {...register("litro_consume_agua", { required: true })} />
                <input type="number" id="litros_refresco" placeholder="Litros de refresco que consume" step="0.0" {...register("litro_consume_refresco", { required: true })} />
                <input type="number" id="litros_cafe" placeholder="Litros de cafe que consume" step="0.0" {...register("litro_consume_cafe", { required: true })} />
                <textarea id="alimentos_malestar" placeholder="Alimentos que causan malestar" {...register("alimentos_causan_malestar", { required: true })} ></textarea>
                <input id="grasa_alimentos" type="text" placeholder="Tipo de grasa para prepara alimentos" {...register("tipo_grasa_preparar_alimentos", { required: true })} />
                <textarea id="r24_desayuno" placeholder="Desayuno" {...register("r24_desayuno", { required: true })} />
                <textarea id="r24_colacion_uno" placeholder="Colacion" {...register("r24_colacion_uno", { required: true })} />
                <textarea id="r24_comida" placeholder="Comida" {...register("r24_comida", { required: true })} />
                <textarea id="r24_colacion_dos" placeholder="Colación dos" {...register("r24_colacion_dos", { required: true })} />
                <textarea id="r24_comida" placeholder="Cena" {...register("r24_cena", { required: true })} />

                <textarea id="diagnostico_nutricio" placeholder="Diagnostico nutricional" {...register("diagnostico_nutricio", { required: true })} ></textarea>
                <textarea id="tratamiento_nutricional" placeholder="Tratamiento nutricional" {...register("tratamiento_nutricional", { required: true })} ></textarea>
                <button>Guardar</button>
            </form>
        </>
    )
}

