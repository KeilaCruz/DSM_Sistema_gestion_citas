import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GetPacientePage } from './pages/GetPacientePage'
import { PacienteForm } from './pages/PacienteForm'
import { GetCitaPage } from './pages/GetCitaPage'
import { CitaForm } from './pages/CitaForm'
import { HistorialNutricionPage } from './pages/HistorialNutricionPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/pacientes' element={<GetPacientePage />} />
          <Route path='/registrar-paciente' element={<PacienteForm />} />
          <Route path='/paciente/:id' element={<PacienteForm />} />
          <Route path='/citas' element={<GetCitaPage />} />
          <Route path='/registrar-cita' element={<CitaForm />} />
          <Route path='/registrar-historialnutricion' element={<HistorialNutricionPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
