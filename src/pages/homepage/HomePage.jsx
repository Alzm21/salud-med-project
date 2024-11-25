import { useEffect, useState } from "react"
import Modal01 from "../../components/Modal01"
import Description from "./Description"
import Hero from "./Hero"
import MedicalOffer from "./MedicalOffer"
import Services from "./Services"

const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const handleModal = () => setIsOpen(false)

  useEffect(() => {
      setTimeout(() => {
        setIsOpen(true)
      }, 1500);
  }, [])
/*   const [activeModal, setActiveModal] = useState(null)

  const closeAllModals = () => setActiveModal(null)
  const handleNext = () => setActiveModal((prev) => (prev < 3 ? prev + 1 : null))
  const handlePrev = () => setActiveModal((prev) => (prev > 3 ? prev - 1 : null))

  useEffect(() => {
    setTimeout(() => {
      setActiveModal(1)
    }, 1500);
  }, []) */
  
  
  return (
    <>
      { isOpen && <Modal01 handleModal={handleModal} />}
      
      {/* {
        activeModal === 1 && (<Modal01 />)
      } */}
      <Hero/>
      <Description/>
      <Services/>
      <MedicalOffer/>
    </>
  )
}

export default HomePage