
import React, { useState } from "react";
import "../style/AgendarCita.css";

const services = [
  "Asesoría fiscal",
  "Consultoría empresarial",
  "Servicios contables",
  "Nómina"
];

const timeSlots = ["09:00", "10:30", "12:00", "13:30", "16:00", "17:30"];

const initialAppointment = {
  service: "",
  modality: "presencial",
  date: "",
  time: "",
  name: "",
  email: ""
};

export default function AgendarCita() {
  const [appointment, setAppointment] = useState(initialAppointment);
  const [confirmed, setConfirmed] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  // Fecha local para evitar problemas de zona horaria
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");

  const updateAppointment = ({ target: { name, value } }) => {
    setAppointment((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setStatus(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      if (!apiUrl) {
        throw new Error("No está configurada la dirección de la API.");
      }

      const response = await fetch(`${apiUrl}/api/citas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(appointment)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "No se pudo enviar la solicitud de cita."
        );
      }

      setConfirmed(true);
    } catch (error) {
      console.error("Error al solicitar la cita:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "No se pudo enviar la solicitud. Inténtalo nuevamente."
      });
    } finally {
      setSending(false);
    }
  };

  if (confirmed) {
    return (
      <section className="appointment-confirmation" aria-live="polite">
        <span className="confirmation-check" aria-hidden="true">
          ✓
        </span>

        <p className="appointment-kicker">Solicitud recibida</p>

        <h3>Hemos recibido tu solicitud de cita</h3>

        <p>
          Enviaremos un correo a {appointment.email} con los detalles
          de tu solicitud. La fecha y el horario quedarán pendientes
          de confirmación por parte de nuestro equipo.
        </p>

        <button
          type="button"
          onClick={() => {
            setAppointment(initialAppointment);
            setConfirmed(false);
            setStatus(null);
          }}
        >
          Solicitar otra cita
        </button>
      </section>
    );
  }

  return (
    <section className="appointment-flow">
      <div className="appointment-steps" aria-label="Progreso de la cita">
        <div className="appointment-step appointment-step-active">
          <span>1</span>
          <p>Selecciona tu cita</p>
        </div>

        <div className="appointment-step-line" aria-hidden="true" />

        <div className="appointment-step">
          <span>2</span>
          <p>Confirmación</p>
        </div>
      </div>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="appointment-field">
          <label htmlFor="appointment-service">Servicio</label>

          <select
            id="appointment-service"
            name="service"
            value={appointment.service}
            onChange={updateAppointment}
            required
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="appointment-field appointment-modality">
          <legend>Modalidad</legend>

          <div className="appointment-modality-options">
            <label>
              <input
                type="radio"
                name="modality"
                value="presencial"
                checked={appointment.modality === "presencial"}
                onChange={updateAppointment}
              />
              <span>Presencial</span>
            </label>

            <label>
              <input
                type="radio"
                name="modality"
                value="videollamada"
                checked={appointment.modality === "videollamada"}
                onChange={updateAppointment}
              />
              <span>Videollamada</span>
            </label>

            <label>
              <input
                type="radio"
                name="modality"
                value="telefono"
                checked={appointment.modality === "telefono"}
                onChange={updateAppointment}
              />
              <span>Telefónica</span>
            </label>
          </div>
        </fieldset>

        <div className="appointment-grid">
          <div className="appointment-field">
            <label htmlFor="appointment-date">Fecha</label>

            <input
              id="appointment-date"
              name="date"
              type="date"
              min={today}
              value={appointment.date}
              onChange={updateAppointment}
              required
            />
          </div>

          <div className="appointment-field">
            <label htmlFor="appointment-time">Horario</label>

            <select
              id="appointment-time"
              name="time"
              value={appointment.time}
              onChange={updateAppointment}
              required
            >
              <option value="" disabled>
                Selecciona
              </option>

              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="appointment-grid">
          <div className="appointment-field">
            <label htmlFor="appointment-name">Nombre</label>

            <input
              id="appointment-name"
              name="name"
              type="text"
              value={appointment.name}
              onChange={updateAppointment}
              required
            />
          </div>

          <div className="appointment-field">
            <label htmlFor="appointment-email">
              Correo electrónico
            </label>

            <input
              id="appointment-email"
              name="email"
              type="email"
              value={appointment.email}
              onChange={updateAppointment}
              required
            />
          </div>
        </div>

        {status && (
          <p
            role="alert"
            className={`contact-form-status contact-form-status-${status.type}`}
          >
            {status.message}
          </p>
        )}

        <button type="submit" disabled={sending}>
          {sending ? "Enviando solicitud…" : "Solicitar cita"}
        </button>

        <p className="appointment-note">
          La fecha y el horario se confirmarán por correo después de
          revisar la disponibilidad.
        </p>
      </form>
    </section>
  );
}
