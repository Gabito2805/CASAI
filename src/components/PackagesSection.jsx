import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"



/* =========================================================
   MAGNET LINES
========================================================= */

function MagnetLines({
    rows = 20,
    columns = 20,
    containerSize = "80vmin",
    lineColor = "rgba(255, 255, 255, 0.45)",
    lineWidth = "5px",
    lineHeight = "36px",
    baseAngle = 0,
    className = "",
    style = {}
}) {

    const containerRef = useRef(null)

    const total =
        rows * columns

    const lines =
        Array.from(
            { length: total },
            (_, index) => index
        )


    return (

        <div
            ref={containerRef}
            className={`magnet-lines ${className}`}
            style={{
                gridTemplateColumns:
                    `repeat(${columns}, 1fr)`,

                gridTemplateRows:
                    `repeat(${rows}, 1fr)`,

                width:
                    containerSize,

                height:
                    containerSize,

                ...style
            }}
        >

            {lines.map((index) => (

                <MagnetLine
                    key={index}
                    containerRef={containerRef}
                    lineColor={lineColor}
                    lineWidth={lineWidth}
                    lineHeight={lineHeight}
                    baseAngle={baseAngle}
                />

            ))}

        </div>

    )

}



/* =========================================================
   INDIVIDUAL MAGNET LINE
========================================================= */

function MagnetLine({
    containerRef,
    lineColor,
    lineWidth,
    lineHeight,
    baseAngle
}) {

    const lineRef =
        useRef(null)

    const [rotate, setRotate] =
        useState(baseAngle)


    useEffect(() => {

        const updateRotation = (event) => {

            if (
                !lineRef.current ||
                !containerRef.current
            ) {
                return
            }


            const rect =
                lineRef.current.getBoundingClientRect()


            const centerX =
                rect.left +
                rect.width / 2


            const centerY =
                rect.top +
                rect.height / 2


            const distanceX =
                event.clientX -
                centerX


            const distanceY =
                event.clientY -
                centerY


            const angle =
                (
                    Math.atan2(
                        distanceY,
                        distanceX
                    ) * 180
                ) / Math.PI


            setRotate(
                angle +
                baseAngle
            )

        }


        window.addEventListener(
            "mousemove",
            updateRotation
        )


        return () => {

            window.removeEventListener(
                "mousemove",
                updateRotation
            )

        }

    }, [
        baseAngle,
        containerRef
    ])



    return (

        <motion.span
            ref={lineRef}
            className="magnet-line"

            animate={{
                rotate
            }}

            transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
                mass: .45
            }}

            style={{
                width:
                    lineWidth,

                height:
                    lineHeight,

                background:
                    lineColor
            }}
        />

    )

}



/* =========================================================
   ICONS
========================================================= */

function ArrowIcon() {

    return (

        <svg
            className="package-arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >

            <path d="M5 12h14" />

            <path d="m13 6 6 6-6 6" />

        </svg>

    )

}



function CheckIcon() {

    return (

        <svg
            className="package-check-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >

            <path d="m6 12 4 4 8-8" />

        </svg>

    )

}



/* =========================================================
   PACKAGES
========================================================= */

