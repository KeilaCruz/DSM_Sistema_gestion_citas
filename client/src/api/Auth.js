import axios from 'axios'

const usuariosAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/Usuarios/api/v1/usuarios/'
})

export const iniciarSesion = async (credenciales) => {
    try {
        const res = await usuariosAPI.post('/', credenciales);
        const token = res.data;
        return token
    } catch (error) {

    }
}