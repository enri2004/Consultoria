import React,{useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Menu.css";
import AgendarCita from "../Home/Agendarcita";
import Modal from "../components/Modal";
import logo from "../img/logo.png";



export default function Menuvista() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const currentLocation = `${location.pathname}${location.hash}`;
    const currentPath = location.pathname;
    const isHome = currentPath === "/";

    const isActive = (path, hash = "") => {
        if (hash) {
            return currentLocation.endsWith(hash);
        }

        return currentLocation === path;
    };

    const serviciosHref = isHome ? "/#servicios" : "/Servicios";
    const nosotrosHref = isHome ? "/#nosotros" : "/Nosotros";
    const casosHref = "/#casos-de-exito";
    const contactoHref = isHome ? "/#contacto" : "/Contacto";

    return (
        <nav className="Navid">

            {/* LOGO */}
            <Link className="logo" to="/" aria-label="Ir al inicio de Firme Grupo Fiscal">
                <img className="logo-image" src={logo} alt="Logo de Firme Grupo Fiscal" />
                <span className="logo-name">Firme Grupo Fiscal</span>
            </Link>

            {/* OPCIONES */}
            <div className="Menu">
                <Link className={isActive("/") ? "active" : ""} to="/">Inicio</Link>
                <Link className={isActive("/Servicios") || isActive("/", "#servicios") ? "active" : ""} to={serviciosHref}>Servicios</Link>
                <Link className={isActive("/Nosotros") || isActive("/", "#nosotros") ? "active" : ""} to={nosotrosHref}>Nosotros</Link>
                <Link className={isActive("/", "#casos-de-exito") ? "active" : ""} to={casosHref}>Casos de éxito</Link>
                <Link className={isActive("/Blog") ? "active" : ""} to="/Blog">Blog</Link>
                <Link className={isActive("/Contacto") || isActive("/", "#contacto") ? "active" : ""} to={contactoHref}>Contacto</Link>
            </div>

            {/* BOTONES */}
            <div className="boton">
                <button className="agendar" onClick={() => setModalAbierto(true)} > <span className="text1"> Agendar cita </span> </button>

                {/* <button className="iniciar" onClick={() => navigate("/Login")}>
                    Iniciar sesión
                </button>*/}
            </div>
<Modal abierto={modalAbierto} cerrar={() => setModalAbierto(false)} titulo="Agendar cita">
    <AgendarCita />
</Modal>
        </nav>
        
    );
}

