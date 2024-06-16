import React from 'react';

const data = [
    {
        id: 1,
        title: "Ayurvedic Tourism",
        body: "Discover the ancient wisdom of Ayurveda, a 5000-year-old holistic health system from India. Ayurvedic medical tourism offers personalized treatments, herbal remedies, and rejuvenating therapies in serene settings. Experience holistic wellness and cultural immersion while exploring the roots of Ayurveda."
    },
    {
        id:2,
        title: "Adventure Tourism",
        body: "Explore the paradise of Kerala, where lush greenery awaits adventure seekers. From trekking through picturesque landscapes to thrilling water sports along the coast, Kerala offers endless opportunities for unforgettable adventures. Discover the heart of India's natural beauty and embark on a journey filled with excitement and exploration.",
    },
    {
        id: 3,
        title: "Honeymoon Tourism",
        body: "Begin your journey of togetherness in God's own country, Kerala, where paradise awaits newlyweds. From serene backwaters to pristine beaches, Kerala offers the perfect backdrop for your honeymoon. Create unforgettable memories as you explore enchanting landscapes, indulge in delicious cuisine, and experience the warmth of Kerala's hospitality. Start your new life together surrounded by beauty, enjoyment, and fun in this romantic haven"
    },
    {
        id:4,
        title: "Eco Tourism",
        body: "Experience the wonders of eco-tourism in God's own country, Kerala. Immerse yourself in exotic natural environments, supporting conservation efforts while observing diverse wildlife. Explore pristine ecosystems, encounter rare species, and contribute to sustainable tourism practices in this biodiversity hotspot. Discover the beauty of nature while leaving a positive impact on the environment in Kerala, the perfect destination for eco-tourism adventures."
    }
];
function TourPackages() {
  return (
    <div className='mt-6 flex flex-col justify-center items-center'>
      <h3 className="heading text-3xl font-bold mb-8">Our Tour Packages</h3>
      {/* body */}
      <div className="grid gap-3 lg:flex w-full px-12 mb-8">
        <div data-aos="fade-up" className='w-full lg:h-72 lg:w-2/5 shadow-lg bg-teal-400 text-white  p-6'>
          <h2 className='font-bold text-2xl text-white'>{data[0].title}</h2>
          <p className='text-base font-medium mt-2'>{data[0].body}</p>
        </div>
        <div  className='w-full lg:h-72 lg:w-3/5 bg-white shadow-lg  p-6'>
          <h2 className="font-bold text-2xl text-black">{data[1].title}</h2>
          <p className='text-base font-medium mt-2'>{data[1].body}</p>
        </div>
      </div>
      {/* second section */}
      <div className="gap-3 grid lg:flex w-full px-12 ">
        
        <div data-aos="fade-right" className='w-full lg:h-80 lg:w-3/5 bg-white shadow-lg p-6'>
          <h2 className="font-bold text-2xl text-black">{data[2].title}</h2>
          <p className='text-base font-medium mt-2'>{data[2].body}</p>
        </div>
        <div data-aos="fade-left" className='w-full lg:h-80 lg:w-2/5 shadow-lg bg-teal-400 text-white rounded-xl p-6'>
          <h2 className='font-bold text-2xl text-white'>{data[3].title}</h2>
          <p className='text-base font-medium mt-2'>{data[3].body}</p>
        </div>
      </div>
    </div>
  );
}

export default TourPackages;
