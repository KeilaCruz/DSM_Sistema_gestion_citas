import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createHojaEvaluaciones,
  deleteHojaEvaluaciones,
  updateHojaEvaluaciones,
  getAllHojaEvaluaciones,
  getHojaEvaluaciones,
} from "../api/hojaEvaluacion.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllPacientes } from "../api/paciente.api";
import { getAllCitas } from "../api/cita.api";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function CrearHojaEvaluacion() {
  const [pacientes, setPacientes] = useState([]);
  const [selectedPacientes, setSelectedPacientes] = useState("");

  const [citas, setCitas] = useState([]);
  const [selectedCitas, setSelectedCitas] = useState("");

  useEffect(() => {
    // Hacer la solicitud para obtener la lista desde la API
    getAllPacientes()
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Pacientes:", error);
      });

    getAllCitas()
      .then((response) => {
        setCitas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Citas:", error);
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
    navigate("/hojaEvaluacion"); // Navega a la lista de Hoja de evaluaciones
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
        setValue("imagenReceta", data.imagenRecetaMedica);

        const pacienteResponse = await fetch(
          `http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/${data.idPaciente}`
        );
        const pacienteData = await pacienteResponse.json();
        setValue("idPaciente", pacienteData.CURP);

        const citaResponse = await fetch(
          `http://localhost:8000/SaludPublica/api/v1/citas/${data.idCita}`
        );
        const citaData = await citaResponse.json();
        setValue("idCita", citaData.idCita);
      }
    }
    loadHojaEvaluacion();
  }, []);

  const volverAtras = () => {
    window.history.back();
  };

  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        {/* Titulo */}
        <div className="container">
          <div className="text-with-lines">
            <div className="line line-top"></div>
            <p className="display-5 fw-bold">
              REGISTRO DE HOJA DE EVALUCIÓN CLÍNICA
            </p>
            <div className="line line-bottom"></div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="row g-3 mt-5">
          <div className="col-md-11 offset-md-1">
            <h3>Información general</h3>
          </div>

          <div className="col-md-3 offset-md-1">
            <label htmlFor="idPaciente" className="form-label">
              Seleccione el nombre del paciente:
            </label>
            <select
              value={selectedPacientes}
              name="idPaciente"
              id="idPaciente"
              {...register("idPaciente", { required: true })}
              className="form-select"
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

          <div className="col-md-3">
            <label htmlFor="cita" className="form-label">
              Seleccione la cita:
            </label>
            <select
              value={selectedCitas}
              name="idCita"
              id="cita"
              {...register("idCita", { required: true })}
              className="form-select"
              onChange={(e) => setSelectedCitas(e.target.value)}
            >
              <option value="">Selecciona una cita</option>
              {citas.map((cita) => (
                <option key={cita.idCita} value={cita.idCita}>
                  {cita.idCita}
                </option>
              ))}
            </select>
            {errors.idCita && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="fecha-revision" className="form-label">
              Fecha de revisión:
            </label>
            <input
              type="date"
              placeholder="Fecha de revision"
              id="fecha-revision"
              {...register("fecha_revision", { required: true })}
              className="form-control"
            />
            {errors.fecha_revision && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-11 offset-md-1">
            <h3 className="mt-5">Información médica</h3>
          </div>

          <div className="col-md-3 offset-md-1">
            <label htmlFor="tension-arterial" className="form-label">
              Tensión arterial (mmHg):
            </label>
            <input
              type="number"
              placeholder="T/A"
              id="tension-arterial"
              {...register("tension_arterial", { required: true })}
              className="form-control"
            />
            {errors.tension_arterial && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="" className="form-label">
              Frecuencia cardiaca (BPM):
            </label>
            <input
              type="number"
              placeholder="FC"
              {...register("frecuencia_cardiaca", { required: true })}
              className="form-control"
            />
            {errors.frecuencia_cardiaca && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="frecuencia-respiratoria" className="form-label">
              Frecuencia respiratoria:
            </label>
            <input
              type="number"
              placeholder="FR"
              id="frecuencia-respiratoria"
              {...register("frecuencia_respiratoria", { required: true })}
              className="form-control"
            />
            {errors.frecuencia_respiratoria && (
              <span>Este campo es requerido</span>
            )}
          </div>

          <div className="col-md-3 offset-md-1">
            <label htmlFor="temperatura" className="form-label">
              Temperatura (°C):
            </label>
            <input
              type="number"
              placeholder="°C"
              id="temperatura"
              {...register("temperatura", { required: true })}
              className="form-control"
            />
            {errors.temperatura && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="imc" className="form-label">
              IMC:
            </label>
            <input
              type="number"
              placeholder="Indice de masa corporal"
              id="imc"
              {...register("imc", { required: true })}
              className="form-control"
            />
            {errors.imc && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="spo2" className="form-label">
              Saturación de oxígeno (SpO2):
            </label>
            <input
              type="number"
              placeholder="SpO2"
              id="spo2"
              {...register("saturacion_oxigeno", { required: true })}
              className="form-control"
            />
            {errors.saturacion_oxigeno && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3 offset-md-1">
            <label htmlFor="glucosa" className="form-label">
              Glucosa (mg/dL):
            </label>
            <input
              type="number"
              placeholder="mg/dL"
              id="glucosa"
              {...register("glucosa", { required: true })}
              className="form-control"
            />
            {errors.glucosa && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="peso" className="form-label">
              Peso (Kg):
            </label>
            <input
              type="number"
              placeholder="Peso"
              id="peso"
              {...register("peso", { required: true })}
              className="form-control"
            />
            {errors.peso && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3">
            <label htmlFor="talla" className="form-label">
              Talla (cm):
            </label>
            <input
              type="number"
              placeholder="Talla"
              id="talla"
              {...register("talla", { required: true })}
              className="form-control"
            />
            {errors.talla && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3 offset-md-1">
            <label htmlFor="cintura" className="form-label">
              Cintura (cm):
            </label>
            <input
              type="number"
              placeholder="Cintura"
              id="cintura"
              {...register("cintura", { required: true })}
              className="form-control"
            />
            {errors.cintura && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-7"></div>

          <div className="col-md-8 offset-md-1">
            <label htmlFor="nota-medica" className="form-label">
              Nota medica:
            </label>
            <textarea
              placeholder="Nota medica"
              id="nota-medica"
              {...register("nota_medica", { required: true })}
              className="form-control"
            ></textarea>
            {errors.nota_medica && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-3 offset-md-1">
            <label htmlFor="imagen" className="form-label">
              Imagen de la receta medica:
            </label>
            <input
              type="file"
              id="imagen"
              name="file"
              itemID="imagen"
              {...register("imagenRecetaMedica", { required: false })}
              className="form-control"
            />
          </div>

          <div className="col-md-9 offset-md-1 mt-4">
            {params.id ? (
              <button className="btn btn-success btn-lg mb-4">
                Guardar cambios
              </button>
            ) : (
              <button className="btn btn-success btn-lg mb-4">
                Crear evaluación clínica
              </button>
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
                    await deleteHojaEvaluaciones(params.id);
                    navigate("/hojaEvaluacion");
                    toast.success("Evaluación eliminada exitosamente", {
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
