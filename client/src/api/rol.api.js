import axios from 'axios';

const rolApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/Pacientes/api/v1/roles/',
});

export const getAllRoles = () => rolApi.get("/");
export const getRoles = (id) => rolApi.get(`/${id}/`);
export const createRoles = (rol) => rolApi.post("/", rol);
export const deleteRoles = (id) => rolApi.delete(`/${id}`);
export const updateRoles = (id, rol) =>rolApi.put(`/${id}/`, rol);