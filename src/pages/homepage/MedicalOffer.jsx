import { Link } from 'react-router-dom'
import './styles/MedicalOffer.css'

const MedicalOffer = () => {
  return (
    <div className='medical__offers'>
        <div className='offers-container'>
            <div className='offer o1'>
                <div className='offer-container'>
                    <h3 className='offer__title'>Consulta Médica</h3>
                    <p className='offer__description'>Diagnosticar, tratar y prevenir.</p>
                    <p>35% de DESCUENTO</p>
                </div>
                <a href="https://wa.me/56968113358" target='_blank' rel="noopener noreferrer"><i>ORDENAR</i></a>
            </div>
            <div className='offer o2'>
                <div className='offer-container'>
                    <h3 className='offer__title'>Medicina General de Urgencia</h3>
                    <p className='offer__description'>Eficiencia y atención inmediata.</p>
                    <p>35% de Descuento</p>
                </div>
                <a href="https://wa.me/56968113358" target='_blank' rel="noopener noreferrer"><i>ORDENAR</i></a>
            </div>
            <div className='offer o3'>
                <div className='offer-container'>
                    <h3 className='offer__title'>Telemedicina</h3>
                    <p className='offer__description'>Atención cómoda, segura y profesional.</p>
                    <p>35% de DESCUENTO</p>
                </div>
                <a href="https://wa.me/56968113358" target='_blank' rel="noopener noreferrer"><i>ORDENAR</i></a>
            </div>
        </div>
        <div className='offer o4'>
            <p><strong>CONSULTA Y ORDENA TODOS NUESTROS SERVICIOS</strong></p>
            <Link to='' className='more'>VER MAS</Link>
        </div>
    </div>
  )
}

export default MedicalOffer