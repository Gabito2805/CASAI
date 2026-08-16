import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import escena1 from '../assets/escena 1.jpeg'
import escena2 from '../assets/escena 2.jpeg'
import escena3 from '../assets/escena 3.jpeg'
import escena4 from '../assets/escena 4.jpeg'

gsap.registerPlugin(ScrollTrigger)

function AutomationSection() {

    const sectionRef = useRef(null)
    const stageRef = useRef(null)

    const sceneRefs = useRef([])
    const visualRefs = useRef([])
    const actionRefs = useRef([])

    useEffect(() => {

        const section = sectionRef.current
        const stage = stageRef.current

        const scenes = sceneRefs.current
        const visuals = visualRefs.current
        const actions = actionRefs.current

        const ctx = gsap.context(() => {

            /* ==========================================
               ESTADO INICIAL
            ========================================== */

            gsap.set(scenes, {
                opacity: 0,
                scale: 0.97
            })

            gsap.set(scenes[0], {
                opacity: 1,
                scale: 1
            })

            actions.forEach((group) => {

                if (!group) return

                gsap.set(group.children, {
                    opacity: 0.25,
                    x: -15
                })

            })


            /* ==========================================
               TIMELINE PRINCIPAL
            ========================================== */

            const timeline = gsap.timeline({

                scrollTrigger: {

                    trigger: stage,

                    start: 'top top',

                    end: '+=3900',

                    scrub: 0.8,

                    pin: stage,

                    anticipatePin: 1,

                    invalidateOnRefresh: true

                }

            })


            /* ==========================================
               ESCENA 1 — PRESENCIA
            ========================================== */

            timeline

                .to(
                    actions[0].children,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: 'power2.out'
                    }
                )

                .to(
                    visuals[0],
                    {
                        scale: 1.035,
                        duration: 0.8,
                        ease: 'none'
                    }
                )

                .to(
                    scenes[0],
                    {
                        opacity: 0,
                        scale: 0.96,
                        duration: 0.65,
                        ease: 'power2.inOut'
                    }
                )


            /* ==========================================
               ESCENA 2 — SALIDA
            ========================================== */

                .fromTo(
                    scenes[1],
                    {
                        opacity: 0,
                        scale: 1.035
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        ease: 'power2.out'
                    }
                )

                .to(
                    actions[1].children,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: 'power2.out'
                    }
                )

                .to(
                    visuals[1],
                    {
                        scale: 1.035,
                        duration: 0.8,
                        ease: 'none'
                    }
                )

                .to(
                    scenes[1],
                    {
                        opacity: 0,
                        scale: 0.96,
                        duration: 0.65,
                        ease: 'power2.inOut'
                    }
                )


            /* ==========================================
               ESCENA 3 — CINE
            ========================================== */

                .fromTo(
                    scenes[2],
                    {
                        opacity: 0,
                        scale: 1.035
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        ease: 'power2.out'
                    }
                )

                .to(
                    actions[2].children,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: 'power2.out'
                    }
                )

                .to(
                    visuals[2],
                    {
                        scale: 1.035,
                        duration: 0.8,
                        ease: 'none'
                    }
                )

                .to(
                    scenes[2],
                    {
                        opacity: 0,
                        scale: 0.96,
                        duration: 0.65,
                        ease: 'power2.inOut'
                    }
                )


            /* ==========================================
               ESCENA 4 — MODO NOCHE
            ========================================== */

                .fromTo(
                    scenes[3],
                    {
                        opacity: 0,
                        scale: 1.035
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.75,
                        ease: 'power2.out'
                    }
                )

                .to(
                    actions[3].children,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.65,
                        stagger: 0.12,
                        ease: 'power2.out'
                    }
                )

                .to(
                    visuals[3],
                    {
                        scale: 1,
                        duration: 0.8,
                        ease: 'none'
                    }
                )

        }, section)

        return () => {
            ctx.revert()
        }

    }, [])


    return (

        <section
            ref={sectionRef}
            id="automatizaciones"
            className="automation-section"
        >

            {/* ==========================================
                HEADER
            ========================================== */}

            <div className="automation-header">

                <div className="automation-header-decoration">

                    <span />
                    <span />
                    <span />

                </div>


                <div className="automation-header-line">

                    <span className="header-dot" />

                    <p>
                        AUTOMATIZACIÓN INTELIGENTE
                    </p>

                    <span className="header-line" />

                </div>


                <h2>

                    Tu casa

                    <br />

                    <span>
                        entiende tu día.
                    </span>

                </h2>


                <div className="automation-header-bottom">

                    <p className="automation-intro">

                        CasAI conecta cada espacio, dispositivo
                        y rutina para que todo suceda
                        sin que tengas que pensarlo.

                    </p>


                    <div className="automation-header-code">

                        <span>CASAI</span>

                        <i />

                        <span>AUTOMATION SYSTEM</span>

                    </div>

                </div>

            </div>


            {/* ==========================================
                STAGE
            ========================================== */}

            <div
                ref={stageRef}
                className="automation-stage"
            >

                <div className="automation-grid" />

                <div className="automation-grid-glow" />

                <div className="automation-corner top-left" />
                <div className="automation-corner top-right" />
                <div className="automation-corner bottom-left" />
                <div className="automation-corner bottom-right" />


                <div className="automation-scenes">


                    {/* ==================================
                        ESCENA 1 — PRESENCIA
                    ================================== */}

                    <article
                        ref={(element) => {
                            sceneRefs.current[0] = element
                        }}
                        className="automation-scene"
                    >

                        <div
                            ref={(element) => {
                                visualRefs.current[0] = element
                            }}
                            className="scene-visual"
                        >

                            <div className="visual-glow cyan" />


                            <div className="scene-image">

                                <img
                                    src={escena1}
                                    alt="Automatización CasAI al llegar a casa"
                                    loading="eager"
                                />

                                <div className="image-overlay" />

                                <div className="image-corner top-left" />
                                <div className="image-corner top-right" />
                                <div className="image-corner bottom-left" />
                                <div className="image-corner bottom-right" />

                            </div>

                        </div>


                        <div className="scene-info">

                            <p className="scene-number">
                                01 / PRESENCIA
                            </p>


                            <h3>
                                Llegás a casa.
                            </h3>


                            <p className="scene-description">

                                CasAI reconoce tu llegada
                                y prepara automáticamente
                                el ambiente.

                            </p>


                            <div
                                ref={(element) => {
                                    actionRefs.current[0] = element
                                }}
                                className="automation-actions"
                            >

                                <span>

                                    <b>01</b>

                                    <strong>📍</strong>

                                    <label>
                                        Presencia detectada
                                        <small>
                                            Entrada reconocida
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>02</b>

                                    <strong>💡</strong>

                                    <label>
                                        Iluminación ajustada
                                        <small>
                                            Escena bienvenida
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>03</b>

                                    <strong>🌡</strong>

                                    <label>
                                        Temperatura optimizada
                                        <small>
                                            Confort automático
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>04</b>

                                    <strong>♪</strong>

                                    <label>
                                        Ambiente preparado
                                        <small>
                                            Rutina personalizada
                                        </small>
                                    </label>

                                </span>

                            </div>

                        </div>

                    </article>


                    {/* ==================================
                        ESCENA 2 — SALIDA
                    ================================== */}

                    <article
                        ref={(element) => {
                            sceneRefs.current[1] = element
                        }}
                        className="automation-scene reverse"
                    >

                        <div
                            ref={(element) => {
                                visualRefs.current[1] = element
                            }}
                            className="scene-visual"
                        >

                            <div className="visual-glow violet" />


                            <div className="scene-image departure-image">

                                <img
                                    src={escena2}
                                    alt="Automatización CasAI al salir de casa"
                                    loading="lazy"
                                />

                                <div className="image-overlay" />


                                <div className="security-orbit">

                                    <span />
                                    <span />
                                    <span />

                                </div>


                                <div className="image-corner top-left" />
                                <div className="image-corner top-right" />
                                <div className="image-corner bottom-left" />
                                <div className="image-corner bottom-right" />

                            </div>

                        </div>


                        <div className="scene-info">

                            <p className="scene-number">
                                02 / SALIDA
                            </p>


                            <h3>
                                Te vas.
                            </h3>


                            <p className="scene-description">

                                Cuando salís, CasAI se ocupa
                                de lo que normalmente
                                olvidarías.

                            </p>


                            <div
                                ref={(element) => {
                                    actionRefs.current[1] = element
                                }}
                                className="automation-actions"
                            >

                                <span>

                                    <b>01</b>

                                    <strong>🚗</strong>

                                    <label>
                                        Salida detectada
                                        <small>
                                            Presencia ausente
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>02</b>

                                    <strong>💡</strong>

                                    <label>
                                        Luces apagadas
                                        <small>
                                            Iluminación optimizada
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>03</b>

                                    <strong>🔒</strong>

                                    <label>
                                        Seguridad activada
                                        <small>
                                            Perímetro protegido
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>04</b>

                                    <strong>⌁</strong>

                                    <label>
                                        Energía optimizada
                                        <small>
                                            Consumo reducido
                                        </small>
                                    </label>

                                </span>

                            </div>

                        </div>

                    </article>


                    {/* ==================================
                        ESCENA 3 — CINE
                    ================================== */}

                    <article
                        ref={(element) => {
                            sceneRefs.current[2] = element
                        }}
                        className="automation-scene"
                    >

                        <div
                            ref={(element) => {
                                visualRefs.current[2] = element
                            }}
                            className="scene-visual"
                        >

                            <div className="visual-glow blue" />


                            <div className="scene-image cinema-image">

                                <img
                                    src={escena3}
                                    alt="Modo Cine automatizado de CasAI"
                                    loading="lazy"
                                />


                                <div className="cinema-light left" />
                                <div className="cinema-light right" />

                                <div className="image-overlay" />


                                <div className="image-corner top-left" />
                                <div className="image-corner top-right" />
                                <div className="image-corner bottom-left" />
                                <div className="image-corner bottom-right" />

                            </div>

                        </div>


                        <div className="scene-info">

                            <p className="scene-number">
                                03 / EXPERIENCIA
                            </p>


                            <h3>
                                Modo Cine.
                            </h3>


                            <p className="scene-description">

                                Una sola acción transforma
                                toda la habitación en
                                tu propio cine.

                            </p>


                            <div
                                ref={(element) => {
                                    actionRefs.current[2] = element
                                }}
                                className="automation-actions"
                            >

                                <span>

                                    <b>01</b>

                                    <strong>🎬</strong>

                                    <label>
                                        Proyector encendido
                                        <small>
                                            Imagen 4K activada
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>02</b>

                                    <strong>💡</strong>

                                    <label>
                                        Luces al 15%
                                        <small>
                                            Iluminación cinematográfica
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>03</b>

                                    <strong>🔊</strong>

                                    <label>
                                        Audio inmersivo
                                        <small>
                                            Dolby Atmos preparado
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>04</b>

                                    <strong>◉</strong>

                                    <label>
                                        Ambiente sincronizado
                                        <small>
                                            Experiencia completa
                                        </small>
                                    </label>

                                </span>

                            </div>

                        </div>

                    </article>


                    {/* ==================================
                        ESCENA 4 — MODO NOCHE
                    ================================== */}

                    <article
                        ref={(element) => {
                            sceneRefs.current[3] = element
                        }}
                        className="automation-scene reverse"
                    >

                        <div
                            ref={(element) => {
                                visualRefs.current[3] = element
                            }}
                            className="scene-visual"
                        >

                            <div className="visual-glow purple" />


                            <div className="scene-image night-image">

                                <img
                                    src={escena4}
                                    alt="Modo Noche automatizado de CasAI"
                                    loading="lazy"
                                />


                                <div className="night-ambient" />


                                <div className="image-overlay" />


                                <div className="image-corner top-left" />
                                <div className="image-corner top-right" />
                                <div className="image-corner bottom-left" />
                                <div className="image-corner bottom-right" />

                            </div>

                        </div>


                        <div className="scene-info">

                            <p className="scene-number">
                                04 / DESCANSO
                            </p>


                            <h3>
                                Modo Noche.
                            </h3>


                            <p className="scene-description">

                                Cuando llega el momento
                                de descansar, tu casa
                                cambia con vos.

                            </p>


                            <div
                                ref={(element) => {
                                    actionRefs.current[3] = element
                                }}
                                className="automation-actions"
                            >

                                <span>

                                    <b>01</b>

                                    <strong>🌙</strong>

                                    <label>
                                        Ambiente nocturno
                                        <small>
                                            Escena de descanso
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>02</b>

                                    <strong>🌡</strong>

                                    <label>
                                        Temperatura nocturna
                                        <small>
                                            Clima optimizado
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>03</b>

                                    <strong>🔐</strong>

                                    <label>
                                        Seguridad nocturna
                                        <small>
                                            Protección activa
                                        </small>
                                    </label>

                                </span>


                                <span>

                                    <b>04</b>

                                    <strong>◌</strong>

                                    <label>
                                        Luces ambientales
                                        <small>
                                            Iluminación relajante
                                        </small>
                                    </label>

                                </span>

                            </div>

                        </div>

                    </article>

                </div>

            </div>

        </section>
    )
}

export default AutomationSection