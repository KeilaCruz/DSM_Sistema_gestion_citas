import { BarraDeBusqueda } from "../Buscar-Paciente/BarraDeBusqueda";
import { ListaDeResultados } from "../Buscar-Paciente/ListaDeResultados";
import { useState } from "react";
import { Link } from "react-router-dom";


export function NavBar() {
  const [resultados, setResultados] = useState([]);

  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <div className="container-fluid">
            
            
         
         
            
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item active">
              <img
              src="/images/logo-1.png"
              alt="Logo-coatza"
              width="130"
              height="35"
              className="d-inline-block align-text-top"
            />
                </li>

                <li className="nav-item active">
                  <Link className="nav-link text-danger" to="#">
                    Rol del paciente
                  </Link>
                </li>

                <li className="nav-item active">
                  <Link className="nav-link" to="/hojaEvaluacion">
                    Hojas de evaluaciones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/calendario">
                    Calendario
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/evento">
                    Evento
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/examenMedico">
                    Examen medico
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/paciente">
                    Paciente
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reporte">
                    Reportes
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Barra de búsqueda */}
            <form className="d-flex ms-auto">
            <BarraDeBusqueda setResultados={setResultados} />
            
              
            </form>
  
            
          </div>
        </nav>
        <div
          aria-label="breadcrumb"
          style={{ backgroundColor: "#dedad0", height: "30px" }}
        ></div>
        <ListaDeResultados resultados={resultados} />
      </div>
      
    </div>
  );
}
