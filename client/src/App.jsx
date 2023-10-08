
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import {Login} from './pages/Login';
import { CrearNotaEnfermeria } from "./components-ExamenMedico/CrearNotaEnfermeria";
import { CrearPrueba } from "./pages/CrearPrueba";
import { PruebaPage } from "./pages/PruebaPage";
import { CrearRol } from "./components-Rol/CrearRol";
import { RolPage } from "./pages/RolPage";
import { CrearUsuario } from "./components-Usuario/CrearUsuario";
import { UsuarioPage } from "./pages/UsuarioPage";
import { CrearHojaEvaluacion } from "./components-HojaEvaluacion/CrearHojaEvaluacion";
import { HojaEvaluacionPage } from "./pages/HojaEvaluacionPage";
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
        <Route path="/nota-enfermeria" element={<CrearNotaEnfermeria />} />

        <Route path="/prueba-create" element={<CrearPrueba />} />
        <Route path="/prueba" element={<PruebaPage />} />
        <Route path="/prueba/:id" element={<CrearPrueba />} />

        <Route path="/rol-create" element={<CrearRol />} />
        <Route path="/rol" element={<RolPage />} />
        <Route path="/rol-create/:id" element={<CrearRol />} />

        <Route path="/usuario-create" element={<CrearUsuario />} />
        <Route path="/usuario" element={<UsuarioPage />} />
        <Route path="/usuario-create/:id" element={<CrearUsuario />} />

        <Route path="/hojaEvaluacion-create" element={<CrearHojaEvaluacion />} />
        <Route path="/hojaEvaluacion" element={<HojaEvaluacionPage />} />
        <Route path="/hojaEvaluacion-create/:id" element={<CrearHojaEvaluacion />} />




      </Routes> 
      <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;