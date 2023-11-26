import { useForm } from "react-hook-form";
import {
  createPacientes,
  updatePacientes,
  deletePacientes,
  getAllPacientes,
  getPacientes,
} from "../api/paciente.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function CrearPaciente() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const param = useParams();
  const idPaciente = param.id;

  useEffect(() => {
    async function loadPaciente() {
      if (idPaciente) {
        const {
          data: {
            nombre,
            apePaterno,
            apeMaterno,
            edad,
            estado_civil,
            CURP,
            escolaridad,
            colonia,
            calle,
            numero_exterior,
            referencia,
            CP,
            telefono,
            derecho_habiencia,
            unidad_salud,
            ultima_visita_medico,
            numero_personas_vive,
          },
        } = await getPacientes(idPaciente);
        setValue("nombre", nombre);
        setValue("apePaterno", apePaterno);
        setValue("apeMaterno", apeMaterno);
        setValue("edad", edad);
        setValue("estado_civil", estado_civil);
        setValue("CURP", CURP);
        setValue("escolaridad", escolaridad);
        setValue("colonia", colonia);
        setValue("calle", calle);
        setValue("numero_exterior", numero_exterior);
        setValue("referencia", referencia);
        setValue("CP", CP);
        setValue("telefono", telefono);
        setValue("derecho_habiencia", derecho_habiencia);
        setValue("unidad_salud", unidad_salud);
        setValue("ultima_visita_medico", ultima_visita_medico);
        setValue("numero_personas_vive", numero_personas_vive);
      }
    }
    loadPaciente();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (idPaciente) {
      const res = await updatePacientes(idPaciente, data);
      console.log(res);
      navigate("/paciente");
    } else {
      try {
        const res = await createPacientes(data);
        console.log(res);
        navigate("/paciente");
      } catch (error) {
        if (error.response.status === 400) {
          toast.error("CURP ya registrada", {
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
      }
    }
  });
  
  const volverAtras = () => {
    window.history.back();
  };


  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <form className="row g-3" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
          />
          <input
            type="text"
            placeholder="Apellido paterno"
            {...register("apePaterno", { required: true })}
          />
          <input
            type="text"
            placeholder="Apellido materno"
            {...register("apeMaterno", { required: true })}
          />
          <input
            type="number"
            placeholder="Edad"
            {...register("edad", { required: true })}
          />
          <select
            name="estado_civil"
            {...register("estado_civil", { required: true })}
          >
            <option value="Soltero">Soltero</option>
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
          </select>
          <input
            type="text"
            placeholder="CURP"
            {...register("CURP", { required: true })}
          />
          <select
            name="escolaridad"
            {...register("escolaridad", { required: true })}
          >
            <option value="Primaria">Primaria</option>
            <option value="Secundaria">Secundaria</option>
            <option value="Bachillerato">Bachillerato</option>
          </select>
          <input
            type="text"
            placeholder="Colonia"
            {...register("colonia", { required: true })}
          />
          <input
            type="text"
            placeholder="Calle"
            {...register("calle", { required: true })}
          />
          <input
            type="number"
            placeholder="Número"
            {...register("numero_exterior", { required: true })}
          />
          <textarea
            placeholder="Entre calles o referencia"
            {...register("referencia", { required: true })}
          ></textarea>
          <input
            type="number"
            placeholder="CP"
            {...register("CP", { required: true })}
          />
          <input
            type="text"
            placeholder="Telefono"
            {...register("telefono", { required: true })}
          />
          <input
            type="text"
            placeholder="Derechohabiencia"
            {...register("derecho_habiencia", { required: true })}
          />
          <input
            type="text"
            placeholder="Unidad de salud"
            {...register("unidad_salud", { required: true })}
          />
          <input
            type="date"
            placeholder="Ultima visita con su medico"
            {...register("ultima_visita_medico", { required: true })}
          />
          <input
            type="number"
            placeholder="Cuantas personas vive con usted"
            {...register("numero_personas_vive", { required: true })}
          />

          <button className="btn btn-success">Guardar</button>

          

        </form>

        {idPaciente && (
          <button
            onClick={async () => {
              const confirm = window.confirm("Estas seguro de eliminar");
              if (confirm) {
                const res = await deletePacientes(idPaciente);
                console.log(res);
                navigate("/paciente");
              }
            }}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        )}

        <div className="row g-3">
            <div className="col-md-1 offset-md-1">
              <button onClick={volverAtras} className="btn btn-primary">
                Volver
              </button>
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}
