import React from "react";

function ContactOffice() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid lg:flex items-start">
        <div>
          <div className="max-w-3xl">
            <h3 className="text-4xl lg:text-7xl font-extrabold text-black capitalize max-w-3xl">
              Visit Our Office Or Branches
            </h3>
            <p className="text-gray-700 max-w-2xl">
              Come visit us at our convenient office locations or branches near
              you. Our friendly staff is ready to assist you in planning your
              next adventure. Stop by today and let's start turning your travel
              dreams into reality!
            </p>
          </div>
          {/* branch details */}
          <div className="lg:flex grid justify-items-center gap-10 mt-8">
  <div data-aos="fade-up" className="w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="bg-teal-400 text-white text-center py-2 font-bold">
      KSA TOURS & TRAVELS Pvt. Ltd.
    </div>
    <div className="px-4 py-2">
      <p className="text-black font-normal mb-2">T.V Complex, Calicut road Changuvetti Kottakkal,</p>
      <p className="text-black font-normal mb-2">Malappuram Dt. Kerala 676501</p>
      <a href="https://wa.me/+919495509009" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600">+919495509009</a>
    </div>
  </div>
  <div data-aos="fade-up" className="w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="bg-teal-400 text-white text-center py-2 font-bold">
      KSA TOURS & TRAVELS Pvt. Ltd.
    </div>
    <div className="px-4 py-2">
      <p className="text-black font-normal mb-2">Courtyard Hotels Marriot Business Centre VIP Road</p>
      <p className="text-black font-normal mb-2">Opposite Kochi International Airport,</p>
      <p className="text-black font-normal mb-2">Nedumbassery, Vappalassery, Kochi, 683572</p>
      <a href="https://wa.me/+919446200008" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600">+919446200008</a>
    </div>
  </div>
</div>

        </div>
        {/* head office cards */}
        <div data-aos="zoom-in" className="relative mt-8 lg:mt-0">
          <div className="flex justify-center">
            <div className="absolute bg-white text-teal-500 font-bold px-6 py-2 -mt-5 shadow-md rounded">
              Head Office
            </div>
          </div>
          <div className="h-auto lg:h-96 w-full lg:w-[29rem] text-white bg-teal-500 rounded-lg flex flex-col p-3">
            <div className="mt-6">
              <h3 className="text-xl font-bold">
                KSA TOURS & TRAVELS Pvt. Ltd.
              </h3>
              <div className="font-normal">
                <p>Kattithara Building,</p>
                <p>Paradise Road,</p>
                <p>Janatha Junction, Vyttila</p>
              </div>
            </div>
            {/* contact numbers */}
            <div className="flex justify-between mt-4 p-2">
              {/* whatsapp numbers */}
              <div className="flex flex-col">
                <h4 className="font-bold underline underline-offset-2">
                  WhatsApp
                </h4>
                <a
                  className="font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/+919497192849"
                >
                  +919497192849 (Hindi)
                </a>
                <a
                  className="font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/+919497192839"
                >
                  +919497192839
                </a>
                <a
                  className="font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/+919495716208"
                >
                  +919495716208
                </a>
              </div>
              {/* telephone numbers */}
              <div className="flex flex-col">
                <h4 className="font-bold underline underline-offset-2">
                  Phone
                </h4>
                <a className="font-normal" href="tel:+914844047770">
                  +914844047770
                </a>
                <a className="font-normal" href="tel:+914844047771">
                  +914844047771
                </a>
              </div>
            </div>
            {/* email and timing */}
            <div className="flex justify-between mt-4 p-2">
              {/* email */}
              <div className="flex flex-col">
                <h4 className="font-bold underline underline-offset-2">
                  Email
                </h4>
                <a className="font-normal" href="mailto:mail@ksa.co.in">
                  mail@ksa.co.in
                </a>
              </div>
              {/* timing */}
              <div className="flex flex-col">
                <h4 className="font-bold underline underline-offset-2">
                  Monday - Saturday
                </h4>
                <span className="font-normal">09:00 AM - 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactOffice;
