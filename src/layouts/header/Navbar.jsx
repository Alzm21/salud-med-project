
import { useState, useEffect} from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  
  //Hamburger menu functionality
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div className = {`navbar ${!isAtTop ? 'navbar--fixed' : ''}`}>
        <div className='navbar__logo'>
          <Link to="/">
            <img src="/assets/2 LogoSALUDMED Largo sin fondo.png" alt="Salud Med Logo" />
          </Link>
        </div>

          <nav className='navbar__container'>
            <ul className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
              <li className='navbar__item'><Link to="/">Inicio</Link></li>
                <li className='navbar__item navbar__dropdown'>
                  <Link>Salud-Med</Link>
                  <i className='bx bx-chevron-down'></i>

                  <ul className='navbar__submenu'>
                    <li><Link to="/nosotros/quienes-somos">Sobre Nosotros</Link></li>
                    <li><Link to="/nosotros/mision-vision">Misión Visión</Link></li>
                    <li><Link to="/nosotros/filosofia-empresarial">Valor Empresarial</Link></li>
                  </ul>
                </li>
              <li className='navbar__item'><Link to="">Especialidades</Link></li>
              <li className='navbar__item'><Link to="">Blog</Link></li>
              <li className='navbar__item'><Link to="/contacto">Contáctanos</Link></li>
            </ul>
          </nav>
            <button className='navbar__toggle' onClick={toggleMenu}>
            <i className='bx bx-menu'></i>
            </button>
    </div>
  )
}

export default Navbar