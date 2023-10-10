import axios from 'axios';

const hojaEvaluacionApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/hojaClinica/',
});

export const getAllHojaEvaluaciones = () => hojaEvaluacionApi.get("/");
export const getHojaEvaluaciones = (id) => hojaEvaluacionApi.get(`/${id}/`);
export const createHojaEvaluaciones = (evaluacion) => hojaEvaluacionApi.post("/", evaluacion);
export const deleteHojaEvaluaciones = (id) => hojaEvaluacionApi.delete(`/${id}`);
export const updateHojaEvaluaciones = (id, evaluacion) =>hojaEvaluacionApi.put(`/${id}/`, evaluacion);