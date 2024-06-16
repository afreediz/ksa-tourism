// import "./parallax.css"
function History() {
  return (
    <div id="history" className="min-h-screen  flex items-center justify-center">
      <div className="rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full relative overflow-hidden">
            <div
              className="parallax-image  h-full bg-no-repeat bg-fixed "
              style={{
                backgroundImage: `url('/Images/about/history.jpg')`
              }}
            />
          </div>
          <div className="flex flex-col justify-center p-2">
            <h2 className="text-3xl font-bold text-gray-600 mb-4 ">Our History</h2>
            <p data-aos="fade-up" className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              Embark on a journey with KSA Tours and Travels, a pioneer in Middle East tour operations since 2001, founded by the visionary <span className="font-bold underline">Mr. Shamsudheen K.M</span>. From our humble beginnings in Cochin, India, we've garnered an incredible response from the Middle East nations, establishing ourselves as a symbol of unparalleled quality and reliability.
            </p>
            <p data-aos="fade-up" className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              Specializing in the medium-high end of the travel market, we've earned the unwavering trust of an exclusive clientele, both domestically and abroad. Our journey has been adorned with numerous accolades and recognitions from both private and government sectors, a testament to our unwavering commitment to excellence.
            </p>
            <p data-aos="fade-up" className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              But our story doesn't end there. Expanding our horizons beyond the Middle East, we now welcome travelers from all corners of the globe to experience the enchanting tapestry of India. Our success lies in our steadfast dedication to delivering unparalleled service, ensuring that every journey with KSA is not just a trip, but a cherished memory etched in the sands of time.
            </p>
            <p data-aos="fade-up" className="text-gray-600 font-medium text-lg leading-relaxed mb-6">
              Join us as we continue to redefine the boundaries of travel, one unforgettable experience at a time. Welcome to KSA Tours and Travels, where every destination is a promise, and every journey, an adventure of a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
