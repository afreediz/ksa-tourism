import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import WhatsappButton from '../../Components/WhatsappButton';
import Education from './Education';
import Domestic from './Domestic';
import International from './International';
import Pilgrimage from './Pilgrimage';
import { useNavigate, useParams } from 'react-router-dom';

function Packages() {
  const { packages } = useParams()
  const naviage = useNavigate()
  const page =[<Pilgrimage/>,<Domestic/>,<International/>,<Education/>]
  const btnLabel = ["Pilgrimage","Domestic","International","School-or-College"]
  const [currentView, setCurrentView] = useState(packages ? btnLabel.indexOf(packages) : 0);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main>
      <WhatsappButton />
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-8">
        <h3 className="text-2xl font-bold mb-6 text-black">Packages</h3>
        <div className="flex flex-wrap gap-4">
          {btnLabel.map((_,index) => (
              <button key={index} className={`btn border-none text-white hover:bg-teal-700 ${index === currentView ? "bg-teal-500" : "bg-gray-800"}`} onClick={() =>{
                  naviage(`/packages/${btnLabel[index]}`)
                  setCurrentView(index)
                }}>{btnLabel[index]}</button>
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
