import React from "react";

function ContactMap() {
  return (
    <div className="p-3">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-_6-gtdyCDsRS_yF6V0ydUE&key=AIzaSyD04NPiMw57zw92Vc6gT7C38Q6nQzLNZ_Y"
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
