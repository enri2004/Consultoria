import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Menuvista from '../layout/MenuVista';
import '../style/Contacto.css';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PinDropIcon from '@mui/icons-material/PinDrop';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function Contacto({ embedded = false }) {
    const [formData, setFormData] = useState(initialForm);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null);

    const updateForm = ({ target: { name, value } }) => {
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: 'error',
                message: 'El envío de correo todavía no está configurado. Inténtalo más tarde o contáctanos por WhatsApp.',
            });
            return;
        }

        setSending(true);
        setStatus(null);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    phone: formData.phone || 'No proporcionado',
                    message: formData.message,
                },
                { publicKey }
            );
            setFormData(initialForm);
            setStatus({ type: 'success', message: 'Tu mensaje se envió correctamente. Nos pondremos en contacto contigo.' });
        } catch (error) {
            console.error('No se pudo enviar el mensaje de contacto:', error);
            setStatus({
                type: 'error',
                message: 'No se pudo enviar tu mensaje. Inténtalo de nuevo o contáctanos por WhatsApp.',
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <div className={`contact-page${embedded ? ' contact-embedded' : ''}`}>
            <main className="contact-frame">
                {!embedded && <Menuvista />}

                <section className="contact-content">
                    <div className="contact-heading">
                        <span className="section-eyebrow">Contacto</span>
                        <h1>Hablemos de tu próximo paso</h1>
                        <p>Cuéntanos qué necesitas y encontraremos una ruta clara para ayudarte.</p>
                    </div>

                    <div className="contact-panel">
                        <div className="contact-information">
                            <h2>Información</h2>

                            <div className="contact-detail">
                                <span className="contact-symbol"><PhoneForwardedIcon style={{ fontSize: 20 }} /></span>
                                <a href="tel:+52 916 348 0780">+52 916 348 0780</a>
                            </div>
                            <div className="contact-detail">
                                <span className="contact-symbol"><AlternateEmailIcon style={{ fontSize: 20 }} /></span>
                                <a href="mailto:firmegrupofiscal@gmail.com">firmegrupofiscal@gmail.com</a>
                            </div>
                            <div className="contact-detail">
                                <span className="contact-symbol"><WhatsAppIcon style={{ fontSize: 20 }} /></span>
                                <a href="https://wa.me/529163480780">WhatsApp</a>
                            </div>
                            <div className="contact-detail contact-address">
                                <span className="contact-symbol"><PinDropIcon style={{ fontSize: 20 }} /></span>
                                <p>Calle Francisco Javier Mina & Sexta Avenida Norte Poniente, San Miguel, 29960 Palenque, Chis.</p>
                            </div>

                            <iframe
                                className="contact-map"
                                title="Ubicación de Firme Grupo Fiscal"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1902.4588782208848!2d-91.979064!3d17.511439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f24f007de294a9%3A0x961ea273dc62ffe8!2sFirme%20Grupo%20Fiscal!5e0!3m2!1ses-419!2smx!4v1788800532548!5m2!1ses-419!2smx"
                                loading="lazy"
                                allowFullScreen=""
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h2>Contacto</h2>

                            <label htmlFor="name">Nombre</label>
                            <div className="input-icon">
                                <input id="name" name="name" type="text" value={formData.name} onChange={updateForm} placeholder="Nombre" required />
                            </div>

                            <label htmlFor="email">Correo electrónico</label>
                            <input id="email" name="email" type="email" value={formData.email} onChange={updateForm} placeholder="Email" required />

                            <label htmlFor="phone">WhatsApp</label>
                            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={updateForm} placeholder="WhatsApp" />

                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" value={formData.message} onChange={updateForm} placeholder="Mensaje" rows="4" required />

                            {status && (
                                <p className={`contact-form-status contact-form-status-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
                                    {status.message}
                                </p>
                            )}
                            <button type="submit" disabled={sending}>
                                {sending ? 'Enviando…' : 'Contáctame'}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}