import HeroCarousel from './components/HeroCarousel'
import './styles/Hero.css'

const Hero = () => {

    const images = [
      '/images/4-30251ae2.jpg',
      '/images/2-eb5c7ba7.jpg',
      '/images/3-eb5c7ba7.jpg'
    ]

  return (
    <section className='hero'>
      <div className='hero__container'>
        <h1 className='hero__title'>Salud y calidez para quienes más lo necesitan</h1>
        <p className='hero__content'>Creemos en un servicio médico donde la calidez humana y la excelencia son nuestra prioridad.</p>
        <button className='hero__button'>Reserva una cita</button>
      </div>

      <HeroCarousel images={images} />

    </section>
  )
}

export default Hero