
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import {Login} from './pages/Login';
import {CrearUsuario} from './pages/CrearUsuario';
import { CrearRol } from "./pages/CrearRol";
import { CrearHojaEvaluacion } from "./pages/CrearHojaEvaluacion";
import { CrearNotaEnfermeria } from "./pages/CrearNotaEnfermeria";
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
        {/* <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} /> */}
      </Routes> 
      <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;