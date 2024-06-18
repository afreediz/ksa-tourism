import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Define reusable animations
const menuOpenAnimation = {
  opacity: 1,
  scale: 1,
  transition: { duration: 0.3, ease: "easeInOut" },
};

const menuCloseAnimation = {
  opacity: 0,
  scale: 0.8,
  transition: { duration: 0.2, ease: "easeIn" },
};

const navList = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  {title: "Kerala Tourism",path: "/kerala-tourism"},
  { title: "Packages", path: "/packages" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
];
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-black/5 text-white">
      <div className="flex-1">
        <Link to="/">
          <img
            src="/Images/ksa2.png"
            className="h-14 p-2"
            alt="Logo Image"
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className=" rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-4 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black/30 bg:blur backdrop-blur rounded-box w-52"
          >
            {navList.map((navItem) => (
              <Link className="p-2 hover:bg-teal-400 rounded-xl font-bold" key={navItem.path} to={navItem.path}>
                {navItem.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

