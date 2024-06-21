import React, { useState } from "react";
import KeralaTourismModal from "./KeralaTourismModal";
import kerala from "./Constants";
import ReactPlayer from "react-player/youtube";

const youtubeVideos = [
  {
    title: "Kerala Unveiled, A Tropical paradise awaits",
    link: "https://youtu.be/0L8vaX1yJmQ?si=YoEzBKma6em6G9ao",
  },{
    title: "Kerala Tourism | Wayanad | Miss Swetha Menon",
    link: "https://youtu.be/eXxYoxtfhdc?si=3l8mTfNIqXttaXoJ",
  },{
    title:"Kerala The Real Beauty of Nature",
    link: "https://youtu.be/Gn1xS4qS5Xg?si=NVMFgs_ZfWEAnfVh"
  },{
    title:"KSA Tours And Travels",
    link: "https://youtu.be/OMBJzST93dE?si=oJxyw1YjU2R1ThUY"
  },
  
]

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
        {/* youtube video */}
        <h1 className="text-3xl text-center font-bold p-3">Youtube Videos</h1>
        <div className="p-3 flex flex-wrap gap-4 items-center justify-center">
          {youtubeVideos.map((video, index) => (
            <div
            data-aos="zoom-in"
              key={index}
              className="p-4 bg-white border-2 border-transparent hover:border-teal-300 card cursor-pointer"
              onClick={() => openModal(blog)}
            >
              <div className="w-full max-w-[30rem]">
                <ReactPlayer className="w-full max-w-[30rem]" url={video.link} />
              </div>
              <div>
                <p className="font-bold text-black max-w-[20rem]">{video.title}</p>
              </div>
            </div>
          ))}
        </div>


      
    </div>
  );
}

export default ExploreKerala;
