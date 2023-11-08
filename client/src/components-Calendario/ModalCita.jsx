import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Modal, Button } from 'react-bootstrap';

export function ModalCita({ user, showModal, onClose }) {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Apellido:</strong> {user.apellido}</p>
        {/* Agrega más detalles del usuario según tus datos */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}