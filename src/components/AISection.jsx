import {
    useCallback,
    useEffect,
    useId,
    useMemo,
    useState
} from "react"

import { motion } from "framer-motion"

import {
    Lightbulb,
    Thermometer,
    ShieldCheck,
    Sparkles,
    RadioTower,
    House,
    Workflow
} from "lucide-react"



/* =========================================================
   TYPEWRITER
========================================================= */

const TYPEWRITER_PHRASES = [

    "y hace tu vida simple.",
    "y tu casa evoluciona.",
    "y hace tu vida fácil.",
    "y se adapta a vos.",
    "y aprende tus rutinas.",
    "y anticipa lo que necesitás.",
    "y automatiza tu día.",
    "y conecta todo por vos."

]



/* =========================================================
   CIRCUIT BOARD
========================================================= */

function CircuitBoard({

    nodes,
    connections,

    width = 760,
    height = 430,

    gridSize = 22,

    showGrid = true,

    gridColor = "rgba(130,165,255,.055)",

    traceColor = "rgba(115,145,255,.22)",

    pulseColor = "rgba(155,205,255,.95)",

    pulseSpeed = 2.8,

    traceWidth = 1.4

}) {


    /* =====================================================
       UNIQUE SVG IDS

       Evita conflictos si este componente
       aparece más de una vez.
    ===================================================== */

    const reactId =
        useId()

    const safeId =
        reactId.replace(/:/g, "")

    const gridId =
        `aiCircuitGrid-${safeId}`

    const glowId =
        `aiCircuitGlow-${safeId}`



    /* =====================================================
       NODE MAP
    ===================================================== */

    const nodeMap = useMemo(() => {

        return new Map(

            nodes.map((node) => [
                node.id,
                node
            ])

        )

    }, [nodes])



    /* =====================================================
       NODE SIZE
    ===================================================== */

    const getNodeSize = useCallback((size) => {

        switch (size) {

            case "sm":
                return 44


            case "lg":
                return 82


            default:
                return 58

        }

    }, [])



    /* =====================================================
       CIRCUIT PATH

       IMPORTANTE:

       El path SIEMPRE se construye:

       FROM → TO

       Por eso después animateMotion puede seguir
       exactamente la dirección definida.
    ===================================================== */

    const calculatePath = useCallback((from, to) => {

        const fromSize =
            getNodeSize(from.size) / 2 + 5

        const toSize =
            getNodeSize(to.size) / 2 + 5


        const dx =
            to.x - from.x

        const dy =
            to.y - from.y


        let startX =
            from.x

        let startY =
            from.y

        let endX =
            to.x

        let endY =
            to.y



        /* =================================================
           MAYOR DISTANCIA HORIZONTAL
        ================================================= */

        if (
            Math.abs(dx) >
            Math.abs(dy)
        ) {

            startX =
                from.x +
                (
                    dx > 0
                        ? fromSize
                        : -fromSize
                )


            endX =
                to.x +
                (
                    dx > 0
                        ? -toSize
                        : toSize
                )


            const midX =
                from.x +
                dx / 2


            return `
                M ${startX} ${startY}
                H ${midX}
                V ${endY}
                H ${endX}
            `

        }



        /* =================================================
           MAYOR DISTANCIA VERTICAL
        ================================================= */

        startY =
            from.y +
            (
                dy > 0
                    ? fromSize
                    : -fromSize
            )


        endY =
            to.y +
            (
                dy > 0
                    ? -toSize
                    : toSize
            )


        const midY =
            from.y +
            dy / 2


        return `
            M ${startX} ${startY}
            V ${midY}
            H ${endX}
            V ${endY}
        `

    }, [getNodeSize])



    /* =====================================================
       STATUS COLORS
    ===================================================== */

    const getStatusColor = (status) => {

        switch (status) {

            case "active":

                return "rgba(170,210,255,.95)"


            case "processing":

                return "rgba(115,165,255,.95)"


            case "inactive":

                return "rgba(140,150,180,.48)"


            default:

                return "rgba(160,190,255,.72)"

        }

    }



    return (

        <div

            className="ai-circuit-board"

            style={{
                width,
                height
            }}

        >


            {/* =================================================
                SVG
            ================================================= */}

            <svg

                className="ai-circuit-svg"

                width={width}

                height={height}

                viewBox={`0 0 ${width} ${height}`}

                aria-hidden="true"

            >


                <defs>


                    {/* =========================================
                        GRID
                    ========================================= */}

                    {showGrid && (

                        <pattern

                            id={gridId}

                            width={gridSize}

                            height={gridSize}

                            patternUnits="userSpaceOnUse"

                        >

                            <circle

                                cx={gridSize / 2}

                                cy={gridSize / 2}

                                r=".7"

                                fill={gridColor}

                            />

                        </pattern>

                    )}



                    {/* =========================================
                        LIGHT GLOW
                    ========================================= */}

                    <filter

                        id={glowId}

                        x="-300%"

                        y="-300%"

                        width="700%"

                        height="700%"

                    >

                        <feGaussianBlur
                            stdDeviation="4"
                            result="blur"
                        />


                        <feMerge>

                            <feMergeNode in="blur" />

                            <feMergeNode in="SourceGraphic" />

                        </feMerge>

                    </filter>


                </defs>



                {/* =================================================
                    GRID
                ================================================= */}

                {showGrid && (

                    <rect

                        width={width}

                        height={height}

                        fill={`url(#${gridId})`}

                    />

                )}



                {/* =================================================
                    CONNECTIONS
                ================================================= */}

                {connections.map((connection, index) => {


                    const fromNode =
                        nodeMap.get(
                            connection.from
                        )


                    const toNode =
                        nodeMap.get(
                            connection.to
                        )


                    if (
                        !fromNode ||
                        !toNode
                    ) {

                        return null

                    }



                    /*
                       El path nace literalmente en FROM
                       y termina literalmente en TO.
                    */

                    const path =
                        calculatePath(
                            fromNode,
                            toNode
                        )



                    const duration =
                        connection.speed ??
                        pulseSpeed



                    const delay =
                        connection.delay ??
                        index * .18



                    const lightColor =
                        connection.pulseColor ??
                        pulseColor



                    return (

                        <g
                            key={
                                connection.id ??
                                `${connection.from}-${connection.to}-${index}`
                            }
                        >


                            {/* =====================================
                                STATIC TRACE
                            ===================================== */}

                            <motion.path

                                d={path}

                                fill="none"

                                stroke={
                                    connection.color ||
                                    traceColor
                                }

                                strokeWidth={
                                    traceWidth
                                }

                                strokeLinecap="round"

                                strokeLinejoin="round"

                                initial={{
                                    pathLength: 0,
                                    opacity: 0
                                }}

                                animate={{
                                    pathLength: 1,
                                    opacity: 1
                                }}

                                transition={{
                                    duration: 1.1,
                                    delay: index * .08,
                                    ease: "easeOut"
                                }}

                            />



                            {/* =====================================
                                MOVING LIGHT — OUTER GLOW
                            ===================================== */}

                            {connection.animated !== false && (

                                <circle

                                    r={
                                        connection.lightSize ??
                                        5
                                    }

                                    fill={lightColor}

                                    opacity=".20"

                                    filter={`url(#${glowId})`}

                                >

                                    <animateMotion

                                        dur={`${duration}s`}

                                        begin={`${delay}s`}

                                        repeatCount="indefinite"

                                        path={path}

                                        rotate="auto"

                                    />

                                </circle>

                            )}



                            {/* =====================================
                                MOVING LIGHT — MID GLOW
                            ===================================== */}

                            {connection.animated !== false && (

                                <circle

                                    r={
                                        connection.lightCoreSize ??
                                        3.3
                                    }

                                    fill={lightColor}

                                    opacity=".60"

                                    filter={`url(#${glowId})`}

                                >

                                    <animateMotion

                                        dur={`${duration}s`}

                                        begin={`${delay}s`}

                                        repeatCount="indefinite"

                                        path={path}

                                        rotate="auto"

                                    />

                                </circle>

                            )}



                            {/* =====================================
                                MOVING LIGHT — BRIGHT CORE
                            ===================================== */}

                            {connection.animated !== false && (

                                <circle

                                    r={
                                        connection.lightHeadSize ??
                                        1.7
                                    }

                                    fill="rgba(245,251,255,1)"

                                >

                                    <animateMotion

                                        dur={`${duration}s`}

                                        begin={`${delay}s`}

                                        repeatCount="indefinite"

                                        path={path}

                                        rotate="auto"

                                    />

                                </circle>

                            )}


                        </g>

                    )

                })}


            </svg>



            {/* =================================================
                NODES
            ================================================= */}

            {nodes.map((node, index) => {


                const size =
                    getNodeSize(
                        node.size
                    )


                const statusColor =
                    getStatusColor(
                        node.status
                    )


                return (

                    <motion.div

                        key={node.id}

                        className={
                            node.main
                                ? "ai-circuit-node ai-circuit-node-main"
                                : "ai-circuit-node"
                        }

                        style={{

                            left:
                                node.x -
                                size / 2,

                            top:
                                node.y -
                                size / 2,

                            width:
                                size,

                            height:
                                size,

                            "--node-color":
                                statusColor

                        }}

                        initial={{
                            scale: 0,
                            opacity: 0
                        }}

                        animate={{
                            scale: 1,
                            opacity: 1
                        }}

                        transition={{

                            delay:
                                .4 +
                                index * .08,

                            type:
                                "spring",

                            damping:
                                16,

                            stiffness:
                                180

                        }}

                    >


                        {/* =========================================
                            SURFACE
                        ========================================= */}

                        <div
                            className="ai-circuit-node-surface"
                        />



                        {/* =========================================
                            PROCESSING
                        ========================================= */}

                        {node.status === "processing" && (

                            <motion.div

                                className="ai-circuit-node-pulse"

                                animate={{

                                    opacity: [
                                        .12,
                                        .38,
                                        .12
                                    ],

                                    scale: [
                                        .9,
                                        1.12,
                                        .9
                                    ]

                                }}

                                transition={{

                                    duration:
                                        2,

                                    repeat:
                                        Infinity,

                                    ease:
                                        "easeInOut"

                                }}

                            />

                        )}



                        {/* =========================================
                            ACTIVE GLOW
                        ========================================= */}

                        {node.status === "active" && (

                            <motion.div

                                className="ai-circuit-node-glow"

                                animate={{

                                    opacity: [
                                        .35,
                                        .8,
                                        .35
                                    ]

                                }}

                                transition={{

                                    duration:
                                        2.8,

                                    repeat:
                                        Infinity,

                                    ease:
                                        "easeInOut"

                                }}

                            />

                        )}



                        {/* =========================================
                            ICON
                        ========================================= */}

                        <div
                            className="ai-circuit-node-content"
                        >

                            <span
                                className="ai-circuit-node-icon"
                            >

                                {node.icon}

                            </span>

                        </div>



                        {/* =========================================
                            LABEL
                        ========================================= */}

                        {node.label && (

                            <span
                                className="ai-circuit-node-label"
                            >

                                {node.label}

                            </span>

                        )}


                    </motion.div>

                )

            })}


        </div>

    )

}



