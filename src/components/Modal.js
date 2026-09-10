import React from 'react';
import '../style/modal.css';

export default function Modal({abierto,cerrar,titulo,children}) 
{
    if (!abierto) return null;
    return(
        <div className='modal-overlay' onClick={cerrar}>
            <div className='modal-container appointment-modal' onClick={(e) => e.stopPropagation()}>
                <div className='modal-header'>
                    <h2>{titulo}</h2>
                    <button type="button" className='modal-close-button' onClick={cerrar} aria-label="Cerrar">X</button>
                </div>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
