const HomeNews = () => {
    return (
        <div className="container">
            <div className="p-4 bg-body-tertiary">
                <div className="container">
                    <h2 className="text-center mb-3 text-success">Novedades</h2>
                    <div className="row">
                        {/* Actualizaciones */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title text-center p-3">Actualizaciones</h5>
                                    <p className="card-text">
                                        Versión 2.0 lanzada: Incluye nuevas funcionalidades como la integración con APIs externas y mejoras en la interfaz de usuario.
                                    </p>
                                    <p className="card-text">
                                        Próximamente: Implementación de autenticación biométrica para mayor seguridad.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Artículos Financieros */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title text-center p-3">Artículos Financieros</h5>
                                    <p className="card-text">
                                        Cómo ahorrar en tiempos de inflación: Consejos prácticos para mantener tu economía estable.
                                    </p>
                                    <p className="card-text">
                                        Inversiones a largo plazo: Las mejores estrategias para asegurar tu futuro financiero.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Notificaciones */}
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <h5 className="card-title text-center p-3">Notificaciones</h5>
                                    <p className="card-text">
                                        Mantenimiento programado el 15 de septiembre: La aplicación no estará disponible entre las 2:00 AM y las 4:00 AM.
                                    </p>
                                    <p className="card-text">
                                        Nuevos términos y condiciones: Revisa las actualizaciones en nuestras políticas de privacidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeNews