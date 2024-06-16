import React, { useState } from 'react';

const packagesData = {
  educational: [
    {
      name: "ONE DAY TRIP",
      destinations: [
        "WONDERLA AND LULU MALL",
        "ATHIRAPALLY,VAZHACHAL,SILVERSTORM",
        "MUNNAR",
        "MARAYUR",
        "VAGAMON",
        "IDUKKI",
        "KODAIKANAL",
        "OOTY",
        "ALLAPUZHA HOUSE BOAT",
        "KANYAKUMARI",
        "THENMALA"
      ]
    },
    {
      name: "2 DAYS 3 NIGHTS",
      packages: [
        { destinations: ["OOTY-WAYANAD"] },
        { destinations: ["MARAYUR-WONDERLA"] },
        { destinations: ["VAGAMON-WONDERLA"] },
        { destinations: ["IDUKKI-WONDERLA"] },
        { destinations: ["OOTY-WONDERLA"] },
        { destinations: ["OOTY-MALAMPUZHA"] },
        { destinations: ["KODAIKANAL-MUNNAR"] },
        { destinations: ["MARAYUR-MUNNAR"] },
        { destinations: ["MARAYUR-KODAIKANAL"] },
        { destinations: ["MUNNAR-WONDERLA"] },
        { destinations: ["MYSORE-COORG"] },
        { destinations: ["MYSORE-OOTY"] },
        { destinations: ["MYSORE-BANGLORE"] },
        { destinations: ["MYSORE-WONDERLA-BANGLORE"] },
        { destinations: ["VAGAMON-IDUKKI"] },
        { destinations: ["MYSORE-CHICKMANGLORE"] },
        { destinations: ["COORG-CHICKMANGLORE"] },
        { destinations: ["DANUSHKODI-MADURAI-KODAIKANAL"] },
        { destinations: ["MYSORE-SRAVANABALAGOLA-BELUR"] }
      ]
    },
    {
      name: "3DAYS 4 NIGHTS PACKAGE",
      packages: [
        { destinations: ["CHICKMANGLORE-BELUR-MYSORE"] },
        { destinations: ["CHICKMANGLORE-HALIBEED-SARAVANABALAGOLA-MYSORE"] },
        { destinations: ["MYSORE-CHICKMANGLORE-WONDERLA"] },
        { destinations: ["WONDERLA-HALIBEED-SARAVANABALAGOLA-MYSORE"] },
        { destinations: ["MYSORE-BANGLORE-WONDERLA"] },
        { destinations: ["MYSORE-CHICKMANNGLORE-COORG"] },
        { destinations: ["MYSORE-COORG-WAYANAD"] },
        { destinations: ["MYSORE-OOTY-WONDERLA"] },
        { destinations: ["KODAIKANAL-MUNNAR-WONDERLA"] },
        { destinations: ["KODAIKANAL-MARAYUR-WONDERLA"] },
        { destinations: ["WAYANAD-OOTY-WONDERLA"] }
      ]
    },
    {
      name: "4DAYS 5NIGHTS PACKAGE",
      packages: [
        { destinations: ["OOTY-WAYANAD-WONDERLA"] },
        { destinations: ["KODAIKANAL-MARAYUR-MUNNAR-WONDERLA"] },
        { destinations: ["VAGAMON-RAMAKALMEDU-IDUKKI-MUNNAR-MARAYUR-WONDERLA"] },
        { destinations: ["BANGLORE-MYSORE-OOTY-WAYANAD-WONDERLA"] }
      ]
    }
  ]
};

export default function Education() {
  const [openPackage, setOpenPackage] = useState(null);

  const togglePackage = (index) => {
    setOpenPackage(openPackage === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl px-4 py-8 mx-auto">
      {packagesData.educational.map((pkg, index) => (
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
