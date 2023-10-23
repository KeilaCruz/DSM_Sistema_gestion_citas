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

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="correo electronico"
          {...register("email", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.email && <span>Este campo es requerido</span>}

        <input
          type="password"
          placeholder="contraseña"
          {...register("password", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></input>
        {errors.password && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="nombre(s)"
          id="nombre"
          name="nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></input>
        {errors.nombre && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="apellido paterno"
          {...register("ape_paterno", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></input>
        {errors.ape_paterno && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="apellido materno"
          {...register("ape_materno", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></input>
        {errors.ape_materno && <span>Este campo es requerido</span>}

        <label>Selecciona un rol:</label>
        <select
          value={selectedRole}
          name="idRol"
          {...register("idRol", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
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
      )}
    </div>
  );
}
