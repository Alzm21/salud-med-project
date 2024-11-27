import React from 'react'
import './styles/Footbar.css'
import { Link } from 'react-router-dom'

const FootBar = () => {
    return (
        <div className='footer'>
          <div className='footer__top'>
            <div className='footbar__logo'>
              <div className='bot_logo'></div>
              <p>"Una buena salud nos da la fuerza y el enfoque para luchar por cada uno de nuestros sueños y aspiraciones."</p>
            </div>
            <div className='footbar__container'>
              <div className='top__content'>
                <h3>Nosotros</h3>
                <ul className='footbar__list'>
                  <Link to="/nosotros/quienes-somos">Quienes Somos</Link>
                  <Link to="/nosotros/mision-vision">Misión - Visión</Link>
                  <Link to="/contacto">Contáctanos</Link>
                </ul>
              </div>
              <div className='top__content'>
                <h3>Especialidades</h3>
                <ul className='footbar__list'>
                  <a href="">Medicina General</a>
                  <a href="">Ginecología</a>
                  <a href="">Pediatría</a>
                  <a href="">Medicina Estética</a>
                  <a href="">Laboratorio clínico</a>
                  <a href="">Odontología General</a>
                </ul>
              </div>
              <div className='top__content'>
                <h3>Articulos de Interés</h3>
                <ul className='footbar__list'>
                  <a href="">Artículo 1</a>
                  <a href="">Artículo 2</a>
                  <a href="">Artículo 3</a>
                  <a href="">Artículo 4</a>
                </ul>
              </div>
            </div>
          </div>
    
          <div className='footer__middle'>
            <div className='mid__content'>
              <h3>Contáctanos</h3>
              <div className='mid-icons'>
                <a href="https://wa.me/56968113358" target='_blank' rel="noopener noreferrer"><i className='bx bxl-whatsapp'></i></a>
                <a href="mailto:centrosalud@saludmedintegral.com?subject=Consulta&body=Muy%20buenas,%20tengo%20una%20consulta%20sobre..." target='_blank' rel="noopener noreferrer"><i className='bx bx-envelope' ></i></a>
                <a href="https://www.instagram.com/saludmed_saludmed/" target='_blank' rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                <a href="https://web.facebook.com/profile.php?id=61566551820930" target='_blank' rel='noopener noreferrer'><i className='bx bxl-facebook-circle'></i></a>
                <a href="#"><i className='bx bxl-spotify' ></i></a>
              </div>
            </div>
    
            <div className='mid__content'>
              <h3>Visítanos</h3>
              <div>
                <p>Fidel Oteiza 1916, Providencia Santiago</p>
              </div>
            </div>
          </div>
    
          <div className='footer__bottom'>
            <p>© 2024 Salud-Med - Centro Clínico Integral</p>
          </div>
        </div>
    )
}

export default FootBar