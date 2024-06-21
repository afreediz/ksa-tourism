import React, { useState } from "react";
import emailjs from 'emailjs-com'
function ContactForm() {
  const [data, setData] = useState({
    "name": "",
    "email": "",
    "contact": "",
    "subject": "",
    "message": ""
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    if (!data.email || !data.contact) {
      alert("Please fill the email and contact field");
      return;
    } 
    e.preventDefault();
    console.log(data);

        // EmailJS parameters
    const serviceID = import.meta.env.VITE_SERVICEID;
    const templateID = import.meta.env.VITE_CONTACT_TEMPLATEID;
    const userID = import.meta.env.VITE_USERID;

    const templateParams = {
      message:`
      Name: ${data.name}
      Email: ${data.email}
      Contact: ${data.contact}
      Subject: ${data.subject}
      Message: ${data.message}
      `
    }
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setData({
          "name": "",
          "email": "",
          "contact": "",
          "subject": "",
          "message": ""
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message, please try again later.');
      });

  }
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-12 shadow-lg">
                <input name="name" onChange={handleChange} required value={data.name} type="text" placeholder="Name" className="input w-full bg-gray-200" />
                <div className="grid lg:flex gap-2">
                    <input name="email" onChange={handleChange} required value={data.email} type="email" placeholder="Email..." className="input bg-gray-200 w-full" />
                    <input name="contact" onChange={handleChange} required value={data.contact} type="number" placeholder="Mobile No." className="input bg-gray-200 w-full" />
                </div>
                <input name="subject" onChange={handleChange} required value={data.subject} type="text" placeholder="Subject..." className="input w-full bg-gray-200" />
                <textarea name="message" onChange={handleChange} required value={data.message} placeholder="Message..." className="textarea bg-gray-200 h-32"></textarea>
                <button className="btn bg-teal-500 border-none text-white">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
