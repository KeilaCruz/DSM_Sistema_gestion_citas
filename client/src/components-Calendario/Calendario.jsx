import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es"; // Importa el idioma español
import { useEffect, useState } from "react";
import { getAllCitas } from "../api/cita.api";
import { getAllUsuarios } from "../api/usuario.api";
import { getAllPacientes } from "../api/paciente.api";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Calendar } from "@fullcalendar/core";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Button, Modal } from "react-bootstrap";

export function Calendario() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventDetails, setEventDetails] = useState({});

  const handleShowModal = (info) => {
    setSelectedEvent(info.event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setEventDetails({});
    setShowModal(false);
  };

  return (
    <div>
      <div className="container-fluid">
        <NavBar />
        <h1>Calendario de citas</h1>
        <FullCalendar
          events={function (info, successCallback, failureCallback) {
            fetch("http://127.0.0.1:8000/SaludPublica/api/v1/citas/")
              .then((response) => response.json())
              .then((data) => {
                const events = [];

                data.forEach((cita) => {
                  // Obtener detalles del paciente
                  fetch(
                    `http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/${cita.idPaciente}`
                  )
                    .then((response) => response.json())
                    .then((pacienteData) => {
                      // Obtener detalles del usuario (médico)
                      fetch(
                        `http://127.0.0.1:8000/SaludPublica/api/v1/usuarios/${cita.idUsuario}`
                      )
                        .then((response) => response.json())
                        .then((usuarioData) => {
                          events.push({
                            title:
                              pacienteData.nombre +
                              " " +
                              pacienteData.apePaterno +
                              " " +
                              pacienteData.apeMaterno,
                            start: new Date(
                              cita.fecha_cita + "T" + cita.hora_cita
                            ),
                            end: new Date(cita.fecha_cita),
                            paciente: pacienteData,
                            medico: usuarioData, // Agrega el campo personalizado 'medico'
                          });

                          if (events.length === data.length) {
                            successCallback(events);
                          }
                        })
                        .catch(failureCallback);
                    })
                    .catch(failureCallback);
                });
              })
              .catch(failureCallback);
          }}
          eventContent={(info) => (
            <div
              style={{
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => handleShowModal(info)}
            >
              <b>{info.timeText}</b>
              <br />
              <i>{info.event.title}</i>
            </div>
          )}
          timeZone="local"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            bootstrap5Plugin,
          ]}
          initialView="timeGridWeek"
          themeSystem="bootstrap5"
          headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth, timeGridWeek, timeGridDay", // will normally be on the right. if RTL, will be on the left
          }}
          locales={[esLocale]} // Configura los idiomas disponibles
          locale="es" // Establece el idioma a español
        />
      </div>
      <Footer />

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Renderiza la información del evento seleccionado aquí */}
          {eventDetails && (
            <div>
              <p>
                Medico: {selectedEvent?.extendedProps.medico.nombre}{" "}
                {selectedEvent?.extendedProps.medico.ape_paterno}{" "}
                {selectedEvent?.extendedProps.medico.ape_materno}
              </p>
              <p>Fecha de la cita: {selectedEvent?.start?.toLocaleString()}</p>
              <p>CURP: {selectedEvent?.extendedProps.paciente.CURP}</p>
              <p>Edad: {selectedEvent?.extendedProps.paciente.edad}</p>
              <p>Telefono: {selectedEvent?.extendedProps.paciente.telefono}</p>
              <p>
                Derecho habiencia:{" "}
                {selectedEvent?.extendedProps.paciente.derecho_habiencia}
              </p>
              {/* Agrega más detalles según sea necesario */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Guardar cambios
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
