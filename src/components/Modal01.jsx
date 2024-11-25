import './styles/Modal01.css'

const Modal01 = ({handleModal}) => {
  return (
    <div className='modal01_main'>
      <div className='modal01_subcontainer'>
        <div className='modal01_img'>
          <img src="./images/modal1.jpeg" alt="" />
          <button className='modal01-button-1' onClick={handleModal}><i className='bx bx-x'></i></button>
          <a href="https://wa.me/56968113358?text=Muy%20buenas!%20Me%20gustaría%20agendar%20una%20cita%20para%20Medicina%20General"
           className='modal01-button-2'>¡Agenda Ahora!</a>
        </div>
      </div>
    </div>
  )
}

export default Modal01