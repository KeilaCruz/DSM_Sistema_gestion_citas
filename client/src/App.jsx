
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import {Login} from './pages/Login';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App(){
  return (
    
    <BrowserRouter>
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} /> */}
      </Routes> 
      <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;