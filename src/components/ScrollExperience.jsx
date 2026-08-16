import {
    useEffect,
    useRef
} from "react"

import gsap from "gsap"

import {
    ScrollTrigger
} from "gsap/ScrollTrigger"

import entradaVideo
    from "../assets/videos/entrada-scroll.mp4"


gsap.registerPlugin(
    ScrollTrigger
)


function ScrollExperience() {

    const sectionRef =
        useRef(null)

    const videoRef =
        useRef(null)

    const transitionRef =
        useRef(null)


    useEffect(() => {

        const section =
            sectionRef.current

        const video =
            videoRef.current

        const transition =
            transitionRef.current

        const hero =
            document.getElementById("inicio")


        if (
            !section ||
            !video ||
            !transition ||
            !hero
        ) {
            return
        }


        /*
        ==================================================
        SIGUIENTE SECCIÓN
        ==================================================
        */

        const nextSection =
            section.nextElementSibling


        if (!nextSection) {
            return
        }


        /*
        ==================================================
        CONTEXTO GSAP
        ==================================================
        */

        const ctx =
            gsap.context(() => {


                /*
                ==================================================
                CONFIGURACIÓN
                ==================================================
                */

                const scrollDistance =
                    3000


                /*
                ==================================================
                ESTADO VIDEO
                ==================================================
                */

                let videoReady =
                    false

                let lastVideoTime =
                    -1

                let requestedVideoTime =
                    0

                let videoFramePending =
                    false


                /*
                ==================================================
                ACTUALIZACIÓN DEL VIDEO
                ==================================================

                El video no se actualiza en cada evento
                de scroll.

                Se espera al siguiente frame del navegador.

                Esto evita saturar el decoder del video
                cuando el usuario hace scroll rápido.
                */

                const renderVideo =
                    () => {

                        videoFramePending =
                            false


                        if (
                            !videoReady ||
                            !video.duration ||
                            !isFinite(video.duration)
                        ) {
                            return
                        }


                        const difference =
                            Math.abs(
                                requestedVideoTime -
                                lastVideoTime
                            )


                        /*
                        Ignoramos cambios microscópicos.
                        */

                        if (
                            difference <
                            0.025
                        ) {
                            return
                        }


                        lastVideoTime =
                            requestedVideoTime


                        video.currentTime =
                            requestedVideoTime

                    }


                /*
                ==================================================
                SOLICITAR FRAME
                ==================================================
                */

                const requestVideoFrame =
                    (time) => {

                        requestedVideoTime =
                            time


                        if (
                            videoFramePending
                        ) {
                            return
                        }


                        videoFramePending =
                            true


                        requestAnimationFrame(
                            renderVideo
                        )

                    }



                /*
                ==================================================
                ESTADO INICIAL
                ==================================================
                */

                gsap.set(
                    video,
                    {
                        opacity: 1,
                        scale: 1,
                        force3D: true
                    }
                )


                gsap.set(
                    transition,
                    {
                        opacity: 0
                    }
                )


                /*
                ==================================================
                ABOUT INICIAL
                ==================================================

                El About se coloca físicamente encima
                de la posición que ocuparía después
                del pin.

                Así no aparece un espacio negro.
                */

                gsap.set(
                    nextSection,
                    {

                        opacity: 0,

                        y: 80,

                        marginTop:
                            "-100vh",

                        clipPath:
                            "inset(100% 0% 0% 0%)",

                        force3D: true

                    }
                )



                /*
                ==================================================
                TIMELINE CINEMATOGRÁFICA
                ==================================================

                0%  - 15%
                Presentación de la casa

                15% - 30%
                Activación

                30% - 55%
                Automatización

                55% - 75%
                Red CasAI

                75% - 92%
                Reveal

                92% - 100%
                About
                */

                const timeline =
                    gsap.timeline({
                        paused: true
                    })


                /*
                ==================================================
                VIDEO
                ==================================================

                El video simplemente acompaña
                el progreso de la timeline.

                No usamos scrub.
                */

                timeline.to(
                    {},
                    {
                        duration: 15,
                        ease: "none",

                        onUpdate: function () {

                            if (
                                !videoReady ||
                                !video.duration
                            ) {
                                return
                            }


                            const progress =
                                this.progress()


                            requestVideoFrame(
                                progress *
                                video.duration
                            )

                        }

                    }
                )



                /*
                ==================================================
                SCROLLTRIGGER
                ==================================================
                */

                const trigger =
                    ScrollTrigger.create({

                        trigger:
                            section,

                        start:
                            "top top",

                        end:
                            `+=${scrollDistance}`,

                        pin:
                            true,

                        pinSpacing:
                            true,

                        scrub:
                            0.8,

                        anticipatePin:
                            1,

                        invalidateOnRefresh:
                            true,


                        onUpdate:
                            (self) => {

                                const progress =
                                    self.progress


                                /*
                                ==================================
                                TIMELINE
                                ==================================
                                */

                                timeline.progress(
                                    progress
                                )



                                /*
                                ==================================
                                HERO
                                ==================================
                                */

                                const heroEnd =
                                    0.06


                                const heroProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        progress /
                                        heroEnd

                                    )


                                gsap.set(
                                    hero,
                                    {

                                        opacity:
                                            1 -
                                            heroProgress,

                                        force3D:
                                            true

                                    }
                                )


                                hero.style.pointerEvents =
                                    heroProgress >= 1
                                        ? "none"
                                        : "auto"



                                /*
                                ==================================
                                ETAPA 1
                                ==================================

                                0% → 15%

                                Presentación limpia
                                de la casa.
                                */

                                const cinematicProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        progress /
                                        0.15

                                    )


                                /*
                                ==================================
                                ETAPA 2
                                ==================================

                                15% → 30%

                                */

                                const activationProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        (
                                            progress -
                                            0.15
                                        ) /
                                        0.15

                                    )



                                /*
                                ==================================
                                ETAPA 3
                                ==================================

                                30% → 55%

                                */

                                const automationProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        (
                                            progress -
                                            0.30
                                        ) /
                                        0.25

                                    )



                                /*
                                ==================================
                                ETAPA 4
                                ==================================

                                55% → 75%

                                */

                                const networkProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        (
                                            progress -
                                            0.55
                                        ) /
                                        0.20

                                    )



                                /*
                                ==================================
                                ETAPA 5
                                ==================================

                                75% → 92%

                                */

                                const revealProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        (
                                            progress -
                                            0.75
                                        ) /
                                        0.17

                                    )



                                /*
                                ==================================
                                VIDEO
                                ==================================

                                El video comienza a
                                desaparecer lentamente
                                durante el reveal final.

                                */

                                const videoFadeStart =
                                    0.78


                                const videoFadeProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        (
                                            progress -
                                            videoFadeStart
                                        ) /
                                        0.17

                                    )


                                const videoOpacity =
                                    1 -
                                    videoFadeProgress


                                const videoScale =
                                    1 +
                                    (
                                        videoFadeProgress *
                                        0.025
                                    )


                                gsap.set(
                                    video,
                                    {

                                        opacity:
                                            videoOpacity,

                                        scale:
                                            videoScale,

                                        force3D:
                                            true

                                    }
                                )



                                /*
                                ==================================
                                ABOUT
                                ==================================

                                92% → 100%

                                El About entra muy tarde,
                                después del reveal.
                                */

                                const aboutStart =
                                    0.92


                                const aboutProgress =
                                    gsap.utils.clamp(

                                        0,
                                        1,

                                        (
                                            progress -
                                            aboutStart
                                        ) /
                                        0.08

                                    )


                                /*
                                ==================================
                                ABOUT Y
                                ==================================
                                */

                                const aboutY =
                                    70 *
                                    (
                                        1 -
                                        aboutProgress
                                    )


                                /*
                                ==================================
                                ABOUT OPACITY
                                ==================================
                                */

                                const aboutOpacity =
                                    aboutProgress


                                /*
                                ==================================
                                ABOUT REVEAL
                                ==================================
                                */

                                const aboutReveal =
                                    45 *
                                    (
                                        1 -
                                        aboutProgress
                                    )


                                gsap.set(
                                    nextSection,
                                    {

                                        opacity:
                                            aboutOpacity,

                                        y:
                                            aboutY,

                                        clipPath:
                                            `inset(${aboutReveal}% 0% 0% 0%)`,

                                        force3D:
                                            true

                                    }
                                )

                            }

                    })



                /*
                ==================================================
                METADATA DEL VIDEO
                ==================================================
                */

                const setInitialFrame =
                    () => {

                        if (
                            video.readyState >= 1
                        ) {

                            videoReady =
                                true


                            video.currentTime =
                                0


                            lastVideoTime =
                                0


                            requestedVideoTime =
                                0

                        }

                    }


                if (
                    video.readyState >= 1
                ) {

                    setInitialFrame()

                } else {

                    video.addEventListener(

                        "loadedmetadata",

                        setInitialFrame,

                        {
                            once: true
                        }

                    )

                }



                /*
                ==================================================
                REFRESH
                ==================================================
                */

                const refreshTimer =
                    setTimeout(() => {

                        ScrollTrigger.refresh()

                    }, 500)



                /*
                ==================================================
                CLEANUP
                ==================================================
                */

                return () => {

                    trigger.kill()

                    timeline.kill()

                    clearTimeout(
                        refreshTimer
                    )

                    video.removeEventListener(
                        "loadedmetadata",
                        setInitialFrame
                    )

                }

            }, section)



        /*
        ==================================================
        CLEANUP CONTEXTO
        ==================================================
        */

        return () => {

            ctx.revert()

        }

    }, [])



    /*
    ==================================================
    JSX
    ==================================================
    */

    return (

        <section
            ref={sectionRef}
            id="scroll-experience"
            className="scroll-experience"
        >

            <video

                ref={videoRef}

                className="scroll-experience-video"

                src={entradaVideo}

                muted

                playsInline

                preload="auto"

            />


            <div
                ref={transitionRef}
                className="scroll-experience-transition"
            />

        </section>

    )

}


export default ScrollExperience