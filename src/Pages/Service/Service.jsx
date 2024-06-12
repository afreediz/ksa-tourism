import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import WhatsappButton from '../../Components/WhatsappButton'

function Service() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <WhatsappButton/>
        <Navbar/>
        <div className='min-h-screen'>

        </div>
        <Footer/>
    </div>
  )
}

export default Service