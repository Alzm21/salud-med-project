import './styles/Modal03.css'

const Modal03 = ({handleModal}) => {
  return (
    <div className='modal03_main'>
      <div className='modal03_subcontainer'>
        <div className='modal03_img'>
          <img src="./images/modal3.jpeg" alt="" />
          <button className='modal03-button-1' onClick={handleModal}><i className='bx bx-x'></i></button>
          <a href="https://wa.me/56968113358?text=Muy%20buenas!%20Me%20gustaría%20agendar%20una%20cita%20para%20Medicina%20General"
           className='modal03-button-2'>¡Agenda Ahora!</a>
        </div>
      </div>
    </div>
  )
}

export default Modal03