import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FloatWindow = ({ isOpen, onClose, title, children }) => {
    return (
        <>
            {isOpen && (
                <>
                    {/* Fondo oscuro */}
                    <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
                    <div
                        className={`modal fade show`}
                        style={{ display: 'block', zIndex: 1050 }}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="modalTitle"
                        aria-hidden={!isOpen} // Configurar aria-hidden correctamente
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitle">{title}</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Cerrar"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default FloatWindow;
