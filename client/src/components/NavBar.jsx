export function NavBar() {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Rol del usuario
            </a>
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
                  <a className="nav-link" href="/hojaEvaluacion">
                    Hojas de evaluaciones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/calendario">
                    Calendario
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/evento">
                    Evento
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/examenMedico">
                    Examen medico
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/paciente">
                    Paciente
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reporte">
                    Reportes
                  </a>
                </li>
              </ul>
            </div>
            <img
              src="/images/logo-1.png"
              alt="Logo-coatza"
              width="130"
              height="35"
              className="d-inline-block align-text-top"
            />
          </div>
        </nav>
        <div
          aria-label="breadcrumb"
          style={{ backgroundColor: "#dedad0", height: "30px" }}
        ></div>
      </div>
    </div>
  );
}
