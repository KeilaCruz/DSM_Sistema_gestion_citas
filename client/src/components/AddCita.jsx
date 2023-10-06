import { useForm } from "react-hook-form"
import { addCita } from "../api/Cita.api"

export function AddCita() {
    const { register, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async (data) => {
        const res = await addCita(data);
        data.idPaciente = parseInt(data.idPaciente)
        console.log(data)
        console.log(res)
    })
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="date" placeholder="fecha de cita" {...register('fecha_cita', { required: true })} />
                <input type="time" placeholder="hora_cita" {...register('hora_cita', { required: true })} />
                <input type="number" placeholder="id-paciente" {...register('idPaciente', { required: true })} />
                <select name="especialidad" {...register("especialidad", { required: true })}>
                    <option value="Nutricion">Nutrición</option>
                    <option value="Medico-general">Medico general</option>
                    <option value="Odontología">Odontología</option>
                    <option value="Psicologia">Psicologia</option>
                </select>
                <button>Guardar</button>
            </form>
        </>
    )
}
