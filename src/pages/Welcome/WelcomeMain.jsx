export const WelcomeMain = () => {
    return (
        <>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                style={{ maxHeight: '500px', overflow: 'hidden' }}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <picture>
                            <source media="(max-width: 576px)" srcSet="src/assets/images/1-small.jpg" />
                            <source media="(min-width: 577px) and (max-width: 1200px)" srcSet="src/assets/images/1-medium.jpg" />
                            <source media="(min-width: 1201px)" srcSet="src/assets/images/1-large.jpg" />
                            <img
                                src="src/assets/images/1-large.jpg" // Imagen predeterminada para navegadores sin soporte
                                className="d-block w-100"
                                alt="..."
                            />
                        </picture>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source media="(max-width: 576px)" srcSet="src/assets/images/2-small.jpg" />
                            <source media="(min-width: 577px) and (max-width: 1200px)" srcSet="src/assets/images/2-medium.jpg" />
                            <source media="(min-width: 1201px)" srcSet="src/assets/images/2-large.jpg" />
                            <img
                                src="src/assets/images/2-large.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </picture>
                    </div>
                    <div className="carousel-item">
                        <picture>
                            <source media="(max-width: 576px)" srcSet="src/assets/images/3-small.jpg" />
                            <source media="(min-width: 577px) and (max-width: 1200px)" srcSet="src/assets/images/3-medium.jpg" />
                            <source media="(min-width: 1201px)" srcSet="src/assets/images/3-large.jpg" />
                            <img
                                src="src/assets/images/3-large.jpg"
                                className="d-block w-100"
                                alt="..."
                            />
                        </picture>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container-fluid pt-3">
                <div className="row flex-column flex-md-row justify-content-center p-3 mb-2 bg-body-tertiary">
                    <div className="col-lg-6 col-md-12 d-flex align-items-center p-2">
                        <div>
                            <h3>Gestión de Transacciones y Categorías</h3><br />
                            <p>
                                La aplicación permite a los usuarios registrar ingresos, gastos y transferencias entre sus cuentas,
                                proporcionando un registro detallado de las finanzas personales.
                            </p>
                            <p>
                                Los usuarios pueden categorizar
                                sus transacciones en categorías personalizables y utilizar etiquetas para un filtrado y análisis detallados.
                                Esta funcionalidad facilita un seguimiento claro y organizado de los flujos de efectivo.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-3">
                        <img
                            src="src\assets\images\Galery\1.jpg"
                            alt="Gestión de Transacciones y Categorías"
                            className="img-fluid" />
                    </div>
                </div>
                <div className="row flex-column flex-md-row justify-content-center p-3 mb-2 bg-body-tertiary">
                    <div className="col-lg-6 col-md-12 order-2 p-3">
                        <img
                            src="src\assets\images\Galery\2.jpg"
                            alt="Presupuesto, Planificación y Alertas"
                            className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex align-items-center order-lg-2 p-2">
                        <div>
                            <h3>Presupuesto, Planificación y Alertas</h3><br />
                            <p>
                                Los usuarios pueden crear y gestionar presupuestos mensuales para diversas categorías de gastos.
                            </p>
                            <p>
                                La aplicación ofrece alertas y notificaciones para mantener a los usuarios informados cuando sus
                                gastos se acercan o exceden sus presupuestos establecidos, ayudándoles a planificar y controlar su
                                gasto de manera eficiente.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row flex-column flex-md-row justify-content-center p-3 mb-2 bg-body-tertiary">
                    <div className="col-lg-6 col-md-12 d-flex align-items-center p-2">
                        <div>
                            <h3>Reportes y Análisis</h3><br />
                            <p>
                                La aplicación proporciona herramientas para visualizar los ingresos, gastos y balances a través
                                de gráficos y tablas.
                            </p>
                            <p>
                                Permite la generación de reportes personalizados basados en diferentes criterios
                                como rango de fechas o categorías, y muestra el balance general en tiempo real, ayudando a los usuarios
                                a comprender mejor su situación financiera.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-3">
                        <img
                            src="src\assets\images\Galery\3.jpg"
                            alt="Reportes y Análisis"
                            className="img-fluid" />
                    </div>
                </div>
                <div className="row flex-column flex-md-row justify-content-center p-3 bg-body-tertiary">
                    <div className="col-lg-6 col-md-12 order-2 p-3">
                        <img
                            src="src\assets\images\Galery\4.jpg"
                            alt="Autenticación, Seguridad e Integraciones"
                            className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex align-items-center order-lg-2 p-2">
                        <div>
                            <h3>Autenticación, Seguridad e Integraciones</h3><br />
                            <p>Implementa un sistema de autenticación seguro con soporte para OAuth2/JWT,
                                protección de datos mediante encriptación, y opciones para autenticación multifactor.
                            </p>
                            <p>
                                La aplicación también ofrece integraciones con APIs externas para importar automáticamente
                                transacciones bancarias y servicios de cambio de divisas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
