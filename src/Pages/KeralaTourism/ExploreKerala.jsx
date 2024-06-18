import React, { useState } from "react";
import KeralaTourismModal from "./KeralaTourismModal";
import kerala from "./Constants";

function ExploreKerala() {
  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleModalOpen = (value) => {
    setSelectedValue(value);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="mt-6 mb-6">
      <h2 data-aos="zoom-in" className="heading">
        Explore Kerala: Unveiling the Richness of Each District
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto p-2">
        Discover Kerala's diverse districts: From coastal marvels to verdant
        hills, each with its own unique charm
      </p>
      <div className="p-4 grid place-items-center justify-items-center grid-cols-1 lg:grid-cols-4 gap-4">
        {/* card */}
        {kerala.map((value, index) => (
          <div key={index} className="card w-80 shadow-xl image-full">
          <figure><img src={value.image} alt="Image" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white">
              {value.title}
            </h2>
            <p></p>
            <div className="card-actions justify-end">
              <button  onClick={() => handleModalOpen(value)} className="btn bg-teal-400 text-white border-none">More Details</button>
            </div>
          </div>
        </div>
        ))}
        {/* card close */}
        {showModal && (
          <KeralaTourismModal
            selectedValue={selectedValue}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
}

export default ExploreKerala;
