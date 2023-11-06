import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createUsuarios,
  deleteUsuarios,
  updateUsuarios,
  getUsuarios,
} from "../api/usuario.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllRoles } from "../api/rol.api";
import { Footer } from "../components/Footer";
import {NavBar}   from "../components/NavBar";

export function CrearUsuario() {
  
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    // Hacer la solicitud para obtener la lista de roles desde la API
    getAllRoles()
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        toast.error("Error al obtener la lista de roles", {
          // Muestra una notificación de éxito
          duration: 4000,
          style: {
            backgroundColor: "#101010",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "20px",
          },
        });
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

    // Capitalizar la primera letra del nombre, apellido paterno y apellido materno
    data.nombre = data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1);
    data.ape_paterno =
      data.ape_paterno.charAt(0).toUpperCase() + data.ape_paterno.slice(1);
    data.ape_materno =
      data.ape_materno.charAt(0).toUpperCase() + data.ape_materno.slice(1);

    if (params.id) {
      // Si hay un ID en los parámetros (modo edición), actualiza el usuario
      await updateUsuarios(params.id, data);
      toast.success("Usuario actualizado exitosamente", {
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
      // Si no hay un ID en los parámetros (modo creación), crea un nuevo usuario
      await createUsuarios(data);
      toast.success("Usuario creado exitosamente", {
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
    navigate("/usuario"); // Navega a la página de registro
  });

  useEffect(() => {
    async function loadUsuarios() {
      if (params.id) {
        const { data } = await getUsuarios(params.id);
        setValue("email", data.email);
        setValue("password", data.password);
        setValue("nombre", data.nombre);
        setValue("ape_paterno", data.ape_paterno);
        setValue("ape_materno", data.ape_materno);
        
        const rolResponse = await fetch(
          `http://127.0.0.1:8000/SaludPublica/api/v1/roles/${data.idRol}`
        );
        const rolData = await rolResponse.json();
        setValue("idRol", rolData.idRol);
      }
    }
    loadUsuarios();
  }, []);

  const volverAtras = () => {
    window.history.back();
  };

  return (
    <div>
      <NavBar/> 
      <div className="container-fluid">

      <form onSubmit={onSubmit} className="row g-3">

        <div className="col-md-9 offset-md-1">
<label htmlFor="nombre" className="form-label">Nombre(s):</label>
        <input
          type="text"
          placeholder="Nombre del especialista"
          id="nombre"
          name="nombre"
          {...register("nombre", { required: true })}
          className="form-control"
        ></input>
        {errors.nombre && <span>Este campo es requerido</span>}
        </div>

        <div className="col-md-9 offset-md-1">
<label htmlFor="" className="form-label">Apellido paterno:</label>
        <input
          type="text"
          placeholder="Apellido paterno"
          {...register("ape_paterno", { required: true })}
          className="form-control"
        ></input>
        {errors.ape_paterno && <span>Este campo es requerido</span>}
        </div>

        <div className="col-md-9 offset-md-1">
<label htmlFor="ape_materno" className="form-label">Apellido materno:</label>
        <input
          type="text"
          placeholder="apellido materno"
          id="ape_materno"
          {...register("ape_materno", { required: true })}
          className="form-control"
        ></input>
        {errors.ape_materno && <span>Este campo es requerido</span>}
        </div>

        <div className="col-md-4 offset-md-1">
<label htmlFor="email" className="form-label">Correo electronico:</label>
        <input
          type="email"
          placeholder="ejemplo@gmail.com"
          id="email"
          {...register("email", { required: true })}
          className="form-control"
        />
        {errors.email && <span>Este campo es requerido</span>}
        </div>

        <div className="col-md-2">
<label htmlFor="password" className="form-label">Contraseña:</label>
        <input
          type="password"
          placeholder="contraseña"
          id="password"
          {...register("password", { required: true })}
          className="form-control"
        ></input>
        {errors.password && <span>Este campo es requerido</span>}
        </div>


        <div className="col-md-2">
<label htmlFor="rol" className="form-label">Selecciona un rol:</label>
        <select
          value={selectedRole}
          name="idRol"
          id="rol"
          {...register("idRol", { required: true })}
          className="form-select"
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Selecciona un rol</option>
          {roles.map((rol) => (
            <option key={rol.idRol} value={rol.idRol}>
              {rol.nombre_rol}
            </option>
          ))}
        </select>
        {errors.idRol && <span>Este campo es requerido</span>}
        </div>  
             

        <div className="col-md-9 offset-md-1">
            {params.id ? (
              <button className="btn btn-success btn-lg mb-4 mt-3">
                Guardar cambios
              </button>
            ) : (
              <button className="btn btn-success btn-lg mb-4 mt-3">
                Crear usuario
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
                    await deleteUsuarios(params.id);
                    navigate("/usuario");
                    toast.success("Usuario eliminado exitosamente", {
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
    <Footer/> 
    </div>
    

  );
}