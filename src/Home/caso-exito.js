import React from "react";
import { Link } from "react-router-dom";
import Grafica from "../components/grafica";
import "../style/CasoExito.css";

export default function CasoExito() {
    return (
        <div className="success-dashboard">
            <div className="success-top-grid">
                <div className="success-main-chart">
                    <Grafica />
                    <div className="success-summary">
                        <div><strong>18</strong><span>clientes atendidos</span></div>
                        <div><strong>18</strong><span>casos de éxito</span></div>
                        <div><strong>100%</strong><span>tasa de éxito</span></div>
                    </div>
                </div>
                <aside className="success-metrics">
                    <article className="success-metric success-progress">
                        <span>Tasa global de éxito</span>
                        <strong>100%</strong>
                        <div className="progress-ring"><span>100%</span></div>
                    </article>
                    <article className="success-metric">
                        <span>Impacto generado</span>
                        <strong>+3 680</strong>
                        <small>personas alcanzadas</small>
                    </article>
                </aside>
            </div>
            <div className="success-projects-heading">
                <h3>Proyectos</h3>
                <Link to="/#contacto" aria-label="Ver proyectos">-&gt;</Link>
            </div>
            <div className="success-projects">
                <article className="project-card project-card-image">
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85" alt="Equipo trabajando en un proyecto" />
                    <div><span>01</span><strong>Transformación empresarial</strong></div>
                </article>
                <article className="project-card project-card-bars">
                    <span className="project-label">Crecimiento</span>
                    <div className="bar-chart" aria-label="Gráfica de crecimiento"><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="project-card-footer"><strong>+153%</strong><span>resultado</span></div>
                </article>
                <article className="project-card project-card-mini-chart">
                    <span className="project-label">Productividad</span>
                    <svg viewBox="0 0 220 90" role="img" aria-label="Tendencia ascendente">
                        <polyline points="0,76 35,62 70,65 105,47 145,44 180,25 220,10" />
                    </svg>
                    <div className="project-card-footer"><strong>+68%</strong><span>eficiencia</span></div>
                </article>
            </div>
        </div>

    )
}