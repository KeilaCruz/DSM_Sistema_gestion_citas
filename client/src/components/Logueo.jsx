import { useContext } from "react"
import { useForm } from "react-hook-form"
//import { logoutSession } from "../api/auth.api"
import { useNavigate } from "react-router-dom"
//import AuthContext from "../context/AuthProvider"

export function Logueo() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    //revisar por que si realiza la autenticacion pero se guarda
    const login = async (data) => {
        try {
            const res = await logoutSession(data);
            console.log(res.data.access)
            const token = res.data.access;
            authContext.setToken(token);
            navigate("/get-pacientes")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h2>Inicio de sesion</h2>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="corre_electronico">Correo Electronico</label>
                <input id="email" type="email" placeholder="correo electronico" {...register("email", { required: true })} />
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" placeholder="contraseña" {...register("password", { required: true })} />
                <button>Inicio</button>
            </form>
        </>
    )
}

