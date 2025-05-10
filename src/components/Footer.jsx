
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
  
    <footer className='text-white py-6' style={{ backgroundColor: "#001A38" }}>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='mb-6'>
          <h3 className='text-xl font-bold'>College Internationale Lepieux</h3>
        </div>

        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* WHERE WE ARE */}
          <div>
            <h4 className='text-lg font-medium mb-3'>Ou nous Sommes</h4>
            <p className='mb-1'>Quartier Mulengi, Kalemie 3</p>
            <p>
              Kalemie Tanganyika.
              <br />
              Republique Democratique Du Congo
            </p>
          </div>

          {/* CONTACT US */}
          <div className='ml-12'>
            <h4 className='text-lg font-medium mb-3'>Contact Nous</h4>
            <p className='mb-1'>+243 814 627 868</p>
            <p className='mb-1'>infos@cil.com</p>
            <p>protocole@cil.com</p>
          </div>

          {/* FOLLOW US */}
          <div>
            <h4 className='text-lg font-medium mb-3'>FOLLOW US</h4>
            <div className='flex items-center'>
              <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
                <CiFacebook />
              </Link>
              <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
                <FaXTwitter />
              </Link>
              <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
                <FaInstagram />
              </Link>
              <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
                <FaYoutube />
              </Link>
              <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
                <FaLinkedin />
              </Link>
              <Link to='#' className='hover:text-gray-300 text-xl'>
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
