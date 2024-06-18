import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import WhatsappButton from '../../Components/WhatsappButton'

const services = [
  {
    title: " Inbound and Outbound Tour Packages",
    description: "Discover the world with our expertly curated tour packages! Whether you're exploring the local treasures or venturing abroad, our inbound and outbound tour packages offer tailored experiences to suit every traveler's needs. From guided tours and adventure trips to cultural excursions and relaxing getaways, we ensure an unforgettable journey every time.",
    image: "outbound.jpg"
  },{
    title: "Hotel Booking",
    description: "Find your perfect stay with ease! Our hotel booking service connects you with a wide range of accommodations, from budget-friendly hotels to luxurious resorts. Enjoy seamless booking, exclusive deals, and personalized recommendations to make your stay as comfortable and enjoyable as possible.",
    image: "hotel.jpg"
  },{
    title: " Cab Services ",
    description: "Travel in comfort and style! Our reliable cab services provide safe and convenient transportation for all your travel needs. Whether you need an airport transfer, city tour, or a ride to your hotel, our professional drivers are ready to assist you 24/7",
    image: "taxi.jpg"
  },{
    title: "Helicopter Services",
    description: "Elevate your travel experience! Our helicopter services provide fast and scenic transport options for both leisure and business travelers. Perfect for sightseeing tours, private charters, and quick transfers, our helicopters offer a unique perspective and unparalleled convenience.",
    image: "helicopter.jpg"
  },{
    title: "Ticketing and Visa ",
    description: "Hassle-free travel planning! We handle all your ticketing and visa requirements to ensure a smooth and stress-free travel experience. From flight tickets and train passes to visa applications and travel insurance, we've got you covered. ",
    image: "visa.jpg"
  },{
    title: "House Boat and Cruise Services ",
    description: "Experience the magic of water travel! Our houseboat and cruise services offer a unique way to explore beautiful waterways and coastlines. Whether you prefer a serene houseboat stay or an exciting cruise adventure, enjoy luxurious amenities and breathtaking views on every voyage. ",
    image: "boat.jpg"
  },{
    title: "Bike and Car Rent Services ",
    description: "Explore at your own pace! With our bike and car rental services, you have the freedom to discover destinations on your own terms. Choose from a wide range of vehicles, including bikes, scooters, and cars, to suit your adventure style and travel needs. ",
    image: "bikecar.avif"
  },{
    title: "Medical Services ",
    description: "Travel with peace of mind! Our medical services ensure that you have access to quality healthcare during your travels. From emergency medical assistance to routine check-ups and travel vaccinations, we provide comprehensive medical support to keep you safe and healthy on the go. ",
    image: "medical.jpg"
  },
]

function Service() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <WhatsappButton/>
        <Navbar/>
        <div className='min-h-screen'>
          <div className="relative min-h-[50vh] bg-cover bg-center object-cover" style={{ backgroundImage: "url('/Images/service/services.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Enhanced dark overlay */}
            <div className="relative h-full flex flex-col items-center justify-center py-20 z-2 text-white p-4 text-center"> {/* Centered Content */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl uppercase font-bold tracking-wide shadow-sm">
                WORLD'S BEST QUALITY SERVICES
              </h1>
              <p className="mt-3 shadow text-white font-semibold text-lg md:text-xl max-w-4xl">
                Experience unparalleled excellence with our top-tier services, dedicated to meeting your needs with precision and care. We strive to deliver outstanding quality that sets us apart from the rest.
              </p>
            </div>
          </div>
          <div className='my-12 flex flex-col justify-center items-center'>
            <h3 className="heading text-3xl md:text-4xl font-bold mb-8">
              Services We Provide
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
                  <figure className='w-full'>
                    <img className='w-full h-48 object-cover' src={`/Images/service/${service.image}`} alt={service.title} />
                  </figure>
                  <div className="p-6">
                    <h2 className="card-title text-2xl font-bold mb-2 text-gray-900">{service.title}</h2>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Service