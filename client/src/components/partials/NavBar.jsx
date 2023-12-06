import { Link } from "react-router-dom";


export function NavBar() {
    return (
        <div>
            <div className="fixed-top">
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" style={{ backgroundColor: "#230443" }}>
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