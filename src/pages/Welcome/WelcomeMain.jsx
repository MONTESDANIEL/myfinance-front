import ResponsiveImage from '@components/ResponsiveImage';

const images = {
    carousel: "/src/assets/images/carousel",
    galery: "/src/assets/images/galery"
}

const SectionWithImage = ({
    title,
    description,
    imagePath,
    imageName,
    altText,
    isImageFirst = false,
    className = "",
}) => {
    return (
        <div className={`row p-3 mb-2 bg-body-tertiary d-flex align-items-center ${className}`}>

            {/* Contenido */}
            <div className={`d-none d-lg-block col-lg-6 col-md-12 p-3 d-flex ${isImageFirst ? "order-2" : ""}`}>
                <div className="d-flex justify-content-center">
                    <div className='w-75'>
                        <h1>{title}</h1>
                        <hr />
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`d-lg-none col-lg-6 col-md-12 p-3 d-flex`}>
                <div>
                    <h1>{title}</h1>
                    <hr />
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            {/* Imagen */}
            <div className={`col-lg-6 col-md-12 p-3 ${isImageFirst ? "" : "order-2"}`}>
                <ResponsiveImage
                    basePath={imagePath}
                    imageName={imageName}
                    alt={altText}
                    className="img-fluid w-100"
                />
            </div>
        </div>
    );
};


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

                <SectionWithImage
                    title="Gestión de transacciones y categorías"
                    description={[
                        "La aplicación permite a los usuarios registrar ingresos, gastos y transferencias entre sus cuentas. Proporcionando un registro detallado de las finanzas personales.",
                        "Los usuarios pueden categorizar sus transacciones en categorías personalizables y utilizar etiquetas para un filtrado y análisis detallados. Esta funcionalidad facilita un seguimiento claro y organizado de los flujos de efectivo.",
                    ]}
                    imagePath={images.galery}
                    imageName="transactions"
                    altText="Primera imagen del contenido"
                    isImageFirst={false}
                />
                <SectionWithImage
                    title="Presupuesto, planificación y alertas"
                    description={[
                        "Los usuarios pueden crear y gestionar presupuestos mensuales para diversas categorías de gastos.",
                        "La aplicación ofrece alertas y notificaciones para mantener a los usuarios informados cuando sus gastos se acercan o exceden sus presupuestos establecidos, ayudándoles a planificar y controlar su gasto de manera eficiente.",
                    ]}
                    imagePath={images.galery}
                    imageName="planning"
                    altText="Segunda imagen del contenido"
                    isImageFirst={true}
                />
                <SectionWithImage
                    title="Reportes y análisis"
                    description={[
                        "La aplicación proporciona herramientas para visualizar los ingresos, gastos y balances a través de gráficos y tablas.",
                        "Permite la generación de reportes personalizados basados en diferentes criterios como rango de fechas o categorías, y muestra el balance general en tiempo real, ayudando a los usuarios a comprender mejor su situación financiera.",
                    ]}
                    imagePath={images.galery}
                    imageName="reporting"
                    altText="Tercera imagen del contenido"
                    isImageFirst={false}
                />
                <SectionWithImage
                    title="Autenticación, seguridad e integraciones"
                    description={[
                        "Implementa un sistema de autenticación seguro con soporte para OAuth2/JWT, protección de datos mediante encriptación, y opciones para autenticación multifactor.",
                        "La aplicación también ofrece integraciones con APIs externas para importar automáticamente transacciones bancarias y servicios de cambio de divisas.",
                    ]}
                    imagePath={images.galery}
                    imageName="security"
                    altText="Cuarta imagen del contenido"
                    isImageFirst={true}
                />

            </div>
        </>
    );
};

export default WelcomeMain;