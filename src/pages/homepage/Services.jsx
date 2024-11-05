import "./styles/Service.css"

const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <h1 className="services__main-title">Servicios Médicos</h1>
        <div className="services-container">
          <div>
            <div className="service__icon">
              <img src="/icons/examination.png" alt="" />
            </div>
            <div className="service">
              <h3 className="service__title">Medicina General</h3>
              <hr className="service-underline"/>
              <p className="service__description">
                Atiende las necesidades de salud básicas, diagnosticando y tratando enfermedades
                comunes en las personas. Es el primer contacto en salud y orienta a las personas
                en el cuidado preventivo y la detección temprana de problemas.
              </p>
            </div>
          </div>

          <div>
            <div className="service__icon">
              <img src="/icons/gynecology@2x.png" alt="" />
            </div>
            <div className="service">
              <h3 className="service__title">Ginecología</h3>
              <hr className="service-underline"/>
              <p className="service__description">
                Enfocado en la salud femenina, especialmente en el sistema reproductivo, embarazo
                y salud sexual. Realiza exámenes como el Papanicolau y ayuda a la planificación
                familiar, siendo esencial en cada etapa de la vida de la mujer.
              </p>
            </div>
          </div>

          <div>
            <div className="service__icon">
              <img src="/icons/pediatrics@2x.png" alt="" />
            </div>
            <div className="service">
              <h3 className="service__title">Pediatría</h3>
              <hr className="service-underline"/>
              <p className="service__description">
              Dedicada a la salud infantil desde el nacimiento hasta la adolescencia, esta especialidad 
              asegura un desarrollo saludable, atendiendo enfermedades propias de la niñez y proporcionando 
              orientación a los padres.
              </p>
            </div>
          </div>

          <div>
            <div className="service__icon">
              <img src="/icons/general_surgery@2x.png" alt="" />
            </div>
            <div className="service">
              <h3 className="service__title">Medicina Estética</h3>
              <hr className="service-underline"/>
              <p className="service__description">
              Especializada en mejorar la apariencia sin cirugía invasiva, esta área ofrece tratamientos 
              como rejuvenecimiento facial y modelado corporal, manteniendo un enfoque en la belleza natural.
              </p>
            </div>
          </div>

          <div>
            <div className="service__icon">
              <img src="/icons/biochemistry_laboratory@2x.png" alt="" />
            </div>
            <div className="service">
              <h3 className="service__title">Laboratorio Clínico</h3>
              <hr className="service-underline"/>
              <p className="service__description">
              Realiza análisis de sangre, orina y tejidos para diagnosticar enfermedades y monitorear la salud 
              del paciente, siendo clave en el proceso de diagnóstico médico.
              </p>
            </div>
          </div>

          <div>
            <div className="service__icon">
              <img src="/icons/odontology@2x.png" alt="" />
            </div>
            <div className="service">
              <h3 className="service__title">Odontología Integral</h3>
              <hr className="service-underline"/>
              <p className="service__description">
              Cubre toda la salud bucal, desde la prevención hasta el tratamiento de problemas dentales y de encías. 
              Incluye limpiezas, ortodoncia y otros procedimientos para mantener la funcionalidad y estética de la boca.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services