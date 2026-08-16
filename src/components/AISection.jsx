function AISection(){

    return (

        <section
            id="ia"
            className="ai-section"
        >

            <div className="ai-container">


                <div className="ai-header">

                    <p>
                        INTELIGENCIA ARTIFICIAL
                    </p>


                    <h2>
                        CasAI aprende.
                        <br/>
                        Tu casa evoluciona.
                    </h2>


                    <span>
                        No necesitás programar cada acción.
                        <br/>
                        La inteligencia entiende tus hábitos.
                    </span>

                </div>



                <div className="ai-card">


                    <div className="ai-nodes">


                        <svg
                            className="ai-connections"
                            viewBox="0 0 500 380"
                        >


                            <circle
                                cx="250"
                                cy="190"
                                r="12"
                                fill="#ff4040"
                            />


                            <line
                                x1="250"
                                y1="190"
                                x2="85"
                                y2="85"
                            />


                            <line
                                x1="250"
                                y1="190"
                                x2="415"
                                y2="85"
                            />


                            <line
                                x1="250"
                                y1="190"
                                x2="85"
                                y2="295"
                            />


                            <line
                                x1="250"
                                y1="190"
                                x2="415"
                                y2="295"
                            />


                        </svg>




                        <div className="node node-1">
                            🏠
                            <small>
                                Casa
                            </small>
                        </div>



                        <div className="node node-2">
                            💡
                            <small>
                                Luces
                            </small>
                        </div>



                        <div className="node node-3">
                            🌡️
                            <small>
                                Clima
                            </small>
                        </div>



                        <div className="node node-4">
                            🔒
                            <small>
                                Seguridad
                            </small>
                        </div>



                        <div className="node node-center">

                            🧠

                            <small>
                                CasAI
                            </small>

                        </div>


                    </div>



                    <div className="ai-text">


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