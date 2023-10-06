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


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import {Login} from './pages/Login';
import {CrearUsuario} from './pages/CrearUsuario';
import { CrearRol } from "./pages/CrearRol";
import { CrearHojaEvaluacion } from "./pages/CrearHojaEvaluacion";
import { CrearNotaEnfermeria } from "./pages/CrearNotaEnfermeria";
import { CrearPrueba } from "./pages/CrearPrueba";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App(){
  return (
    
    <BrowserRouter>
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<CrearUsuario />} />
        <Route path="/roles" element={<CrearRol />} />
        <Route path="/hoja-evaluacion" element={<CrearHojaEvaluacion />} />
        <Route path="/nota-enfermeria" element={<CrearNotaEnfermeria />} />
        <Route path="/prueba" element={<CrearPrueba />} />
        {/* <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} /> */}
      </Routes> 
      <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;