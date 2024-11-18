import { Outlet } from "react-router-dom"
import Navbar from "./header/Navbar"
import FootBar from "./footer/FootBar"


const Applayout = () => {
  return (
    <div>
        <Navbar/>
        <div className="main-structure">
            <Outlet/>
        </div>
        <FootBar/>
      

    </div>
  )
}

export default Applayout