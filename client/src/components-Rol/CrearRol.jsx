import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createRoles, deleteRoles, updateRoles, getAllRoles, getRoles } from "../api/rol.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function CrearRol() {


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

    // Capitalizar la primera letra del nombre del rol
      data.nombre_rol = data.nombre_rol.charAt(0).toUpperCase() + data.nombre_rol.slice(1);

    if (params.id) {
      // Si hay un ID en los parámetros (modo edición), actualiza el rol
      await updateRoles(params.id, data);
      toast.success("Rol actualizado exitosamente", {
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
      await createRoles(data);
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
    navigate("/rol"); // Navega a la página de registro
  });

  useEffect(() => {
        async function loadRoles() {
          if (params.id) {
            const { data } = await getRoles(params.id);
            setValue("nombre_rol", data.nombre_rol);
            setValue("descripcion", data.descripcion);
          }
        }
        loadRoles();
      }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>

        <input
          type="text"
          placeholder="nombre del rol"
          {...register("nombre_rol", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.nombre_rol && <span>Este campo es requerido</span>}

        <textarea
          name="descripcion_rol" 
          rows="4" 
          cols="50"
          placeholder="descripcion del rol"
          {...register("descripcion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        ></textarea>
        {errors.descripcion && <span>Este campo es requerido</span>}

        

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
                await deleteRoles(params.id);
                navigate("/rol");
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