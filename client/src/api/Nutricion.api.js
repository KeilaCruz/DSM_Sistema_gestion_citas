import axios from "axios";

const nutricionAPI = axios.create({
    baseURL:'http://localhost:8000/HistoriaNutricion/api/v1/historiaNutricion/'
})
export const getAllHistorialNutricion = () => nutricionAPI.get('/')
export const addHistoriaNutricion = (historiaNutricion) => nutricionAPI.post('/', historiaNutricion)
export const deleteHistoriaNutricion = (idHistoriaNutricion) => nutricionAPI.delete(`${idHistoriaNutricion}`)