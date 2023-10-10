import axios from 'axios';

const eventoApi =axios.create({
    baseURL: 'http://127.0.0.1:8000/SaludPublica/api/v1/eventos/',
});

export const getAllEventos = () => eventoApi.get("/");
export const getEventos = (id) => eventoApi.get(`/${id}/`);
export const createEventos = (evento) => eventoApi.post("/", evento);
export const deleteEventos = (id) => eventoApi.delete(`/${id}`);
export const updateEventos = (id, evento) =>eventoApi.put(`/${id}/`, evento);