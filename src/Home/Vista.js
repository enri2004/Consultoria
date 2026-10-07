import React from "react";
import { Link } from "react-router-dom";
import Menuvista from "../layout/MenuVista";
import Portada from "../components/portada";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import CasoExito from "./caso-exito";
import what from "../img/what.gif";


export default function Home(){
    return(
        <div className="home-page">
            <main className="hero-frame">
                <Menuvista/>
                <Portada/>
                <section className="quick-access">
                    <div className="section-heading">
                        <span className="section-eyebrow">Explora</span>
                        <h2>Todo lo que tu negocio necesita</h2>
                        <p>Conoce nuestras áreas de trabajo y encuentra el acompañamiento adecuado para avanzar con claridad.</p>
                    </div>
                    <div className="quick-access-grid">
                        <article className="quick-card quick-card-services">
                            <span className="quick-icon">+</span>
                            <p>SERVICIOS</p>
                            <h3>Soluciones<br />profesionales</h3>
                            <Link to="/Servicios">Ver todos los servicios <span aria-hidden="true">-&gt;</span></Link>
                        </article>
                        <article className="quick-card quick-card-contact">
                            <span className="quick-icon">&lt;</span>
                            <p>CONTACTO</p>
                            <h3>Hablemos</h3>
                            <Link to="/Contacto">Contactar ahora <span aria-hidden="true">-&gt;</span></Link>
                        </article>
                    </div>
                    <div id="nosotros" className="page-section page-section-light">
                        <Nosotros embedded />
                    </div>
                    <div id="servicios" className="page-section page-section-muted">
                        <Servicios embedded/>
                    </div>
                    <section id="casos-de-exito" className="page-section cases-section">
                        <div className="section-heading">
                            <span className="section-eyebrow">Casos de éxito</span>
                            <h2>Resultados que hablan por nosotros</h2>
                            <p>Conoce los resultados y datos de nuestros casos de éxito.</p>
                        </div>
                        <CasoExito />
                    </section>
                    <div id="contacto" className="page-section page-section-light">
                        <Contacto embedded />
                    </div>
                </section>
                <Footer />
            <div  >
               <a href="https://wa.me/529163480780" > <img src={what} alt="WhatsApp" style={{size:100, position:'fixed', bottom:20, right:20, width:"50px", height:"50px"}} /></a>
            </div>
            
            </main>

        </div>
    )
}
