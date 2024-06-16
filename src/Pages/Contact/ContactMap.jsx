import React from "react";

function ContactMap() {
  return (
    <div className="p-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252543.56612693385!2d76.75935035931481!3d8.50003789231597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708407180064!5m2!1sen!2sin"
        // width="600"
        height="450"
        className="border-none w-full rounded-lg"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactMap;
