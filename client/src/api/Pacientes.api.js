import axios from 'axios'

const pacienteAPI = axios.create({
   baseURL: 'http://localhost:8000/Pacientes/api/v1/pacientes/'
})

export const getAllPacientes = () => pacienteAPI.get('/')
export const regitrarPaciente = (paciente) => pacienteAPI.post('/', paciente)
