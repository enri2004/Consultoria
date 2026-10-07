import React from "react"
import { useNavigate } from "react-router-dom";
import "../style/Inicio.css"
export default function Portada(){
    const navigate = useNavigate();

    return(
        <div className="Portada">
            <div className="portada-content">
                <p className="portada-eyebrow">CONSULTORIA ESTRATEGICA</p>
                <h1>Impulsamos tu negocio con decisiones más inteligentes</h1>
                <p className="portada-description">
                    Convierte tus retos en oportunidades con un equipo que entiende tu negocio.
                </p>
                <div className="portada-actions">
                    <button className="portada-primary" onClick={() => navigate("/Contacto")}>Agendar una cita</button>
                    <button className="portada-secondary" onClick={() => navigate("/Servicios")}>Conocer nuestros servicios</button>
                    <button className="portada-secondary" onClick={() => navigate("/Contacto")}>Contactar con nosotros</button>
                </div>
            </div>
            <div className="portada-stats">
                <div className="stat"><strong>9+ años</strong><span>de experiencia</span></div>
                <div className="stat"><strong>+18</strong><span>clientes</span></div>
                <div className="stat"><strong>Atención</strong><span>personalizada</span></div>
            </div>
        </div>
    )
}