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
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center title">
                        <hr className="line"></hr>
                        <h3>HISTORIA CLINICA-NUTRICIÓN</h3>
                        <hr className="line"></hr>
                    </div>
                    <div>
                        <div className="col-md-6 mt-2">
                            <input className="input-barra-busqueda" id="barra_busqueda" type="text" placeholder="Buscar por CURP o nombre" onChange={handleBarraChange} />
                            <button onClick={handleSearchPaciente}>Buscar</button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="title-secondary">Datos personales</label>
                        {pacienteResult.map(resultado => (
                            <PacienteCard paciente={resultado} key={resultado.CURP} />
                        ))}
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-5">
                                <label className="label-form">Número expediente</label>
                                <input className="input-form mt-1" id="num_expediente" placeholder="numero_expediente" type="number" {...register("num_expediente", { required: true })} />
                            </div>
                            <div className="col-md-5">
                                <label className="label-form">Motivo de consulta</label>
                                <textarea className="input-form mt-1" placeholder="Motivo de consulta" {...register("motivo_consulta", { required: true })}></textarea>
                            </div>
                            <div className="col-md-1">
                                <label className="label-form mt-1">Sexo</label>
                                <label className="label-form">Femenino
                                    <input type="radio" id="sexo_femenino" name="option_sexo" value="F" {...register("sexo", { required: true })} onChange={handleCampusFemenino} />
                                </label>
                                <label className="label-form">Masculino
                                    <input type="radio" id="sexo_masculino" name="option_sexo" value="M" {...register("sexo", { required: true })} onChange={handleCampusFemenino} />
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 ml-2">
                                <label className="label-form">Fecha de nacimiento</label>
                                <input className="input-form" type="date" id="fecha_nacimiento" placeholder="Fecha de nacimiento" {...register("fecha_nacimiento", { required: true })} />
                            </div>
                            <div className="col-md-4">
                                <label className="label-form">Municipio de nacimiento</label>
                                <input className="input-form" type="text" id="municipio_nacimiento" placeholder="Municipio de nacimiento" {...register("municipio_nacimiento", { required: true })} />
                            </div>
                            <div className="col-md-5 mr-2">
                                <label className="label-form">Estado de nacimiento</label>
                                <input className="input-form" type="text" id="estado_nacimiento" placeholder="Estado de nacimiento" {...register("estado_nacimiento", { required: true })} />
                            </div>
                        </div>
                        <div className="row">
                            <label className="title-secondary">Indicadores clínicos</label>
                            <label className="label-form">AHF</label>
                            <div className="mt-1">
                                <label className="label-form">Diabetes</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="diabetes_si" name="option_diabetes" value={true} {...register("AHF_diabetes", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="diabetes_no" name="option_diabetes" value={false} {...register("AHF_diabetes", { required: true })} />
                                </label>
                                <input className="input-form" type="text" placeholder="¿Quién?" {...register("quien_diabetes", { required: true })} />
                            </div>
                            <div className="mt-1">
                                <label className="label-form">Hipertensión</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="hipertension_si" name="option_hipertension" value={true} {...register("AHF_hipertension", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="hipertension_no" name="option_hipertension" value={false} {...register("AHF_hipertension", { required: true })} />
                                </label>
                                <input className="input-form" type="text" placeholder="¿Quién?" {...register("quien_hipertension", { required: true })} />
                            </div>
                            <div className="mt-1">
                                <label className="label-form">Dislipidemias</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="dislipidemias_si" name="option_dislipidemias" value={true} {...register("AHF_dislipidemias", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="dislipidemias_no" name="option_dislipidemias" value={false} {...register("AHF_dislipidemias", { required: true })} />
                                </label>
                                <input className="input-form" type="text" placeholder="¿Quién?" {...register("quien_dislipidemias", { required: true })} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <label className="title-secondary mt-2 mb-2">Antecedentes patológicos</label>
                            <div>
                                <label className="label-form">Diabetes mellitus</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="diabetesmellitus_si" name="option_diabetesmellitus" value={true} {...register("AP_diabetes_mellitus", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="diabetesmellitus_no" name="option_diabetesmellitus" value={false} {...register("AP_diabetes_mellitus", { required: true })} />
                                </label>
                            </div>
                            <div>
                                <label className="label-form">Hipertensión</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="ap_hipertension_si" name="option_ap_hipertension" value={true} {...register("AP_hipertension", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="ap_hipertension-no" name="option_ap_hipertension" value={false} {...register("AP_hipertension", { required: true })} />
                                </label>
                            </div>
                            <div>
                                <label className="label-form">Dislipidemias</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="ap_dislipidemias_si" name="option_ap_dislipidemias" value={true} {...register("AP_dislipidemias", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="ap_dislipidemias_no" name="option_ap_dislipidemias" value={false} {...register("AP_dislipidemias", { required: true })} />
                                </label>
                            </div>
                            <div>
                                <label className="label-form mt-2">¿Presenta problemas gastrointestinales como diarrea, gastritis, colitis, estreñimiento, ulceras, diarrea?</label>
                                <label className="mx-4" >Si
                                    <input type="radio" id="problema_gastro_si" name="option_gastro" value={true} {...register("problema_gastrointestinal", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="problema_gastro_no" name="option_gastro" value={false} {...register("problema_gastrointestinal", { required: true })} />
                                </label>
                            </div>
                            <div className="row">
                                <input className="input-form col-md-5" type="text" placeholder="¿Cuál" {...register("cual_problema_gastrointestinal", { required: true })} />
                                <textarea className="input-form col-md-5" placeholder="Observaciones" {...register("observaciones_patologicas", { required: true })}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mt-1">
                                <label>Intervenciones quirurgicas</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="inter_quirurgica_si" name="option_quirurgica" value={true} {...register("intervencion_quirurgica", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="inter_quirurgica_no" name="option_quirurgica" value={false} {...register("intervencion_quirurgica", { required: true })} />
                                </label>
                                <input className="input-form" type="text" placeholder="¿Cuál" {...register("cual_intervencion_quirurgica", { required: true })} />
                            </div>
                            <div className="mt-1">
                                <label>Alergia/Intolerancia a un alimento</label>
                                <label className="mx-4">Si
                                    <input type="radio" id="aler_alimento_si" name="option_aler_alimento" value={true} {...register("alergia_alimento", { required: true })} />
                                </label>
                                <label className="mx-4">No
                                    <input type="radio" id="aler_alimento_no" name="option_aler_alimento" value={false} {...register("alergia_alimento", { required: true })} />
                                </label>
                                <input className="input-form" type="text" placeholder="¿Cuál" {...register("cual_alergia_alimento", { required: true })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mt-2">
                                <label className="label-form">¿Consume algún farmáco?</label>
                                <label className="label-form mx-4">Si
                                    <input type="radio" id="consume_farmaco_si" name="option_consume_farmaco" value={true} {...register("consume_farmaco_alergia", { required: true })} />
                                </label>
                                <label className="label-form">No
                                    <input type="radio" id="consume_farmaco_no" name="option-consume-farmaco" value={false} {...register("consume_farmaco_alergia", { required: true })} />
                                </label>
                            </div>
                            <div className="col-md-4 mt-2">
                                <input className="input-form" type="text" placeholder="¿Cuál" {...register("cual_alergia_farmaco", { required: true })} />
                            </div>
                            <div className="col-md-5 mt-2">
                                <input className="input-form" type="text" placeholder="¿Desde cuándo?" {...register("desde_cuando_farmaco", { required: true })} />
                            </div>
                        </div>

                        <div className="row">
                            <label className="title-secondary">ANP</label>
                            <div className="col-md-3 mt-2">
                                <label>Realiza actividad fisica</label>
                                <label className="label-form mx-2">Si
                                    <input type="radio" id="actividad_fisica_si" name="option_actividad_fisica" value={true} {...register("realiza_actividad_fisica", { required: true })} />
                                </label>
                                <label className="label-form mx-2">No
                                    <input type="radio" id="actividad_fisica_no" name="option_actividad_fisica" value={false} {...register("realiza_actividad_fisica", { required: true })} />
                                </label>
                            </div>
                            <div className="col-md-4 mt-2">
                                <input className="input-form" type="text" placeholder="¿Cuál?" {...register("cual_actividad_fisica", { required: true })} />
                            </div>
                            <div className="col-md-5 mt-2">
                                <input className="input-form" type="text" placeholder="duracion" {...register("duracion", { required: true })} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3 mt-2">
                                <label>Consume alcohol</label>
                                <label className="label-form mx-4">Si
                                    <input type="radio" id="consume_alcohol_si" name="option_consume_alcohol" value={true} {...register("consume_alcohol", { required: true })} />
                                </label>
                                <label>No
                                    <input type="radio" id="consume_alcohol_no" name="option_consume_alcohol" value={false} {...register("consume_alcohol", { required: true })} />
                                </label>
                            </div>
                            <div className="col-md-4 mt-2">
                                <label>Consume tabaco</label>
                                <label className="label-form mx-4">Si
                                    <input type="radio" id="consume_tabaco_si" name="option_consume_tabaco" value={true} {...register("consume_tabaco", { required: true })} />
                                </label>
                                <label>No
                                    <input type="radio" id="consume-tabaco-no" name="option-consume-tabaco" value={false} {...register("consume_tabaco", { required: true })} />
                                </label>                            </div>
                            <div className="col-md-5 mt-2">
                                <label>Consume drogas</label>
                                <label className="label-form mx-4">Si
                                    <input type="radio" id="consume_drogas_si" name="option_consume_drogas" value={true} {...register("consume_droga", { required: true })} />
                                </label>
                                <label>No
                                    <input type="radio" id="consume_drogas_no" name="option_consume_drogas" value={false} {...register("consume_droga", { required: true })} />
                                </label>                            </div>
                        </div>


                        {showCampusFem && (
                            <div className="row">
                                <label className="title-secondary mt-2">AGO</label>
                                <div className="col-md-4">
                                    <div className="row">
                                        <input className="col-md-3" type="number" placeholder="Número de gestas" {...register("numero_gestas")} />
                                        <input className="col-md-4" type="number" placeholder="Número de partos cesarea" {...register("numero_partos_cesarea")} />
                                        <input className="col-md-5" type="number" placeholder="Número de abortos" {...register("numero_abortos")} />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <label>Actualmente lactando</label>
                                    <label>Si
                                        <input type="radio" id="lactando_si" name="option_lactando" value={true} {...register("actualmente_lactando")} />
                                    </label>
                                    <label>No
                                        <input type="radio" id="lactando_no" name="option_lactando" value={false} {...register("actualmente_lactando")} />
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" placeholder="Ultima menstruación" {...register("fecha_ultima_menstruacion")} />
                                </div>
                                <div className="col-md-3">
                                    <label>Presenta menoupasia</label>
                                    <label>Si
                                        <input type="radio" id="menopausia-si" name="option_menopausia" value={true} {...register("presenta_menoupasia")} />
                                    </label>
                                    <label>No
                                        <input type="radio" id="menopausia_no" name="option_menopausia" value={false} {...register("presenta_menoupasia")} />
                                    </label>
                                </div>
                            </div>
                        )}
                        <div className="row">
                            <label className="title-secondary mt-2">Indicadores dietéticos</label>
                            <label>Frecuencia de grupo de alimentos</label>
                            <div className="col-md-12 mt-2">
                                <input className="col-md-2" type="text" id="frecuencia_cereales" placeholder="Frecuencia de cereales" {...register("frecuencia_cereales", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencia_frutas" placeholder="Frecuencia de frutas" {...register("frecuencia_frutas", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencia_verduras" placeholder="Frecuencia de verduras" {...register("frecuencia_verduras", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencia_carne" placeholder="Frecuencia de carne roja" {...register("frecuencia_carne_roja", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencia_pollo" placeholder="Frecuencia de pollo" {...register("frecuencia_pollo", { required: true })} />
                            </div>
                            <div className="col-md-12">
                                <input className="col-md-2" type="text" id="frecuencias_lacteos" placeholder="Frecuencia de lacteos" {...register("frecuencia_lacteos", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencia_leguminosas" placeholder="Frecuencia de leguminosas" {...register("frecuencia_leguminosas", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencias_azucar" placeholder="Frecuencia de azucar" {...register("frecuencia_azucar", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencias_grasas" placeholder="Frecuencia de grasas" {...register("frecuencia_grasas", { required: true })} />
                                <input className="col-md-2" type="text" id="frecuencia_pescado" placeholder="Frecuencia de pescado" {...register("frecuencia_pescado", { required: true })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-2">
                                <input className="input-form" type="number" id="veces_come" placeholder="¿Cuantas veces come?" {...register("cuantas_veces_come", { required: true })} />
                            </div>
                            <div className="col-md-6 mt-2">
                                <input className="input-form" type="text" id="quien_prepara_ali" placeholder="¿Quién prepara los alimentos?" {...register("quien_prepara_alimentos", { required: true })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-2">
                                <input className="input-form" type="number" id="litros_agua" placeholder="Litros de agua que consume" step="0.0" {...register("litro_consume_agua", { required: true })} />
                            </div>
                            <div className="col-md-6 mt-2">
                                <input className="input-form" type="number" id="litros_refresco" placeholder="Litros de refresco que consume" step="0.0" {...register("litro_consume_refresco", { required: true })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mt-2">
                                <input className="input-form" type="number" id="litros_cafe" placeholder="Litros de cafe que consume" step="0.0" {...register("litro_consume_cafe", { required: true })} />
                            </div>
                            <div className="col-md-4 mt-2">
                                <textarea className="input-form" id="alimentos_malestar" placeholder="Alimentos que causan malestar" {...register("alimentos_causan_malestar", { required: true })} ></textarea>
                            </div>
                            <div className="col-md-4 mt-2">
                                <input className="input-form" id="grasa_alimentos" type="text" placeholder="Tipo de grasa para prepara alimentos" {...register("tipo_grasa_preparar_alimentos", { required: true })} />
                            </div>
                        </div>
                        <div className="row">
                            <label className="title-secondary">R24</label>
                            <div className="col-md-2 mt-2">
                                <textarea id="r24_desayuno" placeholder="Desayuno" {...register("r24_desayuno", { required: true })} />
                            </div>
                            <div className="col-md-2 mt-2">
                                <textarea id="r24_colacion_uno" placeholder="Colacion" {...register("r24_colacion_uno", { required: true })} />
                            </div>
                            <div className="col-md-2 mt-2">
                                <textarea id="r24_comida" placeholder="Comida" {...register("r24_comida", { required: true })} />
                            </div>
                            <div className="col-md-2 mt-2">
                                <textarea id="r24_colacion_dos" placeholder="Colación dos" {...register("r24_colacion_dos", { required: true })} />
                            </div>
                            <div className="col-md-2 mt-2">
                                <textarea id="r24_cena" placeholder="Cena" {...register("r24_cena", { required: true })} />
                            </div>
                        </div>
                        <div>
                            <textarea className="input-form" id="diagnostico_nutricio" placeholder="Diagnostico nutricional" {...register("diagnostico_nutricio", { required: true })} ></textarea>
                        </div>
                        <div>
                            <textarea className="input-form" id="tratamiento_nutricional" placeholder="Tratamiento nutricional" {...register("tratamiento_nutricional", { required: true })} ></textarea>
                        </div>
                        <button className="button-form">Guardar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

