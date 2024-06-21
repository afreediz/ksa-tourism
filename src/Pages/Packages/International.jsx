import React, {useState} from 'react'
import international from './international';

export default function International() {
  const [openPackage, setOpenPackage] = useState(null);
  const [innerExpandIndex, setInnerExpandIndex] = useState(-1)

  const togglePackage = (index) => {
    setOpenPackage(openPackage === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
        {international && international.map((category, index) => (
        <div key={index} className="mb-6">
          <div 
            className="p-4 border rounded-lg shadow-sm cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-300" 
            onClick={() => togglePackage(index)}
          >
            <h4 className="text-xl font-semibold text-gray-900 flex justify-between items-center">
              {category.category}
              <span>{openPackage === index ? '-' : '+'}</span>
            </h4>
          </div>
            {openPackage === index && (
              <div className="p-4 border border-t-0 rounded-b-lg shadow-inner bg-gray-200">
              {category.data.map((tourPackage, index) => (
                  <div 
                    key={index} 
                    className={`collapse ${innerExpandIndex == index ? "collapse-open" : "collapse-close"}  border rounded-lg shadow-sm cursor-pointer bg-gray-100 hover:bg-gray-100 transition-colors duration-300 mb-8`}
                    onClick={() => setInnerExpandIndex((index === innerExpandIndex) ? -1 : index)}
                    >
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium text-black text-left uppercase flex justify-between">
                        <div className="">
                          {tourPackage.package_name}  {tourPackage.duration}
                        </div>
                        <div className="">{innerExpandIndex == index ? "-" : "+"}</div>
                      </div>
                      <div className="collapse-content text-left text-black">
                          {tourPackage.itinerary && tourPackage.itinerary.map((day, dayIndex) => (
                              <div key={dayIndex} className="border p-4 rounded shadow">
                                  <h3 className="text-xl font-semibold mb-2">{day.day}</h3>
                                  <p className="text-gray-900">{day.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}</div>
            )}
        </div>
        ))}
    </div>
);
}
