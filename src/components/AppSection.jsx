import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AppSection() {

    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const phoneRef = useRef(null)
    const screenRef = useRef(null)
    const automationPageRef = useRef(null)
    const scenesPageRef = useRef(null)
    const featuresRef = useRef(null)

  useEffect(() => {

    const section = sectionRef.current
    const header = headerRef.current
    const phone = phoneRef.current
    const screen = screenRef.current
    const automationPage = automationPageRef.current
    const scenesPage = scenesPageRef.current
    const features = featuresRef.current
    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=2200',
            scrub: true,
            pin: true,
            anticipatePin: 1
        }
        })

        timeline

        // ========================================
        // 1. EL TÍTULO DESAPARECE
        // ========================================

        .to(
            header,
            {
            opacity: 0,
            y: -80,
            scale: 0.95,
            duration: 0.7
            }
        )

        // ========================================
        // 2. APARECE EL TELÉFONO
        // ========================================

        .fromTo(
            phone,
            {
            y: 180,
            scale: 0.75,
            rotateY: -20,
            opacity: 0
            },
            {
            y: 0,
            scale: 1,
            rotateY: 0,
            opacity: 1,
            duration: 1
            }
        )

        // ========================================
        // 3. APARECEN LAS CARACTERÍSTICAS
        // ========================================

        .fromTo(
        features,
        {
            opacity: 0,
            x: 120
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.8
        },
        '>-0.2'
        )

        // ========================================
        // 4. CAMBIAR HOME → AUTOMATIZACIÓN
        // ========================================

        .to(
            screen,
            {
            opacity: 0,
            scale: 0.96,
            duration: 0.4
            }
        )

        .to(
            automationPage,
            {
            opacity: 1,
            duration: 0.5
            }
        )

        // ========================================
        // 5. AUTOMATIZACIÓN → ESCENAS
        // ========================================

        .to(
            automationPage,
            {
            opacity: 0,
            duration: 0.5
            }
        )

        .to(
            scenesPage,
            {
            opacity: 1,
            duration: 0.5
            }
        )

    }, section)

    return () => ctx.revert()

  }, [])

  return (
    <section
      ref={sectionRef}
      id="app"
      className="app-section"
    >

      {/* ========================================
          HEADER
      ======================================== */}

      <div
        ref={headerRef}
        className="app-header"
        >

        <p>
          CASAI APP
        </p>

        <h2>
          Todo tu hogar.
          <br />
          <span>En tu mano.</span>
        </h2>

        <p className="app-description">
          Controlá, automatizá y monitoreá
          cada espacio de tu casa desde un
          solo lugar.
        </p>

      </div>


      {/* ========================================
          SHOWCASE
      ======================================== */}

      <div className="app-showcase">


        {/* ========================================
            TELÉFONO
        ======================================== */}

        <div
          ref={phoneRef}
          className="phone"
        >

          <div className="phone-camera" />


          {/* ======================================
              PANTALLA DEL TELÉFONO
          ====================================== */}

          <div
            ref={screenRef}
            className="phone-screen"
          >

            {/* INDICADORES */}

            <div className="app-page-indicator">

              <span className="active" />
              <span />
              <span />

            </div>


            {/* ==================================
                PANTALLA PRINCIPAL
            ================================== */}

            <div className="app-top">

              <span>
                CASAI
              </span>

              <span>
                ⋯
              </span>

            </div>


            <div className="app-greeting">

              <span>
                Buenas noches
              </span>

              <strong>
                👋
              </strong>

            </div>


            <div className="home-status">

              <div>

                <span>
                  Casa
                </span>

                <strong>
                  Segura
                </strong>

              </div>

              <div className="status-indicator">
                ●
              </div>

            </div>


            <div className="app-temperature">

              <span>
                Temperatura
              </span>

              <strong>
                23.4°
              </strong>

            </div>


            <div className="app-devices">


              <div className="device-card active">

                <span>
                  💡
                </span>

                <small>
                  Luces
                </small>

                <strong>
                  6 ON
                </strong>

              </div>


              <div className="device-card">

                <span>
                  🌡
                </span>

                <small>
                  Clima
                </small>

                <strong>
                  23°
                </strong>

              </div>


              <div className="device-card">

                <span>
                  🔒
                </span>

                <small>
                  Seguridad
                </small>

                <strong>
                  OK
                </strong>

              </div>


              <div className="device-card">

                <span>
                  🎬
                </span>

                <small>
                  Cine
                </small>

                <strong>
                  OFF
                </strong>

              </div>

            </div>


            <div className="app-scenes">

              <span>
                Escenas
              </span>

              <div className="scene-buttons">

                <button>
                  🏠

                  <small>
                    Casa
                  </small>

                </button>


                <button>
                  🎬

                  <small>
                    Cine
                  </small>

                </button>


                <button>
                  🌙

                  <small>
                    Noche
                  </small>

                </button>

              </div>

            </div>


            <div className="app-bottom">

              <span>
                ⌂
              </span>

              <span>
                ◯
              </span>

              <span>
                ⚙
              </span>

            </div>


          </div>


          {/* ======================================
              PANTALLA AUTOMATIZACIÓN
          ====================================== */}

          <div
            ref={automationPageRef}
            className="automation-page"
          >

            <div className="automation-page-header">

              <span>
                Automatización
              </span>

              <span>
                ×
              </span>

            </div>


            <div className="automation-title">

              <small>
                CUANDO
              </small>

              <strong>
                Detecte movimiento
              </strong>

            </div>


            <div className="automation-arrow">
              ↓
            </div>


            <div className="automation-title">

              <small>
                SI
              </small>

              <strong>
                Es después de las 19:00
              </strong>

            </div>


            <div className="automation-arrow">
              ↓
            </div>


            <div className="automation-title">

              <small>
                ENTONCES
              </small>

              <strong>
                Encender luz al 30%
              </strong>

            </div>


            <button className="automation-save">
              Guardar automatización
            </button>

          </div>


          {/* ======================================
              PANTALLA ESCENAS
          ====================================== */}

          <div
            ref={scenesPageRef}
            className="scenes-page"
          >

            <div className="automation-page-header">

              <span>
                Escenas
              </span>

              <span>
                +
              </span>

            </div>


            <h4>
              Tu casa,
              <br />
              tus momentos.
            </h4>


            <div className="big-scene">

              <span>
                🎬
              </span>

              <strong>
                Modo Cine
              </strong>

              <small>
                Proyector · Audio · Luces
              </small>

            </div>


            <div className="big-scene">

              <span>
                🌙
              </span>

              <strong>
                Modo Noche
              </strong>

              <small>
                Luces · Seguridad · Clima
              </small>

            </div>


            <div className="big-scene">

              <span>
                🏠
              </span>

              <strong>
                Llegué
              </strong>

              <small>
                Luces · Temperatura · Música
              </small>

            </div>

          </div>

        </div>


        {/* ========================================
            CARACTERÍSTICAS
        ======================================== */}

        <div
        ref={featuresRef}
        className="app-features"
        >


          <div className="app-feature">

            <span>
              01
            </span>

            <div>

              <h3>
                Controlá todo.
              </h3>

              <p>
                Luces, climatización, seguridad
                y entretenimiento desde una
                sola aplicación.
              </p>

            </div>

          </div>


          <div className="app-feature">

            <span>
              02
            </span>

            <div>

              <h3>
                Automatizá.
              </h3>

              <p>
                Dejá que CasAI haga las cosas
                por vos automáticamente.
              </p>

            </div>

            

          </div>


          <div className="app-feature">

            <span>
              03
            </span>

            <div>

              <h3>
                Creá escenas.
              </h3>

              <p>
                Prepará tu casa para cualquier
                momento con un solo toque.
              </p>

            </div>

          </div>


        </div>

      </div>

    </section>
  )
}

export default AppSection