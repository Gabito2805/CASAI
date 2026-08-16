import footerImage from "../assets/footer-home.jpeg"

function Footer() {

  /*
  ==========================================
  SCROLL
  ==========================================
  */

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      })

  }


  /*
  ==========================================
  VOLVER ARRIBA
  ==========================================
  */

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }


  return (

    <footer className="footer">


      {/* ==========================================
          FOOTER PRINCIPAL
      ========================================== */}

      <div className="footer-main">


        {/* ==========================================
            CONTENIDO
        ========================================== */}

        <div className="footer-content">


          {/* ==========================================
              BLOQUE IZQUIERDO
          ========================================== */}

          {/* ==========================================
              FOOTER WORK AREA
          ========================================== */}

          <div className="footer-lower">


            {/* ==========================================
                IZQUIERDA
            ========================================== */}

            <div className="footer-lower-brand">


              <p className="footer-brand-title">
                Hogares que piensan
                <br />
                por vos.
              </p>


              <span className="footer-description">
                Tecnología inteligente para
                <br />
                transformar tu forma de vivir.
              </span>


            </div>



            {/* ==========================================
                CENTRO
                REDES + COPYRIGHT
            ========================================== */}

            <div className="footer-lower-social">


              <div className="footer-socials">


                {/* INSTAGRAM */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="footer-social"
                >

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      ry="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      className="social-dot"
                    />

                  </svg>

                </a>



                {/* TIKTOK */}

                <a
                  href="#"
                  aria-label="TikTok"
                  className="footer-social"
                >

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <path
                      d="M15 4c.3 2.1 1.5 3.5 3.5 4v3.1c-1.4 0-2.7-.4-3.8-1.1v5.7c0 3.1-2.2 5.3-5.2 5.3S4.5 18.9 4.5 16s2.2-5.1 5-5.1c.4 0 .8 0 1.2.1v3.1c-.4-.1-.7-.2-1.1-.2-1.1 0-2 .9-2 2.1s.9 2.1 2 2.1c1.2 0 2.1-.9 2.1-2.2V4H15z"
                    />

                  </svg>

                </a>



                {/* FACEBOOK */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="footer-social"
                >

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <path
                      d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"
                    />

                  </svg>

                </a>


              </div>



              <span className="footer-copyright-text">
                ©2026 CASAI. Todos los derechos reservados.
              </span>


            </div>



            {/* ==========================================
                DERECHA
                TRABAJÁ CON NOSOTROS
            ========================================== */}

            <div className="footer-work">


              <p>
                ¿Querés formar parte de CASAI?
              </p>


              <a
                href="mailto:hola@casai.com?subject=Quiero%20trabajar%20con%20CasAI"
                className="footer-work-link"
              >

                <span>
                  Trabajá con nosotros
                </span>

                <span>
                  →
                </span>

              </a>


            </div>


          </div>



          {/* ==========================================
              SERVICIOS
          ========================================== */}

          <div className="footer-column footer-services">


            <h4>
              SERVICIOS
            </h4>


            <button>
              Automatización
            </button>


            <button>
              Seguridad
            </button>


            <button>
              Iluminación
            </button>


            <button>
              Climatización
            </button>


            <button
              onClick={() => scrollToSection("instalacion")}
            >
              Instalación
            </button>


          </div>



          {/* ==========================================
              EXPLORAR
          ========================================== */}

          <div className="footer-column footer-explore">


            <h4>
              EXPLORAR
            </h4>


            <button
              onClick={() => scrollToSection("inicio")}
            >
              Inicio
            </button>


            <button
              onClick={() => scrollToSection("beneficios")}
            >
              Beneficios
            </button>


            <button
              onClick={() => scrollToSection("paquetes")}
            >
              Paquetes
            </button>


            <button
              onClick={() => scrollToSection("inspiracion")}
            >
              Inspiración
            </button>


            <button
              onClick={() => scrollToSection("ia")}
            >
              CASAI
            </button>


          </div>



          {/* ==========================================
              CONTACTO
          ========================================== */}

          <div className="footer-column footer-contact">


            <h4>
              CONTACTO
            </h4>


            <a href="mailto:contacto@casai.com.ar">
              contacto@casai.com.ar
            </a>


            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>


          </div>


        </div>



        {/* ==========================================
            IMAGEN DERECHA
            NO SE MODIFICA
        ========================================== */}

        <div className="footer-visual">


          <div className="footer-visual-fade" />


          <img
            src={footerImage}
            alt="Tecnología inteligente CasAI"
            className="footer-visual-image"
          />


        </div>


      </div>



      



      {/* ==========================================
          FOOTER BOTTOM
      ========================================== */}

      <div className="footer-bottom">


        {/* CASAI */}

        <div className="footer-bottom-brand">
          CASAI
        </div>



        {/* LEGAL */}

        <div className="footer-legal">

          <button>
            Privacidad
          </button>

          <button>
            Términos
          </button>

        </div>



        {/* VOLVER ARRIBA */}

        <button
          className="footer-top"
          onClick={scrollToTop}
        >

          <span>
            Volver arriba
          </span>

          <span className="footer-top-arrow">
            ↑
          </span>

        </button>


      </div>


    </footer>

  )

}

export default Footer