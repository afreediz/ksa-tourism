import React, { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AnimatedCursor from "react-animated-cursor"
import Loader from "./Components/Loader";
// pages
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
// ------------------------------
import aos from "aos";
import "aos/dist/aos.css";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Packages from "./Pages/Packages/Packages";
import Service from "./Pages/Service/Service";
import Navbar from "./Components/Navbar";
import KeralaTourism from "./Pages/KeralaTourism/KeralaTourism";
function App() {
  const [isLoading, setLoading] = useState(true);
  const HomeRoute = () => {
      return isLoading ? ( <Loader />) 
      : (
          <main className="transition ease-in-out duration-300 delay-300">
            <Home />
          </main>
        );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
    aos.init();
  }, []);


  
  return (
   <main className="bg-gray-100 overflow-x-hidden App">
    {/* < AnimatedCursor
     innerSize={8}
     outerSize={35}
     innerScale={1}
     outerScale={2}
     outerAlpha={0}
     hasBlendMode={true}
     innerStyle={{
       backgroundColor: 'var(--cursor-color)'
     }}
     outerStyle={{
       border: '3px solid var(--cursor-color)'
     }}
    /> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/kerala-tourism" element={<KeralaTourism/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
   </main>
  );
}

export default App;
