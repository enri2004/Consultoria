import React from "react";
import Menuvista from "../layout/MenuVista";
import Portada from "../components/portada";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import CasoExito from "./caso-exito";


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
                            <a href="/Servicios">Ver todos los servicios <span aria-hidden="true">-&gt;</span></a>
                        </article>
                        <article className="quick-card quick-card-contact">
                            <span className="quick-icon">&lt;</span>
                            <p>CONTACTO</p>
                            <h3>Hablemos</h3>
                            <a href="/Contacto">Contactar ahora <span aria-hidden="true">-&gt;</span></a>
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
            </main>
        </div>
    )
}
