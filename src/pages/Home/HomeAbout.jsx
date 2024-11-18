const HomeAbout = () => {
    return (
        <div className="container">
            <div className="bg-dark-subtle p-3 rounded">
                <div className="text-center p-3">
                    <h1>Acerca de</h1>
                </div>

                <main>
                    <section id="about-me" className="container-fluid p-3 mb-3 bg-body-tertiary text-center rounded">
                        <h2 className="mb-3">Sobre mí</h2>
                        <hr />
                        <div className="m-4">
                            <p>
                                Soy Daniel Amaya Montes, un desarrollador de software dedicado y apasionado por mi trabajo.
                                Mi compromiso con la calidad es una de mis principales prioridades, ya que creo que cada línea de código
                                debe reflejar un alto estándar de excelencia. Estoy impulsado por la curiosidad y el deseo de aprender,
                                lo que me lleva a estar siempre en la búsqueda de nuevas estrategias y herramientas para abordar los desafíos
                                que se presentan. Me encanta colaborar con otros, compartir conocimientos y descubrir soluciones creativas
                                que marquen la diferencia. Estoy convencido de que el aprendizaje continuo y la adaptabilidad son esenciales
                                en este campo en constante evolución.
                            </p>
                        </div>
                    </section>

                    <section id="about-project" className="container-fluid p-3 mb-3 bg-body-tertiary text-center rounded">
                        <h2 className="mb-3">Sobre el Proyecto</h2>
                        <hr />
                        <div className="m-4">
                            <p>
                                Este proyecto es una iniciativa que busca transformar la manera en que las personas gestionan sus finanzas personales.
                                A través de una interfaz intuitiva y herramientas prácticas, el objetivo es empoderar a los usuarios para que tomen
                                decisiones financieras informadas y efectivas. Con el uso de tecnologías modernas como Java con Spring Boot y JavaScript
                                con React, se crea una experiencia de usuario fluida y agradable.
                            </p>
                            <p>
                                La necesidad de una herramienta accesible y funcional surge de la creciente complejidad del entorno financiero actual.
                                Muchas personas luchan por mantener un control adecuado de sus gastos, ahorros y metas financieras.
                                Este proyecto tiene como misión facilitar este proceso, ofreciendo funcionalidades que permiten a los usuarios establecer
                                y seguir sus objetivos financieros, así como optimizar su presupuesto de manera efectiva.
                            </p>
                            <p>
                                Además, el compromiso con la calidad y la innovación es fundamental en el desarrollo de esta aplicación.
                                Se implementan las mejores prácticas de programación y se integran metodologías ágiles para asegurar un proceso de
                                desarrollo eficiente. En definitiva, este proyecto no solo se trata de tecnología, sino de crear un impacto positivo
                                en la vida financiera de cada usuario.
                            </p>
                        </div>
                    </section>

                    <section id="contact" className="container-fluid p-3 bg-body-tertiary text-center rounded">
                        <h2 className="text-center mb-4">Contáctame</h2>
                        <hr />
                        <form action="mailto:tuemail@ejemplo.com" method="post" encType="text/plain">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nameContact" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nameContact" name="name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="emailContact" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="emailContact" name="email" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="messageContact" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="messageContact" name="messageContact" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                <span>Enviar</span>
                                <i className="bi bi-send ms-2"></i>
                            </button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default HomeAbout;
