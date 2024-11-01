import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FloatWindow = ({ isOpen, onClose, title, children, size }) => {
    return (
        <>
            {isOpen && (
                <>
                    {/* Fondo oscuro */}
                    <div className="modal-backdrop fade show"></div>
                    <div
                        className={`modal fade show`}
                        style={{ display: 'block' }}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="modalTitle"
                        aria-hidden={!isOpen} // Configurar aria-hidden correctamente
                    >
                        <div
                            className={`modal-dialog modal-dialog-centered modal-${size}`}
                            role="document"
                        >
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
