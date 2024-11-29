import { useEffect, useState } from "react"
import Modal01 from "./Modal01";
import Modal02 from "./Modal02";
import Modal03 from "./Modal03";
import Modal04 from "./Modal04";


const MainModal = ({handleModal}) => {

    const [activeModal, setActiveModal] = useState(null)

    useEffect(() => {
        const randomModal = Math.floor(Math.random() * 4) + 1;
        setActiveModal(randomModal)
    }, [])

    const renderModal = () => {
        switch (activeModal) {
            case 1:
                return <Modal01 handleModal={handleModal}/>
            case 2:
                return <Modal02 handleModal={handleModal}/>
            case 3:
                return <Modal03 handleModal={handleModal}/>
            case 4:
                return <Modal04 handleModal={handleModal}/>
        
            default:
                return null;
        }
    }
    
    return (
        <>
            {activeModal && renderModal()}                
        </>
    )
}

export default MainModal