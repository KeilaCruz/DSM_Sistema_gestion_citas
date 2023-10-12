import axios from "axios";

const psicologiaApi = axios.create({
    baseURL: 'http://localhost:8000/SaludPublica/api/v1/fichaPsicoAdulto/'
})

export const getAllFichaPsiAdulto = () => psicologiaApi.get('/')
export const getFichaPsiAdulto = (expedienteFicha) => psicologiaApi.get(`/${expedienteFicha}/`)
export const addFichaPsiAdulto = (ficha) => psicologiaApi.post('/', ficha)
export const deleteFichaPsiAdulto = (expedienteFicha) => psicologiaApi.delete(`/${expedienteFicha}/`)
export const updateFichaPsiAdulto = (expedienteFicha, ficha) => psicologiaApi.put(`/${expedienteFicha}/`,ficha)