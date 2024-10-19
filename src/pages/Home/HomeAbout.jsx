const HomeAbout = () => {
    return (
        <div className="container-fluid">
            <section id="about" className='container p-3 mb-2 bg-body-tertiary text-center'>
                <h2>Sobre Mí</h2>
                <div className="m-4">
                    <p>
                        Soy Daniel Amaya Montes, un desarrollador apasionado por la tecnología y el desarrollo de software.
                        Me enfoco en mejorar mis habilidades en desarrollo Frontend y Backend, especialmente con Java utilizando Spring Boot,
                        y JavaScript con React. También estoy trabajando con MySQL para bases de datos en una aplicación que desarrollo para
                        seguir perfeccionando mis habilidades.
                    </p>
                    <p>
                        Mi objetivo es mantenerme actualizado con las últimas tendencias y tecnologías en el mundo del desarrollo,
                        lo que me impulsa a aprender y adoptar nuevas herramientas y metodologías. Mi enfoque en
                        la calidad y la eficiencia me lleva a seguir buscando soluciones innovadoras para los problemas que enfrento.
                    </p>
                    <p>
                        Además, disfruto colaborando con equipos multidisciplinarios y aportando mis conocimientos para crear
                        productos de alta calidad que marcan la diferencia. Siempre estoy abierto a recibir retroalimentación y
                        utilizarla para mejorar mis habilidades y procesos de desarrollo.
                    </p>
                </div>
            </section>
            <section
                id="contact"
                className='container p-3 mb-2 bg-body-tertiary'>
                <h2 className="text-center mb-4">Contáctame</h2>
                <form
                    action="mailto:tuemail@ejemplo.com"
                    method="post"
                    encType="text/plain">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="nameContact"
                                className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameContact"
                                name="name"
                                required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label
                                htmlFor="emailContact"
                                className="form-label">Correo Electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailContact"
                                name="email"
                                required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="messageContact"
                            className="form-label">
                            Mensaje
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="messageContact"
                            rows="4"
                            required>
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        <i className="bi bi-send"></i>
                        <span className="ms-2">Enviar</span>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default HomeAbout