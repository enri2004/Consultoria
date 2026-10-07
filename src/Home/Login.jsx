import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import '../style/Login.css'
import { Link } from "react-router-dom";

export default function Inicio(){
    return(
       <div className="fondo">
        <div className="Cuadro-Inicio">
            <h1>Firme Grupo Fiscal</h1>
           <div className="Inicio">
               <h2>Iniciar Sesión</h2>
           </div>
           <div>
            <p>Bienvenido a Firme Grupo Fiscal, por favor ingrese sus credenciales </p>
           </div>
            <div>
                <input type="text" placeholder="Usuario/Correo" ></input>
            </div>
            <div>
                <input type="password" placeholder="contraseña" ></input>
            </div>
            <div>
                <p>¿Olvidaste tu contraseña?</p>
                <button>Iniciar Sesión</button>
            </div>
            <div>
                <button>
                    <GoogleIcon/>
                </button>
                <button>
                    <FacebookIcon/>
                </button>
                <button>
                    <XIcon/>
                </button>
                
            </div>
            <p>¿No tienes una cuenta? <Link to="/registro">Registrate aqui</Link></p>
        </div>
       </div>
    )
}



export function Registro(){
    return(
        <div className= "Cuadro-Registro">
            <h1>Firme Grupo Fiscal</h1>
            <div className="Registro">
                <h2>Registro</h2>
            </div>
            <div>
                <p>Bienvenido a Firme Grupo Fiscal, Registrate para empezar a dar un paso hacia un Bienestar financiero</p>
            </div>
            <div>
                <input Type="text" placeholder="Nombre Completo"></input>
            </div>
            <div>
                <input Type="text" placeholder="Correo Electronico"></input>
            </div>
            <div>
                <input Type="text" placeholder="Telefono"></input>
            </div>
            <div>
                <input Type="password" placeholder="Cree COntraseña"></input>
            </div>
            <div>
                <input Type="password" placeholder= "Confirme contraseña"></input>
            </div>
            <div>
                <p>Acepto los terminos y condiciones y la Politica y privacidad </p>
            </div>

            <div>
                <button>Registrarse</button>

            </div>
            <div>
                <button>
                    <GoogleIcon/>
                </button>
                <button>
                    <FacebookIcon/>
                </button>
                <button>
                    <XIcon/>
                </button>
            </div>
            <p>¿Ya tienes una cuenta? <Link to="/inicio">Inicia Sesión</Link></p>
        </div>
    )
}