import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createHojaEvaluaciones, deleteHojaEvaluaciones, updateHojaEvaluaciones, getAllHojaEvaluaciones, getHojaEvaluaciones } from "../api/hojaEvaluacion.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllPacientes } from "../api/paciente.api";
import { getAllUsuarios } from "../api/usuario.api";
import { getAllRoles } from "../api/rol.api";

export function CrearHojaEvaluacion() {

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
      // Si hay un ID en los parámetros (modo edición), actualiza la hoja de evaluacion
      await updateHojaEvaluaciones(params.id, data);
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
      await createHojaEvaluaciones(data);
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
    navigate("/hojaEvaluacion-create"); // Navega a la lista de Hoja de evaluaciones
  });

  useEffect(() => {
        async function loadHojaEvaluacion() {
          if (params.id) {
            const { data } = await getHojaEvaluaciones(params.id);
            setValue("fecha_revision", data.fecha_revision);
            setValue("tension_arterial", data.tension_arterial);
            setValue("frecuencia_cardiaca", data.frecuencia_cardiaca);
            setValue("frecuencia_respiratoria", data.frecuencia_respiratoria);
            setValue("temperatura", data.temperatura);
            setValue("imc", data.imc);
            setValue("saturacion_oxigeno", data.saturacion_oxigeno);
            setValue("glucosa", data.glucosa);
            setValue("peso", data.peso);
            setValue("talla", data.talla);
            setValue("cintura", data.cintura);
            setValue("nota_medica", data.nota_medica);
            setValue("paciente", data.paciente);
            setValue("usuario", data.usuario);
            setValue("rol", data.rol);
            
          }
        }
        loadHojaEvaluacion();
      }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}
       >

        <input
          type="date"
          placeholder="Fecha de revision"
          {...register("fecha_revision", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.fecha_revision  && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="Tension arterial"
          {...register("tension_arterial", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.tension_arterial  && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="Frecuencia cardiaca"
          {...register("frecuencia_cardiaca", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.frecuencia_cardiaca  && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="Frecuencia respiratoria"
          {...register("frecuencia_respiratoria", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.frecuencia_respiratoria  && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Temperatura"
          {...register("temperatura", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.temperatura  && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="IMC"
          {...register("imc", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.imc  && <span>Este campo es requerido</span>}

        <input
          type="number"
          placeholder="Saturación de oxigeno"
          {...register("saturacion_oxigeno", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.saturacion_oxigeno  && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Glucosa"
          {...register("glucosa", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.glucosa  && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Peso"
          {...register("peso", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.peso && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Talla"
          {...register("talla", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.talla  && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Cintura"
          {...register("cintura", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.cintura  && <span>Este campo es requerido</span>}

        <textarea
          placeholder="Nota medica"
          {...register("nota_medica", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></textarea>
        {errors.nota_medica  && <span>Este campo es requerido</span>}

         {/* <input
          type="file" id="archivo" name="archivo" accept=".pdf, .doc, .docx"
          {...register("archivo_medico", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.archivo_medico  && <span>Este campo es requerido</span>}  */}


        
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
                await deleteHojaEvaluaciones(params.id);
                navigate("/hojaEvaluacion-create");
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