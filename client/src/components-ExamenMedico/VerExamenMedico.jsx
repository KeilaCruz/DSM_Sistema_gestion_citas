import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {getExamenMedico,} from "../api/examenMedico.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllPacientes } from "../api/paciente.api";
import { getAllUsuarios } from "../api/usuario.api";
import { getAllRoles } from "../api/rol.api";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function VerExamenMedico() {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPacientes, setSelectedPacientes] = useState("");

  const [usuarios, setUsuarios] = useState([]);
  const [selectedUsuarios, setSelectedUsuarios] = useState("");

  const [showmadreViva, setShowMadreViva] = useState(false);
  const [showpadreVivo, setShowPadreVivo] = useState(false);
  const [showhermanoVivo, setShowHermanoVivo] = useState(false);
  const [showhijosVivos, setShowHijosVivos] = useState(false);
  const [showPracticaEjercicio, setShowPracticaEjercicio] = useState(false);
  const [showTabaquismo, setShowTabaquismo] = useState(false);
  const [showAlcoholismo, setShowAlcoholismo] = useState(false);
  const [showPlanificacionFamiliar, setShowPlanificacionFamiliar] =
    useState(false);

  const handleRadioMadreChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowMadreViva(false);
    } else if (optionSeleccionada == "false") {
      setShowMadreViva(true);
    }
  };

  const handleRadioPadreChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowPadreVivo(false);
    } else if (optionSeleccionada == "false") {
      setShowPadreVivo(true);
    }
  };

  const handleRadioHermanoChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowHermanoVivo(false);
    } else if (optionSeleccionada == "false") {
      setShowHermanoVivo(true);
    }
  };

  const handleRadioHijosChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowHijosVivos(false);
    } else if (optionSeleccionada == "false") {
      setShowHijosVivos(true);
    }
  };

  const handleRadioEjercicioChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowPracticaEjercicio(true);
    } else if (optionSeleccionada == "false") {
      setShowPracticaEjercicio(false);
    }
  };

  const handleRadioTabaquismoChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowTabaquismo(true);
    } else if (optionSeleccionada == "false") {
      setShowTabaquismo(false);
    }
  };

  const handleRadioAlcoholismoChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowAlcoholismo(true);
    } else if (optionSeleccionada == "false") {
      setShowAlcoholismo(false);
    }
  };

  const handleRadioPlanFamiliarChange = (evt) => {
    const optionSeleccionada = evt.target.value;
    if (optionSeleccionada == "true") {
      setShowPlanificacionFamiliar(true);
    } else if (optionSeleccionada == "false") {
      setShowPlanificacionFamiliar(false);
    }
  };

  useEffect(() => {
    // Hacer la solicitud para obtener la lista desde la API
    getAllPacientes()
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Pacientes:", error);
      });

    getAllUsuarios()
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Usuarios:", error);
      });

    getAllRoles()
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Roles:", error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm(); // Configuración y registro de formularios

  const navigate = useNavigate(); // Función para navegar entre páginas
  const params = useParams(); // Parámetros de la URL

  const onSubmit = handleSubmit(async (data) => {
    // Función para manejar el envío del formulario

    if (params.id) {
      // Si hay un ID en los parámetros (modo edición), actualiza el examen médico
      await updateExamenMedcio(params.id, data);
      toast.success("Examen médico actualizado exitosamente", {
        // Muestra una notificación de éxito
        duration: 4000,
        style: {
          backgroundColor: "#101010",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "20px",
        },
      });
    } else {
      // Si no hay un ID en los parámetros (modo creación), crea una nueva Hoja de evaluación
      await createExamenMedico(data);
      toast.success("Examen médico creado exitosamente", {
        // Muestra una notificación de éxito
        duration: 4000,
        style: {
          backgroundColor: "#101010",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "20px",
        },
      });
    }
    navigate("/examenMedico"); // Navega a la página principal de examen médico
  });

  useEffect(() => {
    async function loadExamenMedico() {
      if (params.id) {
        const { data } = await getExamenMedico(params.id);

        const pacienteResponse = await fetch(
          `http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/${data.idPaciente}`
        );
        const pacienteData = await pacienteResponse.json();
        setValue("idPaciente", pacienteData.CURP);

        const usuarioResponse = await fetch(
          `http://127.0.0.1:8000/SaludPublica/api/v1/usuarios/${data.idUsuario}`
        );
        const usuarioData = await usuarioResponse.json();
        setValue("idUsuario", usuarioData.idUsuario);

        setValue("sexo", data.sexo);
        setValue("fecha", data.fecha);
        setValue("madre_viva", data.madre_viva.toString());
        setValue("madre_finada", data.madre_finada);
        setValue("padre_vivo", data.padre_vivo.toString());
        setValue("padre_finado", data.padre_finado);
        setValue("hermano_vivo", data.hermano_vivo.toString());
        setValue("hermano_finado", data.hermano_finado);
        setValue("hijos_vivos", data.hijos_vivos.toString());
        setValue("hijos_finados", data.hijos_finados);
        setValue("agudeza_visual", data.agudeza_visual);
        setValue("hiper_tension", data.hiper_tension);
        setValue("diabetes_mellitus", data.diabetes_mellitus);
        setValue("obesidad", data.obesidad);
        setValue("asma", data.asma);
        setValue("epilepsia", data.epilepsia);
        setValue("lupus", data.lupus);
        setValue("nefropatias", data.nefropatias);
        setValue("artropatias", data.artropatias);
        setValue("otras_enfermedades", data.otras_enfermedades);
        setValue("observaciones_enfermedades", data.observaciones_enfermedades);
        setValue("lugar_nacimiento", data.lugar_nacimiento);
        setValue("fecha_nacimiento", data.fecha_nacimiento);
        setValue("escolaridad", data.escolaridad);
        setValue("trabajo_actual", data.trabajo_actual);
        setValue("practica_ejercicio", data.practica_ejercicio.toString());
        setValue("ejercicio_cual", data.ejercicio_cual);
        setValue("tabaquismo", data.tabaquismo.toString());
        setValue("tabaquismo_edad", data.tabaquismo_edad);
        setValue("tabaquismo_cantidad", data.tabaquismo_cantidad);
        setValue("alcoholismo", data.alcoholismo.toString());
        setValue("alcoholismo_edad", data.alcoholismo_edad);
        setValue("inmunizaciones", data.inmunizaciones);
        setValue("habitos_higienicos", data.habitos_higienicos);
        setValue("habitos_alimenticios", data.habitos_alimenticios);
        setValue("especifique_habitos", data.especifique_habitos);
        setValue("edad_menarca", data.edad_menarca);
        setValue("frecuencia_duracion", data.frecuencia_duracion);
        setValue("ultima_menstruacion", data.ultima_menstruacion);
        setValue("num_embarazos", data.num_embarazos);
        setValue("num_partos", data.num_partos);
        setValue("num_cesareas", data.num_cesareas);
        setValue("num_abortos", data.num_abortos);
        setValue("ultimo_parto", data.ultimo_parto);
        setValue("ultimo_aborto", data.ultimo_aborto);
        setValue(
          "planificacion_familiar",
          data.planificacion_familiar.toString()
        );
        setValue("metodo_planificacion", data.metodo_planificacion);
        setValue("traumatismos", data.traumatismos);
        setValue("quirurgicos", data.quirurgicos);
        setValue("transfusiones", data.transfusiones);
        setValue("grupo_sanguineo", data.grupo_sanguineo);
        setValue("factor_rh", data.factor_rh);
        setValue("alergias", data.alergias);
        setValue("infecciones", data.infecciones);
        setValue("dengue_paludismo", data.dengue_paludismo);
        setValue("tatuajes", data.tatuajes);
        setValue("tension_arterial", data.tension_arterial);
        setValue("frecuencia_cardiaca", data.frecuencia_cardiaca);
        setValue("frecuencia_respiratoria", data.frecuencia_respiratoria);
        setValue("oxigenacion", data.oxigenacion);
        setValue("temperatura", data.temperatura);
        setValue("peso_actual", data.peso_actual);
        setValue("talla", data.talla);
        setValue("imc", data.imc);
        setValue("circunferencia_abd", data.circunferencia_abd);
        setValue("circunferencia_cadera", data.circunferencia_cadera);
        setValue(
          "observaciones_antropometria",
          data.observaciones_antropometria
        );
        setValue("EF_cabeza", data.EF_cabeza);
        setValue("EF_cuello", data.EF_cuello);
        setValue("EF_torax", data.EF_torax);
        setValue("EF_abdomen", data.EF_abdomen);
        setValue("EF_EXT_sup", data.EF_EXT_sup);
        setValue("EF_EXT_inf", data.EF_EXT_inf);
        setValue("EF_EXT_rodillas", data.EF_EXT_rodillas);
        setValue("EF_EXT_pelvis", data.EF_EXT_pelvis);
        setValue("EF_EXT_pies", data.EF_EXT_pies);
        setValue("biometria_hematica", data.biometria_hematica);
        setValue("quimica_sanguinea", data.quimica_sanguinea);
        setValue("vdrl", data.vdrl);
        setValue("prueba_vih", data.prueba_vih);
        setValue("antidoping", data.antidoping);
        setValue("examen_orina", data.examen_orina);
        setValue("diagnostico", data.diagnostico);
      }
    }
    loadExamenMedico();
  }, []);

  const volverAtras = () => {
    window.history.back();
  };

  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <form className="row g-3" onSubmit={onSubmit}>
          <h3 className=" offset-md-1 col-md-11">DATOS GENERALES</h3>

          <div className="col-md-3 offset-md-1">
            <label htmlFor="especialista" className="form-label">
              Seleccione un especialista:
            </label>
            <select
              value={selectedUsuarios}
              name="idUsuario"
              id="especialista"
              className="form-select"
              {...register("idUsuario", { required: true })}
              onChange={(e) => setSelectedUsuarios(e.target.value)}
            >
              <option value="">Selecciona un Especialista</option>
              {usuarios.map((usuario) => (
                <option key={usuario.idUsuario} value={usuario.idUsuario}>
                  {`${usuario.nombre} ${usuario.ape_paterno} ${usuario.ape_materno}`}
                </option>
              ))}
            </select>
            {errors.idUsuario && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="paciente" className="form-label">
              Seleccione un paciente:
            </label>
            <select
              value={selectedPacientes}
              name="idPaciente"
              id="paciente"
              className="form-select"
              {...register("idPaciente", { required: true })}
              onChange={(e) => setSelectedPacientes(e.target.value)}
            >
              <option value="">Selecciona un Paciente</option>
              {pacientes.map((paciente) => (
                <option key={paciente.CURP} value={paciente.CURP}>
                  {`${paciente.nombre} ${paciente.apePaterno} ${paciente.apeMaterno}`}
                </option>
              ))}
            </select>
            {errors.idPaciente && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="sexo" className="form-label">
              Sexo:
            </label>
            <select
              id="sexo"
              name="sexo"
              className="form-select"
              {...register("sexo", { required: true })}
            >
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
            {errors.sexo && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="fecha" className="form-label">
              Seleccione la fecha:
            </label>
            <input
              type="date"
              placeholder="Fecha"
              id="fecha"
              {...register("fecha", { required: true })}
              className="form-control"
            />
            {errors.fecha && <span>Este campo es requerido</span>}
          </div>

          <h3 className="offset-md-1 col-md-11">1. ANTECEDENTES HEREDOFAMILIARES</h3>

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Madre viva?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="madre-viva"
                name="opcion-madre"
                value={true}
                {...register("madre_viva", { required: true })}
                onChange={handleRadioMadreChange}
              />
              <label class="form-check-label" htmlFor="madre-viva">
                {" "}
                Si{" "}
              </label>
              {errors.madre_viva && <span>Este campo es requerido</span>}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="madre-muerta"
                name="opcion-madre"
                value={false}
                {...register("madre_viva", { required: true })}
                onChange={handleRadioMadreChange}
              />
              <label class="form-check-label" htmlFor="madre-muerta">
                {" "}
                No{" "}
              </label>
              {errors.madre_viva && <span>Este campo es requerido</span>}
            </div>
          </div>

          {showmadreViva && (
            <div className="col-md-2">
              <label className="form-label" htmlFor="madre-causa">
                ¿Cómo fallecio?
              </label>
              <input
                type="text"
                placeholder="Causas de muerte"
                className="form-control"
                id="madre-causa"
                {...register("madre_finada", { required: false })}
              />
            </div>
          )}
          <div className="col-md-11"></div>

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Padre vivo?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="padre-vivo"
                name="opcion-padre"
                value={true}
                {...register("padre_vivo", { required: true })}
                onChange={handleRadioPadreChange}
              />
              <label class="form-check-label" htmlFor="padre-vivo">
                {" "}
                Si{" "}
              </label>
              {errors.padre_vivo && <span>Este campo es requerido</span>}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="padre-muerto"
                name="opcion-padre"
                value={false}
                {...register("padre_vivo", { required: true })}
                onChange={handleRadioPadreChange}
              />
              <label class="form-check-label" htmlFor="padre-muerto">
                {" "}
                No{" "}
              </label>
              {errors.padre_vivo && <span>Este campo es requerido</span>}
            </div>
          </div>

          {showpadreVivo && (
            <div className="col-md-2">
              <label className="form-label" htmlFor="padre-causa">
                ¿Cómo fallecio?
              </label>
              <input
                type="text"
                placeholder="Causas de muerte"
                id="padre-causa"
                {...register("padre_finado", { required: false })}
                className="form-control"
              />
            </div>
          )}

          <div className="col-md-11"></div>

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Hermanos vivos?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="hermano-vivo"
                name="opcion-hermano"
                value={true}
                {...register("hermano_vivo", { required: true })}
                onChange={handleRadioHermanoChange}
              />
              <label class="form-check-label" htmlFor="hermano-vivo">
                {" "}
                Si{" "}
              </label>
              {errors.hermano_vivo && <span>Este campo es requerido</span>}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="hermano-muerto"
                name="opcion-hermano"
                value={false}
                {...register("hermano_vivo", { required: true })}
                onChange={handleRadioHermanoChange}
              />
              <label class="form-check-label" htmlFor="hermano-muerto">
                {" "}
                No{" "}
              </label>
              {errors.hermano_vivo && <span>Este campo es requerido</span>}
            </div>
          </div>

          {showhermanoVivo && (
            <div className="col-md-2">
              <label className="form-label" htmlFor="hermano-causa">
                ¿Cómo fallecio?
              </label>
              <input
                type="text"
                placeholder="Causas de muerte"
                id="hermano-causa"
                {...register("hermano_finado", { required: false })}
                className="form-control"
              />
            </div>
          )}

          <div className="col-md-11"></div>

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Hijos vivos?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="hijos-vivos"
                name="opcion-hijos"
                value={true}
                {...register("hijos_vivos", { required: true })}
                onChange={handleRadioHijosChange}
              />
              <label class="form-check-label" htmlFor="hijos-vivos">
                {" "}
                Si{" "}
              </label>
              {errors.hijos_vivos && <span>Este campo es requerido</span>}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="hijos-muertos"
                name="opcion-hijos"
                value={false}
                {...register("hijos_vivos", { required: true })}
                onChange={handleRadioHijosChange}
              />
              <label class="form-check-label" htmlFor="hijos-muertos">
                {" "}
                No{" "}
              </label>
              {errors.hijos_vivos && <span>Este campo es requerido</span>}
            </div>
          </div>

          {showhijosVivos && (
            <div className="col-md-2">
              <label className="form-label" htmlFor="hijo-causa">
                ¿Cómo fallecio?
              </label>
              <input
                type="text"
                placeholder="Causas de muerte"
                id="hijo-causa"
                {...register("hijos_finados", { required: false })}
                className="form-control"
              />
            </div>
          )}

          <div className="col-md-11"></div>

          <h3 className="offset-md-1 col-md-11">1.1 OTRAS ENFERMEDADES</h3>

          <div className="col-md-2 offset-md-1">
            <label htmlFor="agudeza-visual" className="form-label">
              Agudeza visual:
            </label>
            <input
              type="text"
              placeholder="Agudeza visual"
              id="agudeza-visual"
              {...register("agudeza_visual", { required: true })}
              className="form-control"
            />
            {errors.agudeza_visual && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="hipertension" className="form-label">
              Hipertensión:
            </label>
            <input
              type="text"
              placeholder="Hipertension"
              id="hipertension"
              {...register("hiper_tension", { required: true })}
              className="form-control"
            />
            {errors.hiper_tension && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="diabetes" className="form-label">
              Diabetes mellitus:
            </label>
            <input
              type="text"
              placeholder="Diabetes"
              id="diabetes"
              {...register("diabetes_mellitus", { required: true })}
              className="form-control"
            />
            {errors.diabetes_mellitus && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="Obesidad" className="form-label">
              Obesidad
            </label>
            <input
              type="text"
              placeholder="Obesidad"
              id="obesidad"
              {...register("obesidad", { required: true })}
              className="form-control"
            />
            {errors.obesidad && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="asma" className="form-label">
              Asma:
            </label>
            <input
              type="text"
              placeholder="Asma"
              id="asma"
              {...register("asma", { required: true })}
              className="form-control"
            />
            {errors.asma && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2 offset-md-1">
<label htmlFor="epilepsia" className="form-label">
            Epilépsia:
          </label>
          <input
            type="text"
            placeholder="Epilépsia"
            id="epilepsia"
            {...register("epilepsia", { required: true })}
            className="form-control"
          />
          {errors.epilepsia && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
<label htmlFor="lupus" className="form-label">
            Lupus:
          </label>
          <input
            type="text"
            placeholder="Lupus"
            id="lupus"
            {...register("lupus", { required: true })}
            className="form-control"
          />
          {errors.lupus && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
<label htmlFor="nefropatias" className="form-label">
            Nefropatias:
          </label>
          <input
            type="text"
            placeholder="Nefropatias"
            id="nefropatias"
            {...register("nefropatias", { required: true })}
            className="form-control"
          />
          {errors.nefropatias && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
<label htmlFor="artropatias" className="form-label">
            Artropatias:
          </label>
          <input
            type="text"
            placeholder="Artropatias"
            id="artropatias"
            {...register("artropatias", { required: true })}
            className="form-control"
          />
          {errors.artropatias && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
<label htmlFor="otras-enfermedades" className="form-label">
            Otras enfermedades:
          </label>
          <input
            type="text"
            placeholder="Otras enfermedades"
            id="otras-enfermedades"
            {...register("otras_enfermedades", { required: true })}
            className="form-control"
          />
          {errors.otras_enfermedades && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2 offset-md-1">
<label htmlFor="observaciones" className="form-label">
            Observaciones:
          </label>
          <textarea
            placeholder="Observaciones"
            id="observaciones"
            {...register("observaciones_enfermedades", { required: true })}
            className="form-control"
          ></textarea>
          {errors.observaciones_enfermedades && (
            <span>Este campo es requerido</span>
          )}
          </div>

          

          <h3 className=" offset-md-1 col-md-11">2. ANTECEDENTES PERSONALES NO PATOLÓGICOS</h3>

          <div className="col-md-2 offset-md-1">
<label htmlFor="nacimiento" className="form-label">
            Lugar de nacimiento:
          </label>
          <input
            type="text"
            id="nacimiento"
            placeholder="Lugar de nacimiento"
            {...register("lugar_nacimiento", { required: true })}
            className="form-control"
          />
          {errors.lugar_nacimiento && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
<label htmlFor="fecha-nacimiento" className="form-label">
            Fecha de nacimiento:
          </label>
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            id="fecha-nacimiento"
            {...register("fecha_nacimiento", { required: true })}
            className="form-control"
          />
          {errors.fecha_nacimiento && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
<label htmlFor="escolaridad" className="form-label">
            Escolaridad:
          </label>
          <input
            type="text"
            placeholder="Escolaridad"
            id="escolaridad"
            {...register("escolaridad", { required: true })}
            className="form-control"
          />
          {errors.escolaridad && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
<label htmlFor="trabajo-actual" className="form-label">
            Trabajo actual:
          </label>
          <input
            type="text"
            placeholder="Trabajo actual"
            id="trabajo-actual"
            {...register("trabajo_actual", { required: true })}
            className="form-control"
          />
          {errors.trabajo_actual && <span>Este campo es requerido</span>}
          </div>

          

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Practicas ejercicio?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="ejercicio-si"
                name="opcion-ejercicio"
                value={true}
                {...register("practica_ejercicio", { required: true })}
                onChange={handleRadioEjercicioChange}
              />
              <label class="form-check-label" htmlFor="ejercicio-si">
                {" "}
                Si{" "}
              </label>
              {errors.practica_ejercicio && (
                <span>Este campo es requerido</span>
              )}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="ejercicio-no"
                name="opcion-ejercicio"
                value={false}
                {...register("practica_ejercicio", { required: true })}
                onChange={handleRadioEjercicioChange}
              />
              <label class="form-check-label" htmlFor="ejercicio-no">
                {" "}
                No{" "}
              </label>
              {errors.practica_ejercicio && (
                <span>Este campo es requerido</span>
              )}
            </div>
          </div>

          {showPracticaEjercicio && (
            <div className="col-md-2">
              <label className="form-label" htmlFor="cual-ejercicio">
                ¿Cual ejercicio?
              </label>
              <input
                type="text"
                id="cual-ejercicio"
                placeholder="¿Cual ejercicio?"
                {...register("ejercicio_cual", { required: false })}
                className="form-control"
              />
            </div>
          )}
          
              <div className="col-md-11">

          </div>

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Practica tabaquismo?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="tabaquismo-si"
                name="opcion-tabaco"
                value={true}
                {...register("tabaquismo", { required: true })}
                onChange={handleRadioTabaquismoChange}
              />
              <label class="form-check-label" htmlFor="tabaquismo-si">
                {" "}
                Si{" "}
              </label>
              {errors.tabaquismo && <span>Este campo es requerido</span>}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="tabaquismo-no"
                name="opcion-tabaco"
                value={false}
                {...register("tabaquismo", { required: true })}
                onChange={handleRadioTabaquismoChange}
              />
              <label class="form-check-label" htmlFor="tabaquismo-no">
                {" "}
                No{" "}
              </label>
              {errors.tabaquismo && <span>Este campo es requerido</span>}
            </div>
          </div>

          {showTabaquismo && (
            <div className="col-md-2">
              <label className="form-label" htmlFor="tabaco-edad">
                ¿Desde cuando? (Edad aprox)
              </label>
              <input
                type="number"
                placeholder="¿Desde cuando? (Edad aprox)"
                id="tabaco-edad"
                defaultValue={0}
                {...register("tabaquismo_edad", { required: false })}
                className="form-control"
              />

              <label className="form-label" htmlFor="tabaco-cantidad">
                ¿Cuantos al dia u ocasional?
              </label>
              <input
                type="number"
                id="tabaco-cantidad"
                defaultValue={0}
                placeholder="¿Cuantos al día u ocasional?"
                {...register("tabaquismo_cantidad", { required: false })}
                className="form-control"
              />
            </div>
          )}

<div className="col-md-11">

</div>

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Es alcohólico?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="toma-si"
                name="opcion-alcoholismo"
                value={true}
                {...register("alcoholismo", { required: true })}
                onChange={handleRadioAlcoholismoChange}
              />
              <label class="form-check-label" htmlFor="toma-si">
                {" "}
                Si{" "}
              </label>
              {errors.alcoholismo && <span>Este campo es requerido</span>}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="toma-no"
                name="opcion-alcoholismo"
                value={false}
                {...register("alcoholismo", { required: true })}
                onChange={handleRadioAlcoholismoChange}
              />
              <label class="form-check-label" htmlFor="toma-no">
                {" "}
                No{" "}
              </label>
              {errors.alcoholismo && <span>Este campo es requerido</span>}
            </div>
          </div>

          {showAlcoholismo && (
            <div className="col-md-2">
              <label className="form-label" htmlFor="alcoholico-edad">
                ¿Desde cuando? (Edad aprox)
              </label>
              <input
                type="number"
                id="alcoholico-edad"
                defaultValue={0}
                placeholder="¿Desde cuando? (Edad aprox)"
                {...register("alcoholismo_edad", { required: false })}
                className="form-control"
              />
            </div>
          )}

<div className="col-md-11">

</div>

<div className="col-md-3 offset-md-1">
<label class="form-label" htmlFor="inmunizaciones">
            {" "}
            Inmunizaciones:{" "}
          </label>
          <input
            type="text"
            placeholder="Inmunizaciones"
            id="inmunizaciones"
            {...register("inmunizaciones", { required: false })}
            className="form-control"
          />
          </div>

          <div className="col-md-4">
<label class="form-label" htmlFor="habitos-higienicos">
            Hábitos higiénicos:
          </label>
          <input
            type="text"
            placeholder="Habitos higienicos"
            id="habitos-higienicos"
            {...register("habitos_higienicos", { required: false })}
            className="form-control"
          />
          </div>

          <div className="col-md-4">
<label class="form-label" htmlFor="alimenticios">
            Hábitos alimenticios:
          </label>
          <input
            type="text"
            placeholder="Habitos alimenticios"
            id="alimenticios"
            {...register("habitos_alimenticios", { required: false })}
            className="form-control"
          />
          </div>

          <div className="col-md-4 offset-md-1">
<label class="form-label" htmlFor="habitos">
            Especifique hábitos:
          </label>
          <input
            type="text"
            placeholder="Especifique habitos"
            id="habitos"
            {...register("especifique_habitos", { required: false })}
            className="form-control"
          />
          </div>

          
          <h3 className="offset-md-1 col-md-11">3. ANTECEDENTES GINECO OBSTÉTRICOS</h3>

          <div className="col-md-2 offset-md-1">
<label class="form-label" htmlFor="edad-menarca">
            Edad de la menarca:
          </label>
          <input
            type="number"
            id="edad-menarca"
            placeholder="Edad menarca"
            {...register("edad_menarca", { required: false })}
            className="form-control"
          />
          </div>

          <div className="col-md-2">
<label class="form-label" htmlFor="duracion">
            Frecuencia y duración:
          </label>
          <input
            type="number"
            id="duración"
            placeholder="Frecuencia y duracion"
            {...register("frecuencia_duracion", { required: false })}
            className="form-control"
          />
          </div>

          
          <div className="col-md-2">
<label class="form-label" htmlFor="ultima-menstruacion">
            Última menstruación:
          </label>
          <input
            type="text"
            id="ultima-menstruacion"
            placeholder="Ultima menstruacion"
            {...register("ultima_menstruacion", { required: false })}
            className="form-control"
          />
</div>
          
<div className="col-md-2">
<label class="form-label" htmlFor="num-embarazos">
            Número de embarazos:
          </label>
          <input
            type="number"
            id="num-embarazos"
            placeholder="Numero de embarazos"
            {...register("num_embarazos", { required: false })}
            className="form-control"
          />
          </div>
          
          <div className="col-md-2">
<label class="form-label" htmlFor="num-partos">
            Número de partos:
          </label>
          <input
            type="number"
            id="num-partos"
            placeholder="Numero de partos"
            {...register("num_partos", { required: false })}
            className="form-control"
          />
</div>
          

<div className="col-md-2 offset-md-1">
<label class="form-label" htmlFor="num-cesareas">
            Número de cesareas:
          </label>
          <input
            type="number"
            id="num-cesareas"
            placeholder="Numero de cesareas"
            {...register("num_cesareas", { required: false })}
            className="form-control"
          />
</div>

<div className="col-md-2">
<label class="form-label" htmlFor="num-abortos">
            Número de abortos:
          </label>
          <input
            type="number"
            id="num-abortos"
            placeholder="Numero de abortos"
            {...register("num_abortos", { required: false })}
            className="form-control"
          />
          </div>
          
          <div className="col-md-3">
<label class="form-label" htmlFor="ultimo-parto">
            Último parto:
          </label>
          <input
            type="text"
            id="ultimo-parto"
            placeholder="Ultimo parto"
            {...register("ultimo_parto", { required: false })}
            className="form-control"
          />
          </div>

          <div className="col-md-3">
<label class="form-label" htmlFor="ultimo-aborto">
            Último aborto:
          </label>
          <input
            type="text"
            id="ultimo-aborto"
            placeholder="Ultimo aborto"
            {...register("ultimo_aborto", { required: false })}
            className="form-control"
          />
          </div>


          

          <div class="col-md-1 offset-md-1 fw-bold">
            <label class="form-label">¿Planificación familiar?</label>
          </div>

          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="plan-si"
                name="opcion-planificacion"
                value={true}
                {...register("planificacion_familiar", { required: true })}
                onChange={handleRadioPlanFamiliarChange}
              />
              <label class="form-check-label" htmlFor="plan-si">
                {" "}
                Si{" "}
              </label>
              {errors.planificacion_familiar && (
                <span>Este campo es requerido</span>
              )}
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="plan-no"
                name="opcion-planificacion"
                value={false}
                {...register("planificacion_familiar", { required: true })}
                onChange={handleRadioPlanFamiliarChange}
              />
              <label class="form-check-label" htmlFor="plan-no">
                {" "}
                No{" "}
              </label>
              {errors.planificacion_familiar && (
                <span>Este campo es requerido</span>
              )}
            </div>
          </div>

          {showPlanificacionFamiliar && (
            <div className="col-md-4">
              <label htmlFor="metodo-familiar" className="form-label">
                Especifique:
              </label>
              <input
                type="text"
                id="metodo-familiar"
                placeholder="Método"
                {...register("metodo_planificacion", { required: false })}
                className="form-control"
              />
            </div>
          )}

          <div className="col-md-11"></div>

          <h3 className="offset-md-1  col-md-11">3.1 ANTECEDENTES PERSONALES PATOLÓGICOS</h3>

            <div className="col-md-2 offset-md-1">
<label class="form-label" htmlFor="traumaticos">
            Traumáticos:
          </label>
          <input
            type="text"
            placeholder="Luxación y Fracturas"
            id="traumaticos"
            {...register("traumatismos", { required: true })}
            className="form-control"
          />
          {errors.traumatismos && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label class="form-label" htmlFor="quirurgicos">
            Quirúrgicos:
          </label>
          <input
            type="text"
            placeholder="Quirurgicos"
            id="quirurgicos"
            {...register("quirurgicos", { required: true })}
            className="form-control"
          />
          {errors.quirurgicos && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Transfusiones:
          </label>
          <input
            type="text"
            placeholder="Transfusiones"
            {...register("transfusiones", { required: true })}
            className="form-control"
          />
          {errors.transfusiones && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label className="form-label">Grupo sanguíneo:</label>
          <input
            type="text"
            placeholder="Grupo sanguineo"
            {...register("grupo_sanguineo", { required: true })}
            className="form-control"
          />
          {errors.grupo_sanguineo && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Factor RH:
          </label>
          <input
            type="text"
            placeholder="Factor RH"
            {...register("factor_rh", { required: true })}
            className="form-control"
          />
          {errors.factor_rh && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2 offset-md-1">
            <label htmlFor="" className="form-label">
            Alergias:
          </label>
          <input
            type="text"
            placeholder="Alergias"
            {...register("alergias", { required: true })}
            className="form-control"
          />
          {errors.alergias && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Infecciones:
          </label>
          <input
            type="text"
            placeholder="Infecciones"
            {...register("infecciones", { required: true })}
            className="form-control"
          />
          {errors.infecciones && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Dengue paludismo:
          </label>
          <input
            type="text"
            placeholder="Dengue Paludismo"
            {...register("dengue_paludismo", { required: true })}
            className="form-control"
          />
          {errors.dengue_paludismo && <span>Este campo es requerido</span>}

          </div>

          <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Tatuajes:
          </label>
          <input
            type="text"
            placeholder="Tatuajes"
            {...register("tatuajes", { required: true })}
            className="form-control"
          />
          {errors.tatuajes && <span>Este campo es requerido</span>}
          </div>

          

          <h3 className="offset-md-1 col-md-11">4. EXPLORACIÓN FÍSICA</h3>

          <div className="col-md-2 offset-md-1">
            <label htmlFor="" className="form-label">
            Tensión arterial (mmHg):
          </label>
          <input
            type="number"
            placeholder="Tension arterial mmHg"
            {...register("tension_arterial", { required: true })}
            className="form-control"
          />
          {errors.tension_arterial && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Frecuencia cardiaca:
          </label>
          <input
            type="number"
            placeholder="FC"
            {...register("frecuencia_cardiaca", { required: true })}
            className="form-control"
          />
          {errors.frecuencia_cardiaca && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Frecuencia respiratoria:
          </label>
          <input
            type="number"
            placeholder="FR"
            {...register("frecuencia_respiratoria", { required: true })}
            className="form-control"
          />
          {errors.frecuencia_respiratoria && (
            <span>Este campo es requerido</span>
          )}
            </div>

            <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Oxigenación (%):
          </label>
          <input
            type="number"
            placeholder="Oxigenación %"
            {...register("oxigenacion", { required: true })}
            className="form-control"
          />
          {errors.oxigenacion && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-2">
            <label htmlFor="" className="form-label">
            Temperatura (°C):
          </label>
          <input
            type="number"
            placeholder="Temperatura °C"
            {...register("temperatura", { required: true })}
            className="form-control"
          />
          {errors.temperatura && <span>Este campo es requerido</span>}
            </div>

          

          <h3 className="offset-md-1 col-md-11">5. ANTROPOMETRÍA</h3>

          <div className="col-md-2 offset-md-1">
            <label htmlFor="" className="form-label">
            Peso actual (Kg):
          </label>
          <input
            type="number"
            placeholder="peso actual en Kg"
            {...register("peso_actual", { required: true })}
            className="form-control"
          />
          {errors.peso_actual && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2">
            <label className="form-label">Talla (cm):</label>
          <input
            type="text"
            placeholder="Talla"
            {...register("talla", { required: true })}
            className="form-control"
          />
          {errors.talla && <span>Este campo es requerido</span>}

          </div>

          <div className="col-md-2">
            <label className="form-label">IMC (Kg/m^2):</label>
          <input
            type="number"
            placeholder="IMC"
            {...register("imc", { required: true })}
            className="form-control"
          />
          {errors.imc && <span>Este campo es requerido</span>}
            </div>
          
            <div className="col-md-2">
            <label className="form-label">Circunferencia abdominal (cm):</label>
          <input
            type="number"
            placeholder="Circunferencia del abdomen"
            {...register("circunferencia_abd", { required: true })}
            className="form-control"
          />
          {errors.circunferencia_abd && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-2">
            <label className="form-label">Circunferencia de caderas (cm):</label>
          <input
            type="number"
            placeholder="Circunferencia cadera"
            {...register("circunferencia_cadera", { required: true })}
            className="form-control"
          />
          {errors.circunferencia_cadera && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-2 offset-md-1">
            <label className="form-label">Observaciones:</label>
          <textarea
            placeholder="Observaciones"
            {...register("observaciones_antropometria", { required: true })}
            className="form-control"
          ></textarea>
          {errors.observaciones_antropometria && (
            <span>Este campo es requerido</span>
          )}
            </div>

          

          <h3 className="offset-md-1 col-md-11">6. EXÁMEN FÍSICO</h3>


          <div className="col-md-3 offset-md-1">
            <label className="form-label">Cabeza:</label>
          <input
            type="text"
            placeholder="Cabeza"
            {...register("EF_cabeza", { required: true })}
            className="form-control"
          />
          {errors.EF_cabeza && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3">
            <label className="form-label">Cuello:</label>
          <input
            type="text"
            placeholder="Cuello"
            {...register("EF_cuello", { required: true })}
            className="form-control"
          />
          {errors.EF_cuello && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3">
            <label className="form-label">Tórax:</label>
          <input
            type="text"
            placeholder="Torax"
            {...register("EF_torax", { required: true })}
            class
            className="form-control"
          />
          {errors.EF_torax && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3 offset-md-1">
            <label className="form-label">Abdomen:</label>
          <input
            type="text"
            placeholder="Abdomen"
            {...register("EF_abdomen", { required: true })}
            className="form-control"
          />
          {errors.EF_abdomen && <span>Este campo es requerido</span>}
            </div>

          
          <h4 className="offset-md-1 col-md-11">Extremidades</h4>

          <div className="col-md-3 offset-md-1">
            <label className="form-label">Superior:</label>
          <input
            type="text"
            placeholder="Superiores"
            {...register("EF_EXT_sup", { required: true })}
            className="form-control"
          />
          {errors.EF_EXT_sup && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
             <label className="form-label">Inferior:</label>
          <input
            type="text"
            placeholder="Inferiores"
            {...register("EF_EXT_inf", { required: true })}
            className="form-control"
          />
          {errors.EF_EXT_inf && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label className="form-label">Rodillas:</label>
          <input
            type="text"
            placeholder="Rodillas"
            {...register("EF_EXT_rodillas", { required: true })}
            className="form-control"
          />
          {errors.EF_EXT_rodillas && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3 offset-md-1">
           <label className="form-label">Pelvis:</label>
          <input
            type="text"
            placeholder="Pelvis"
            {...register("EF_EXT_pelvis", { required: true })}
            className="form-control"
          />
          {errors.EF_EXT_pelvis && <span>Este campo es requerido</span>}
 
            </div>

            <div className="col-md-3">
           <label className="form-label">Pies:</label>
          <input
            type="text"
            placeholder="Pies"
            {...register("EF_EXT_pies", { required: true })}
            className="form-control"
          />
          {errors.EF_EXT_pie && <span>Este campo es requerido</span>} 
            </div>

          
          

          <h3 className="offset-md-1 col-md-11">7. EXÁMENES DE LABORATORIO</h3>



          <div className="col-md-3 offset-md-1">
            <label className="form-label">Biometría hemática:</label>
          <input
            type="text"
            placeholder="Biometria hematica"
            {...register("biometria_hematica", { required: true })}
            className="form-control"
          />
          {errors.biometria_hematica && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3">
            <label className="form-label">Química sanguínea:</label>
          <input
            type="text"
            placeholder="Quimica sanguinea"
            {...register("quimica_sanguinea", { required: true })}
            className="form-control"
          />
          {errors.quimica_sanguinea && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3">
            <label className="form-label">VDRL:</label>
          <input
            type="text"
            placeholder="VDRL"
            {...register("vdrl", { required: true })}
            className="form-control"
          />
          {errors.vdrl && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3 offset-md-1">
            <label className="form-label">Prueba rápida de VIH:</label>
          <input
            type="text"
            placeholder="Prueba VIH"
            {...register("prueba_vih", { required: true })}
            className="form-control"
          />
          {errors.prueba_vih && <span>Este campo es requerido</span>}

            </div>

          
            <div className="col-md-3">
            <label className="form-label">Antidoping:</label>
          <input
            type="text"
            placeholder="Antidoping"
            {...register("antidoping", { required: true })}
            className="form-control"
          />
          {errors.antidoping && <span>Este campo es requerido</span>}
            </div>


            <div className="col-md-3">
            <label className="form-label">Exámen general de orina:</label>
          <input
            type="text"
            placeholder="Examen de orina"
            {...register("examen_orina", { required: true })}
            className="form-control"
          />
          {errors.examen_orina && <span>Este campo es requerido</span>}
            </div>
          
            <div className="col-md-10 offset-md-1">
            <label className="form-label">Diagnostico:</label>
          <textarea
            placeholder="Diagnostico"
            {...register("diagnostico", { required: true })}
            className="form-control"
          ></textarea>
          {errors.diagnostico && <span>Este campo es requerido</span>}
            </div>

            <div className="col-md-3 offset-md-1">
            {params.id ? (
        <button className="btn btn-success btn-lg mb-4">Guardar cambios</button>
      ) : (
        
          <button className="btn btn-success btn-lg mb-4">Crear exámen médico</button>
        
      )}
            </div>
        </form>

        {params.id ? (
  <div className="row g-3">
    <div className="col-md-1 offset-md-1">
      <button onClick={volverAtras} className="btn btn-primary">
        Volver
      </button>
    </div>
    <div className="col-md-1">
      <button
        className="btn btn-danger"
        onClick={async () => {
          const accepted = window.confirm("¿Estás seguro?");
          if (accepted) {
            await deleteExamenMedico(params.id);
            navigate("/examenMedico");
            toast.success("Examen medico eliminado exitosamente", {
              duration: 4000,
              style: {
                backgroundColor: "#101010",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "20px",
              },
            });
          }
        }}
      >
        Eliminar
      </button>
    </div>
  </div>
) : (
  <div className="row g-3">
    <div className="col-md-1 offset-md-1">
      <button onClick={volverAtras} className="btn btn-primary">
        Volver
      </button>
    </div>
  </div>
)}
      </div>
      <Footer />
    </div>
  );
}