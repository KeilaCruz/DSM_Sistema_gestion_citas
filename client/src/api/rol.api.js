import axios from 'axios';

const rolApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/roles/',
});

export const getAllRoles = () => rolApi.get("/");
export const getRoles = (idRol) => rolApi.get(`/${idRol}/`);
export const createRoles = (rol) => rolApi.post("/", rol);
export const deleteRoles = (idRol) => rolApi.delete(`/${idRol}`);
export const updateRoles = (idRol, rol) =>rolApi.put(`/${idRol}/`, rol);