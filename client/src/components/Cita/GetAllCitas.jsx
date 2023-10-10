import { useEffect, useState } from "react"
import { getAllCitas } from "../../api/Cita.api";
import { CitaCard } from "./CitaCard";

export function GetAllCitas() {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        async function loadCitas() {
            const response = await getAllCitas();
            setCitas(response.data);
        }
        loadCitas();
    }, [])

    return (
        <>
             {citas.map(cita => (
                <CitaCard cita={cita} key={cita.id}/>
            ))}
        </>
    )
}

