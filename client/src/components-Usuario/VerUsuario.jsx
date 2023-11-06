import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getUsuarios } from "../api/usuario.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getAllRoles } from "../api/rol.api";
import { Footer } from "../components/Footer";
import {NavBar}   from "../components/NavBar";

export function VerUsuario() {
  
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
    setValue,
    formState: { errors },
  } = useForm(); // Configuración y registro de formularios

  const params = useParams(); // Parámetros de la URL

 

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

      <form  className="row g-3">

        <div className="col-md-9 offset-md-1">
<label htmlFor="nombre" className="form-label">Nombre(s):</label>
        <input
          type="text"
          placeholder="Nombre del especialista"
          id="nombre"
          name="nombre"
          {...register("nombre", { required: true })}
          className="form-control" disabled
        ></input>
        {errors.nombre && <span>Este campo es requerido</span>}
        </div>

        <div className="col-md-9 offset-md-1">
<label htmlFor="" className="form-label">Apellido paterno:</label>
        <input
          type="text"
          placeholder="Apellido paterno"
          {...register("ape_paterno", { required: true })}
          className="form-control" disabled
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
          className="form-control" disabled
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
          className="form-control" disabled
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
          className="form-control" disabled
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
          className="form-select" disabled
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
             

      
      </form>

      
          <div className="row g-3">
            <div className="col-md-1 offset-md-1">
              <button onClick={volverAtras} className="btn btn-primary mt-3">
                Volver
              </button>
            </div>
          </div>
    

    </div>
    <Footer/> 
    </div>
    

  );
}
