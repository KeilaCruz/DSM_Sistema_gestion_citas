import axios from 'axios';

const pruebasApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/Pacientes/api/v1/pruebas/',
});

export const getAllPruebas = () => pruebasApi.get("/");
export const getPruebas = (id) => pruebasApi.get(`/${id}/`);
export const createPruebas = (prueba) => pruebasApi.post("/", prueba);
export const deletePruebas = (id) => pruebasApi.delete(`/${id}`);
export const updatePruebas = (id, prueba) =>pruebasApi.put(`/${id}/`, prueba);