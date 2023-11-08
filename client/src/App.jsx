
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import {Login} from './pages/Login';
import { CrearPrueba } from "./pages/CrearPrueba";
import { PruebaPage } from "./pages/PruebaPage";
import { CrearRol } from "./components-Rol/CrearRol";
import { RolPage } from "./pages/RolPage";
import { CrearUsuario } from "./components-Usuario/CrearUsuario";
import { UsuarioPage } from "./pages/UsuarioPage";
import { VerUsuario } from "./components-Usuario/VerUsuario";
import { CrearHojaEvaluacion } from "./components-HojaEvaluacion/CrearHojaEvaluacion";
import { HojaEvaluacionPage } from "./pages/HojaEvaluacionPage";
import { VerHojaEvaluacion } from "./components-HojaEvaluacion/VerHojaEvaluacion";
import { CrearExamenMedico } from "./components-ExamenMedico/CrearExamenMedico";
import {ExamenMedicoPage} from "./pages/ExamenMedicoPage";
import {VerExamenMedico} from "./components-ExamenMedico/VerExamenMedico";
import { CrearEvento } from "./components-Evento/CrearEvento";
import { EventoPage } from "./pages/EventoPage";
import { CrearPaciente } from "./components-paciente/CrearPaciente";
import { PacientePage } from "./pages/PacientePage";
import { ReportePage } from "./pages/ReportePage";
import { VerEvento } from "./components-Evento/VerEvento";
import { Calendario } from "./components-Calendario/Calendario";
import 'bootstrap/dist/css/bootstrap.css';
/* import 'bootstrap/dist/js/bootstrap.bundle.min.js'; */

function App(){
  return (
    
    <BrowserRouter>
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reporte" element={<ReportePage />} />
        <Route path="/calendario" element={<Calendario />} />

        

        <Route path="/prueba-create" element={<CrearPrueba />} />
        <Route path="/prueba" element={<PruebaPage />} />
        <Route path="/prueba/:id" element={<CrearPrueba />} />

        <Route path="/rol-create" element={<CrearRol />} />
        <Route path="/rol" element={<RolPage />} />
        <Route path="/rol-create/:id" element={<CrearRol />} />

        <Route path="/usuario-create" element={<CrearUsuario />} />
        <Route path="/usuario" element={<UsuarioPage />} />
        <Route path="/usuario-create/:id" element={<CrearUsuario />} />
        <Route path="/usuario-create/visualizar/:id" element={<VerUsuario />} />

        <Route path="/hojaEvaluacion-create" element={<CrearHojaEvaluacion />} />
        <Route path="/hojaEvaluacion" element={<HojaEvaluacionPage />} />
        <Route path="/hojaEvaluacion-create/:id" element={<CrearHojaEvaluacion />} />
        <Route path="/hojaEvaluacion-create/visualizar/:id" element={<VerHojaEvaluacion />} />

        <Route path="/examenMedico-create" element={<CrearExamenMedico />} />
        <Route path="/examenMedico" element={<ExamenMedicoPage />} />
        <Route path="/examenMedico-create/:id" element={<CrearExamenMedico />} />
        <Route path="/examenMedico-create/visualizar/:id" element={<VerExamenMedico />} />

        <Route path="/evento-create" element={<CrearEvento />} />
        <Route path="/evento" element={<EventoPage />} />
        <Route path="/evento-create/:id" element={<CrearEvento />} />
        <Route path="/evento-create/visualizar/:id" element={<VerEvento />} />

        <Route path="/paciente-create" element={<CrearPaciente />} />
        <Route path="/paciente" element={<PacientePage />} />
        <Route path="/paciente-create/:id" element={<CrearPaciente />} />




      </Routes> 
      <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;