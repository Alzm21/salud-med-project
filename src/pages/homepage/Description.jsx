import { Link } from "react-router-dom"
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

          </p>
          <Link to="/nosotros/quienes-somos" className="content-link">CONOCE SOBRE NOSOTROS →</Link>
        </div>
        <div className="content-image-01"></div>
      </section>
      <section className="content-section">
        <div className="content-image-02"></div>
        <div className="content-container">
          <h2 className="content-title">Atención profesional para quienes más lo necesitan</h2>
          <hr className="content-underline" />
          <p className="content-description">
            Nos esforzamos para que cada paciente se sienta seguro, atendido y valorado. Porque la salud no es un privilegio,
            es un derecho.
          </p>
          <Link to="/contacto" className="content-link">ENCUENTRANOS EN →</Link>
        </div>
      </section>
    </div>
  )
}

export default Description