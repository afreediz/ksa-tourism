import React from "react";

function Featured() {
  return (
    <div className="p-2 flex flex-col items-center mt-6">
      <p className="tracking-wider font-bold text-sm mt-4">Featured Tours</p>
      <h1 className="heading">
        Beautiful Places Around The World
      </h1>
      <div className="grid md:flex lg:flex gap-4 mt-6">
        <img
        data-aos="fade-left"
          className="h-96 rounded-lg hover:scale-110 transition ease-in-out duration-300 delay-200 brightness-50 hover:brightness-100"
          src="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Paris"
        />
        <div className="grid gap-2">
          <img
          data-aos="fade-down"
            className="h-52 w-64 object-cover rounded-lg hover:scale-110 transition ease-in-out duration-300 delay-200 brightness-50 hover:brightness-100"
            src="https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Brazil"
          />
          <img
          data-aos="fade-up"
            className="h-52 w-64 object-cover rounded-lg hover:scale-110 transition ease-in-out duration-300 delay-200 brightness-50 hover:brightness-100"
            src="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Japan"
          />
        </div>
        <img
        data-aos="fade-right"
          className="h-96 object-cover rounded-lg hover:scale-110 transition ease-in-out duration-300 delay-200 brightness-50 hover:brightness-100"
          src="https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="London"
        />
      </div>
      <button className="mt-6 px-5 py-1.5 mx-auto btn border-none bg-teal-400 font-bold text-white transition ease-in-out delay-200 duration-300">View More ...</button>
    </div>
  );
}

export default Featured;
