import axios from 'axios'

const citaAPI = axios.create({
    baseURL: 'http://localhost:8000/SaludPublica/api/v1/citas/'
})
export const getAllCitas = () => citaAPI.get('/')
export const addCita = (cita) => citaAPI.post('/',cita)
export const deleteCita = (idCita) => citaAPI.delete(`${idCita}`) 