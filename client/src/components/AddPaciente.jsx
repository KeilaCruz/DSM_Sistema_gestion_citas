import { useForm } from 'react-hook-form'
import { registrarPaciente, eliminarPaciente, updatePaciente, getPaciente } from '../api/Pacientes.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function AddPaciente() {
    const { register, handleSubmit, setValue } = useForm()
    const navigate = useNavigate()
    const param = useParams();
    const idPaciente = param.id

    useEffect(() => {
        async function loadPaciente() {
            if (idPaciente) {
                const { data: { nombre, apePaterno, apeMaterno, edad, estado_civil, CURP, escolaridad, colonia, calle,
                    numero_exterior, referencia, CP, telefono, derecho_habiencia, unidad_salud,
                    ultima_visita_medico, numero_personas_vive } } = await getPaciente(idPaciente)
                setValue("nombre", nombre)
                setValue("apePaterno", apePaterno)
                setValue("apeMaterno", apeMaterno)
                setValue("edad", edad)
                setValue("estado_civil", estado_civil)
                setValue("CURP", CURP)
                setValue("escolaridad", escolaridad)
                setValue("colonia", colonia)
                setValue("calle", calle)
                setValue("numero_exterior", numero_exterior)
                setValue("referencia", referencia)
                setValue("CP", CP)
                setValue("telefono", telefono)
                setValue("derecho_habiencia", derecho_habiencia)
                setValue("unidad_salud", unidad_salud)
                setValue("ultima_visita_medico", ultima_visita_medico)
                setValue("numero_personas_vive", numero_personas_vive)
            }
        }
        loadPaciente()
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        if (idPaciente) {
            const res = await updatePaciente(idPaciente, data)
            console.log(res)
            navigate("/get-pacientes")

        } else {
            const res = await registrarPaciente(data)
            console.log(res)
            navigate("/get-pacientes")
        }
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                <input type="text" placeholder="Apellido paterno" {...register("apePaterno", { required: true })} />
                <input type="text" placeholder="Apellido materno" {...register("apeMaterno", { required: true })} />
                <input type="number" placeholder="Edad" {...register("edad", { required: true })} />
                <select name="estado_civil" {...register("estado_civil", { required: true })}>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                </select>
                <input type="text" placeholder="CURP" {...register("CURP", { required: true })} />
                <select name="escolaridad" {...register("escolaridad", { required: true })}>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachillerato">Bachillerato</option>
                </select>
                <input type="text" placeholder="Colonia" {...register("colonia", { required: true })} />
                <input type="text" placeholder="Calle" {...register("calle", { required: true })} />
                <input type="number" placeholder="Número" {...register("numero_exterior", { required: true })} />
                <textarea placeholder="Entre calles o referencia" {...register("referencia", { required: true })}></textarea>
                <input type="number" placeholder="CP" {...register("CP", { required: true })} />
                <input type="text" placeholder="Telefono" {...register("telefono", { required: true })} />
                <input type="text" placeholder="Derechohabiencia" {...register("derecho_habiencia", { required: true })} />
                <input type="text" placeholder="Unidad de salud" {...register("unidad_salud", { required: true })} />
                <input type="date" placeholder="Ultima visita con su medico" {...register("ultima_visita_medico", { required: true })} />
                <input type="number" placeholder="Cuantas personas vive con usted" {...register("numero_personas_vive", { required: true })} />
                <button>Guardar</button>
            </form>
            {idPaciente && <button onClick={async () => {
                const confirm = window.confirm("Estas seguro de eliminar")
                if (confirm) {
                    const res = await eliminarPaciente(idPaciente)
                    console.log(res)
                    navigate("/get-pacientes")
                }
            }}>
                Eliminar</button>}

        </div>
    )
}

