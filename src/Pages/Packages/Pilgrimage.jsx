import React from 'react';
import pilgrimageData from './pilgrimage'; // Assuming pilgrimageData is the name of your data file

export default function Pilgrimage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {pilgrimageData && pilgrimageData.map((tourPackage, index) => (
                <div key={index} className="collapse collapse-plus  border rounded-lg shadow-sm cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-300 mb-8">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium text-black text-left uppercase">
                      {tourPackage.package_name}  {tourPackage.duration}
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
            ))}
        </div>
    );
}


{/* <h2 className="text-2xl font-semibold mb-2">{tourPackage.package_name}</h2>
<p className="text-lg mb-4">Duration: {tourPackage.duration}</p>
<div className="grid gap-4">
  {tourPackage.itinerary && tourPackage.itinerary.map((day, dayIndex) => (
    <div key={dayIndex} className="border p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">{day.day}</h3>
      <p className="text-gray-700">{day.description}</p>
    </div>
  ))}
</div> */}