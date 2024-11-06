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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.9541754853317!2d-70.61419635785464!3d-33.42563367570199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf64538449ed%3A0xbb29b38b5f9060a4!2sFidel%20Oteiza%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2sbo!4v1730900678002!5m2!1sen!2sbo" 
            width="800" 
            height="600" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="contact_container bottom">
          <i className='bx bxs-map'></i>
          <p>
            Fidel Oteiza 1916, Providencia Santiago
          </p>
          <i className='bx bxs-phone' ></i>
          <p>+569 6811 3358</p>
          <div className="bottom_img_a"></div>
          <div className="bottom_img_b"></div>
        </div>
      </div>
        
    </div>
  )
}

export default Contact