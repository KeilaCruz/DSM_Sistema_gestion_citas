import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GetPacientePage } from './pages/GetPacientePage'
import { PacienteForm } from './pages/PacienteForm'
import { GetCitaPage } from './pages/GetCitaPage'
import { CitaForm } from './pages/CitaForm'
import {HistoriaNutricionForm} from './pages/HistoriaNutricionForm'
import { HistoriaNutricionPage } from './pages/HistoriaNutricionPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/get-pacientes' element={<GetPacientePage />} />
          <Route path='/registrar-paciente' element={<PacienteForm />} />
          <Route path='/paciente/:id' element={<PacienteForm />} />
          <Route path='/get-citas' element={<GetCitaPage />} />
          <Route path='/registrar-cita' element={<CitaForm />} />
          <Route path='/registrar-historialnutricion' element={<HistoriaNutricionForm/>} />
          <Route path='/get-historialnutricion' element={<HistoriaNutricionPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
