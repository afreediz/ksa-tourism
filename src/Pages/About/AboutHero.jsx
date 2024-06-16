import React from "react";
import world from "/Images/svg/world.svg";
import { FaAnglesDown } from "react-icons/fa6";
function AboutHero() {
  return (
    <div className="hero min-h-screen bg-white z-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img data-aos="fade-left" src={world} className="lg:max-w-xl rounded-lg " />
        <div data-aos="fade-right">
          <h1 className="text-5xl font-bold">
            Discover Our Story <span className="text-teal-400">Unveiling</span>{" "}
            the Essence of <span className="text-teal-400">KSA</span>
          </h1>
          <p className="py-6">
            At KSA Tours and Travels, we're dedicated to curating unforgettable
            journeys that transcend expectations, ensuring every traveler
            experiences the world in extraordinary ways
          </p>
        </div>
      </div>
      <div className="hidden lg:flex justify-center absolute bottom-6">
        <a href="#aboutus" className="px-1 text-teal-400 py-4 border-teal-400 border rounded-full animate-bounce">
        <FaAnglesDown />
        </a>
      </div>
    </div>
  );
}

export default AboutHero;


