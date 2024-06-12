import React, { useState } from 'react';
import {educational} from './packagesdata'; // Assuming packagesData is the name of your data file

export default function Education() {
  const [openPackage, setOpenPackage] = useState(null);

  const togglePackage = (index) => {
    setOpenPackage(openPackage === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl px-4 py-8 mx-auto">
      {educational.educational.map((pkg, index) => (
        <div key={index} className="mb-6">
          <div 
            className="p-4 border rounded-lg shadow-sm cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-300" 
            onClick={() => togglePackage(index)}
          >
            <h4 className="text-xl font-semibold text-gray-900 flex justify-between items-center">
              {pkg.name}
              <span>{openPackage === index ? '-' : '+'}</span>
            </h4>
          </div>
          {openPackage === index && (
            <div className="p-4 border border-t-0 rounded-b-lg shadow-inner bg-white">
              {pkg.destinations ? (
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  {pkg.destinations.map((destination, idx) => (
                    <li key={idx}>{destination}</li>
                  ))}
                </ul>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-black">
                  {pkg.packages.map((subPkg, idx) => (
                    <div key={idx} className="border p-2 rounded-lg text-black">
                      <ul className="list-disc pl-5">
                        {subPkg.destinations.map((destination, i) => (
                          <li key={i}>{destination}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
