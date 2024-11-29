import './styles/Modal04.css'

const Modal04 = ({handleModal}) => {
  return (
    <div className='modal04_main'>
      <div className='modal04_subcontainer'>
        <div className='modal04_img'>
          <img src="./images/modal4.jpeg" alt="" />
          <button className='modal04-button-1' onClick={handleModal}><i className='bx bx-x'></i></button>
          <a href="https://wa.me/56968113358?text=Muy%20buenas!%20Me%20gustaría%20agendar%20una%20cita%20para%20Medicina%20General"
           className='modal04-button-2'>¡Agenda Ahora!</a>
        </div>
      </div>
    </div>  )
}

export default Modal04