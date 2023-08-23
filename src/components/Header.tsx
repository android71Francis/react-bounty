import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/d5edf8_fb4b0d101ffa4b688372a0ed2fa3ee17~mv2.png/v1/fill/w_152,h_23,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bounty_Logo_White_Text.png"
              className=""
              alt="Bounty Logo"
            />
          </div>
          <div className="flex items-center lg:order-2">
            <Link
              to="/"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              About us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
