import React from "react";

function ContactHero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img data-aos="fade-left" src="/Images/svg/contact.svg" className="h-96" />
        <div>
          <h1 data-aos="fade-up" className=" text-5xl lg:text-8xl uppercase font-bold text-gray-600">
            Contact <span className="font-normal text-teal-400">Us</span>
          </h1>
          <p className="py-6 text-gray-600">
            Explore exotic destinations, indulge in luxurious escapes, and
            create memories that last a lifetime with KSA. Our expert team is
            here to tailor-make your dream vacation. Contact us now and let the
            journey begin
          </p>
          <button className="btn bg-teal-500 border-none text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
