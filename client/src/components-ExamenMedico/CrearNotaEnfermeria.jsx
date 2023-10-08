import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createNotasEnfermeria,
  updateNotasEnfermeria,
  deleteNotasEnfermeria,
  getAllNotasEnfermeria,
  getNotasEnfermeria,
} from "../api/notaEnfermeria.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllPacientes } from "../api/paciente.api";
import { getAllUsuarios } from "../api/usuario.api";
import { getAllRoles } from "../api/rol.api";

export function CrearNotaEnfermeria() {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPacientes, setSelectedPacientes] = useState("");

  const [usuarios, setUsuarios] = useState([]);
  const [selectedUsuarios, setSelectedUsuarios] = useState("");

  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState("");

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
      // Si hay un ID en los parámetros (modo edición), actualiza la nota de enfermeria
      await updateNotasEnfermeria(params.id, data);
      toast.success("Hoja de evaluación actualizado exitosamente", {
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
      await createNotasEnfermeria(data);
      toast.success("Hoja de evaluación creado exitosamente", {
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
    navigate("/nota-enfermeria"); // Navega a la página de registro
  });

  /* useEffect(() => {
        async function loadTask() {
          if (params.id) {
            const { data } = await getTask(params.id);
            setValue("title", data.title);
            setValue("description", data.description);
          }
        }
        loadTask();
      }, []); */

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <select
          value={selectedUsuarios}
          name="usuario"
          {...register("usuario", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          onChange={(e) => setSelectedUsuarios(e.target.value)}
        >
          <option value="">Selecciona un Especialista</option>
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {`${usuario.nombre} ${usuario.ape_paterno} ${usuario.ape_materno}`}
            </option>
          ))}
        </select>
        {errors.usuario && <span>Este campo es requerido</span>}

        <select
          value={selectedRoles}
          name="rol"
          {...register("rol", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          onChange={(e) => setSelectedRoles(e.target.value)}
        >
          <option value="">Selecciona un Rol</option>
          {roles.map((rol) => (
            <option key={rol.id} value={rol.id}>
              {rol.nombre_rol}
            </option>
          ))}
        </select>
        {errors.rol && <span>Este campo es requerido</span>}

        <select
          value={selectedPacientes}
          name="paciente"
          {...register("paciente", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          onChange={(e) => setSelectedPacientes(e.target.value)}
        >
          <option value="">Selecciona un Paciente</option>
          {pacientes.map((paciente) => (
            <option key={paciente.id} value={paciente.id}>
              {`${paciente.nombre} ${paciente.apePaterno} ${paciente.apeMaterno}`}
            </option>
          ))}
        </select>
        {errors.paciente && <span>Este campo es requerido</span>}

        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" name="sexo" {...register("sexo", { required: true })}>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
        {errors.sexo && <span>Este campo es requerido</span>}

        <input
          type="date"
          placeholder="Fecha"
          {...register("fecha", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.fecha && <span>Este campo es requerido</span>}

        <label>¿Madre viva?</label>
        <label htmlFor="madre-viva">
          Si
          <input
            type="radio"
            id="madre-viva"
            name="opcion-madre"
            value={true}
            {...register("madre_viva", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.madre_viva && <span>Este campo es requerido</span>}

        <label htmlFor="madre-muerta">
          No
          <input
            type="radio"
            id="madre-muerta"
            name="opcion-madre"
            value={false}
            {...register("madre_viva", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.madre_viva && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="¿Cómo fallecio?"
          {...register("madre_finada", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <label>¿Padre vivo?</label>
        <label htmlFor="padre-vivo">
          Si
          <input
            type="radio"
            id="padre-vivo"
            name="opcion-padre"
            value={true}
            {...register("padre_vivo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.padre_vivo && <span>Este campo es requerido</span>}

        <label htmlFor="padre-muerto">
          No
          <input
            type="radio"
            id="padre-muerto"
            name="opcion-padre"
            value={false}
            {...register("padre_vivo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.padre_vivo && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="¿Cómo fallecio?"
          {...register("padre_finado", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <label>¿Hermano vivo?</label>
        <label htmlFor="hernao-vivo">
          Si
          <input
            type="radio"
            id="hermano-vivo"
            name="opcion-hermano"
            value={true}
            {...register("hermano_vivo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.hermano_vivo && <span>Este campo es requerido</span>}

        <label htmlFor="hermano-muerto">
          No
          <input
            type="radio"
            id="hermano-muerto"
            name="opcion-hermano"
            value={false}
            {...register("hermano_vivo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.hermano_vivo && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="¿Cómo fallecio?"
          {...register("hermano_finado", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <label>¿Hijos vivos?</label>
        <label htmlFor="hijos-vivos">
          Si
          <input
            type="radio"
            id="hijos-vivos"
            name="opcion-hijos"
            value={true}
            {...register("hijos_vivos", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.hijos_vivos && <span>Este campo es requerido</span>}

        <label htmlFor="hijos-muertos">
          No
          <input
            type="radio"
            id="hijos-muertos"
            name="opcion-hijos"
            value={false}
            {...register("hijos_vivos", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.hijos_vivos && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="¿Cómo fallecio?"
          {...register("hijos_finados", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Agudeza Visual"
          {...register("agudeza_visual", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.agudeza_visual && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Hipertension"
          {...register("hiper_tension", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.hiper_tension && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Diabetes mellitus"
          {...register("diabetes_mellitus", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.diabetes_mellitus && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Obesidad"
          {...register("obesidad", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.obesidad && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Asma"
          {...register("asma", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Epilépsia"
          {...register("epilepsia", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Lupus"
          {...register("lupus", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Nefropatias"
          {...register("nefropatias", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Artropatias"
          {...register("artropatias", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Otras enfermedades"
          {...register("otras_enfermedades", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <textarea
          placeholder="Observaciones"
          {...register("observaciones_enfermedades", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></textarea>

        <input
          type="text"
          placeholder="Lugar de nacimiento"
          {...register("lugar_nacimiento", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="date"
          placeholder="Fecha de nacimiento"
          {...register("fecha_nacimiento", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Escolaridad"
          {...register("escolaridad", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Trabajo actual"
          {...register("trabajo_actual", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <label>¿Practicas ejercicio?</label>
        <label htmlFor="ejercicio-si">
          Si
          <input
            type="radio"
            id="ejercicio-si"
            name="opcion-ejercicio"
            value={true}
            {...register("practica_ejercicio", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.practica_ejercicio && <span>Este campo es requerido</span>}

        <label htmlFor="ejercico-no">
          No
          <input
            type="radio"
            id="ejercicio-no"
            name="opcion-ejercicio"
            value={false}
            {...register("practica_ejercicio", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.practica_ejercicio && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="¿Cual ejercicio?"
          {...register("ejercicio_cual", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <label>¿Practica Tabaquismo?</label>
        <label htmlFor="tabaquismo-si">
          Si
          <input
            type="radio"
            id="tabaquismo-si"
            name="opcion-tabaco"
            value={true}
            {...register("tabaquismo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.tabaquismo && <span>Este campo es requerido</span>}

        <label htmlFor="tabaquismo-no">
          No
          <input
            type="radio"
            id="tabaquismo-no"
            name="opcion-tabaco"
            value={false}
            {...register("tabaquismo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.tabaquismo && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="¿Desde cuando? (Edad aprox)"
          {...register("tabaquismo_edad", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="¿Cuantos al día u ocasional?"
          {...register("tabaquismo_cantidad", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <label>¿Es Alcoholico?</label>
        <label htmlFor="toma-si">
          Si
          <input
            type="radio"
            id="toma-si"
            name="opcion-alcoholismo"
            value={true}
            {...register("alcoholismo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.alcoholismo && <span>Este campo es requerido</span>}

        <label htmlFor="toma-no">
          No
          <input
            type="radio"
            id="toma-no"
            name="opcion-alcoholismo"
            value={false}
            {...register("alcoholismo", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.alcoholismo && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="¿Desde cuando? (Edad aprox)"
          {...register("alcoholismo_edad", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Inmunizaciones"
          {...register("inmunizaciones", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Habitos higienicos"
          {...register("habitos_higienicos", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Habitos alimenticios"
          {...register("habitos_alimenticios", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Especifique habitos"
          {...register("especifique_habitos", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="Edad menarca"
          {...register("edad_menarca", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="Frecuencia y duracion"
          {...register("frecuencia_duracion", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Ultima menstruacion"
          {...register("ultima_menstruacion", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        <input
          type="number"
          placeholder="Numero de embarazos"
          {...register("num_embarazos", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="Numero de partos"
          {...register("num_partos", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="Numero de cesareas"
          {...register("num_cesareas", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="Numero de abortos"
          {...register("num_abortos", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Ultimo parto"
          {...register("ultimo_parto", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Ultimo aborto"
          {...register("ultimo_aborto", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

<label>Planificación familiar</label>
        <label htmlFor="plan-si">
          Si
          <input
            type="radio"
            id="plan-si"
            name="opcion-planificacion"
            value={true}
            {...register("planificacion_familiar", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.planificacion_familiar && <span>Este campo es requerido</span>}

        <label htmlFor="plan-no">
          No
          <input
            type="radio"
            id="plan-no"
            name="opcion-planificacion"
            value={false}
            {...register("planificacion_familiar", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
          />
        </label>
        {errors.planificacion_familiar && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Metodo de planificación"
          {...register("metodo_planificacion", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Traumatismo"
          {...register("traumatismos", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Quirurgicos"
          {...register("quirurgicos", { required: true })}
          className="
          bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Transfusiones"
          {...register("transfusiones", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Grupo sanguineo"
          {...register("grupo_sanguineo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Factor RH"
          {...register("factor_rh", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Alergias"
          {...register("alergias", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Infecciones"
          {...register("infecciones", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Dengue Paludismo"
          {...register("dengue_paludismo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Tatuajes"
          {...register("tatuajes", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="Tension arterial"
          {...register("tension_arterial", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="number"
          placeholder="Frencuencia cardiaca"
          {...register("frecuencia_cardiaca", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Talla"
          {...register("talla", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="IMC"
          {...register("imc", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Circunferencia del abdomen"
          {...register("circunferencia_abd", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Circunferencia cadera"
          {...register("circunferencia_cadera", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <textarea
          placeholder="Observaciones"
          {...register("observaciones_antropometria", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></textarea>

        <input
          type="text"
          placeholder="Cabeza"
          {...register("EF_cabeza", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Cuello"
          {...register("EF_cuello", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Torax"
          {...register("EF_torax", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Abdomen"
          {...register("EF_abdomen", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Superiores"
          {...register("EF_EXT_sup", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Inferiores"
          {...register("EF_EXT_inf", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Rodillas"
          {...register("EF_EXT_rodillas", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Pelvis"
          {...register("EF_EXT_pelvis", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Pies"
          {...register("EF_EXT_pies", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        <input
          type="text"
          placeholder="Biometria hematica"
          {...register("biometria_hematica", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Quimica sanguinea"
          {...register("quimica_sanguinea", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="VDRL"
          {...register("vdrl", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Prueba VIH"
          {...register("prueba_vih", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Antidoping"
          {...register("antidoping", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <input
          type="text"
          placeholder="Examen de orina"
          {...register("examen_orina", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

        <textarea
          placeholder="Diagnostico"
          {...register("diagnostico", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></textarea>

        <button className=" bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {params.id && (
        <div className="flex justify-center">
          <button
            className=" bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                await deleteNotasEnfermeria(params.id);
                navigate("/");
                toast.success("Rol eliminado exitosamente", {
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
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
