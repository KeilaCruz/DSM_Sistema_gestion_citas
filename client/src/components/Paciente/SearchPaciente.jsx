import { useEffect, useState } from "react";
import { getAllPacientes } from "../../api/Pacientes.api";
import { PacienteCard } from "./PacienteCard";

export function SearchPaciente() {
    /*FALTA COLOCAR CUANDO NO HAY RESULTADOS*/ 
    //obtener los pacientes con el criterio del nombre 
    //obtener el paciente con el curp en especifico
    const [criterio_search, setCriterioSearch] = useState("")
    const [pacientes, setPacientes] = useState([])
    const [resultados, setResultados] = useState([])
    let regCurp = /^\D{1,4}\d{1,6}/;
    //cargar los pacientes que ya tenemos registrados
    useEffect(() => {
        async function loadPacientes() {
            const res = await getAllPacientes()
            setPacientes(res.data)
        }
        loadPacientes()
    }, [])
    const handleBarraChange = (evt) => {
        setCriterioSearch(evt.target.value)
        console.log(criterio_search)
    }
    const handleSearchPaciente = async () => {
        //revisar si el criterio de busqueda es por CURP
        const revisarCurp = regCurp.test(criterio_search)

        if (revisarCurp) {
            // busca el paciente por curp
            let resultado = pacientes.filter((paciente) => paciente.CURP === criterio_search)
            setResultados(resultado)
        } else {
            //separa el nombre si el criterio es por nombre
            const criterio_nombre = criterio_search.split(" ")
            let resultado = pacientes.filter((paciente) => paciente.nombre === criterio_nombre[0] && paciente.apePaterno === criterio_nombre[1])
            setResultados(resultado)
        }
    }
    return (
        <>
            <input id="barra_busqueda" type="text" placeholder="CURP o nombre completo" onChange={handleBarraChange} />
            <button onClick={handleSearchPaciente}>Buscar</button>
            {resultados.map(resultado => (
                <PacienteCard paciente={resultado}/>
            ))}
        </>
    )
}

