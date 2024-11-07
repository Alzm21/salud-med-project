import "./styles/Description.css"

const Description = () => {
  return (
    <div className="description">
      <section className="content-section">
        <div className="content-container">
          <h2 className="content-title">¡Cuidamos de ti y de tu salud!</h2>
          <hr className="content-underline" />
          <p className="content-description">
            En Salud-Med, creemos que todos merecen acceso a una atención de calidad, sin excepciones.
            Nuestro compromiso es brindar un servicio médico profesional, con una calidez humana que hace la diferencia.
            Nos dedicamos a cuidar a quienes más lo necesitan.
          </p>
          <a href="/nosotros/quienes-somos" className="content-link">Conoce sobre nosotros →</a>
        </div>
          <div className="content-image">
            <img src="/images/martha-dominguez-de-gouveia-nMyM7fxpokE-unsplash.webp" alt="" />
          </div>
      </section>
      <section className="content-section">
        <div className="content-image">
          <img src="/images/lucas-vasques-9vnACvX2748-unsplash.webp" alt="" />
        </div>
        <div className="content-container">
          <h2 className="content-title">Atención profesional para quienes más lo necesitan</h2>
          <hr className="content-underline" />
          <p className="content-description">
            Nos esforzamos para que cada paciente se sienta seguro, atendido y valorado. Porque la salud no es un privilegio,
            es un derecho. Nuestro equipo está aquí para servirte con dedicación y experiencia, cuidando cada aspecto de tu bienestar.
          </p>
          <a href="/contacto" className="content-link">Encuentranos en →</a>
        </div>
      </section>
    </div>
  )
}

export default Description