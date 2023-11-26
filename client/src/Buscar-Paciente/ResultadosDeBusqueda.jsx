/* import { useState } from "react";
import { ContenidoAdicional } from "./ContenidoAdicional"; // Asegúrate de importar el componente ContenidoAdicional

export function ResultadosDeBusqueda({ resultado }) {
    const [mostrarContenido, setMostrarContenido] = useState(false);
    const fullName = `${resultado.nombre} ${resultado.apePaterno} ${resultado.apeMaterno}`;

    const toggleContenido = () => {
        setMostrarContenido(!mostrarContenido);
    };

    return (
        <div>
        <div className="resultado-busqueda" onClick={toggleContenido}>
            {fullName}
        </div>
        <div>
        {mostrarContenido && <ContenidoAdicional resultado={resultado} />}
        </div>
        </div>
    );
} */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getAllHojaEvaluaciones } from "../api/hojaEvaluacion.api";

export function ResultadosDeBusqueda({ resultado }) {
  
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const fullName = `${resultado.nombre} ${resultado.apePaterno} ${resultado.apeMaterno}`;

  return (
    <div>
      <div className="resultado-busqueda" onClick={handleShow}>
        {fullName}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{fullName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fecha de registro: {resultado.fechaRegistro}</p>
          <p>Edad: {resultado.edad}</p>
          <p>CURP: {resultado.CURP}</p>
          <p>Telefono {resultado.telefono}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>

          <Link>
            <Button variant="primary">Cita</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
