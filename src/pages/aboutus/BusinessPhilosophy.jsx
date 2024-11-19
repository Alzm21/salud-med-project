import './styles/BusinessPhilosophy.css'

const BusinessPhilosophy = () => {
  return (
    <div className='philosophy'>
      <div className="top_phlsph_content">
          <div className="top_phlsph_title">
            <h2>Valores Empresariales</h2>
            <p>"Nuestros valores, la base sólida de nuestra institución y compromiso con la comunidad."</p>
          </div>
      </div>
      <div className='bot_phlsph_content'>
        <div className='philosophy__img'>
          <img src='/images/jeshoots-com-l0j0DHVWcIE-unsplash.webp' alt="" />
        </div>
        
        <div className='main-p-container'>
          <div className='philosophy_container'>
            <i className='bx bxs-right-arrow'></i>
            <div className='philosophy_content'>
              <h2>Empatía</h2>
              <p>Nuestra empatía nos permite conectar con cada paciente, entendiendo sus necesidades y brindando un servicio humano y respetuoso.</p>
            </div>
          </div>
          <div className='philosophy_container'>
            <i className='bx bxs-right-arrow'></i>
            <div className='philosophy_content'>
              <h2>Solidaridad</h2>
              <p>Nos guiamos por la solidaridad, brindando atención a quienes más lo necesitan.</p>
            </div>
          </div>
          <div className='philosophy_container'>
            <i className='bx bxs-right-arrow'></i>
            <div className='philosophy_content'>
              <h2>Humanidad</h2>
              <p>Nuestra humanidad se refleja en cada interacción con nuestros pacientes.</p>
            </div>
          </div>
          <div className='philosophy_container'>
            <i className='bx bxs-right-arrow'></i>
            <div className='philosophy_content'>
              <h2>Cercanía</h2>
              <p>La cercanía con nuestros pacientes es fundamental para ofrecer un servicio confiable y respetuoso.</p>
            </div>
          </div>
          <div className='philosophy_container'>
            <i className='bx bxs-right-arrow'></i>
            <div className='philosophy_content'>
              <h2>Sensibilidad</h2>
              <p>Atendemos con sensibilidad, reconociendo las necesidades únicas de cada persona.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessPhilosophy