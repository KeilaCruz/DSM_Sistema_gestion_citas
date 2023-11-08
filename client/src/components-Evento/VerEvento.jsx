import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getEventos } from "../api/evento.api";
import { useParams } from "react-router-dom";
import { getAllUsuarios } from "../api/usuario.api";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function VerEvento() {
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
    setValue,
    formState: { errors },
  } = useForm(); // Configuración y registro de formularios

  const params = useParams(); // Parámetros de la URL

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
        <form className="row g-3">
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
              readOnly
            />
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
              readOnly
            />
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
              readOnly
            />
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
              readOnly
            />
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
              readOnly
            ></textarea>
          </div>

          <div className="col-md-9 offset-md-1">
            <label htmlFor="usuario" className="form-label">
              Creador del evento:
            </label>
            <select
              value={selectedUsuarios}
              name="idUsuario"
              id="usuario"
              disabled
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
          </div>
        </form>
        <div className="row g-3">
          <div className="col-md-2 offset-1 ">
            <button onClick={volverAtras} className="btn btn-primary mt-3">
              Volver
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
