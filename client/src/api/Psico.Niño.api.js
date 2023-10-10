import axios from "axios";

const psicologiaApi = axios.create({
    baseURL: 'http://localhost:8000/FichaPsiNiño/api/v1/fichaPsicoNiño/'
})

export const getAllFichaPsiANiño= () => psicologiaApi.get('/')
export const getFichaPsiNiño = (expedienteFicha) => psicologiaApi.get(`/${expedienteFicha}/`)
export const addFichaPsiNiño = (ficha) => psicologiaApi.post('/', ficha)
export const deleteFichaPsiNiño = (expedienteFicha) => psicologiaApi.delete(`/${expedienteFicha}/`)
export const updateFichaPsiNiño = (expedienteFicha, ficha) => psicologiaApi.put(`/${expedienteFicha}/`,ficha)