import React from "react";

function ContactForm() {
  return (
    <div className="hero min-h-screen" id="contactform">
      <div className="hero-content grid lg:flex items-start w-full">
        <div data-aos="fade-right" className="w-full lg:w-2/5">
            <span className="font-bold text-teal-500 uppercase">get in touch with us</span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-black capitalize">have a question or feedback ?</h2>
            <p className="text-gray-600">"Have a question or feedback? We're all ears! Reach out to us and let's make your travel experience extraordinary.</p>
        </div>
        {/* form section */}
        <div data-aos="fade-left" className="w-full lg:w-3/5">
            <form className="flex flex-col gap-2 p-12 shadow-lg">
                <input type="text" placeholder="Name" className="input w-full bg-gray-200" />
                <div className="grid lg:flex gap-2">
                    <input type="email" placeholder="Email..." className="input bg-gray-200 w-full" />
                    <input type="text" placeholder="Mobile No." className="input bg-gray-200 w-full" />
                </div>
                <input type="text" placeholder="Subject..." className="input w-full bg-gray-200" />
                <textarea placeholder="Message..." className="textarea bg-gray-200 h-32"></textarea>
                <button className="btn bg-teal-500 border-none text-white">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
