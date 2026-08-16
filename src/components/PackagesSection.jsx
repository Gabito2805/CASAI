function PackagesSection() {

  const packages = [

    {
      name: "Starter",
      badge: "Ideal para comenzar",
      icon: "💡",

      features: [

          "Iluminación inteligente",
          "Sensores",
          "Control desde App",
          "Automatizaciones básicas"

      ]
    },

    {
      name: "Smart",

      highlight: true,

      badge: "Más elegido",

      icon: "🏠",

      features: [

          "Todo Starter",
          "Seguridad",
          "Climatización",
          "Escenas inteligentes"

      ]
    },

    {
      name: "Signature",

      badge: "Experiencia completa",

      icon: "✨",

      features: [

          "Todo Smart",
          "CasAI IA",
          "Modo Cine",
          "Audio Multiroom"

      ]
    }

  ]



  return (

    <section
        id="paquetes"
        className="packages-section"
    >

      <div className="packages-header">

        <p>

          PAQUETES

        </p>

        <h2>

          Elegí cómo querés
          <br />
          vivir tu casa.

        </h2>

        <span>

          Desde una automatización puntual
          hasta un hogar completamente inteligente.

        </span>

      </div>



        <div className="packages-grid">

          {

            packages.map((item) => (

              <article
                key={item.name}
                className={
                item.highlight
                    ? "package-card featured"
                    : "package-card"
                  }
              >

                <small>

                    {item.badge}

                </small>


                <div className="package-icon">

                    {item.icon}

                </div>


                <h3>

                    {item.name}

                </h3>


                <ul>

                  {

                    item.features.map((feature) => (

                        <li key={feature}>

                            ✓ {feature}

                        </li>

                    ))

                  }

                </ul>


                <button>

                  Descubrir →

                </button>

              </article>

            ))

          }

        </div>

    </section>

  )

}

export default PackagesSection