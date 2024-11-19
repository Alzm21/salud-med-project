import './styles/MisionVision.css'


const MisionVision = () => {
  return (
    <div className="mision-vision">
        
        <div className="top_row_content">
            <div className="top_row_title">
                <h2>MISION - VISION</h2>
                <p>"Tú salud es nuestra misión. Tu bienestar, nuestra visión"</p>
            </div>
        </div>
        <div className='mision-vision__container'>
            <div className='mision-vision__row'>
                <div className="mision-vision__content">
                    <div className='mision-vision__title'>
                        <h1>Misión</h1>
                        <i className='bx bxs-donate-heart'></i>
                    </div>
                    <p className='mision-vision__text'>
                        Nuestra misión es brindar atención médica integral, oportuna y de alta calidad a las personas que más lo necesitan, con profesionalismo y calidez humana. 
                        Nos enfocamos en <strong>priorizar</strong> la <strong>dignidad</strong> y el <strong>bienestar</strong> de cada paciente, ofreciendo servicios accesibles 
                        y especializados en medicina general, ginecología y obstetricia, pediatría, odontología y laboratorio clínico. Todo ello con el objetivo de promover 
                        la salud y el bienestar de nuestros pacientes y la <strong>comunidad</strong>.
                    </p>
                </div>
                <div className='mision-vision__images'>
                    <img src="/images/a.jpeg" alt="" />
                    <img src="/images/g.jpeg" alt="" />
                </div>
            </div>

            <div className='mision-vision__row'>
                <div className='mision-vision__content'>
                    <div className='mision-vision__title'>
                        <h1>Visión</h1>
                        <i className='bx bxs-binoculars'></i>
                    </div>
                    <p className='mision-vision__text'>
                    Aspiramos a ser <strong>reconocidos</strong> como un referente en servicios de salud integral, destacándonos por nuestra <strong>excelencia</strong>, 
                    <strong>calidez humana</strong> y accesibilidad. 
                    Nuestro compromiso es mejorar la calidad de vida de quienes más lo necesitan, promoviendo la salud y el bienestar a través de un modelo de atención humano, 
                    innovador y enfocado en la equidad.
                    </p>
                </div>
                <div className='mision-vision__images'>
                    <img src="/images/i.jpeg" alt="" />
                    <img src="/images/w.jpeg" alt="" />
                </div>
            </div>
        </div>
        
    </div>
    /* RDV codigo windows 10 y whokeys.com*/
  )
}

export default MisionVision