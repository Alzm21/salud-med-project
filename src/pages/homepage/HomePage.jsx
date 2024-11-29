import { useEffect, useState } from "react"
import MainModal from "../../components/MainModal"
import Description from "./Description"
import Hero from "./Hero"
import MedicalOffer from "./MedicalOffer"
import Services from "./Services"

const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false)
  const handleModal = () => setIsOpen(false)

  useEffect(() => {
      const timer =setTimeout(() => {
        setIsOpen(true)
      }, 1500);
      return () => clearTimeout(timer);
  }, [])

  
  return (
    <>
      { isOpen && <MainModal handleModal={handleModal} />}
      <Hero/>
      <Description/>
      <Services/>
      <MedicalOffer/>
    </>
  )
}

export default HomePage