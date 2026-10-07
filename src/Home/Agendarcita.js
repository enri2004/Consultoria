import React, { useState } from "react";
import "../style/AgendarCita.css";

const services = ["Asesoría fiscal", "Consultoría empresarial", "Servicios contables", "Nómina"];
const timeSlots = ["09:00", "10:30", "12:00", "13:30", "16:00", "17:30"];
const initialAppointment = { service: "", modality: "presencial", date: "", time: "", name: "", email: "" };
const appointmentRecipient = 'molinahernandezenrijose@gmail.com';

export default function AgendarCita() {
  const [appointment, setAppointment] = useState(initialAppointment);
  const [confirmed, setConfirmed] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const updateAppointment = ({ target: { name, value } }) => {
    setAppointment((current) => ({ ...current, [name]: value }));
  };

  const sendAppointmentByEmail = () => {
    const subject = encodeURIComponent(`Nueva cita: ${appointment.name}`);
    const body = encodeURIComponent(
      `Nombre: ${appointment.name}\n` +
      `Correo electrónico: ${appointment.email}\n` +
      `Servicio: ${appointment.service}\n` +
      `Modalidad: ${appointment.modality}\n` +
      `Fecha: ${appointment.date}\n` +
      `Horario: ${appointment.time}`
    );

    window.location.href = `mailto:${appointmentRecipient}?subject=${subject}&body=${body}`;
  };

  if (confirmed) {
    return (
      <section className="appointment-confirmation" aria-live="polite">
        <span className="confirmation-check" aria-hidden="true">✓</span>
        <p className="appointment-kicker">Confirmación</p>
        <h3>Tu cita ha sido agendada</h3>
        <p>Recibirás la confirmación en {appointment.email} con los detalles de tu cita.</p>
        <button type="button" onClick={() => { setAppointment(initialAppointment); setConfirmed(false); }}>Agendar otra cita</button>
      </section>
    );
  }

  return (
    <section className="appointment-flow">
      <div className="appointment-steps" aria-label="Progreso de la cita">
        <div className="appointment-step appointment-step-active"><span>1</span><p>Selecciona tu cita</p></div>
        <div className="appointment-step-line" aria-hidden="true" />
        <div className="appointment-step"><span>2</span><p>Confirmación</p></div>
      </div>

      <form
        className="appointment-form"
        onSubmit={(event) => {
          event.preventDefault();
          sendAppointmentByEmail();
          setConfirmed(true);
        }}
      >
        <div className="appointment-field">
          <label htmlFor="appointment-service">Servicio</label>
          <select id="appointment-service" name="service" value={appointment.service} onChange={updateAppointment} required>
            <option value="" disabled>Selecciona un servicio</option>
            {services.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </div>

        <fieldset className="appointment-field appointment-modality">
          <legend>Modalidad</legend>
          <div className="appointment-modality-options">
            <label><input type="radio" name="modality" value="presencial" checked={appointment.modality === "presencial"} onChange={updateAppointment} /><span>Presencial</span></label>
            <label><input type="radio" name="modality" value="videollamada" checked={appointment.modality === "videollamada"} onChange={updateAppointment} /><span>Videollamada</span></label>
            <label><input type="radio" name="modality" value="telefono" checked={appointment.modality === "telefono"} onChange={updateAppointment} /><span>Telefónica</span></label>
          </div>
        </fieldset>

        <div className="appointment-grid">
          <div className="appointment-field"><label htmlFor="appointment-date">Fecha</label><input id="appointment-date" name="date" type="date" min={today} value={appointment.date} onChange={updateAppointment} required /></div>
          <div className="appointment-field"><label htmlFor="appointment-time">Horario</label><select id="appointment-time" name="time" value={appointment.time} onChange={updateAppointment} required><option value="" disabled>Selecciona</option>{timeSlots.map((time) => <option key={time} value={time}>{time}</option>)}</select></div>
        </div>

        <div className="appointment-grid">
          <div className="appointment-field"><label htmlFor="appointment-name">Nombre</label><input id="appointment-name" name="name" type="text" value={appointment.name} onChange={updateAppointment} required /></div>
          <div className="appointment-field"><label htmlFor="appointment-email">Correo electrónico</label><input id="appointment-email" name="email" type="email" value={appointment.email} onChange={updateAppointment} required /></div>
        </div>

        <button type="submit">Confirmar cita</button>
      </form>
    </section>
  );
}