/* =========================================================
   AI SECTION
========================================================= */

function AISection() {


    /* =====================================================
       TYPEWRITER STATE
    ===================================================== */

    const [phraseIndex, setPhraseIndex] =
        useState(0)


    const [displayText, setDisplayText] =
        useState("")


    const [isDeleting, setIsDeleting] =
        useState(false)



    /* =====================================================
       TYPEWRITER
    ===================================================== */

    useEffect(() => {

        const currentPhrase =
            TYPEWRITER_PHRASES[
                phraseIndex
            ]


        let delay =
            isDeleting
                ? 35
                : 70



        if (
            !isDeleting &&
            displayText === currentPhrase
        ) {

            delay =
                1800

        }



        if (
            isDeleting &&
            displayText === ""
        ) {

            delay =
                350

        }



        const timeout =
            setTimeout(() => {


                if (!isDeleting) {


                    if (
                        displayText.length <
                        currentPhrase.length
                    ) {

                        setDisplayText(

                            currentPhrase.slice(
                                0,
                                displayText.length + 1
                            )

                        )

                    }

                    else {

                        setIsDeleting(
                            true
                        )

                    }


                }

                else {


                    if (
                        displayText.length >
                        0
                    ) {

                        setDisplayText(

                            currentPhrase.slice(
                                0,
                                displayText.length - 1
                            )

                        )

                    }

                    else {

                        setIsDeleting(
                            false
                        )


                        setPhraseIndex(

                            (current) =>
                                (
                                    current + 1
                                ) %
                                TYPEWRITER_PHRASES.length

                        )

                    }


                }


            }, delay)



        return () =>
            clearTimeout(timeout)


    }, [
        displayText,
        isDeleting,
        phraseIndex
    ])



    /* =====================================================
       NODES
    ===================================================== */

    const circuitNodes = useMemo(() => [

        /* =================================================
           LUCES
        ================================================= */

        {
            id:
                "lights",

            x:
                100,

            y:
                95,

            label:
                "Luces",

            icon:

                <Lightbulb
                    size={24}
                    strokeWidth={1.7}
                />,

            status:
                "active",

            size:
                "md"
        },



        /* =================================================
           CLIMA
        ================================================= */

        {
            id:
                "climate",

            x:
                100,

            y:
                215,

            label:
                "Clima",

            icon:

                <Thermometer
                    size={24}
                    strokeWidth={1.7}
                />,

            status:
                "active",

            size:
                "md"
        },



        /* =================================================
           SEGURIDAD
        ================================================= */

        {
            id:
                "security",

            x:
                100,

            y:
                335,

            label:
                "Seguridad",

            icon:

                <ShieldCheck
                    size={24}
                    strokeWidth={1.7}
                />,

            status:
                "active",

            size:
                "md"
        },



        /* =================================================
           CASAI
        ================================================= */

        {
            id:
                "casai",

            x:
                380,

            y:
                215,

            label:
                "CasAI",

            icon:

                <Sparkles
                    size={34}
                    strokeWidth={1.6}
                />,

            status:
                "processing",

            size:
                "lg",

            main:
                true
        },



        /* =================================================
           SENSORES
        ================================================= */

        {
            id:
                "sensors",

            x:
                655,

            y:
                95,

            label:
                "Sensores",

            icon:

                <RadioTower
                    size={24}
                    strokeWidth={1.7}
                />,

            status:
                "active",

            size:
                "md"
        },



        /* =================================================
           HOGAR
        ================================================= */

        {
            id:
                "home",

            x:
                655,

            y:
                215,

            label:
                "Hogar",

            icon:

                <House
                    size={24}
                    strokeWidth={1.7}
                />,

            status:
                "active",

            size:
                "md"
        },



        /* =================================================
           RUTINAS
        ================================================= */

        {
            id:
                "routines",

            x:
                655,

            y:
                335,

            label:
                "Rutinas",

            icon:

                <Workflow
                    size={24}
                    strokeWidth={1.7}
                />,

            status:
                "active",

            size:
                "md"
        }

    ], [])



    /* =====================================================
       CONNECTIONS

       AHORA LA REGLA ES LITERAL:

       from = DE DÓNDE SALE LA LUZ
       to   = A DÓNDE LLEGA LA LUZ
    ===================================================== */

    const circuitConnections = useMemo(() => [

        /* =================================================
           CASAI → LUCES
        ================================================= */

        {
            id:
                "casai-lights",

            from:
                "casai",

            to:
                "lights",

            animated:
                true,

            speed:
                2.8,

            delay:
                0
        },



        /* =================================================
           CASAI → CLIMA
        ================================================= */

        {
            id:
                "casai-climate",

            from:
                "casai",

            to:
                "climate",

            animated:
                true,

            speed:
                2.8,

            delay:
                .35
        },



        /* =================================================
           CASAI → SEGURIDAD
        ================================================= */

        {
            id:
                "casai-security",

            from:
                "casai",

            to:
                "security",

            animated:
                true,

            speed:
                2.8,

            delay:
                .7
        },



        /* =================================================
           CASAI → HOGAR
        ================================================= */

        {
            id:
                "casai-home",

            from:
                "casai",

            to:
                "home",

            animated:
                true,

            speed:
                2.8,

            delay:
                1.05
        },



        /* =================================================
           SENSORES → CASAI
        ================================================= */

        {
            id:
                "sensors-casai",

            from:
                "sensors",

            to:
                "casai",

            animated:
                true,

            speed:
                3,

            delay:
                .2
        },



        /* =================================================
           RUTINAS → CASAI
        ================================================= */

        {
            id:
                "routines-casai",

            from:
                "routines",

            to:
                "casai",

            animated:
                true,

            speed:
                3,

            delay:
                .65
        },



        /* =================================================
           SEGURIDAD → CASAI
        ================================================= */

        {
            id:
                "security-casai",

            from:
                "security",

            to:
                "casai",

            animated:
                true,

            speed:
                3.2,

            delay:
                1.15,

            pulseColor:
                "rgba(125,190,255,.92)"
        },



        /* =================================================
           HOGAR → CASAI
        ================================================= */

        {
            id:
                "home-casai",

            from:
                "home",

            to:
                "casai",

            animated:
                true,

            speed:
                3.2,

            delay:
                1.55,

            pulseColor:
                "rgba(125,190,255,.92)"
        }

    ], [])



    return (

        <section
            id="ia"
            className="ai-section"
        >


            <div
                className="ai-container"
            >


                {/* =========================================
                    HEADER
                ========================================= */}

                <div
                    className="ai-header"
                >


                    <p
                        className="ai-label"
                    >

                        INTELIGENCIA ARTIFICIAL

                    </p>



                    <h2>


                        <span
                            className="ai-title-fixed"
                        >

                            CasAI aprende.

                        </span>



                        <span
                            className="ai-typewriter-line"
                        >


                            <span
                                className="ai-typewriter-text"
                            >

                                {displayText}

                            </span>



                            <span

                                className="ai-typewriter-cursor"

                                aria-hidden="true"

                            />


                        </span>


                    </h2>



                    <span
                        className="ai-header-description"
                    >

                        No necesitás programar cada acción.

                        <br />

                        La inteligencia entiende tus hábitos.

                    </span>


                </div>



                {/* =========================================
                    CARD
                ========================================= */}

                <div
                    className="ai-card"
                >


                    {/* =====================================
                        CIRCUIT
                    ===================================== */}

                    <div
                        className="ai-circuit-viewport"
                    >


                        <div
                            className="ai-circuit-stage"
                        >


                            <CircuitBoard

                                nodes={
                                    circuitNodes
                                }

                                connections={
                                    circuitConnections
                                }

                                width={
                                    760
                                }

                                height={
                                    430
                                }

                                gridSize={
                                    22
                                }

                                showGrid={
                                    true
                                }

                                gridColor="
                                    rgba(125,155,255,.055)
                                "

                                traceColor="
                                    rgba(110,145,255,.22)
                                "

                                pulseColor="
                                    rgba(165,215,255,.96)
                                "

                                traceWidth={
                                    1.35
                                }

                                pulseSpeed={
                                    3
                                }

                            />


                        </div>


                    </div>



                    {/* =====================================
                        TEXT
                    ===================================== */}

                    <div
                        className="ai-text"
                    >


                        <h3>

                            Aprende tus rutinas

                        </h3>



                        <p>

                            Detecta patrones, analiza tus hábitos
                            y comienza a anticiparse a tus necesidades.

                        </p>


                    </div>


                </div>


            </div>


        </section>

    )

}


export default AISection