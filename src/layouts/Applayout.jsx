import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./header/Navbar"
import FootBar from "./footer/FootBar"


const Applayout = ({ children }) => {
  return (
    <div>
      <ScrollRestoration/>
      <Navbar/> {/* Header */}
        <div className="main-structure">
            <Outlet/>
        </div>
      <FootBar/>
      

    </div>
  )
}

export default Applayout