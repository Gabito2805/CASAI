function InstallationSection() {

    const steps = [

        {
            number: "01",
            title: "Te asesoramos",
            text: "Analizamos tu casa, tus necesidades y qué querés automatizar."
        },

        {
            number: "02",
            title: "Diseñamos",
            text: "Diseñamos un sistema pensado específicamente para tu hogar."
        },

        {
            number: "03",
            title: "Instalamos",
            text: "Instalamos y conectamos todos los dispositivos necesarios."
        },

        {
            number: "04",
            title: "Configuramos",
            text: "Creamos tus escenas, automatizaciones, sensores y modos."
        },

        {
            number: "05",
            title: "Listo",
            text: "Todo queda funcionando para que puedas empezar a disfrutar tu casa."
        }

    ]


    return (

        <section
            id="instalacion"
            className="installation-section"
        >

            <div className="installation-container">


                <div className="installation-header">

                    <p>
                        INSTALACIÓN SIN COMPLICACIONES
                    </p>

                    <h2>
                        Vos imaginás la casa.
                        <br />
                        <span>
                            Nosotros hacemos que funcione.
                        </span>
                    </h2>

                </div>



                <div className="installation-steps">


                    {steps.map((step, index) => (

                        <article
                            key={step.number}
                            className="installation-step"
                        >

                            <div className="installation-step-number">
                                {step.number}
                            </div>


                            <div className="installation-step-content">

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.text}
                                </p>

                            </div>


                            {index < steps.length - 1 && (

                                <div className="installation-line" />

                            )}

                        </article>

                    ))}


                </div>



                <div className="installation-cta">

                    <p>
                        ¿No sabés por dónde empezar?
                    </p>

                    <span>
                        Nosotros te ayudamos a diseñarlo.
                    </span>

                    <button>
                        Solicitar asesoramiento
                    </button>

                </div>


            </div>

        </section>

    )

}


export default InstallationSection