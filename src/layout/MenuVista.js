import React,{useEffect, useState} from "react";
import "../style/Menu.css";
import AgendarCita from "../Home/Agendarcita";
import Modal from "../components/Modal";
import logo from "../img/logo.png";


export default function Menuvista() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(`${window.location.pathname}${window.location.hash}`);

    useEffect(() => {
        const updateLocation = () => setCurrentLocation(`${window.location.pathname}${window.location.hash}`);
        window.addEventListener("hashchange", updateLocation);
        window.addEventListener("popstate", updateLocation);

        return () => {
            window.removeEventListener("hashchange", updateLocation);
            window.removeEventListener("popstate", updateLocation);
        };
    }, []);

    const isActive = (path, hash = "") => {
        if (hash) {
            return currentLocation.endsWith(hash);
        }

        return currentLocation === path;
    };

    return (
        <nav className="Navid">

            {/* LOGO */}
            <a className="logo" href="/" aria-label="Ir al inicio de Firme Grupo Fiscal">
                <img className="logo-image" src={logo} alt="Logo de Firme Grupo Fiscal" />
                <span className="logo-name">Firme Grupo Fiscal</span>
            </a>

            {/* OPCIONES */}
            <div className="Menu">
                <a className={isActive("/") ? "active" : ""} href="/">Inicio</a>
                <a className={isActive("/", "#servicios") ? "active" : ""} href="/#servicios">Servicios</a>
                <a className={isActive("/", "#nosotros") ? "active" : ""} href="/#nosotros">Nosotros</a>
                <a className={isActive("/", "#casos-de-exito") ? "active" : ""} href="/#casos-de-exito">Casos de éxito</a>
                <a className={isActive("/Blog") ? "active" : ""} href="/Blog">Blog</a>
                <a className={isActive("/", "#contacto") ? "active" : ""} href="/#contacto">Contacto</a>
            </div>

            {/* BOTONES */}
            <div className="boton">
                <button className="agendar" onClick={() => setModalAbierto(true)} > <span className="text1"> Agendar cita </span> </button>

                <button className="iniciar">
                    <span>Iniciar sesión</span>
                </button>
            </div>
<Modal abierto={modalAbierto} cerrar={() => setModalAbierto(false)} titulo="Agendar cita">
    <AgendarCita />
</Modal>
        </nav>
        
    );
}


