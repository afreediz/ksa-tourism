import { useEffect } from "react";
import "./style/Packages.css";
import { Link } from "react-router-dom";


const destinations = [
  {
    package: "HoneyMoon Tour Package",
    image: "/Images/packages/honeymoon.jpeg",
    caption: "Embark on the journey of a lifetime with our Honeymoon Tour Package. Explore enchanting destinations hand in hand, creating unforgettable memories as you begin your marital bliss. Book now for the perfect blend of romance and adventure",
    packageCategory: "Domestic"
  },
  {
    package: "Ayurveda Tour Package",
    image: "/Images/packages/ayurveda.jpeg",
    caption: "Revitalize your senses with our Ayurveda Tour Package, offering serene spa retreats and personalized wellness experiences. Embark on a transformative journey for ultimate relaxation and rejuvenation.",
    packageCategory: "Domestic"

  },
  {
    package: "Pilgrimage Tour Package",
    image: "/Images/packages/pilgrimage.jpeg",
    caption: "Embark on a sacred journey with our Pilgrimage Tour Package. Explore revered destinations, experience spiritual serenity, and create meaningful memories on this transformative pilgrimage.",
    packageCategory: "Pilgrimage"

  },
  {
    package: "Bussiness Tour Package",
    image: "/Images/packages/bussiness.jpeg",
    caption: "Elevate your business endeavors with our Business Tour Package. Seamlessly blend work and travel, ensuring productivity in top-notch destinations with curated facilities for your professional success.",
    packageCategory: "International"

  },
  {
    package: "Family Tour Package",
    image: "/Images/packages/family.webp",
    caption: "Create lasting memories with our Family Tour Package. Tailored for all ages, it offers a perfect blend of adventure and relaxation, ensuring quality time and unforgettable moments for your entire family.",
    packageCategory: ""

  },
  {
    package: "School/ College Tour Package",
    image: "/Images/packages/education.jpeg",
    caption: "Enrich minds with our School/ College Tour Package. Designed to inspire learning through immersive experiences, explore educational landmarks and cultural gems while fostering a love for discovery.",
    packageCategory: "School-or-College"

  },
  {
    package: "Adventure Tour Package",  
    image: "/Images/packages/adventure.jpg",
    caption: "Explore the thrill of our Adventure Tour Package! Experience heart-pounding activities like hiking, white-water rafting, and zip-lining. Join us for unforgettable adventures in stunning landscapes. Book now for an adrenaline-fueled journey!",
    packageCategory: ""
  
  },
  {
    package: "Cruise Tour Package",
    image: "/Images/packages/cruise.jpg",
    caption: "Experience luxury with our Cruise Tour Package! Sail to exotic destinations in style, enjoying gourmet dining and captivating entertainment on board. Book now for an unforgettable journey at sea!",
    packageCategory: ""
  
  }
]

function Packages() {
  useEffect(() => (
    window.scrollTo(0,0)
  ),[])
  return (
    <div className="mt-6">
        <h3 className="heading">Our Exclusive Holiday Packages!</h3>
        <div className="box-wrapper w-full  grid grid-cols-1 lg:grid-cols-4 place-items-center justify-items-center p-3">
        {destinations.map((data,index) => (
          <figure key={data.package} data-aos="fade-up" className="shape-box shape-box_half group">
          <img src={data.image} alt=""/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
              <div className="show-cont">
                  <h3 className="card-no">0{index+1}</h3>
                  <h4 className="card-main-title text-white group-hover:text-gray-600">{data.package}</h4>
              </div>
              <p className="card-content shadow-sm">{data.caption}</p>
              <Link to={`/packages/${data.packageCategory}`} className="read-more-btn">Read More</Link>
          </figcaption>
          <span className="after"></span>
      </figure>
        ))}
    </div>
    </div>
  );
}

export default Packages;
