'use client'

import React from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-700 p-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold text-white cursor-pointer">
            Zach <span className="text-gradient">Gallman</span>
          </div>
        </Link>
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          <span className="fas fa-bars text-white"></span>
        </button>
        <div className={`md:flex items-center ${isOpen ? '' : 'hidden'}`}>
          <ul className="md:flex space-x-4">
            <li className="nav-item">
              <Link href="#About">
                <div className="text-white cursor-pointer">About Me</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Skills">
                <div className="text-white cursor-pointer">Skills & Certifications</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Portfolio">
                <div className="text-white cursor-pointer">Portfolio</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Contact">
                <div className="text-white cursor-pointer">Contact Me</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
