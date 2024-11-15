import React from 'react';



const HomeSettings = () => {

    return (
        <div className="container">
            <div className="bg-dark-subtle rounded p-3 m-2">

                <div className="text-center mb-4">
                    <h2>Configuración de la Aplicación</h2>
                    <p className="text-muted">Personaliza tus preferencias para mejorar tu experiencia</p>
                    <hr />
                </div>

                {/* Sección de Seguridad */}
                <div className="bg-body-tertiary rounded p-4 mb-4">
                    <h3>Seguridad</h3>
                    <p className="text-muted">Configura y protege tu cuenta</p>
                    <hr />
                    <ul>
                        <li>Contraseña y Autenticación de Dos Factores (2FA)</li>
                        <li>Recuperación de Contraseña</li>
                        <li>Cambio de Contraseña</li>
                    </ul>
                    <hr />
                    {/* Configuración de Autenticación de Dos Factores */}
                    <div className="container-fluid mt-5">
                    </div>
                    <div className="container mt-5">

                    </div>
                </div>

                {/* Sección de Presupuesto */}
                <div className="bg-body-tertiary rounded p-4 mb-4">
                    <h3>Personalización</h3>
                    <p className="text-muted">Configura tu presupuesto mensual y controla tus gastos</p>
                    <hr />

                    <ul>
                        <li>Etiquetas y Subcategorías</li>
                        <li>Personalización Visual</li>
                    </ul>
                </div>

                {/* Sección de Personalización de Etiquetas */}
                <div className="bg-body-tertiary rounded p-4 mb-4">
                    <h3>Administración de Presupuesto e Ingresos</h3>
                    <p className="text-muted">Crea y organiza tus etiquetas personalizadas</p>
                    <hr />

                    <h6>Registro de Ingresos</h6>
                    <ul>
                        <li>Ingreso Fijo y Variable</li>
                        <li>Frecuencia de Ingresos</li>
                        <li>Fecha de Ingreso</li>
                    </ul>

                    <h6>Gestión de Gastos</h6>
                    <ul>
                        <li>Clasificación de Gastos</li>
                        <li>Gastos Fijos y Variables</li>
                    </ul>

                    <h6>Ajustes de Presupuesto</h6>
                    <ul>
                        <li>Presupuesto por Categoría</li>
                        <li>Ajustes Automáticos</li>
                        <li>Objetivos de Ahorro y Sobrantes</li>
                        <li>Recordatorios de Gastos Futuros</li>
                        <li>Alertas de Riesgo Financiero</li>
                    </ul>
                </div>

                {/* Sección de Simulador de Escenarios */}
                <div className="bg-body-tertiary rounded p-4">
                    <h3>Simulador de Escenarios Financieros</h3>
                    <p className="text-muted">Proyecta diferentes escenarios y visualiza su impacto en tus finanzas</p>
                    <hr />

                    <ul>
                        <li>Escenarios "¿Qué pasaría si...?"</li>
                        <li>Comparación de Escenarios</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeSettings;