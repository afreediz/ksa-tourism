import { useEffect } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ExploreKerala from "./ExploreKerala";
import TourPacakges from "./TourPacakges";
import WhatsappButton from "../../Components/WhatsappButton";
function KeralaTourism() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <main>
      <WhatsappButton/>
      <div
        style={{ backgroundImage: "url('/Images/hero/kadhakali.jpeg')" }}
        className="hero h-screen bg-fixed"
      >
        {/* <div className="absolute bg-teal-500 inset-0 bg-opacity-35"></div> */}
        <div className="absolute w-full top-0">
          <Navbar />
        </div>
        <div className="absolute bottom-2 left-2">
          <div
            // data-aos="fade-up"
            className="p-6 rounded  max-w-4xl"
          >
            <h3 className="text-left  text-white text-3xl">Welcome to</h3>
            <h1 className="text-left text-white text-6xl uppercase font-bold tracking-tight">
              God's own country
            </h1>
            <div className="">
            <p className="text-white font-bold">
              Welcome to Kerala, a land of unparalleled beauty, from tranquil
              beaches to breathtaking mountains. With KSA Tours and Travels Pvt.
              Ltd, embark on a journey through this captivating destination,
              where every corner reveals a new wonder. Let us be your guides as
              you immerse yourself in the rich culture and natural splendor of
              Kerala. Start your adventure today and create memories that will
              last a lifetime.
            </p>
            </div>
          </div>
        </div>
      </div>
      <TourPacakges/>
      <ExploreKerala/>
      <Footer />
    </main>
  );
}

export default KeralaTourism;
