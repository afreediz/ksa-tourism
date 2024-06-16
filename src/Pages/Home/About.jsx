import React from "react";

function About() {
  return (
    <div className="group flex flex-col md:flex-row items-center justify-center bg-gray-100">
      <div data-aos="fade-right" className="text-center md:text-left md:w-1/2 md:p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4">About</h1>
        <p className="max-w-prose text-gray-600 leading-7 p-2">
          Discover unparalleled travel experiences with KSA Tours and Travels Pvt. Ltd, your ultimate journey companion since 2001. Our team of dedicated professionals, including qualified driver-guides and expert staff, ensures that every trip becomes a unique celebration. With extraordinary growth since our inception, we specialize in crafting inspiring adventures for both national and international tourists. At KSA Tours and Travels, we go beyond providing travel assistance; we curate unforgettable moments, turning each journey into a vibrant tapestry of joy and discovery. Join us as we redefine travel, offering you a gateway to a world where the extraordinary is the norm, and every destination is an opportunity for a new adventure.
        </p>
        <button className="m-3 btn bg-teal-400 shadow text-white border-none px-5 py-1.5 border border-black hover:bg-black hover:text-white hover:scale-110 transition ease-in-out duration-300 ">Read More...</button>
      </div>
      <div  className="lg:relative">
      <img data-aos="fade-left" className="w-96 object-cover rounded-xl" src="https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Russian"  />
      <img  data-aos="zoom-out-up" data-aos-duration="300" className="lg:block hidden absolute w-72 top-8 -right-28 border-[12px] border-white  rounded-full " src="https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sea Top View" />
      </div>
    </div>
  );
}

export default About;
