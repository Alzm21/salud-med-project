import { useState } from "react"
import './styles/AboutUs.css'

const AboutUs = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    '/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp',
    '/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp',
    '/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp',
    '/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp',
    '/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp',
    '/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp'
  ]

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="about__us">
      <div className="about__content">
        <div className="about__title">
          <h2>¿Quienes somos?</h2>
          <p>"Comprometidos con tu salud y una calida atención."</p>
        </div>
      </div>

      <div className="main_container">
        <div className="container one">
          <div className="content">
            <h2>Salud-Med</h2>
            <hr className="content__underline"/>
            <p>Creemos que la salud es un derecho, no un privilegio. Nos dedicamos a brindar atención médica de calidad,
              con un enfoque accesible y cálido, para que cada persona, sin importar su situación, reciba el cuidado que merece. 
              Nuestra misión es cuidar y proteger la salud de quienes más lo necesitan, con profesionalismo y empatía.”
            </p>
          </div>
          <img className="content__image" src="/images/martha-dominguez-de-gouveia-g0PTp89dumc-unsplash.webp" alt="" />
        </div>

        <div className="container two">
          <div className="content">
            <h2>Nuestra Historia</h2>
            <hr className="content__underline"/>
            <p className="two_description">
              “Salud-Med fue fundado el (insertar fecha) con el propósito de cerrar la brecha en el acceso a servicios médicos para las personas que más lo requieren. 
              Desde nuestros inicios, hemos trabajado por ser un espacio en el que cada paciente se sienta valorado, respetado y 
              atendido con la misma dedicación que brindamos a nuestras propias familias.”
            </p>
          </div>
          <div className="img__container">
            <img className="content__image a" src="/images/about_us_01.jpeg" alt="about01" />
            <img className="content__image b" src="/images/about_us_03.jpeg" alt="about02" />
            <img className="content__image c" src="/images/about_us_02.jpeg" alt="about03" />
          </div>
        </div>
        <div className="container three">
          <div className="content">
            <h2>Nuestro Equipo</h2>
            <hr className="content__underline"/>
          <p>
            Nuestro equipo está compuesto por profesionales dedicados y experimentados que, además de su preparación, comparten la visión de un cuidado cercano y accesible. 
            Cada miembro de Salud-Med contribuye a un ambiente en el que la excelencia y la calidez humana son esenciales.
          </p>
          </div>
          <div className="carousel">

            <div className="carousel__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel__image" />
              ))}
            </div>

            <button className="carousel__btn carousel__btn--prev" onClick={prevSlide}>❮</button>
            <button className="carousel__btn carousel__btn--next" onClick={nextSlide}>❯</button>
          </div>
        </div>
        <div className="container four">
          <p>
            "En nombre de Salud-Med, estamos comprometidos con el cuidado de tu salud y la de tu familia. Sabemos que la salud no es solo física: es el pilar fundamental para alcanzar 
            tus sueños, cumplir tus metas y disfrutar plenamente de la vida que mereces."
          </p>
          <div className="four_img_a"></div>
          <div className="four_img_b"></div>
        </div>
      </div>
        
    </div>
  )
}

export default AboutUs