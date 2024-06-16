import React from 'react';
// import "./style/Org.css"

const images = [
  "/Images/org/org-1.png",
  "/Images/org/org-2.png",
  "/Images/org/org-3.png",
  "/Images/org/org-4.png",
  "/Images/org/org-5.png",
  "/Images/org/org-6.png",
  "/Images/org/org-7.png",
  "/Images/org/org-8.png",
  "/Images/org/org-9.png",
  "/Images/org/org-10.png",
  "/Images/org/org-11.png",
  "/Images/org/org-12.png",
  "/Images/org/org-13.png",
  "/Images/org/org-14.png",
  "/Images/org/org-15.png",
]

function Organizations() {
  return (
    <div className="organization mx-auto py-16 flex flex-col">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Our Organizations</h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
      {images.map((_,index) => (
        <div className=' '>
        <img src={images[index]} className='h-44 w-44 object-contain' alt="" />
      </div>
      ))}
      </div>
    </div>
  );
}

export default Organizations;
