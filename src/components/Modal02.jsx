import './styles/Modal02.css'

const Modal02 = ({handleModal}) => {
  return (
    <div className='modal02_main'>
      <div className='modal02_subcontainer'>
        <div className='modal02_img'>
          <img src="./images/modal2.jpeg" alt="" />
          <button className='modal02-button-1' onClick={handleModal}><i className='bx bx-x'></i></button>
          <a href="https://wa.me/56968113358?text=Muy%20buenas!%20Me%20gustaría%20agendar%20una%20cita%20para%20Medicina%20General"
           target='_blank' rel='noopener noreferrer' className='modal02-button-2'>¡Agenda Ahora!</a>
        </div>
      </div>
    </div>  
  )
}

export default Modal02