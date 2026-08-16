function InspirationSection() {

    const rooms = [

        {
            title: "Cocina",
            subtitle: "Todo bajo control",
            className: "kitchen"
        },

        {
            title: "Dormitorio",
            subtitle: "Descanso automático",
            className: "bedroom"
        },

        {
            title: "Living",
            subtitle: "Confort inteligente",
            className: "living"
        },

        {
            
            title: "Baño",
            subtitle: "Bienestar y confort",
            className: "bathroom"
        },

        {
            title: "Área de lavado",
            subtitle: "Eficiencia y practicidad",
            className: "laundry"
        },

        {
            
            title: "Exterior",
            subtitle: "Seguridad y comodidad",
            className: "garden"
        },

        {
            title: "Oficina",
            subtitle: "Productividad y concentración",
            className: "office"
        }

    ]



    return (

        <section
            id="inspiracion"
            className="inspiration-section"
        >

            <div className="inspiration-header">

                <p>
                    INSPIRATE
                </p>

                <h2>

                    Así podría verse
                    <br />
                    tu hogar.

                </h2>

                <span>

                    Cada espacio cobra vida
                    cuando trabaja para vos.

                </span>

            </div>



            <div className="inspiration-grid">

                {rooms.map((room) => (

                    <article
                        key={room.title}
                        className={`inspiration-card ${room.className}`}
                    >

                        <div className="card-overlay" />

                        <div className="card-content">

                            <small>

                                {room.subtitle}

                            </small>

                            <h3>

                                {room.title}

                            </h3>

                            <button>

                                Ver automatizaciones →

                            </button>

                        </div>

                    </article>

                ))}

            </div>

        </section>

    )

}

export default InspirationSection