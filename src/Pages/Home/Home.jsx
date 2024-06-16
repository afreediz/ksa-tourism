import Hero from "./Hero"
import Featured from "./Featured";
import About from "./About"
import Service from "./Service"
import Testimonial from "./Testimonial"
import Organizations from "./Organizations"
import Packages from "./Packages"
import Footer from "../../Components/Footer";
import IncredibleIndia from "./IncredibleIndia";
import WhatsappButton from "../../Components/WhatsappButton";
function Home() {
  return (
    <div>
       
      <WhatsappButton/>
      <Hero/>
      <Featured/>
      <About/>
      <Service/>
      <Testimonial/>
      <Packages/>
      <Organizations/>
      <IncredibleIndia/>
      <Footer/>
    </div>
  )
}

export default Home