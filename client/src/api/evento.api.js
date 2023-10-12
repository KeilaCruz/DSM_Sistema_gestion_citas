import axios from 'axios';

const eventoApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/eventos/',
});

export const getAllEventos = () => eventoApi.get("/");
export const getEventos = (idEvento) => eventoApi.get(`/${idEvento}/`);
export const createEventos = (evento) => eventoApi.post("/", evento);
export const deleteEventos = (idEvento) => eventoApi.delete(`/${idEvento}`);
export const updateEventos = (idEvento, evento) =>eventoApi.put(`/${idEvento}/`, evento);