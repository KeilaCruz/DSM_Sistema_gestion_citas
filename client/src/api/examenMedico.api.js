import axios from 'axios';

const examenMedicoApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/examenMedico/',
});

export const getAllExamenMedico = () => examenMedicoApi.get("/");
export const getExamenMedico = (idExamenMedico) => examenMedicoApi.get(`/${idExamenMedico}/`);
export const createExamenMedico = (examen) => examenMedicoApi.post("/", examen);
export const deleteExamenMedico = (idExamenMedico) => examenMedicoApi.delete(`/${idExamenMedico}`);
export const updateExamenMedcio = (idExamenMedico, examen) =>examenMedicoApi.put(`/${idExamenMedico}/`, examen);