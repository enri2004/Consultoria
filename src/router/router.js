import { useEffect } from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import Vista from "../Home/Vista";
import Servicios from "../Home/Servicios";
import Contacto from "../Home/Contacto";
import Login from "../Home/Login";
import Nosotros from "../components/Nosotros";
import Blog from "../components/Blog";
import Inicio from "../Home/Login";
import {Registro} from "../Home/Login";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        window.requestAnimationFrame(() => {
            document.getElementById(location.hash.slice(1))?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }, [location.hash, location.pathname]);

    return null;
}

export default function Router() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Vista />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Servicios" element={<Servicios />} />
                <Route path="/Servicio" element={<Servicios />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/Inicio" element={<Inicio/>}/>
               
            </Routes>
        </BrowserRouter>
    );
}
