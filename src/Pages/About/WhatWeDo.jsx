const contentData = [
  {
    title: "Tour Packages",
    description: "Discover the magic of India with our meticulously crafted tour packages. From culturally rich heritage tours to adventurous escapades, we offer a personalized journey that resonates with your desires and aspirations."
  },
  {
    title: "Hotel Booking",
    description: "Experience luxury and comfort with our handpicked selection of accommodations. Partnering with renowned hotels and resorts across India, we ensure a seamless stay that exceeds your expectations, tailored to your preferences and budget."
  },
  {
    title: "Transportation Service",
    description: "Indulge in opulent travel experiences with our fleet of luxury vehicles. From elegant sedans to spacious buses, our professional drivers double as knowledgeable guides, ensuring a smooth and unforgettable journey to your desired destinations."
  },
  {
    title: "Forex",
    description: "Simplify your financial transactions with our hassle-free forex services. Whether you're exchanging currency or making investments, our expert team ensures seamless transactions, catering to travelers of all nationalities."
  },
  {
    title: "Ticketing",
    description: "Start your journey with ease using our comprehensive ticketing solutions. As your trusted tour operator, we offer seamless booking services for air, rail, and bus travel, ensuring a stress-free beginning to your adventure."
  },
  {
    title: "Medical Tourism",
    description: "Experience holistic wellness with our medical tourism services. Partnering with renowned hospitals and wellness centers across India, we offer rejuvenating treatments in a serene environment, ensuring your well-being throughout your stay."
  }
];

const Card = ({title,description}) => {
  return(
    <div className="flex flex-col p-6 bg-white shadow-xl hover:bg-teal-400 hover:text-white group transition-all ease-in-out duration-300">
      <h1 className="text-xl font-bold group-hover:text-white text-black mb-2">{title}</h1>
      <p>{description}</p>
    </div>
  )
}


function WhatWeDo() {
  return (
    <div className='mt-6'>
        <div className="lg:flex w-full">
          <div className="bg-gray-800 flex flex-col items-center justify-center lg:w-3/4">
            <h3 className="text-white text-3xl font-semibold" data-aos="zoom-in">What We Do</h3>
            <span data-aos="zoom-in" className="text-2xl text-gray-900 rounded -skew-x-6 font-semibold p-2 bg-white">24 x 7 Customer Service +</span>
          </div>
          {/* cards */}
          <div className="lg:w-1/4 p-2 lg:p-0">
            <Card title={contentData[0].title} description={contentData[0].description}/>
            <Card title={contentData[1].title} description={contentData[1].description}/>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 p-2 lg:p-0">
        <Card title={contentData[2].title} description={contentData[2].description}/>
        <Card title={contentData[3].title} description={contentData[3].description}/>
        <Card title={contentData[4].title} description={contentData[4].description}/>
        <Card title={contentData[5].title} description={contentData[5].description}/>

        </div>
    </div>
  )
}

export default WhatWeDo