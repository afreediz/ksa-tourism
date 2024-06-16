const data = [
  {
    id: 1,
    image: "/Images/india/kerala.jpg",
    title: "Our Kerala Tour Packages!",
    caption:
      "Enchanting Backwaters, Lush Greenery, and Cultural Wonders - Explore Paradise with Our Kerala Tour Packages!",
  },
  {
    id: 2,
    image: "/Images/india/southindia.jpg",
    title: "Our South India Tour Packages!",
    caption:
      "Embark on an unforgettable journey through South India with our curated tour packages.",
  },
  {
    id: 3,
    image: "/Images/india/westindia.jpg",
    title: "Our West India Tour Packages!",
    caption:
      "Unlock the wonders of West India with our curated tour packages - where vibrant cultures and breathtaking landscapes await",
  },
  {
    id: 4,
    image: "/Images/india/eastindia.jpg",
    title: "Our North-East India Tour Packages!",
    caption:
      "Embark on a mesmerizing journey through the enchanting landscapes and diverse cultures of North-East India with our curated tour packages",
  },
];

const Card = ({ image, title, caption }) => (
  <div data-aos="fade-up" className="card w-80  shadow-xl bg-white">
    <figure>
      <img src={image} alt={title} />
    </figure>
    <div className="card-body">
      <h2 className="text-xl font-bold text-black ">{title}</h2>
      <p>{caption}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline bg-teal-400 text-white hover:bg-teal-700 cursor-pointer">Read More</div>
      </div>
    </div>
  </div>
);

function IncredibleIndia() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="heading">Incredible Holidays, Unforgettable India!</h3>
      <p className="text-center">
        mmerse Yourself in Unforgettable Adventures: Incredible Holidays Await
        in the Heart of India's Splendor!
      </p>
      <div className="mt-6 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
        {data.map((value) => (
          <Card
            key={value.id}
            image={value.image}
            title={value.title}
            caption={value.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default IncredibleIndia;
