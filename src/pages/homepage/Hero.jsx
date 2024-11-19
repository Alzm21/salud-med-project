import { useState } from 'react'
import './styles/Hero.css'

const Hero = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className='hero'>

      <h1 className='hero__title'>Salud y calidez para quienes más lo necesitan</h1>
      <p className='hero__content'>Creemos en un servicio médico donde la calidez humana y la excelencia son nuestra prioridad.</p>
      <button className='hero__button'>CONOCE NUESTROS SERVICIOS</button>

    </section>
  )
}

export default Hero