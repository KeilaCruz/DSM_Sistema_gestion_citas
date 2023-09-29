import axios from 'axios'

const pacienteAPI = axios.create({
   baseURL: 'http://localhost:8000/Pacientes/api/v1/pacientes/'
})

export const getAllPacientes = () => pacienteAPI.get('/')
export const registrarPaciente = (paciente) => pacienteAPI.post('/', paciente)
export const eliminarPaciente = (idPaciente) => pacienteAPI.delete(`/${idPaciente}`)