import { useEffect, useState } from "react"
import logo from "../assets/CASAII.png"

function Intro() {

    const [visible, setVisible] = useState(true)
    const [closing, setClosing] = useState(false)

    useEffect(() => {

        document.body.style.overflow = "hidden"

        const closeTimer = setTimeout(() => {

            setClosing(true)

        }, 1800)


        const removeTimer = setTimeout(() => {

            setVisible(false)

            document.body.style.overflow = ""

        }, 2500)


        return () => {

            clearTimeout(closeTimer)
            clearTimeout(removeTimer)

            document.body.style.overflow = ""

        }

    }, [])


    if (!visible) return null


    return (

        <div
            className={`
                intro
                ${closing ? "intro-closing" : ""}
            `}
        >

            <div className="intro-content">


                {/* ==================================
                    TEXTO
                ================================== */}

                <div className="intro-brand-text">

                    <span className="intro-welcome">
                        Bienvenido
                    </span>

                    <span className="intro-to">
                        A
                    </span>

                    <span className="intro-casai">
                        CASAI
                    </span>

                </div>


                {/* ==================================
                    SEPARADOR
                ================================== */}

                <div className="intro-divider" />


                {/* ==================================
                    LOGO
                ================================== */}

                <div className="intro-logo-container">

                    <img
                        src={logo}
                        alt="CasAI"
                        className="intro-logo"
                    />

                </div>

            </div>

        </div>

    )

}

export default Intro