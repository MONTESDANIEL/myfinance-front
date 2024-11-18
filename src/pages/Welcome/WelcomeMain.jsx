import ResponsiveImage from '../../components/ResponsiveImage';

const images = {
    carousel: "src/assets/images/carousel",
    galery: "src/assets/images/galery"
}

const WelcomeMain = () => {
    return (
        <>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                style={{ maxHeight: '500px', overflow: 'hidden' }}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <ResponsiveImage
                            basePath={images.carousel}
                            imageName="first"
                            alt="Primera imagen del carrusel"
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <ResponsiveImage
                            basePath={images.carousel}
                            imageName="second"
                            alt="Primera imagen del carrusel"
                            className="d-block w-100"
                        />
                    </div>
                    <div className="carousel-item">
                        <ResponsiveImage
                            basePath={images.carousel}
                            imageName="third"
                            alt="Primera imagen del carrusel"
                            className="d-block w-100"
                        />
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
                <div className="row p-3 mb-2 bg-body-tertiary d-flex align-items-center">
                    <div className="col-lg-6 col-md-12 p-4">
                        <div>
                            <h3>Gestión de transacciones y categorías</h3>
                            <hr />
                            <p>
                                La aplicación permite a los usuarios registrar ingresos, gastos y transferencias entre sus cuentas.
                                Proporcionando un registro detallado de las finanzas personales.
                            </p>
                            <p>
                                Los usuarios pueden categorizar
                                sus transacciones en categorías personalizables y utilizar etiquetas para un filtrado y análisis detallados.
                                Esta funcionalidad facilita un seguimiento claro y organizado de los flujos de efectivo.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-3">
                        <ResponsiveImage
                            basePath={images.galery}
                            imageName="transactions"
                            alt="Primera imagen del carrusel"
                            className="w-100"
                        />
                    </div>
                </div>
                <div className="row flex-column flex-md-row justify-content-center p-3 mb-2 bg-body-tertiary">
                    <div className="col-lg-6 col-md-12 order-2 p-3">
                        <ResponsiveImage
                            basePath={images.galery}
                            imageName="planning"
                            alt="Primera imagen del carrusel"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex align-items-center order-lg-2 p-2">
                        <div>
                            <h3>Presupuesto, planificación y alertas</h3>
                            <hr />
                            <p>
                                Los usuarios pueden crear y gestionar presupuestos mensuales para diversas categorías de gastos.
                            </p>
                            <p>
                                La aplicación ofrece alertas y notificaciones para mantener a los usuarios informados
                                cuando sus gastos se acercan o exceden sus presupuestos establecidos, ayudándoles a
                                planificar y controlar su gasto de manera eficiente.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row flex-column flex-md-row justify-content-center p-3 mb-2 bg-body-tertiary">
                    <div className="col-lg-6 col-md-12 d-flex align-items-center p-2">
                        <div>
                            <h3>Reportes y análisis</h3>
                            <hr />
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
                        <ResponsiveImage
                            basePath={images.galery}
                            imageName="reporting"
                            alt="Primera imagen del carrusel"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="row flex-column flex-md-row justify-content-center p-3 bg-body-tertiary">
                    <div className="col-lg-6 col-md-12 order-2 p-3">
                        <ResponsiveImage
                            basePath={images.galery}
                            imageName="security"
                            alt="Primera imagen del carrusel"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 d-flex align-items-center order-lg-2 p-2">
                        <div>
                            <h3>Autenticación, seguridad e integraciones</h3>
                            <hr />
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

export default WelcomeMain;