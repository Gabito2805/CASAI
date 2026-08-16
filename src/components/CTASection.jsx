function CTASection() {

  return (

    <section
      id="contacto"
      className="cta-section"
    >

      <div className="cta-glow cta-glow-left"></div>
      <div className="cta-glow cta-glow-right"></div>


      <div className="cta-content">

        <p className="cta-label">
          TU CASA. TU FORMA.
        </p>


        <h2>
          Tu casa ya puede
          <br />
          hacer mucho más.
        </h2>


        <p className="cta-description">
          Diseñamos un hogar inteligente pensado para vos,
          <br />
          tus espacios y tu forma de vivir.
        </p>


        <button
          className="cta-button"
          onClick={() => {
            document
              .getElementById("contacto-form")
              ?.scrollIntoView({
                behavior: "smooth"
              })
          }}
        >

          Solicitar asesoramiento

          <span>
            →
          </span>

        </button>


        <small className="cta-note">
          Sin compromiso · Te asesoramos desde el primer paso
        </small>

      </div>


      <div
        id="contacto-form"
        className="cta-bottom"
      >

        <span>
          CASAI
        </span>

        <span>
          Hogares que piensan con vos.
        </span>

      </div>

    </section>

  )

}


export default CTASection