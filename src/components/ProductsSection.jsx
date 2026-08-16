import productosVideo from "../assets/videos/productos.webm"


function ProductsSection() {

  return (

    <section
      id="productos"
      className="products-section"
    >

      <div className="products-video-wrapper">

        <video
          className="products-video"
          src={productosVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Degradados para integrar el video con el fondo */}
        <div className="products-video-fade products-video-fade-top"></div>

        <div className="products-video-fade products-video-fade-bottom"></div>

        <div className="products-video-fade products-video-fade-left"></div>

        <div className="products-video-fade products-video-fade-right"></div>


        {/* BOTÓN CENTRAL */}

        <button
          className="products-button"
          onClick={() => {
            document
              .getElementById("productos-catalogo")
              ?.scrollIntoView({
                behavior: "smooth"
              })
          }}
        >

          <span>
            PRODUCTOS
          </span>

          <span className="products-button-arrow">
            →
          </span>

        </button>

      </div>


      

    </section>

  )

}

export default ProductsSection