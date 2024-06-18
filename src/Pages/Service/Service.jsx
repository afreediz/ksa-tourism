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
          <div className="relative min-h-[50vh] bg-cover" style={{ backgroundImage: "url('/Images/service/servicesfirst.avif')" }}>
            <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
            <div className="relative h-full flex flex-col items-center py-20 z-2 text-white p-4"> {/* Content */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl uppercase font-bold tracking-wide text-center  shadow-sm">WORLDS BEST QUALITY SERVICES</h1>
              <p className="mt-3 shadow text-white font-bold text-xl text-center max-w-6xl">
                Experience unparalleled excellence with our top-tier services, dedicated to meeting your needs with precision and care.
                 We strive to deliver outstanding quality that sets us apart from the rest."</p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Service