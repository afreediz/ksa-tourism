import React from "react";

function MissionVision() {
  return (
    <div>
      {/* mission */}
      <div className="grid lg:flex w-full ">
        <div className="w-full lg:w-1/3 h-52 bg-gray-900 flex items-center justify-center">
          <h3 data-aos="zoom-in" className="text-white text-5xl">Mission</h3>
        </div>
        <div className=" w-full lg:w-2/3 flex items-center justify-center p-3">
          <p data-aos="fade-left" className="text-gray-500 text-justify">
            To carry the risks and challenges of travelers, ensuring they enjoy
            their holidays in comfort and luxury, is our foremost commitment.
            Our mission at KSA Tours and Travels is to craft seamless
            experiences that exceed expectations, providing unparalleled service
            and support every step of the way. We strive to be the trusted
            companion for travelers worldwide, offering peace of mind and
            unforgettable adventures.
          </p>
        </div>
      </div>
      {/* vision */}
      <div className="grid lg:flex w-full ">
      <div className="h-52 w-full flex lg:w-1/2 bg-gray-900 lg:hidden items-center justify-center">
          <h3 data-aos="zoom-in" className="text-white text-5xl  ">Vision</h3>
        </div>
        <div className=" w-full lg:w-1/2 flex items-center justify-center p-3">
          <p data-aos="fade-right" className=" text-gray-500 text-justify">
            At KSA Tours and Travels, our vision is clear: to become the global
            leader in the travel and tourism industry. Every day, we strive to
            redefine excellence by prioritizing customer satisfaction and
            innovation. With a focus on sustainable practices and meaningful
            experiences, we're committed to shaping the future of travel
            worldwide. Join us as we embark on this journey, where every
            adventure is a step towards realizing our vision of a world united
            through exploration and discovery.
          </p>
        </div>
        <div className="h-52 w-full hidden lg:w-1/2 bg-gray-900 lg:flex items-center justify-center">
          <h3 data-aos="zoom-in" className="text-white text-5xl  ">Vision</h3>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
