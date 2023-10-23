import axios from 'axios';

const pacientesApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/',
});

export const getAllPacientes = () => pacientesApi.get("/");
export const getPacientes = (id) => pacientesApi.get(`/${id}/`);
export const createPacientes = (paciente) => pacientesApi.post("/", paciente);
export const deletePacientes = (id) => pacientesApi.delete(`/${id}`);
export const updatePacientes = (id, paciente) =>pacientesApi.put(`/${id}/`, paciente);
/* export const buscarPacientePorNombre = (nombre) => {
    return pacientesApi.get(`/buscar-paciente-por-nombre/?nombre=${nombre}`);
}; */