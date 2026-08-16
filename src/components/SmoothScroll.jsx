import { useEffect } from "react"

import Lenis from "lenis"

import gsap from "gsap"

import {
    ScrollTrigger
} from "gsap/ScrollTrigger"


gsap.registerPlugin(
    ScrollTrigger
)


function SmoothScroll() {

    useEffect(() => {

        const lenis =
            new Lenis({

                duration: 1.8,

                smoothWheel: true,

                syncTouch: true,

                wheelMultiplier: 0.7,

                touchMultiplier: 1.0

            })


        /*
        ==========================================
        LENIS → GSAP
        ==========================================
        */

        lenis.on(
            "scroll",
            ScrollTrigger.update
        )


        /*
        ==========================================
        ANIMACIÓN LENIS
        ==========================================
        */

        const update =
            (time) => {

                lenis.raf(
                    time * 1000
                )

            }


        gsap.ticker.add(
            update
        )


        /*
        ==========================================
        EVITAR SALTOS
        ==========================================
        */

        gsap.ticker.lagSmoothing(
            0
        )


        /*
        ==========================================
        LIMPIEZA
        ==========================================
        */

        return () => {

            gsap.ticker.remove(
                update
            )

            lenis.destroy()

        }

    }, [])


    return null

}


export default SmoothScroll