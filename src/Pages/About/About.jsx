import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AboutHero from "./AboutHero";
import History from "./History";
import MissionVision from "./MissionVision";
import WhatWeDo from "./WhatWeDo";
import Rewards from "./Rewards";
import OurTeam from "./OurTeam";
import WhatsappButton from "../../Components/WhatsappButton";

function About() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="bg-white">
      <WhatsappButton/>
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <AboutHero />
        {/* absout section */}
        <div id="aboutus" className="grid lg:flex w-full ">
          <div className="h-96 w-full lg:w-1/3 bg-teal-300 flex items-center justify-center">
            <h3 className="text-white text-5xl  lg:-rotate-90">About Us</h3>
          </div>
          <div className="bg-gray-50 w-full lg:w-2/3 flex items-center justify-center p-3">
            <p
              data-aos="fade-up"
              className="text-xl text-gray-500 text-justify"
            >
              Welcome to KSA Tours and Travels, where we redefine the travel
              experience with our unwavering commitment to excellence. Our
              strengths lie in our dedication to quality service, flexibility,
              and a customer-oriented approach, ensuring that every aspect of
              your journey exceeds expectations. With honesty, integrity, and
              transparency as our guiding principles, you can trust us to
              deliver reliable and trustworthy service at every turn. Our team
              comprises highly skilled and experienced professionals who are
              passionate about crafting meticulously curated itineraries that
              transform your travel dreams into reality. The satisfaction of our
              customers is our ultimate goal, driving us to go above and beyond
              to create cherished memories that last a lifetime. Join us on a
              journey where every destination becomes a new adventure, and let
              KSA Tours and Travels be your trusted companion every step of the
              way.
            </p>
          </div>
        </div>
        {/* balance sections */}
        <History />
        <MissionVision />
        <Rewards />
        <WhatWeDo />
        <OurTeam />
      </div>
      <Footer />
    </main>
  );
}

export default About;
