import axios from 'axios';

const usuarioApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/usuarios/',
});

export const getAllUsuarios = () => usuarioApi.get("/");
export const getUsuarios = (idUsuario) => usuarioApi.get(`/${idUsuario}/`);
export const createUsuarios = (usuario)=> usuarioApi.post("/", usuario);
export const deleteUsuarios = (idUsuario) => usuarioApi.delete(`/${idUsuario}`);
export const updateUsuarios = (idUsuario, usuario) =>usuarioApi.put(`/${idUsuario}/`, usuario);