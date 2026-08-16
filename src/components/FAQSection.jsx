import { useState } from "react"


function FAQSection() {

    const [openIndex, setOpenIndex] = useState(null)


    const faqs = [

        {
            question: "¿Funciona sin internet?",

            answer:
                "La mayoría de las automatizaciones locales pueden seguir funcionando aunque se corte internet. Algunas funciones que dependen de servicios externos sí pueden necesitar conexión."
        },

        {
            question: "¿Sirve para una casa ya construida?",

            answer:
                "Sí. CasAI puede adaptarse tanto a casas nuevas como a viviendas que ya están construidas, utilizando dispositivos y soluciones compatibles con la instalación existente."
        },

        {
            question: "¿Qué pasa si se corta la luz?",

            answer:
                "Los dispositivos volverán a funcionar normalmente cuando se restablezca la energía. Dependiendo del sistema instalado, también podemos incorporar soluciones de respaldo."
        },

        {
            question: "¿Puedo empezar con pocas cosas?",

            answer:
                "Sí. No necesitás automatizar toda tu casa de una sola vez. Podés comenzar con algunas habitaciones o funciones y ampliar el sistema más adelante."
        },

        {
            question: "¿Necesito cambiar toda la instalación eléctrica?",

            answer:
                "No necesariamente. Analizamos cada caso y buscamos soluciones que permitan aprovechar la instalación existente siempre que sea posible."
        },

        {
            question: "¿Puedo controlar todo desde mi celular?",

            answer:
                "Sí. Desde la aplicación de CasAI podés controlar tus dispositivos, consultar el estado de tu casa y ejecutar automatizaciones desde cualquier lugar."
        }

    ]


    const toggleFAQ = (index) => {

        setOpenIndex(
            openIndex === index
                ? null
                : index
        )

    }


    return (

        <section
            id="faq"
            className="faq-section"
        >

            <div className="faq-container">


                <div className="faq-header">

                    <p>
                        PREGUNTAS FRECUENTES
                    </p>

                    <h2>
                        Antes de empezar,
                        <br />
                        <span>
                            resolvamos tus dudas.
                        </span>
                    </h2>

                </div>



                <div className="faq-list">


                    {faqs.map((faq, index) => (

                        <article
                            key={index}
                            className={
                                `faq-item ${
                                    openIndex === index
                                        ? "active"
                                        : ""
                                }`
                            }
                        >


                            <button
                                className="faq-question"
                                onClick={() =>
                                    toggleFAQ(index)
                                }
                            >

                                <span>

                                    <small>
                                        {String(index + 1).padStart(2, "0")}
                                    </small>

                                    {faq.question}

                                </span>


                                <span className="faq-icon">

                                    {openIndex === index
                                        ? "−"
                                        : "+"
                                    }

                                </span>

                            </button>



                            <div
                                className="faq-answer"
                            >

                                <p>
                                    {faq.answer}
                                </p>

                            </div>


                        </article>

                    ))}


                </div>


            </div>

        </section>

    )

}


export default FAQSection