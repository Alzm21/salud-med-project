
import { useState, useRef, useEffect} from 'react'
import './styles/Navbar.css'

const Navbar = () => {

  const [isFixed, setIsFixed] = useState(false)
  const pScrollPos = useRef(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (pScrollPos.current > currentScrollPos) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      pScrollPos.current = currentScrollPos
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${isFixed? 'navbar--fixed': ''}`}>
        <div className='navbar__logo'>
          <a href="/">
            <img src="public/assets/2 LogoSALUDMED Largo sin fondo.png" alt="Salud Med Logo" />
          </a>
        </div>
          <nav>
            <ul className='navbar__menu'>
              <li className='navbar__item'><a href="/">Inicio</a></li>
              <li className='navbar__item'><a href="/nosotros">Salud-Med</a><i class='bx bx-chevron-down'></i></li>
              <li className='navbar__item'><a href="servicios">Especialidades</a></li>
              <li className='navbar__item'><a href="">Blog</a></li>
              <li className='navbar__item'><a href="/contacto">Contáctanos</a></li>
            </ul>
          </nav>
    </div>
  )
}

export default Navbar