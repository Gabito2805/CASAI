import { useEffect, useRef } from "react"

function FinalBrand() {

    const sectionRef = useRef(null)
    const wordRef = useRef(null)

    useEffect(() => {

        const section = sectionRef.current
        const word = wordRef.current

        if (!section || !word) return


        const handleMouseMove = (event) => {

            const rect = word.getBoundingClientRect()

            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            word.style.setProperty(
                "--mouse-x",
                `${x}px`
            )

            word.style.setProperty(
                "--mouse-y",
                `${y}px`
            )

            word.style.setProperty(
                "--mouse-opacity",
                "1"
            )

        }


        const handleMouseLeave = () => {

            word.style.setProperty(
                "--mouse-opacity",
                "0"
            )

        }


        section.addEventListener(
            "mousemove",
            handleMouseMove
        )

        section.addEventListener(
            "mouseleave",
            handleMouseLeave
        )


        return () => {

            section.removeEventListener(
                "mousemove",
                handleMouseMove
            )

            section.removeEventListener(
                "mouseleave",
                handleMouseLeave
            )

        }

    }, [])


    return (

        <section
            ref={sectionRef}
            className="final-brand-section"
        >

            <div className="final-brand-content">

                <p className="final-brand-label">
                    INTELLIGENT LIVING SYSTEM
                </p>


                <div
                    ref={wordRef}
                    className="final-brand-word"
                >

                    <span className="final-brand-base">
                        CASAI
                    </span>


                    <span
                        className="final-brand-light"
                        aria-hidden="true"
                    >
                        CASAI
                    </span>

                </div>

            </div>

        </section>

    )

}

export default FinalBrand