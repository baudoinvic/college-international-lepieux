

import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <footer
      className="text-white py-8"
      style={{ backgroundColor: "#001A38" }}
    >
      <div className="container mx-auto px-4">
        {/* Logo section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">
            College Internationale Lepieux
          </h3>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WHERE WE ARE */}
          <div>
            <h4 className="text-lg font-medium mb-4">WHERE WE ARE</h4>
            <p className="mb-2">Quartier Mulengi, Kalemie 3</p>
            <p className="mb-4">Kalemie, Tanganyika Republique democratique Congo</p>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="text-lg font-medium mb-4">CONTACTS US</h4>
            <p className="mb-2">+243 814 627 868</p>
            <p className="mb-2">infos@cil.com</p>
            <p className="mb-2">protocole@cil.com</p>
            <Link to="/contact" className="text-sm hover:underline">
              Write to us
            </Link>
          </div>

          {/* FOLLOW US */}
          <div>
            <h4 className="text-lg font-medium mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-gray-300 text-xl">
                <CiFacebook />
              </Link>
              <Link to="#" className="hover:text-gray-300 text-xl">
                <FaXTwitter />
              </Link>
              <Link to="#" className="hover:text-gray-300 text-xl">
                <FaInstagram />
              </Link>
              <Link to="#" className="hover:text-gray-300 text-xl">
                <FaYoutube />
              </Link>
              <Link to="#" className="hover:text-gray-300 text-xl">
                <FaLinkedin />
              </Link>
              <Link to="#" className="hover:text-gray-300 text-xl">
                <FaTiktok />
              </Link>
            </div>
            
          
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
