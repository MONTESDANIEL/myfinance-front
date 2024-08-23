export const Footer = () => {
  return (
    <div>
      <footer className="bg-body-tertiary text-center text-lg-start w-100">
        <div className="container p-3 justify-content-center">
          <div className="text-center p-2">
            <h5 className="text-uppercase ">Acerca de</h5>
            <p className="text-muted">
              MyFinance te ayuda a controlar tus finanzas personales de manera sencilla.
              Registra tus ingresos y gastos, establece metas de ahorro, y compara tasas de interés de diferentes
              entidades financieras.
              Con una interfaz intuitiva, podrás visualizar fácilmente tu situación financiera y tomar decisiones
              informadas para mejorar
              tu bienestar económico.
            </p>
          </div>
          <div className="d-flex flex-column align-items-center p-2">
            <h5 className="text-uppercase">Contáctame</h5>
            <div className="d-flex flex-row align-items-center gap-5 flex-wrap p-1 text-muted">
              <a href="https://github.com/MONTESDANIEL" target="_blank" rel="noopener noreferrer"
                className="text-reset">
                <i className="bi bi-github fs-2"></i>
              </a>
              <a href="https://www.linkedin.com/in/daniel-amaya-montes-30a09a294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset">
                <i className="bi bi-linkedin fs-2"></i>
              </a>
              <a href="https://wa.me/3054171043" target="_blank" rel="noopener noreferrer"
                className="text-reset">
                <i className="bi bi-whatsapp fs-2"></i>
              </a>
            </div>
          </div>

        </div>
        <div className="text-center p-2">
          © 2024 Daniel Amaya Montes. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}