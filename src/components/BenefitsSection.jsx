import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


function BenefitsSection() {


  const sectionRef = useRef(null)
  const stageRef = useRef(null)

  const iconRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const glowRef = useRef(null)
  const dotsRef = useRef([])

  const currentBenefit = useRef(-1)



  const benefits = [

    {
      icon: "⚡",
      title: "Automatización",
      text: "Tu casa actúa automáticamente según sensores, horarios y rutinas.",
      color: "#5f7dff"
    },

    {
      icon: "🛡",
      title: "Seguridad",
      text: "Protección inteligente con cámaras, sensores y alertas en tiempo real.",
      color: "#4dc4ff"
    },

    {
      icon: "🌱",
      title: "Ahorro energético",
      text: "Reducí el consumo de energía utilizando solo lo necesario.",
      color: "#52d98a"
    },

    {
      icon: "📱",
      title: "Control total",
      text: "Controlá absolutamente todo desde cualquier lugar del mundo.",
      color: "#9d6cff"
    },

    {
      icon: "🧠",
      title: "Inteligencia Artificial",
      text: "CasAI aprende tus hábitos para anticiparse a tus necesidades.",
      color: "#ffb347"
    }

  ]

  

  useEffect(()=>{

    ScrollTrigger.getAll().forEach(trigger=>{
        if(trigger.vars.trigger === stageRef.current){
            trigger.kill()
        }
    })

    const icon = iconRef.current
    const title = titleRef.current
    const text = textRef.current
    const glow = glowRef.current
    const dots = dotsRef.current



    function changeBenefit(index){

        const benefit = benefits[index]


        icon.textContent = benefit.icon

        title.textContent = benefit.title

        text.textContent = benefit.text


        gsap.to(glow,{
            background:benefit.color,
            duration:0.4
        })

        dots.forEach((dot, i) => {

        gsap.to(dot,{

            width: i === index ? 70 : 10,

            background: i === index
                ? benefit.color
                : "rgba(255,255,255,.28)",

            opacity: i === index ? 1 : .5,

            duration:.35,

            ease:"power2.out"

        })

    })


        gsap.fromTo(
            icon,
            {
                scale:0.7,
                rotate:-10
            },
            {
                scale:1,
                rotate:0,
                duration:0.35,
                overwrite:true,
                ease:"power3.out"
            }
        )


        gsap.fromTo(
            [title,text],
            {
                opacity:0,
                y:20
            },
            {
                opacity:1,
                y:0,
                duration:0.35,
                overwrite:true
            }
        )

    }



    /*
      Estado inicial
    */

    changeBenefit(0)

    dots.forEach((dot, i) => {

        gsap.set(dot,{

            width: i === 0 ? 70 : 10,

            background: i === 0
                ? benefits[0].color
                : "rgba(255,255,255,.28)",

            opacity: i === 0 ? 1 : .5

        })

    })

    currentBenefit.current = 0



    ScrollTrigger.create({

        trigger:stageRef.current,

        start:"top top",

        end:"+=3000",

        pin:stageRef.current,

        scrub:1,

        anticipatePin:1,

        invalidateOnRefresh:true,



      onUpdate:(self)=>{


        const progress = self.progress



        const index = Math.min(

          Math.floor(
            progress * benefits.length
          ),

          benefits.length - 1

        )



        if(index !== currentBenefit.current){

          currentBenefit.current = index

          changeBenefit(index)

        }


      }


    })



    ScrollTrigger.refresh()



    return ()=>{

      ScrollTrigger.getAll().forEach(trigger=>{

        if(trigger.trigger === stageRef.current){

          trigger.kill()

        }

      })

    }



  },[])





  return (

    <section
        ref={sectionRef}
        id="beneficios"
        className="benefits-section"
    >

        {/* ============================
            HEADER
        ============================ */}

        <div className="benefits-header">

            <p>
                ¿POR QUÉ CASAI?
            </p>

            <h2>
                Mucho más que
                <br />
                domótica.
            </h2>

            <span>
                Un hogar que piensa junto con vos.
            </span>

        </div>


        {/* ============================
            STAGE
        ============================ */}

        <div
            ref={stageRef}
            className="benefits-stage"
        >

            <div className="benefits-sticky">


                {/* TARJETA */}

                <article className="benefit-display">

                    <div
                        ref={glowRef}
                        className="benefit-glow"
                    />

                    <div
                        ref={iconRef}
                        className="benefit-icon"
                    >
                        ⚡
                    </div>

                    <div className="benefit-text">

                        <small>
                            BENEFICIO
                        </small>

                        <h3 ref={titleRef}>
                            Automatización
                        </h3>

                        <p ref={textRef}>
                            Tu casa actúa automáticamente.
                        </p>

                    </div>

                </article>


                {/* INDICADOR */}

                <div className="benefits-progress">

                    {benefits.map((_, index) => (

                        <span
                            key={index}
                            ref={(el) => (dotsRef.current[index] = el)}
                            className="progress-dot"
                        />

                    ))}

                </div>

            </div>

        </div>

    </section>

)

}


export default BenefitsSection