function PackagesSection() {

    const packages = [

        {
            name:
                "Starter",

            badge:
                "Ideal para comenzar",

            description:
                "La forma más simple de empezar a transformar tu casa con automatizaciones esenciales.",

            features: [
                "Iluminación inteligente",
                "Sensores",
                "Control desde App",
                "Automatizaciones básicas"
            ],

            includesLabel:
                "Starter incluye",

            cta:
                "Descubrir Starter"
        },


        {
            name:
                "Smart",

            highlight:
                true,

            badge:
                "Más elegido",

            description:
                "Más control, seguridad y confort para crear una experiencia inteligente integrada.",

            features: [
                "Todo Starter",
                "Seguridad",
                "Climatización",
                "Escenas inteligentes"
            ],

            includesLabel:
                "Todo Starter, más",

            cta:
                "Descubrir Smart"
        },


        {
            name:
                "Signature",

            badge:
                "Experiencia completa",

            description:
                "La experiencia CasAI más completa para llevar la automatización a cada espacio de tu hogar.",

            features: [
                "Todo Smart",
                "CasAI IA",
                "Modo Cine",
                "Audio Multiroom"
            ],

            includesLabel:
                "Todo Smart, más",

            cta:
                "Descubrir Signature"
        }

    ]



    return (

        <section
            id="paquetes"
            className="packages-section"
        >

            {/* =================================================
                MAGNETIC BACKGROUND
            ================================================= */}

            <div
                className="packages-magnet-background"
                aria-hidden="true"
            >

                <MagnetLines
                    rows={16}
                    columns={22}
                    containerSize="100%"
                    lineColor="rgba(2, 75, 212, 0.6)"
                    lineWidth="50px"
                    lineHeight="20px"
                    baseAngle={90}
                />

            </div>



            {/* =================================================
                BACKGROUND LIGHTS
            ================================================= */}

            <div
                className="packages-background-glow packages-background-glow-left"
                aria-hidden="true"
            />

            <div
                className="packages-background-glow packages-background-glow-right"
                aria-hidden="true"
            />



            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="packages-container">


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="packages-header">


                    <div className="packages-header-main">

                        <p className="packages-eyebrow">
                            PAQUETES CASAI
                        </p>


                        <h2>

                            Elegí cómo querés

                            <br />

                            vivir tu casa.

                        </h2>

                    </div>



                    <div className="packages-header-side">

                        <p>

                            Desde una automatización puntual
                            hasta un hogar completamente inteligente.

                        </p>

                    </div>


                </div>



                {/* =================================================
                    CARDS
                ================================================= */}

                <div className="packages-grid">

                    {packages.map((item) => (

                        <article

                            key={item.name}

                            className={
                                item.highlight
                                    ? "package-card package-card-featured"
                                    : "package-card"
                            }

                        >


                            {/* =====================================
                                CARD LIGHT
                            ===================================== */}

                            <div
                                className="package-card-light"
                                aria-hidden="true"
                            />



                            {/* =====================================
                                TOP
                            ===================================== */}

                            <div className="package-card-top">


                                <div className="package-card-heading">


                                    <div className="package-card-title-row">

                                        <h3>
                                            {item.name}
                                        </h3>


                                        {item.highlight && (

                                            <span className="package-popular-badge">

                                                Más elegido

                                            </span>

                                        )}

                                    </div>



                                    <p className="package-card-description">

                                        {item.description}

                                    </p>


                                </div>



                                {/* =================================
                                    IDENTITY
                                ================================= */}

                                <div className="package-card-identity">


                                    <span className="package-card-name">

                                        {item.name}

                                    </span>


                                    <span className="package-card-badge">

                                        {item.badge}

                                    </span>


                                </div>



                                {/* =================================
                                    BUTTON
                                ================================= */}

                                <button
                                    type="button"

                                    className={
                                        item.highlight
                                            ? "package-button package-button-primary"
                                            : "package-button"
                                    }
                                >

                                    <span>
                                        {item.cta}
                                    </span>

                                    <ArrowIcon />

                                </button>


                            </div>



                            {/* =====================================
                                FEATURES
                            ===================================== */}

                            <div className="package-card-bottom">


                                <p className="package-includes-label">

                                    {item.includesLabel}

                                </p>



                                <ul>

                                    {item.features.map((feature) => (

                                        <li key={feature}>

                                            <span className="package-check">

                                                <CheckIcon />

                                            </span>


                                            <span>

                                                {feature}

                                            </span>

                                        </li>

                                    ))}

                                </ul>


                            </div>


                        </article>

                    ))}

                </div>



                {/* =================================================
                    FOOTER
                ================================================= */}

                <div className="packages-footer">

                    <p>
                        Cada proyecto CasAI se adapta a tu hogar.
                    </p>

                    <p>
                        Los paquetes pueden personalizarse.
                    </p>

                </div>


            </div>

        </section>

    )

}


export default PackagesSection