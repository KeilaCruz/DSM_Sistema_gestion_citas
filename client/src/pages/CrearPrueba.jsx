import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createPruebas, deletePruebas, updatePruebas, getAllPruebas, getPruebas } from "../api/prueba.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function CrearPrueba() {

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
      await updatePruebas(params.id, data);
      toast.success("Pruebas actualizado exitosamente", {
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
      // Si no hay un ID en los parámetros (modo creación), crea una nueva prueba
      await createPruebas(data);
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
    navigate("/prueba");
  });

  useEffect(() => {
    async function loadPruebas() {
      if (params.id) {
        const { data } = await getPruebas(params.id);
        setValue("texto", data.texto);
        setValue("texto2", data.texto2);
        setValue("checkbox", data.checkbox);
        setValue("checkbox2", data.checkbox2);
        setValue("numero", data.numero);
        setValue("numero2", data.numero2);

      }
    }
    loadPruebas();
  }, []);


  return (

    
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>

      <label>Opcion obligatoria</label>
      <label htmlFor="diabetes-si">Si
        <input
          type="radio"
          id="diabetes-si"
          name="opcion-diabetes"
          value={true}
          {...register("checkbox", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        </label>
        {errors.checkbox && <span>Este campo es requerido</span>}
        
        <label htmlFor="diabetes-no">No
        <input
          type="radio"
          id="diabetes-no"
          name="opcion-diabetes"
          value={false}
          {...register("checkbox", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        </label>
        {errors.checkbox && <span>Este campo es requerido</span>}

        <label>Opcion no obligatoria

        <input
          type="checkbox"
          id="miCheckbox"
          {...register("checkbox2", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        </label>
        

        <input
          type="text"
          placeholder="texto obligatorio"
          {...register("texto", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        {errors.texto && <span>Este campo es requerido</span>}

       
          <input
            type="text"
            placeholder="texto de prueba"
          
            {...register("texto2", { required: false })}
          />      

        <input
          type="number"
          placeholder="numero"
          defaultValue={0}
          {...register("numero", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />

<input
          type="number"
          placeholder="numero2"
          defaultValue={0}
          {...register("numero2", { required: false })}
          className="bg-zinc-700 p-3 rounded-lg w-full block mb-3"
        />
        

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
                await deletePruebas(params.id);
                navigate("/prueba");
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