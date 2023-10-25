import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GetPacientePage } from './pages/GetPacientePage'
import { PacienteForm } from './pages/PacienteForm'
import { GetCitaPage } from './pages/GetCitaPage'
import { AgendarCita } from './pages/AgendarCita'
import { HistoriaNutricionForm } from './pages/HistoriaNutricionForm'
import { HistoriaNutricionPage } from './pages/HistoriaNutricionPage'
import { FichaPAForm } from './pages/FichaPAForm'
import { FichaPNForm } from './pages/FichaPNForm'
import { GetFichaPA } from './pages/GetFichaPA'
import { ResultBusqueda } from './pages/ResultBusqueda'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/get-pacientes' element={<GetPacientePage />} />
          <Route path='/registrar-paciente' element={<PacienteForm />} />
          <Route path='/buscar-paciente' element={<ResultBusqueda />} />
          <Route path='/paciente/:id' element={<PacienteForm />} />
          <Route path='/get-citas' element={<GetCitaPage />} />
          <Route path='/registrar-cita' element={<AgendarCita />} />
          <Route path='/registrar-historialnutricion' element={<HistoriaNutricionForm />} />
          <Route path='/get-historialnutricion' element={<HistoriaNutricionPage />} />
          <Route path='/registrar-fichapsico-adulto' element={<FichaPAForm />} />
          <Route path='/get-fichapsico-adulto' element={<GetFichaPA />} />
          <Route path='/registrar-fichapsico-niño' element={<FichaPNForm />} />
          <Route path='/registrar-fichapsico-niño' element={<FichaPNForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
