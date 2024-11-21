import "./styles/Service.css"

const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__title">
          <h1 className="services__main-title">Servicios Médicos</h1>
          <p>Conoce las especialidades que te ofrecemos: </p>
        </div>

        <div className="services-container">
          <div className="item__container">
            <div className="service">
              <img src="/images/y.jpeg" className="s1" alt="" />
              <h3 className="service__title">Medicina General</h3>
            </div>
          </div>
          <div className="item__container">
            <div className="service">
              <img src="/images/4-30251ae2.jpg" className="s2" alt="" />
              <h3 className="service__title">Ginecología</h3>
            </div>
          </div>
          <div className="item__container">
            <div className="service">
              <img src="/images/f.jpeg" className="s3" alt="" />
              <h3 className="service__title">Pediatría</h3>
            </div>
          </div>
          <div className="item__container">
            <div className="service">
              <img src="/images/r.jpeg" className="s4" alt="" />
              <h3 className="service__title">Medicina Estética</h3>
            </div>
          </div>
          <div className="item__container">
            <div className="service">
              <img src="/images/b.jpeg" className="s5" alt="" />
              <h3 className="service__title">Laboratorio Clínico</h3>
            </div>
          </div>
          <div className="item__container">
            <div className="service">
              <img src="/images/s.jpeg" className="s6" alt="" />
              <h3 className="service__title">Odontología Integral</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services