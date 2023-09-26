import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {GetPacientePage} from './pages/GetPacientePage'
import {PacienteForm} from './pages/PacienteForm'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/pacientes' element={<GetPacientePage/>}/>
          <Route path='/registrar-paciente' element={<PacienteForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
