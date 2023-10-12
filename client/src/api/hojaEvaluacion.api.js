import axios from 'axios';

const hojaEvaluacionApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/hojaClinica/',
});

export const getAllHojaEvaluaciones = () => hojaEvaluacionApi.get("/");
export const getHojaEvaluaciones = (idHojaClinica) => hojaEvaluacionApi.get(`/${idHojaClinica}/`);
export const createHojaEvaluaciones = (evaluacion) => hojaEvaluacionApi.post("/", evaluacion);
export const deleteHojaEvaluaciones = (idHojaClinica) => hojaEvaluacionApi.delete(`/${idHojaClinica}`);
export const updateHojaEvaluaciones = (idHojaClinica, evaluacion) =>hojaEvaluacionApi.put(`/${idHojaClinica}/`, evaluacion);