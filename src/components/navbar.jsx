import { useEffect, useState } from "react"
import logo from "../assets/CASAII.png"

function Navbar() {

    const [visible, setVisible] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)


    /* ==========================================
       SCROLL
    ========================================== */

    useEffect(() => {

        const handleScroll = () => {

            /*
             * La navbar comienza a aparecer
             * cuando empieza la sección ABOUT CASAI.
             *
             * El ID de AboutSection es:
             *
             * <section id="casai">
             */

            const aboutSection =
                document.getElementById("casai")


            /* ==================================
               NAVBAR VISIBLE
            ================================== */

            if (aboutSection) {

                const sectionTop =
                    aboutSection.getBoundingClientRect().top

                /*
                 * Aparece cuando la parte superior
                 * de AboutSection llega a la ventana.
                 *
                 * -80 permite que aparezca
                 * ligeramente antes.
                 */

                setVisible(
                    sectionTop <= 80
                )

            }


            /* ==================================
               PROGRESO
            ================================== */

            const scrollTop =
                window.scrollY

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight


            const progress =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0


            setScrollProgress(

                Math.min(
                    100,
                    Math.max(
                        0,
                        progress
                    )
                )

            )

        }


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        )


        /*
         * Ejecutamos una vez al cargar
         * para establecer el estado inicial.
         */

        handleScroll()


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            )

        }

    }, [])



    /* ==========================================
       ESC
    ========================================== */

    useEffect(() => {

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {

                setMenuOpen(false)
                setContactOpen(false)

            }

        }


        window.addEventListener(
            "keydown",
            handleKeyDown
        )


        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            )

        }

    }, [])



    /* ==========================================
       CLICK AFUERA
    ========================================== */

    useEffect(() => {

        const handleClickOutside = (event) => {

            const contactWrapper =
                event.target.closest(
                    ".navbar-contact-wrapper"
                )


            if (!contactWrapper) {

                setContactOpen(false)

            }

        }


        document.addEventListener(
            "click",
            handleClickOutside
        )


        return () => {

            document.removeEventListener(
                "click",
                handleClickOutside
            )

        }

    }, [])



    /* ==========================================
       SCROLL A SECCIÓN
    ========================================== */

    const scrollToSection = (id) => {

        setMenuOpen(false)
        setContactOpen(false)


        setTimeout(() => {

            document
                .getElementById(id)
                ?.scrollIntoView({
                    behavior: "smooth"
                })

        }, 150)

    }



    /* ==========================================
       VOLVER ARRIBA
    ========================================== */

    const scrollToTop = () => {

        setMenuOpen(false)
        setContactOpen(false)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }



    /* ==========================================
       CONTACTO
    ========================================== */

    const toggleContact = (event) => {

        event.stopPropagation()

        setContactOpen(
            previous => !previous
        )

    }



    /* ==========================================
       CONTACTO DESDE EL MENÚ
    ========================================== */

    const openContactFromMenu = () => {

        setMenuOpen(false)

        setTimeout(() => {

            setContactOpen(true)

        }, 180)

    }



    return (

        <nav
            className={`
                navbar

                ${
                    visible
                        ? "navbar-visible"
                        : "navbar-hidden"
                }

                ${
                    menuOpen
                        ? "navbar-open"
                        : ""
                }
            `}
        >


            {/* ==================================
                BOTÓN MENÚ
            ================================== */}

            <button
                className="navbar-menu-button"
                onClick={() =>
                    setMenuOpen(
                        previous => !previous
                    )
                }
                aria-label={
                    menuOpen
                        ? "Cerrar menú"
                        : "Abrir menú"
                }
                aria-expanded={menuOpen}
            >

                <span></span>
                <span></span>
                <span></span>

            </button>



            {/* ==================================
                MARCA
            ================================== */}

            <button
                className="navbar-brand"
                onClick={scrollToTop}
                aria-label="Volver al inicio"
            >

                <img
                    src={logo}
                    alt="CasAI"
                    className="navbar-logo-image"
                />

                <span className="navbar-logo-text">
                    CASAI
                </span>

            </button>



            {/* ==================================
                ACCIONES DERECHA
            ================================== */}

            <div className="navbar-actions">


                {/* ==================================
                    CONTACTO
                ================================== */}

                <div
                    className="navbar-contact-wrapper"
                >

                    <button
                        className={`
                            navbar-contact

                            ${
                                contactOpen
                                    ? "navbar-contact-active"
                                    : ""
                            }
                        `}
                        onClick={toggleContact}
                        aria-expanded={contactOpen}
                        aria-haspopup="dialog"
                    >

                        Contacto

                    </button>



                    {/* ==================================
                        PANEL CONTACTO
                    ================================== */}

                    <div
                        className={`
                            navbar-contact-panel

                            ${
                                contactOpen
                                    ? "navbar-contact-panel-open"
                                    : ""
                            }
                        `}
                    >


                        {/* HEADER */}

                        <div
                            className="contact-panel-header"
                        >

                            <div>

                                <span
                                    className="contact-panel-label"
                                >
                                    CONTACTO
                                </span>

                                <span
                                    className="contact-panel-title"
                                >
                                    Hablemos de tu proyecto
                                </span>

                            </div>


                            <button
                                className="contact-panel-close"
                                onClick={() =>
                                    setContactOpen(false)
                                }
                                aria-label="Cerrar contacto"
                            >
                                ×
                            </button>

                        </div>



                        <div
                            className="contact-panel-divider"
                        />



                        {/* EMAIL */}

                        <a
                            href="mailto:contacto@casai.com"
                            className="contact-panel-item"
                        >

                            <div
                                className="contact-panel-icon"
                            >

                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >

                                    <rect
                                        x="3"
                                        y="5"
                                        width="18"
                                        height="14"
                                        rx="2"
                                    />

                                    <path
                                        d="M3 7L12 13L21 7"
                                    />

                                </svg>

                            </div>


                            <div
                                className="contact-panel-info"
                            >

                                <span>
                                    EMAIL
                                </span>

                                <strong>
                                    contacto@casai.com
                                </strong>

                            </div>

                        </a>



                        {/* TELÉFONO */}

                        <a
                            href="tel:+549XXXXXXXXXX"
                            className="contact-panel-item"
                        >

                            <div
                                className="contact-panel-icon"
                            >

                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >

                                    <path
                                        d="
                                            M6.5 3.5
                                            C5.7 3.5 5 4.2 5 5
                                            C5 13 11 19 19 19
                                            C19.8 19 20.5 18.3 20.5 17.5
                                            V15.5
                                            C20.5 15 20.2 14.6 19.7 14.5
                                            L15.9 13.6
                                            C15.5 13.5 15.1 13.7 14.9 14
                                            L13.8 15.5
                                            C11.5 14.4 9.6 12.5 8.5 10.2
                                            L10 9.1
                                            C10.3 8.9 10.5 8.5 10.4 8.1
                                            L9.5 4.3
                                            C9.4 3.8 9 3.5 8.5 3.5
                                            Z
                                        "
                                    />

                                </svg>

                            </div>


                            <div
                                className="contact-panel-info"
                            >

                                <span>
                                    TELÉFONO
                                </span>

                                <strong>
                                    +54 9 XX XXXX XXXX
                                </strong>

                            </div>

                        </a>



                        {/* FOOTER */}

                        <div
                            className="contact-panel-footer"
                        >

                            <span
                                className="contact-panel-status"
                            />

                            Estamos para ayudarte a crear
                            tu casa inteligente.

                        </div>

                    </div>

                </div>



                {/* ==================================
                    ASESORAMIENTO
                ================================== */}

                <button
                    className="nav-button"
                    onClick={() =>
                        scrollToSection("cta")
                    }
                >

                    <svg
                        className="nav-button-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >

                        <path
                            d="
                                M5 3
                                L18 14
                                L12 15
                                L9 21
                                L5 3
                                Z
                            "
                        />

                    </svg>


                    <span>
                        ¿No sabés qué podrías automatizar?
                    </span>

                </button>



                {/* ==================================
                    REDES SOCIALES
                ================================== */}

                <div className="navbar-socials">


                    {/* INSTAGRAM */}

                    <a
                        href="#"
                        className="navbar-social"
                        aria-label="Instagram"
                    >

                        <svg viewBox="0 0 24 24">

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
                        className="navbar-social"
                        aria-label="TikTok"
                    >

                        <svg viewBox="0 0 24 24">

                            <path
                                d="
                                    M15 4
                                    c.3 2.1 1.5 3.5 3.5 4v3.1
                                    c-1.4 0-2.7-.4-3.8-1.1v5.7
                                    c0 3.1-2.2 5.3-5.2 5.3
                                    S4.5 18.9 4.5 16
                                    s2.2-5.1 5-5.1
                                    c.4 0 .8 0 1.2.1v3.1
                                    c-.4-.1-.7-.2-1.1-.2
                                    -1.1 0-2 .9-2 2.1
                                    s.9 2.1 2 2.1
                                    c1.2 0 2.1-.9 2.1-2.2
                                    V4H15z
                                "
                            />

                        </svg>

                    </a>



                    {/* FACEBOOK */}

                    <a
                        href="#"
                        className="navbar-social"
                        aria-label="Facebook"
                    >

                        <svg viewBox="0 0 24 24">

                            <path
                                d="
                                    M14 8h3V4h-3
                                    c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9
                                    c0-.7.3-1 1-1z
                                "
                            />

                        </svg>

                    </a>

                </div>

            </div>



            {/* ==================================
                MENÚ DESPLEGABLE
            ================================== */}

            <div
                className={`
                    navbar-menu

                    ${
                        menuOpen
                            ? "navbar-menu-open"
                            : ""
                    }
                `}
            >

                <div className="navbar-menu-inner">


                    {/* EXPLORAR */}

                    <div className="navbar-menu-group">

                        <span
                            className="navbar-menu-label"
                        >
                            EXPLORAR
                        </span>


                        <button
                            onClick={() =>
                                scrollToSection(
                                    "automatizaciones"
                                )
                            }
                        >
                            Automatizaciones
                        </button>


                        <button
                            onClick={() =>
                                scrollToSection("app")
                            }
                        >
                            App
                        </button>


                        <button
                            onClick={() =>
                                scrollToSection("paquetes")
                            }
                        >
                            Paquetes
                        </button>


                        <button
                            onClick={() =>
                                scrollToSection("productos")
                            }
                        >
                            Productos
                        </button>

                    </div>



                    {/* CASAI */}

                    <div className="navbar-menu-group">

                        <span
                            className="navbar-menu-label"
                        >
                            CASAI
                        </span>


                        <button
                            onClick={() =>
                                scrollToSection(
                                    "instalacion"
                                )
                            }
                        >
                            Instalación
                        </button>


                        <button
                            onClick={() =>
                                scrollToSection(
                                    "inspiracion"
                                )
                            }
                        >
                            Inspiración
                        </button>


                        <button
                            onClick={() =>
                                scrollToSection("faq")
                            }
                        >
                            Preguntas
                        </button>


                        <button
                            onClick={
                                openContactFromMenu
                            }
                        >
                            Contacto
                        </button>

                    </div>



                    {/* CASAI TRABAJO */}

                    <div className="navbar-menu-group">

                        <span
                            className="navbar-menu-label"
                        >
                            CASAI Trabajo
                        </span>


                        <button
                            onClick={() =>
                                scrollToSection(
                                    "trabaja-con-nosotros"
                                )
                            }
                        >
                            Trabajá con nosotros
                        </button>

                    </div>

                </div>

            </div>



            {/* ==================================
                BARRA DE PROGRESO
            ================================== */}

            <div
                className="navbar-progress"
                aria-hidden="true"
            >

                <div
                    className="navbar-progress-fill"
                    style={{
                        width:
                            `${scrollProgress}%`
                    }}
                />

            </div>

        </nav>

    )

}

export default Navbar