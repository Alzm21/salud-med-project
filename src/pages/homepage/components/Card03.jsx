import React from 'react'
import { Link } from 'react-router-dom'

const Card03 = () => {
    return (
        <div className="program-card">
            <div className="card_header">
                <span>SALUD-MED</span>
            </div>
            <div className="card_content">
                <h1>Examen General Preventivo</h1>
                <div className="price">
                <p>Valor total</p>
                <h2>$32.550</h2>
            </div>
            <div className="card_includes">
                <p>Incluye:</p>
                <ul>
                    <li>Detección de Diabetes, Artritis</li>
                    <li>Alergias, Cancer, etc.</li>
                    <li>Evaluación y Limpieza Dental</li>
                </ul>
            </div>
            <div className="card_contact">
                <p>Agenda en</p>
                <a href="tel:+56968113358">+56 9 6811 3358</a>
                <p>O escribenos:</p>
                <a href="https://wa.me/56968113358" target='_blank' rel="noopener noreferrer"><i className='bx bxl-whatsapp' ></i></a>
            </div>
            </div>
            <div className="card_footer">
                <p>Fidel Oteiza 1916, Of. 202</p>
                <Link to='/contacto'>
                    <i className='bx bxs-map'></i>
                </Link>
            </div>
        </div>
    )
}

export default Card03