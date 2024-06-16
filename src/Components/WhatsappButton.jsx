import React from 'react'
import { MdOutlineWhatsapp} from "react-icons/md"
import "./WhatsappButton.css"
import { Link } from 'react-router-dom'

function WhatsappButton() {
  return (
    <div className="fixed z-50 right-2 bottom-3 ">
      <WhatsappIcon/>
    </div>
  )
}



const WhatsappIcon = () => {
  return(
   <Link to={"https://wa.me/+919497192849"} target="_blank" rel="noopener noreferrer">
     <button  className="cta flex items-center justify-center text-white bg-teal-500 border-2 border-teal-500">
        <i className="text-2xl">
        <MdOutlineWhatsapp/>
        </i>
        <span className="button-text text-white font-bold">
          Contact Us
          </span>
      </button>
   </Link>
  )
}

export default WhatsappButton