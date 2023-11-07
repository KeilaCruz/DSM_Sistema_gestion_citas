import { useForm } from "react-hook-form"
import { addCita, getAllCitas } from "../../api/Cita.api"
import { getAllPacientes } from "../../api/Pacientes.api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../partials/Header"
export function AddCita() {
    const [pacientes, setPacientes] = useState([])
    const [citas, setCitas] = useState([])
    const [criteria_paciente, setCriteriaPaciente] = useState("")
    const [pacienteResultado, setPacienteResult] = useState([])
    const navigate = useNavigate("")
    let regCurp = /^\D{1,4}\d{1,6}/;

    const { register, handleSubmit } = useForm()
    //cargar el arreglo del paciente
    useEffect(() => {
        async function loadPacientes() {
            const res = await getAllPacientes()
            setPacientes(res.data)
        }
        loadPacientes()
    }, [])
    //cargar el objeto de citas
    useEffect(() => {
        async function loadCitas() {
            const res = await getAllCitas();
            setCitas(res.data)
        }
        loadCitas()
    })

    const handleBarraBusqueda = (evt) => {
        setCriteriaPaciente(evt.target.value)
    }
    const handleBusquedaPaciente = () => {
        //revisar si el criterio de busqueda es por CURP
        const revisarCurp = regCurp.test(criteria_paciente)

        if (revisarCurp) {
            // busca el paciente por curp
            let resultado = pacientes.filter((paciente) => paciente.CURP === criteria_paciente)
            setPacienteResult(resultado)
        } else {
            //separa el nombre si el criterio es por nombre
            const criterio_nombre = criteria_paciente.split(" ")
            let resultado = pacientes.filter((paciente) => paciente.nombre === criterio_nombre[0] && paciente.apePaterno === criterio_nombre[1])
            setPacienteResult(resultado)
        }
    }
    const onSubmit = handleSubmit(async (data) => {
        //agregar el curp del paciente que se agendara la cita
        if (pacienteResultado.length > 0) {
            data.idPaciente = pacienteResultado[0].CURP
        }
        //validacion de citas que no tengan la misma fecha, hora y especialidad antes de agendar
        const disponibleCita = citas.some((cita) => cita.fecha_cita === data.fecha_cita && cita.horario_cita === data.horario_cita &&
            cita.especialidad === data.especialidad)

        if (!disponibleCita) {
            try {
                const res = await addCita(data);
                console.log(res)
                navigate("/get-citas")
            } catch (error) {
                console.error(error)
            }
        } else {
            alert("Cita con ese horario ya ocupado en esa especialidad")
        }
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row g-3">
                    <div className="col-md-9 offset-md-1">
                        <hr />
                        <h3 className="title">AGENDAR CITA</h3>
                        <hr />
                    </div>
                    <input className="col-md-5 offset-md-1" nput-barra-bus type="text" id="busqueda_paciente" placeholder="Buscar por CURP o nombre" onChange={handleBarraBusqueda} />
                    <button className="col-md-1" onClick={handleBusquedaPaciente}>Buscar</button>
                    <form onSubmit={onSubmit} className="row g-3">
                        <div className="col-md-3 offset-md-1">
                            <label htmlFor="fecha_cita" className="form-label">Fecha de cita</label>
                            <input className="form-control" id="fecha_cita" type="date" placeholder="fecha de cita" {...register('fecha_cita', { required: true })} />
                        </div>
                        <div className="col-md-3 offset-md-0.8">
                            <label htmlFor="horario_cita" className="form-label">Horario de cita</label>
                            <input className="form-control" id="horario_cita" type="time" placeholder="hora_cita" {...register('hora_cita', { required: true })} />
                        </div>
                        <div className="col-md-3 offset-md-0.8">
                            <label htmlFor="especialidad_cita" className="form-label">Especialidad de cita</label>
                            <select className="form-control" id="especialidad" {...register("especialidad", { required: true })}>
                                <option value="Nutricion">Nutrición</option>
                                <option value="Medico-general">Medico general</option>
                                <option value="Odontologia">Odontología</option>
                                <option value="Psicologia">Psicologia</option>
                            </select>
                        </div>
                        <div className="container-table">
                            <table className="table">
                                <thead className="cabecera">
                                    <tr>
                                        <th>Sl.</th>
                                        <th>CURP</th>
                                        <th>Nombre</th>
                                        <th>Edad</th>
                                        <th>Dirección</th>
                                        <th>Telefono</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    {pacienteResultado.map(paciente => (
                                        <tr key={paciente.CURP}>
                                            <td>#</td>
                                            <td>{paciente.CURP}</td>
                                            <td>{`${paciente.nombre} ${paciente.apePaterno} ${paciente.apeMaterno}`}</td>
                                            <td>{paciente.edad}</td>
                                            <td>{`${paciente.colonia} ${paciente.calle} #${paciente.numero_exterior}`}</td>
                                            <td>{paciente.telefono}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="container-button">
                            <button className="button-cancelar">Cancelar</button>
                            <button className="button-guardar">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
