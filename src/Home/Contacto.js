import Menuvista from '../layout/MenuVista';
import '../style/Contacto.css';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PinDropIcon from '@mui/icons-material/PinDrop';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export default function Contacto({ embedded = false }) {
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
                                <span className="contact-symbol"><PhoneForwardedIcon style={{size:20}} /></span>
                                <a href="tel:+52 916 348 0780">+52 916 348 0780</a>
                            </div>
                            <div className="contact-detail">
                                <span className="contact-symbol"><AlternateEmailIcon style={{size:20}} /></span>
                                <a href="mailto:firmegrupofiscal@gmail.com">firmegrupofiscal@gmail.com</a>
                            </div>
                            <div className="contact-detail">
                                <span className="contact-symbol"><WhatsAppIcon style={{size:20}} /></span>
                                <a href="https://wa.me/529163480780">WhatsApp</a>
                            </div>
                            <div className="contact-detail contact-address">
                                <span className="contact-symbol"><PinDropIcon style={{size:20}} /></span>
                                <p>Calle Francisco Javier Mina & Sexta Avenida Norte Poniente, San Miguel, 29960 Palenque, Chis.</p>
                            </div>

                            <iframe
                                className="contact-map"
                                title="Ubicación de Firme Grupo Fiscal"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1902.4588782208848!2d-91.979064!3d17.511439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f24f007de294a9%3A0x961ea273dc62ffe8!2sFirme%20Grupo%20Fiscal!5e0!3m2!1ses-419!2smx!4v1788800532548!5m2!1ses-419!2smx"
                                loading="lazy"
                                allowfullscreen=""
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                            x
                        </div>

                        <form className="contact-form">
                            <h2>Contacto</h2>
                            
                            <label htmlFor="name">Nombre</label>
                            <div className="input-icon"> 
                            <input id="name" name="name" type="text" placeholder="Nombre" required />
                            </div>


                            <label htmlFor="email">Correo electrónico</label>
                            <input id="email" name="email" type="email" placeholder="Email" required />

                            <label htmlFor="phone">WhatsApp</label>
                            <input id="phone" name="phone" type="tel" placeholder="WhatsApp" />

                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" placeholder="Mensaje" rows="4" required />

                            <button type="submit">Contáctame</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}