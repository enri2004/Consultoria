import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/servicios.css";

const slider = [
    { title: "Asesoría contable", icon: "▣", description: "Ordenamos y revisamos tus registros contables para que conozcas con claridad la situación real de tu negocio.", benefits: ["Información confiable", "Mejor control financiero", "Cumplimiento oportuno"], includes: ["Registro de operaciones", "Conciliaciones", "Reportes contables"] },
    { title: "Administración hotelera", icon: "▣", description: "Fortalecemos la operación de hoteles y negocios de hospitalidad con procesos administrativos medibles y eficientes.", benefits: ["Operación ordenada", "Control de costos", "Mejor servicio"], includes: ["Procesos administrativos", "Indicadores", "Control operativo"] },
    { title: "CONTPAQi Contabilidad", icon: "▤", description: "Implementamos y optimizamos CONTPAQi para que tu información contable sea precisa, accesible y útil.", benefits: ["Procesos automatizados", "Menos errores", "Información al día"], includes: ["Configuración", "Pólizas", "Reportes"] },
    { title: "CONTPAQi Nóminas", icon: "G19", description: "Configuramos tu sistema de nóminas para calcular, timbrar y reportar pagos con seguridad y puntualidad.", benefits: ["Cálculos confiables", "Timbrado correcto", "Ahorro de tiempo"], includes: ["Configuración", "Incidencias", "Reportes de nómina"] },
    { title: "Planeación financiera", icon: "◈", description: "Convertimos tus objetivos en un plan financiero claro para cuidar el flujo y orientar el crecimiento.", benefits: ["Visión de futuro", "Mejor flujo de efectivo", "Decisiones informadas"], includes: ["Presupuestos", "Proyecciones", "Análisis financiero"] },
    { title: "Asesoría fiscal", icon: "▣", description: "Te acompañamos para cumplir tus obligaciones fiscales y aprovechar correctamente las alternativas permitidas.", benefits: ["Cumplimiento legal", "Menos riesgos", "Estrategia fiscal"], includes: ["Declaraciones", "Revisión fiscal", "Orientación personalizada"] },
    { title: "Seguro Social IMSS", icon: "♡", description: "Gestionamos tus obligaciones ante el IMSS para proteger a tu equipo y mantener tu empresa en regla.", benefits: ["Altas y bajas correctas", "Menos sanciones", "Expedientes ordenados"], includes: ["Movimientos afiliatorios", "Determinación de cuotas", "Revisiones"] },
    { title: "Auditoría hotelera", icon: "⌕", description: "Revisamos ingresos, costos y controles de tu hotel para detectar oportunidades y prevenir pérdidas.", benefits: ["Mayor control", "Detección de desviaciones", "Procesos verificables"], includes: ["Revisión operativa", "Análisis de ingresos", "Informe de hallazgos"] },
    { title: "Recursos humanos", icon: "♧", description: "Creamos procesos de personal que ayudan a contratar, organizar y desarrollar equipos más sólidos.", benefits: ["Equipos mejor organizados", "Procesos claros", "Menor rotación"], includes: ["Perfiles de puesto", "Expedientes", "Políticas internas"] },
    { title: "Elaboración de nómina", icon: "G19", description: "Preparamos tu nómina con precisión para que cada colaborador reciba lo correcto y a tiempo.", benefits: ["Pagos puntuales", "Cálculos precisos", "Confidencialidad"], includes: ["Cálculo de percepciones", "Deducciones", "Recibos y reportes"] },
    { title: "Estados financieros", icon: "▤", description: "Elaboramos estados financieros comprensibles para evaluar resultados y tomar decisiones con respaldo.", benefits: ["Lectura clara del negocio", "Control patrimonial", "Soporte para decisiones"], includes: ["Balance general", "Estado de resultados", "Análisis de variaciones"] },
    { title: "Actualización administrativa, contable y fiscal", icon: "↻", description: "Mantenemos tus procesos alineados con los cambios administrativos, contables y fiscales que afectan tu operación.", benefits: ["Procesos actualizados", "Prevención de incumplimientos", "Mayor orden"], includes: ["Revisión de cambios", "Ajustes de procesos", "Asesoría continua"] },
    { title: "Gestiones administrativas", icon: "✓", description: "Resolvemos trámites y tareas administrativas para que puedas concentrarte en hacer crecer tu negocio.", benefits: ["Ahorro de tiempo", "Seguimiento puntual", "Menos carga operativa"], includes: ["Trámites", "Integración de expedientes", "Seguimiento de solicitudes"] }
];

export default function Carrusel() {
    return (
        <div className="services-carousel">
            <Swiper
                className="services-swiper"
                modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
                effect="coverflow"
                centeredSlides
                grabCursor
                loop
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 1.2, slideShadows: false }}
                breakpoints={{
                    0: { slidesPerView: 1.1 },
                    620: { slidesPerView: 2.1 },
                    980: { slidesPerView: 3.1 }
                }}
            >
                {slider.map((service) => (
                    <SwiperSlide key={service.title}>
                        <article className="service-card">
                            <div className="service-icon" aria-hidden="true">{service.icon}</div>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <h3>Beneficios</h3>
                            <ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
                            <h3>¿Qué incluye?</h3>
                            <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                            <button type="button" onClick={() => { window.location.href = "/Contacto"; }}>Solicitar asesoría</button>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
