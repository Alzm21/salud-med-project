
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

    const [isAtTop, setIsAtTop] = useState(true); 
    const handleScroll = () => { 
      setIsAtTop(window.scrollY === 0);
    }; 
    useEffect(() => {
      window.addEventListener('scroll', handleScroll); 
      return () => {
       window.removeEventListener('scroll', handleScroll); 
      }; 
    }, []);

  return (
    <div className={isFixed || isAtTop ? 'navbar--fixed': ''}>
        <div className='navbar__logo'>
          <a href="/">
            <img src="/assets/2 LogoSALUDMED Largo sin fondo.png" alt="Salud Med Logo" />
          </a>
        </div>
          <nav>
            <ul className='navbar__menu'>
              <li className='navbar__item'><a href="/">Inicio</a></li>

                <li className='navbar__item navbar__dropdown'>
                  <a href="/nosotros">Salud-Med</a>
                  <i className='bx bx-chevron-down'></i>

                  <ul className='navbar__submenu'>
                    <li><a href="/nosotros/quienes-somos">Sobre Nosotros</a></li>
                    <li><a href="/nosotros/mision-vision">Misión Visión</a></li>
                    <li><a href="/nosotros/filosofia-empresarial">Valor Empresarial</a></li>
                  </ul>
                </li>

              <li className='navbar__item'><a href="">Especialidades</a></li>
              <li className='navbar__item'><a href="">Blog</a></li>
              <li className='navbar__item'><a href="/contacto">Contáctanos</a></li>
            </ul>
          </nav>
    </div>
  )
}

export default Navbar