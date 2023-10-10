import axios from 'axios';

const notaEnfermeriaApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/notaEnfermeria/',
});

export const getAllNotasEnfermeria = () => notaEnfermeriaApi.get("/");
export const getNotasEnfermeria = (id) => notaEnfermeriaApi.get(`/${id}/`);
export const createNotasEnfermeria = (nota) => notaEnfermeriaApi.post("/", nota);
export const deleteNotasEnfermeria = (id) => notaEnfermeriaApi.delete(`/${id}`);
export const updateNotasEnfermeria = (id, nota) =>notaEnfermeriaApi.put(`/${id}/`, nota);