import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import WhatsappButton from '../../Components/WhatsappButton';
import Education from './Education';
import Domestic from './Domestic';
import International from './International';
import Pilgrimage from './Pilgrimage';

function Packages() {
  const [currentView,setCurrentView] = useState(0)
  const page =[<Pilgrimage/>,<Domestic/>,<International/>,<Education/>]
  const btnLabel = ["Pilgrimage","Domestic","International","Educational"]
  return (
    <main>
      <WhatsappButton />
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-8">
        <h3 className="text-2xl font-bold mb-6 text-black">Packages</h3>
        <div className="flex flex-wrap gap-4">
          {btnLabel.map((_,index) => (
              <button className={`btn border-none text-white hover:bg-teal-700 ${index === currentView ? "bg-teal-500" : "bg-gray-800"}`} onClick={() => setCurrentView(index)}>{btnLabel[index]}</button>
          ))}
        </div>
        {/* ? page  */}
        {page[currentView]}
      </div>
      <Footer />
    </main>
  );
}

export default Packages;
