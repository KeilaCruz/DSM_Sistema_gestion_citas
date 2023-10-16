import { GetAllFichaPA } from "../components/Psicologia/GetAllFichaPA";
import GetAllFichaPn from "../components/Psicologia/GetAllFichaPn";

export function GetFichaPA() {
  return (
    <>
      <h3>Ficha psicologica de adultos</h3>
      <GetAllFichaPA />
      <h3>Ficha psicologica de niños</h3>
      <GetAllFichaPn />
    </>
  )
}




