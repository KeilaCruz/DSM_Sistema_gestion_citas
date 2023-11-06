import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createEventos,
  deleteEventos,
  updateEventos,
  getAllEventos,
  getEventos,
} from "../api/evento.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllUsuarios } from "../api/usuario.api";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function CrearEvento() {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUsuarios, setSelectedUsuarios] = useState("");

  useEffect(() => {
    // Hacer la solicitud para obtener la lista desde la API
    getAllUsuarios()
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Usuarios:", error);
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
      // Si hay un ID en los parámetros (modo edición), actualiza el rol
      await updateEventos(params.id, data);
      toast.success("Evento actualizado exitosamente", {
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
      // Si no hay un ID en los parámetros (modo creación), crea un nuevo Rol
      await createEventos(data);
      toast.success("Evento creado exitosamente", {
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
    navigate("/evento"); // Navega a la página de registro
  });

  useEffect(() => {
    async function loadEventos() {
      if (params.id) {
        const { data } = await getEventos(params.id);

        const usuarioResponse = await fetch(
          `http://127.0.0.1:8000/SaludPublica/api/v1/usuarios/${data.idUsuario}`
        );
        const usuarioData = await usuarioResponse.json();
        setValue("idUsuario", usuarioData.idUsuario);

        setValue("fecha", data.fecha);
        setValue("hora", data.hora);
        setValue("lugar", data.lugar);
        setValue("nom_evento", data.nom_evento);
      }
    }
    loadEventos();
  }, []);

  const volverAtras = () => {
    window.history.back();
  };

  return (
    <div>
      <NavBar />

      <div className="container-fluid">
        <form className="row g-3" onSubmit={onSubmit}>
          {/* Todo el cuerpo del formulario */}
          <div className="col-md-9 offset-md-1">
            <label htmlFor="evento" className="form-label">
              Nombre del evento:
            </label>
            <input
              type="text"
              id="evento"
              name="nom_evento"
              className="form-control"
              placeholder="Nombre del Evento"
              {...register("nom_evento", { required: true })}
            />
            {errors.nom_evento && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2 offset-md-1">
            <label htmlFor="fecha" className="form-label">
              Fecha del evento:
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              {...register("fecha", { required: true })}
              className="form-control"
            />
            {errors.fecha && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-2 offset-md-1">
            <label htmlFor="hora" className="form-label">
              Hora del evento:
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              {...register("hora", { required: true })}
              className="form-control"
            />
            {errors.hora && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-9 offset-md-1">
            <label htmlFor="ubicacion" className="form-label">
              Lugar del evento:
            </label>
            <input
              type="text"
              placeholder="Lugar"
              id="ubicacion"
              name="Ubicación"
              {...register("lugar", { required: true })}
              className="form-control"
            />
            {errors.lugar && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-9 offset-md-1">
            <label htmlFor="notas" className="form-label">
              Notas adicionales:
            </label>
            <textarea
              placeholder="Notas"
              id="notas"
              name="notas"
              {...register("notas", { required: false })}
              className="form-control"
            ></textarea>
            {errors.notas && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-9 offset-md-1">
            <label htmlFor="usuario" className="form-label">
              Creador del evento:
            </label>
            <select
              value={selectedUsuarios}
              name="idUsuario"
              id="usuario"
              {...register("idUsuario", { required: true })}
              className="form-select"
              onChange={(e) => setSelectedUsuarios(e.target.value)}
            >
              <option value="">Selecciona un Usuario</option>
              {usuarios.map((usuario) => (
                <option key={usuario.idUsuario} value={usuario.idUsuario}>
                  {`${usuario.nombre} ${usuario.ape_paterno} ${usuario.ape_materno}`}
                </option>
              ))}
            </select>
            {errors.idUsuario && <span>Este campo es requerido</span>}
          </div>

          <div className="col-md-9 offset-md-1">
            {params.id ? (
              <button className="btn btn-success btn-lg mb-4">
                Guardar cambios
              </button>
            ) : (
              <button className="btn btn-success btn-lg mb-4">
                Crear evento
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
                    await deleteEventos(params.id);
                    navigate("/evento");
                    toast.success("Evento eliminado exitosamente", {
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
