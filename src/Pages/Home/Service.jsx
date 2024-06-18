import React from "react";
import { FaPlane, FaHotel, FaTaxi, FaTicketAlt, FaShip, FaHelicopter, FaBicycle, FaCar, FaHospital } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { title: "Inbound and Outbound Tour Packages", icon: <FaPlane /> },
  { title: "Hotel Booking", icon: <FaHotel /> },
  { title: "Cab Services", icon: <FaTaxi /> },
  { title: "Ticketing and Visa", icon: <FaTicketAlt /> },
  { title: "House Boat and Cruise Services", icon: <FaShip /> },
  { title: "Helicopter Services", icon: <FaHelicopter /> },
  { title: "Bike and Car Rent Services", icon: <FaBicycle /> },
  { title: "Medical Services", icon: <FaHospital /> },
];

const ServiceCard = ({ title, icon }) => {
  return (
    <div data-aos="zoom-out" className="bg-white flex flex-col items-center justify-center rounded-xl shadow-lg p-4 group hover:bg-teal-400">
      <h1 className="text-3xl bg-black-400 rounded-full  flex items-center justify-center text-teal-400  group-hover:text-white">
      {icon}
      </h1>
      <h3 className="text-xs text-center font-semibold text-gray-800 mb-4">{title}</h3>
    </div>
  );
};

function Service() {
  return (
    <div>
      <h1 className="heading m-4">Service</h1>
      <div className="container mx-auto py-4">
        <Link to="/services">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-8 gap-2 p-2">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} icon={service.icon} />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Service;
