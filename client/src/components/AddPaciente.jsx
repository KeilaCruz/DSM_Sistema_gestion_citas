import { useForm } from 'react-hook-form'
import {registrarPaciente} from '../api/Pacientes.api'

export function AddPaciente() {
    const { register, handleSubmit} = useForm()

    const onSubmit = handleSubmit(async(data) => { 
        data.edad = parseInt(data.edad)
        data.numero_exterior = parseInt(data.numero_exterior)
        data.CP = parseInt(data.CP)
        data.numero_personas_vive = parseInt(data.numero_personas_vive)
        const fecha = new Date(data.ultima_visita_medico)
        const fechaFormateada = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;
        data.ultima_visita_medico  = fechaFormateada

        const res = await registrarPaciente(data)
        console.log(data)
        console.log(res)
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", {required:true})} />
                <input type="text" placeholder="Apellido paterno" {...register("apePaterno", {required:true})} />
                <input type="text" placeholder="Apellido materno" {...register("apeMaterno", {required:true})} />
                <input type="number" placeholder="Edad" {...register("edad", {required:true})} />
                <select name="estado_civil" {...register("estado_civil", {required:true})}>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                </select>
                <input type="text" placeholder="CURP" {...register("CURP", {required:true})}/>
                <select name="escolaridad" {...register("escolaridad", {required:true})}>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachillerato">Bachillerato</option>
                </select>
                <input type="text" placeholder="Colonia" {...register("colonia", {required:true})} />
                <input type="text" placeholder="Calle" {...register("calle", {required:true})} />
                <input type="number" placeholder="Número" {...register("numero_exterior", {required:true})} />
                <textarea placeholder="Entre calles o referencia" {...register("referencia", {required:true})}></textarea>
                <input type="number" placeholder="CP" {...register("CP", {required:true})} />
                <input type="text" placeholder="Telefono" {...register("telefono", {required:true})} />
                <input type="text" placeholder="Derechohabiencia" {...register("derecho_habiencia", {required:true})} />
                <input type="text" placeholder="Unidad de salud" {...register("unidad_salud", {required:true})} />
                <input type="date" placeholder="Ultima visita con su medico" {...register("ultima_visita_medico", {required:true})} />
                <input type="number" placeholder="Cuantas personas vive con usted" {...register("numero_personas_vive", {required:true})}/>
                <button>Guardar</button>
            </form>
        </div>
    )
}

