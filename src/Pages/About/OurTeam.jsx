import React from "react";

function OurTeam() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <p className="text-center max-w-3xl mx-auto mb-12">
        Our cohesive team is driven by one mission: your satisfaction. With
        passion and expertise, we strive to make every journey unforgettable,
        guided by strong leadership and a commitment to excellence.
      </p>
      <div className="lg:flex items-center justify-center gap-20">
        {/* Card 1 */}
        <div data-aos="zoom-in" className="max-w-xs bg-white rounded-lg  overflow-hidden group">
          <img
            src="/Images/about/photo-1.jpg"
            alt="Shamsudeen"
            className="w-full h-64 object-cover group-hover:-translate-y-3 group-hover:scale-150 transition-all transform duration-1000 "
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Mr. Shamsudheen
            </h2>
            <p className="text-gray-700">Director</p>
          </div>
        </div>
        {/* Card 2 */}
        <div data-aos="zoom-in" className="max-w-xs bg-white rounded-lg  overflow-hidden group">
          <img
            src="/Images/about/photo2.jpg"
            alt="Merlyn"
            className="w-full h-64 object-cover group-hover:-translate-y-3 group-hover:scale-150 transition-all transform duration-1000 "
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Merlyn H
            </h2>
            <p className="text-gray-700">Operation Head</p>
          </div>
        </div>
        {/* Card 3 */}
        <div data-aos="zoom-in" className="max-w-xs bg-white rounded-lg  overflow-hidden group">
          <img
            src="/Images/about/photo3.jpg"
            alt="Sheeba"
            className="w-full h-64 object-cover group-hover:-translate-y-3 group-hover:scale-150 transition-all transform duration-1000 "
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Sheeba Jacob
            </h2>
            <p className="text-gray-700">Buisness Development Head</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OurTeam;
