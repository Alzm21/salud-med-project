import { Link } from 'react-router-dom'
import './styles/Card01.css'

const Card01 = () => {
    return (
        <div className="program-card">
            <div className="card_header">
                <span>SALUD-MED</span>
            </div>
            <div className="card_content">
                <h1>Programa Mujer</h1>
                <div className="price">
                    <p>Valor total</p>
                    <h2>$32.990</h2>
                </div>
                <div className="card_includes">
                    <p>Incluye:</p>
                    <ul>
                        <li>Consulta Ginecológica</li>
                        <li>Examen de Mamas</li>
                        <li>Orientación de Anticoncepción</li>
                        <li>Evaluación y Limpieza Dental</li>
                    </ul>
                </div>
                <div className="card_contact">
                    <p>Agenda llamando al:</p>
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

export default Card01