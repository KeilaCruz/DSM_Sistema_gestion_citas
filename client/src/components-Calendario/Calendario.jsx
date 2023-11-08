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
  const [citas, setCitas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  /* useEffect(() => {
    // Hacer la solicitud para obtener la lista desde la API
    getAllUsuarios()
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }, []); */

  useEffect(() => {
    // Hacer la solicitud para obtener la lista desde la API
    getAllCitas()
      .then((response) => {
        setCitas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las citas :", error);
      });
  }, []);

 /*  useEffect(() => {
    // Hacer la solicitud para obtener la lista desde la API
    getAllPacientes()
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los pacientes:", error);
      });
  }, []); */

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>

      
      {citas.map((cita) => (
        <div key={cita.idCita} value={cita.idCita}>
            
        </div>
      ))}

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
                  fetch(
                    `http://127.0.0.1:8000/SaludPublica/api/v1/pacientes/${cita.idPaciente}`
                  )
                    .then((response) => response.json())
                    .then((pacienteData) => {
                      events.push({
                        title:
                          pacienteData.nombre +
                          " " +
                          pacienteData.apePaterno +
                          " " +
                          pacienteData.apeMaterno,
                        start: new Date(cita.fecha_cita + "T" + cita.hora_cita),
                        end: new Date(cita.fecha_cita),
                      });

                      if (events.length === data.length) {
                        successCallback(events);
                      }
                    })
                    .catch(failureCallback);
                });
              })
              .catch(failureCallback);
          }}
          eventContent={function (info) {
            return (
              <div
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
                onClick={handleShowModal}
              >
                <b>{info.timeText}</b>
                <br />
                <i>{info.event.title}</i>
              </div>
            );
          }}
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
    </div>
  );
}
