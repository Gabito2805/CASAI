import { useEffect } from "react"
import Navbar from "./Navbar"
import heroImage from "../assets/casai-hero.jpeg"


function Hero() {


    /*
    ==========================================
    SCROLL INICIAL
    ==========================================
    */

    useEffect(() => {

        let locked = false


        const handleWheel = (event) => {

            /*
            ==========================================
            SOLO BAJAR
            ==========================================
            */

            if (event.deltaY <= 0)
                return


            /*
            ==========================================
            SOLO CUANDO ESTAMOS ARRIBA
            ==========================================
            */

            if (window.scrollY > 20)
                return


            /*
            ==========================================
            EVITAR DOBLE EJECUCIÓN
            ==========================================
            */

            if (locked)
                return


            locked = true


            /*
            ==========================================
            EXPERIENCE
            ==========================================
            */

            const experience =
                document.getElementById(
                    "scroll-experience"
                )


            if (!experience) {

                locked = false

                return

            }


            /*
            ==========================================
            CANCELAR SCROLL NORMAL
            ==========================================
            */

            event.preventDefault()


            /*
            ==========================================
            IR DIRECTAMENTE AL VIDEO
            ==========================================
            */

            window.scrollTo({

                top:
                    experience.offsetTop,

                behavior:
                    "smooth"

            })


            /*
            ==========================================
            LIBERAR
            ==========================================
            */

            setTimeout(() => {

                locked = false

            }, 1000)

        }


        window.addEventListener(
            "wheel",
            handleWheel,
            {
                passive: false
            }
        )


        return () => {

            window.removeEventListener(
                "wheel",
                handleWheel
            )

        }

    }, [])



    /*
    ==========================================
    BOTÓN
    ==========================================
    */

    const scrollToExperience = () => {

        const experience =
            document.getElementById(
                "scroll-experience"
            )


        if (!experience)
            return


        window.scrollTo({

            top:
                experience.offsetTop,

            behavior:
                "smooth"

        })

    }



    /*
    ==========================================
    RENDER
    ==========================================
    */

    return (

        <section
            className="hero"
            id="inicio"
        >

            <Navbar />


            {/* ==================================
                IMAGEN
            ================================== */}

            <div className="hero-image">

                <img
                    src={heroImage}
                    alt="Casa inteligente CasAI"
                />

            </div>


            {/* ==================================
                OVERLAY
            ================================== */}

            <div className="hero-overlay"></div>



            {/* ==================================
                MARCA HERO
            ================================== */}

            <div className="hero-brand">

                CASAI

            </div>



            {/* ==================================
                CONTENIDO
            ================================== */}

            <div className="hero-content">

                <p className="hero-label">

                    SMART HOME · AI · AUTOMATION

                </p>


                <h1>

                    Tu casa.
                    <br />

                    <span>
                        Más inteligente.
                    </span>

                </h1>


                <p className="hero-description">

                    Automatización, seguridad y confort.
                    <br />

                    Todo bajo tu control.

                </p>


                

            </div>



            {/* ==================================
                INDICADOR DE SCROLL
            ================================== */}

            <div className="hero-scroll-indicator">

                <div className="hero-scroll-box">

                    <span className="hero-scroll-arrow">
                        ↓
                    </span>

                </div>


                <span className="hero-scroll-label">

                    SCROLL PARA DESCUBRIR

                </span>

            </div>


        </section>

    )

}


export default Hero