import React from "react";
import "../style/Footer.css";

const columns = [
    {
        title: "Consultoría",
        links: [
            ["Nosotros", "/#nosotros"],
            ["Casos", "/#servicios"],
            ["Blog", "/Blog"],
            ["Contacto", "/#contacto"]
        ]
    },
    {
        title: "Servicios",
        links: [
            ["Servicios", "/#servicios"],
            ["Asesoría fiscal", "/#servicios"],
            ["Consultoría", "/#servicios"],
            ["Contabilidad", "/#servicios"]
        ]
    },
    {
        title: "Recursos",
        links: [
            ["Blog", "/Blog"],
            ["Preguntas frecuentes", "/#contacto"],
            ["Consejos", "/Blog"],
            ["Guías", "/Blog"]
        ]
    },
    {
        title: "Contacto",
        links: [
            ["Agendar cita", "#agendar"],
            ["Consultas", "/#contacto"],
            ["WhatsApp", "https://wa.me/52987654321"],
            ["Correo", "mailto:info@firme.com"]
        ]
    }
];

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <p className="footer-brand">Consultoría</p>
                <div className="footer-columns">
                    {columns.map((column) => (
                        <div className="footer-column" key={column.title}>
                            <h2>{column.title}</h2>
                            {column.links.map(([label, href]) => (
                                <a href={href} key={label}>{label}</a>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="footer-socials" aria-label="Redes sociales">
                    <a href="https://www.facebook.com" aria-label="Facebook">f</a>
                    <a href="https://twitter.com" aria-label="Twitter">t</a>
                    <a href="https://www.youtube.com" aria-label="YouTube">▶</a>
                    <a href="https://www.linkedin.com" aria-label="LinkedIn">in</a>
                </div>
            </div>
            <div className="footer-bottom">
                <span>Copyright © 2024 Consultoría</span>
                <nav aria-label="Enlaces legales">
                    <a href="/#contacto">Privacidad</a>
                    <a href="/#contacto">Términos</a>
                    <a href="/#contacto">Ayuda</a>
                </nav>
            </div>
        </footer>
    );
}
