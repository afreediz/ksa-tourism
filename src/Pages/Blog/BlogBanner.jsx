import React from 'react'

function BlogBanner() {
  return (
    <div className="relative h-96 overflow-hidden ">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="rounded-lg overflow-hidden">
              <div className="absolute bottom-2 left-3 max-w-xl">
                <h1 className=" text-4xl text-white font-bold mb-2">
                  Adventures Unveiled: Explore Our Travel Chronicles
                </h1>
                <hr className="border-t-4 border-teal-400"/>
                <p className="text-white font-bold mt-2">
                  Dive into our captivating travel blog where each story is a
                  passport to new experiences. Embark on virtual journeys and
                  let the wanderlust inspire your next adventure.
                </p>
              </div>
              <img
                className="w-full h-full roudned object-cover"
                src="/Images/blog/blogbanner.jpeg"
                alt="Blog Image"
              />
            </div>
          </div>
  )
}

export default BlogBanner