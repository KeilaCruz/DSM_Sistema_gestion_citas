import { useForm } from "react-hook-form"
import { addCita, getAllCitas } from "../../api/Cita.api"
import { getPaciente } from "../../api/Pacientes.api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export function AddCita() {
    const [paciente, setPaciente] = useState([])
    const [citas, setCitas] = useState([])
    const [criteria_paciente, setCriteriaPaciente] = useState("")
    const navigate = useNavigate("")
    const { register, handleSubmit } = useForm()
    //cargar el arreglo del paciente
    useEffect(() => {
        async function loadPacientes() {
            const res = await getPaciente(criteria_paciente)
            setPaciente(res.data)
        }
        loadPacientes()
    }, [criteria_paciente])
    //cargar el objeto de citas
    useEffect(() => {
        async function loadCitas() {
            const res = await getAllCitas();
            setCitas(res.data)
        }
        loadCitas()
    })
    const onSubmit = handleSubmit(async (data) => {
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

    const handleBarraBusqueda = (evt) => {
        //Una cita se tiene busca verificar que exista el paciente 
        setCriteriaPaciente(evt.target.value)
        console.log(criteria_paciente)
    }
    return (
        <>
            <input type="text" id="busqueda_paciente" onChange={handleBarraBusqueda} />
            <form onSubmit={onSubmit}>
                <input id="fecha_cita" type="date" placeholder="fecha de cita" {...register('fecha_cita', { required: true })} />
                <input id="horario_cita" type="time" placeholder="hora_cita" {...register('hora_cita', { required: true })} />
                <input id="curp_paciente" type="text" value={paciente.CURP} {...register('idPaciente', { required: true })} />
                <select id="especialidad" {...register("especialidad", { required: true })}>
                    <option value="Nutricion">Nutrición</option>
                    <option value="Medico-general">Medico general</option>
                    <option value="Odontología">Odontología</option>
                    <option value="Psicologia">Psicologia</option>
                </select>
                <p>{paciente.nombre}</p>
                <p>{paciente.apePaterno}</p>
                <p>{paciente.apeMaterno}</p>
                <p>{paciente.edad}</p>
                <button>Guardar</button>
            </form>
        </>
    )
}
