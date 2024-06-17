import React from "react";

function ContactMap() {
  return (
    <div className="p-3">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=Vyttila,+Kochi,+Kerala,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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
