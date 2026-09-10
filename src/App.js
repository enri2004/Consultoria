import './App.css';
import { useEffect } from "react";
import Vista from "./Home/Vista.js";
import Contacto from "./Home/Contacto.js";
import Nosotros from "./components/Nosotros.js";
import Blog from "./components/Blog.js";
import Servicios from "./Home/Servicios.js";

function App() {
  const currentPath = window.location.pathname;

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {currentPath === "/Nosotros" ? (
          <Nosotros />
        ) : currentPath === "/Blog" ? (
          <Blog />
        ) : currentPath === "/Contacto" ? (
          <Contacto />
        ) : (currentPath === "/Servicios" || currentPath === "/Servicio") ? (
          <Servicios />
        ): 
              <Vista /> 
        }
      </header>
    </div>
  );
}

export default App;
