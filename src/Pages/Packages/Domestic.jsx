import React,{useState} from 'react'
import domestic from './domestic'
export default function Domestic() {
  const [expandIndex, setExpandIndex] = useState(-1)
  const [innerExpandIndex, setInnerExpandIndex] = useState(-1)

  console.log(expandIndex, innerExpandIndex);

  return (
    <div className="container mx-auto px-4 py-8">
        {domestic && domestic.map((category, index) => (

          <>
          {category.data.map((tourPackage, index) => (
                <div 
                  key={index} 
                  className={`collapse ${innerExpandIndex == index ? "collapse-open" : "collapse-close"}  border rounded-lg shadow-sm cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-300 mb-8`}
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
            ))}</>
        ))}
    </div>
);
}
