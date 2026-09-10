import Menuvista from "../layout/MenuVista";
import Carrusel from "../components/Carrusel";
import "../style/servicios.css";

export default function Servicios({ embedded = false }) {
    return (
        <div className={embedded ? "services-embedded" : "services-page"}>
        <div className="services-page">
            <main className="services-frame">
                {!embedded && <Menuvista />}
                <section className="services-content">
                    <div className="section-heading">
                        <span className="section-eyebrow">Servicios</span>
                        <h1>Soluciones para crecer con confianza</h1>
                        <p>Un equipo especializado para ordenar, optimizar y fortalecer cada área de tu negocio.</p>
                    </div>

                    <Carrusel />
                </section>
            </main>
        </div>
        </div>
    );
}