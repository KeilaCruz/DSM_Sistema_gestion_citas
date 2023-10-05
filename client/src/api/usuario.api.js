import axios from 'axios';

const usuarioApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/Pacientes/api/v1/usuarios/',
});

export const getAllUsuarios = () => usuarioApi.get("/");
export const getUsuarios = (id) => usuarioApi.get(`/${id}/`);
export const createUsuarios = (usuario)=> usuarioApi.post("/", usuario);
export const deleteUsuarios = (id) => usuarioApi.delete(`/${id}`);
export const updateUsuarios = (id, usuario) =>usuarioApi.put(`/${id}/`, usuario);