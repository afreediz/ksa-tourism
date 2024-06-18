import React from 'react'
import { Link } from 'react-router-dom'
import { FaBlog, FaFacebook, FaFlickr, FaInstagram, FaLinkedin, FaPinterest, FaSnapchat, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content flex justify-around">
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link to={"/"} className="link link-hover">Home</Link>
    <Link to={"/about"} className="link link-hover">About us</Link>
    <Link to={"/blog"} className="link link-hover">Blog</Link>
    <Link to={"/kerala-tourism"} className="link link-hover">kerala tourism</Link>
    <Link to={"/packages"} className="link link-hover">Packages</Link>
    <Link to={"/services"} className="link link-hover">Services</Link>
    <Link to={"/contact"} className="link link-hover">Contact</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <a href="https://www.instagram.com/ksatours/">
        <FaInstagram className=" text-3xl mx-2" />
      </a>
      <a href="https://x.com/ksatourstravels">
        <FaTwitter className=" text-3xl mx-2" />
      </a>
      <a href="https://www.facebook.com/ksatoursandtravelspvtltd/">
        <FaFacebook className=" text-3xl mx-2" />
      </a>
      <a href="https://www.threads.net/@ksatours">
        <FaThreads className=" text-3xl mx-2" />
      </a>
      <a href="https://www.linkedin.com/company/ksa-tours-and-travels-pvt-ltd">
        <FaLinkedin className=" text-3xl mx-2" />
      </a>
      <a href="https://pin.it/6sF5oWAIk">
        <FaPinterest className=" text-3xl mx-2" />
      </a>
      <a href="https://www.snapchat.com/add/travelvloggerr">
        <FaSnapchat className=" text-3xl mx-2" />
      </a>
      <a href="https://flic.kr/ps/2z6MK9">
        <FaFlickr className=" text-3xl mx-2" />
      </a>
      <a href="https://ksatoursntravels.blogspot.com/">
        <FaBlog className=" text-3xl mx-2" />
      </a>
      <a href="http://www.youtube.com/@KSAToursandTravelsPvtLtd">
        <span className=' flex flex-col items-center'> <FaYoutube className=" text-3xl mx-2 " /> Official  </span>
      </a>
      <a href="http://youtube.com/c/SAFARIDAYS/videos">
        <span className=' flex flex-col items-center'> <FaYoutube className=" text-3xl mx-2 " /> Vlogs  </span>
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer