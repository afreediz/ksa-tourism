import Navbar from "../../Components/Navbar";
import HeroPanel from "./HeroPanel";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function HeroForm() {
  const inputStyle =
    "p-3 rounded-lg bg-transparent placeholder:text-white border focus:outline-none";
  return (
    <div className="p-12 bg-white/10 bg:blur backdrop-blur rounded-xl flex flex-col items-center justify-center gap-3">
      <h1 className="text-xl text-white font-bold">Book Your Tour</h1>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          className={`${inputStyle} md:w-52`}
          placeholder="Name..."
        />
        <input
          type="email"
          className={`${inputStyle} md:w-52`}
          placeholder="Email..."
        />
      </div>
      <input
        type="text"
        className={`${inputStyle} lg:w-[27rem]`}
        placeholder="Contact Number ...."
      />
      <input
        type="text"
        className={`${inputStyle} lg:w-[27rem]`}
        placeholder="Destination ...."
      />
      <div className="grid lg:flex gap-3 items-center">
        <input
          type="number"
          className={`${inputStyle} w-full lg:w-52`}
          placeholder="Adults"
        />
        <input
          type="number"
          className={`${inputStyle} w-full lg:w-52`}
          placeholder="Childs"
        />
      </div>
      <button className="px-5 py-1.5 btn text-white glass border rounded backdrop-blur-0 bg-white/10 hover:bg-black">
        Submit
      </button>
    </div>
  );
}

function HeroText() {
  return (
    <div className="text-center md:text-left">
      <div className="right-0 left-0 top-0 fixed z-50">
        <Navbar />
      </div>
      <div className="flex flex-col hero-content ">
        <h1 className="mt-4 font-semibold text-2xl md:text-5xl lg:text-6xl leading-tight text-balance">
          Explore Beyond with KSA: Your Gateway to Global Wonders
        </h1>
        <p className="font-light text-balance md:text-xl lg:text-2xl leading-relaxed">
          Discover new places, faces, and friendships beyond your neighborhood.
          Start your adventure with KSA today.
        </p>
        <Link to="/contact">
        <button className="px-5 py-1.5 border text-white font-bold rounded-full flex items-center w-32 mt-3 md:w-40 lg:w-32 gap-2 hover:bg-black hover:scale-105 transition duration-200 ease-in-out">
          Explore <FaArrowRight />
        </button>
        </Link>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative">
      <section
        style={{
          backgroundImage: "url('/Images/hero/hero.jpeg')",
        }}
        className="relative bg-cover min-h-screen lg:h-[35rem] flex flex-col items-center justify-center text-center text-white py-0 px-3"
      >
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Black overlay */}
          <div className="absolute top-0 left-0 w-full h-full opacity-50 z-1 bg-black"></div>
        </div>
        <div className="mt-6 video-content space-y-2 relative z-10 lg:flex">
          <div className="w-full lg:w-3/5 mt-14 lg:mt-0">
            <HeroText />
          </div>
          <div className="w-full lg:w-2/5 ">
            <HeroForm />
          </div>
        </div>
      </section>
      <div className="lg:-mt-10 mt-9 relative flex items-center justify-center">
        <HeroPanel />
      </div>
    </div>
  );
}

export default Hero;
