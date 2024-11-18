const InfoCard = ({ title, info }) => {
    const formattedInfo = info.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));

    return (
        <div className="col-md-4 my-1">
            <div className="card h-100">
                <div className="card-body p-4">
                    <h3 className="card-title text-center p-1">{title}</h3>
                    <hr />
                    <p className="card-text">
                        {formattedInfo}
                    </p>
                </div>
            </div>
        </div>
    )
}


const HomeNews = () => {
    return (
        <div className="container">
            <div className="bg-dark-subtle rounded p-3">

                <div className="text-center">
                    <h1>Novedades</h1>
                    <p className="text-muted">Ultimas noticias de los cambios de la aplicación</p>
                    <hr />
                </div>

                <main className="row rounded bg-body-tertiary p-3 mx-1">
                    <InfoCard
                        title="Actualizaciones"
                        info="Versión 2.0 lanzada: Incluye nuevas funcionalidades como la integración con APIs externas y mejoras en la interfaz de usuario. 
                            Próximamente: Implementación de autenticación biométrica para mayor seguridad."
                    />

                    <InfoCard
                        title="Artículos Financieros"
                        info="Cómo ahorrar en tiempos de inflación: Consejos prácticos para mantener tu economía estable.
                            Inversiones a largo plazo: Las mejores estrategias para asegurar tu futuro financiero."
                    />

                    <InfoCard
                        title="Notificaciones"
                        info="Mantenimiento programado el 15 de septiembre: La aplicación no estará disponible entre las 2:00 AM y las 4:00 AM. 
                            Nuevos términos y condiciones: Revisa las actualizaciones en nuestras políticas de privacidad."
                    />
                </main>
            </div>
        </div>
    )
}

export default HomeNews