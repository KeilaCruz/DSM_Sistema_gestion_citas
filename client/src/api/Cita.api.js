import axios from 'axios'

const citaAPI = axios.create({
    baseURL: 'http://localhost:8000/Citas/api/v1/citas/'
})
export const getAllCitas = () => citaAPI.get('/')
export const agregarCita = (cita) => citaAPI.post('/',cita)
