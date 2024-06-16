import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import blogs from ".";
import BlogBanner from "./BlogBanner";
import WhatsappButton from "../../Components/WhatsappButton";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <main>
      <WhatsappButton/>
      <Navbar />
      <div >
        <div className="p-4 lg:p-8 ">
        <BlogBanner/>
        </div>
        {/* body */}
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center justify-items-center">
          {blogs.map((blog) => (
            <div
            data-aos="zoom-in"
              key={blog.id}
              className="p-4 bg-white border-2 border-transparent hover:border-teal-300 card w-96 cursor-pointer"
              onClick={() => openModal(blog)}
            >
              <img src={blog.image} className="rounded-xl" alt="" />
              <div>
                <p className="font-bold text-black">{blog.title}</p>
                <p className="text-xm">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            
            <div className="bg-white p-8  h-96 max-w-4xl overflow-scroll ">
            <button onClick={closeModal} className="relative bottom-4 text-teal-500 hover:underline">
                Close
              </button>
             <div className="flex justify-center">
             <img src={selectedBlog.image} className="rounded-xl mb-4 h-64 " alt="" />
             </div>
              <p className="font-bold text-black mb-2">{selectedBlog.title}</p>
              <p className="text-xm">{selectedBlog.blog}</p>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </main>
  );
};

export default Blog;
