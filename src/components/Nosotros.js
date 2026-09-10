import React from "react";
import Menuvista from "../layout/MenuVista";
import "../style/Nosotros.css";
import Contador from "../img/contador.jpeg";
import Fisico from "../img/fisico.jpeg";
import Contadora from "../img/contadora.jpeg";

const team = [
    ["Jorge luis salazar Cruz", "Contador/Seo", Contador],
    ["Ismeun Goppara", "Consultora", Contadora],
    ["jorge", "Fisico", Fisico],
   ];

export default function Nosotros({ embedded = false }) {
    return (
        <div className="about-page">
            <main className="about-frame">
                {!embedded && <Menuvista />}
                <section className="about-content">
                    <div className="section-heading">
                        <span className="section-eyebrow">Nosotros</span>
                        <h1>Personas que convierten ideas en resultados</h1>
                        <p>Transformamos el talento en resultados para tu empresa con experiencia, estrategia y cercanía.</p>
                    </div>
                    <p className="about-copy">Somos un equipo de profesionales comprometidos con impulsar organizaciones hacia un crecimiento sostenible.</p>

                    <div className="about-pillars">
                        <article><span>+</span><h2>Priorización</h2><p>Identificamos lo importante y enfocamos cada esfuerzo en tus objetivos.</p></article>
                        <article><span>◆</span><h2>Valores</h2><p>Actuamos con honestidad, colaboración y compromiso en cada proyecto.</p></article>
                        <article><span>•••</span><h2>Especialistas</h2><p>Contamos con profesionales preparados para acompañar tus desafíos.</p></article>
                    </div>

                    <h2 className="team-title">Equipo</h2>
                    <div className="team-grid">
                        {team.map(([name, role, image]) => (
                            <article className="team-card" key={name}>
                                <img src={image} alt={name} />
                                <strong>{name}</strong>
                                <span>{role}</span>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}