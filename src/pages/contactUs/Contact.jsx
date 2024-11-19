import { useState } from "react"
import "./styles/Contact.css"

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__title">
          <h2>Estamos Aquí para Ti</h2>
          <p>"Cerca de ti, listos para cuidar tu salud."</p>
        </div>
      </div>

      <div className="contact_main_container">
        <div className="contact_container ">
          <div className="container_description">
            <h2>Ubicación</h2>
            <hr className="content__underline"/>
            <p>Nos encontramos en una ubicación central y accesible, pensada para que puedas visitarnos con facilidad. 
              Estamos aquí para ofrecerte atención médica de calidad en un entorno profesional y cercano. ¡Esperamos tu visita!
            </p>
          </div>
          <div className="iframe-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.76966222411795!2d-70.61316330787116!3d-33.425975060374974!2m3!1f0!2f0!3f0!
              3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf4f5d65c46f%3A0x5f4a69762d37b6d2!2sFidel%20Oteiza%201916%2C%20Edificio%20Empresarial%2C%20oficin
              a%20501%2C%207500532%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e1!3m2!1sen!2sbo!4v1731948443838!5m2!1sen!2sbo" 
              width="800" 
              height="600" 
              className="iframe-responsive"
              style={{border:0}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="contact_container bottom">
          <div className="contact_info">
            <div>
              <i className='bx bxs-map'></i>
              <p>
                Fidel Oteiza 1916, Of. 202, Providencia Estación Pedro de Valdivia.
              </p>
            </div>
            <div>
              <i className='bx bxs-phone' ></i>
              <p>+569 6811 3358</p>
            </div>
          </div>
          <div className="bottom_img_a"></div>
          <div className="bottom_img_b"></div>
        </div>
      </div>
        
    </div>
  )
}

export default Contact