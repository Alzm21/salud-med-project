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
                        Nuestra misión es brindar atención médica integral y de alta calidad a las personas que más lo necesitan. Y además nuestro compromiso constante con
                        profesionalismo y la calidez humana. Nos enfocamos en priorizar la dignidad y el bienestar de cada paciente, ofreciendo un servicio cercano, compasivo
                        y responsable en cada paso del proceso de atención.
                    </p>
                </div>
                <div className='mision-vision__images'>
                    <img src="/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp" alt="" />
                    <img src="/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.webp" alt="" />
                </div>
            </div>

            <div className='mision-vision__row'>
                <div className='mision-vision__content'>
                    <div className='mision-vision__title'>
                        <h1>Visión</h1>
                        <i className='bx bxs-binoculars'></i>
                    </div>
                    <p className='mision-vision__text'>
                        Ser un referente en la atención médica a nivel nacional, reconocidos por nuestra excelencia en el servicio, la calidez de nuestro equipo y nuestro impacto 
                        positivo en las comunidades más vulnerables. Aspiramos a mejorar la calidad de vida de quienes más lo necesitan, promoviendo salud y el bienestar a través
                        de un modelo de atención humano, innovador y comprometido con la equidad en salud
                    </p>
                </div>
                <div className='mision-vision__images'>
                    <img src="/images/national-cancer-institute-uVnRa6mOLOM-unsplash.jpg" alt="" />
                    <img src="/images/national-cancer-institute-uVnRa6mOLOM-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
        
    </div>
    /* RDV codigo windows 10 y whokeys.com*/
  )
}

export default MisionVision