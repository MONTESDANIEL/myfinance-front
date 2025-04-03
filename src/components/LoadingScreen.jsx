import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="d-flex justify-content-center align-items-center w-100 h-100 position-fixed top-0 start-0">
            <div className="text-center">
                <div className="spinner-border" role="status" style={{ width: '5rem', height: '5rem' }}>
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-3">Cargando datos...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
