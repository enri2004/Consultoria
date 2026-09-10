import './App.css';
import Vista from "./Home/Vista.js";
import Contacto from "./Home/Contacto.js";
import Nosotros from "./components/Nosotros.js";
import Blog from "./components/Blog.js";
import Servicios from "./Home/Servicios.js";

function App() {
  const currentPath = window.location.pathname;

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
