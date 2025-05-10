
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
    // <footer className='text-white py-6' style={{ backgroundColor: "#001A38" }}>
    //   <div className='container mx-auto px-4'>
    //     {/* Header */}
    //     <div className='mb-6'>
    //       <h3 className='text-xl font-bold'>College Internationale Lepieux</h3>
    //     </div>

    //     {/* Main footer content */}
    //     <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    //       {/* WHERE WE ARE */}
    //       <div>
    //         <h4 className='text-lg font-medium mb-3'>Ou nous Sommes</h4>
    //         <p className='mb-1'>Quartier Mulengi, Kalemie 3</p>
    //         <p>
    //           Kalemie Tanganyika.
    //           <br />
    //           Republique Democratique Du Congo
    //         </p>
    //       </div>

    //       {/* CONTACT US */}
    //       <div className='ml-12'>
    //         <h4 className='text-lg font-medium mb-3'>Contact Nous</h4>
    //         <p className='mb-1'>+243 814 627 868</p>
    //         <p className='mb-1'>infos@cil.com</p>
    //         <p>protocole@cil.com</p>
    //       </div>

    //       {/* FOLLOW US */}
    //       <div>
    //         <h4 className='text-lg font-medium mb-3'>FOLLOW US</h4>
    //         <div className='flex items-center'>
    //           <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
    //             <CiFacebook />
    //           </Link>
    //           <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
    //             <FaXTwitter />
    //           </Link>
    //           <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
    //             <FaInstagram />
    //           </Link>
    //           <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
    //             <FaYoutube />
    //           </Link>
    //           <Link to='#' className='hover:text-gray-300 text-xl mr-4'>
    //             <FaLinkedin />
    //           </Link>
    //           <Link to='#' className='hover:text-gray-300 text-xl'>
    //             <FaTiktok />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className='text-white py-10' style={{ backgroundColor: "#001A38" }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <h3 className='text-2xl font-bold'>College Internationale Lepieux</h3>
        </div>

        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* WHERE WE ARE */}
          <div className='space-y-3'>
            <h4 className='text-lg font-semibold uppercase tracking-wider'>
              Où nous sommes
            </h4>
            <p className='text-gray-300'>Quartier Mulengi, Kalemie 3</p>
            <p className='text-gray-300'>
              Kalemie Tanganyika.
              <br />
              République Démocratique Du Congo
            </p>
          </div>

          {/* CONTACT US */}
          <div className='space-y-3'>
            <h4 className='text-lg font-semibold uppercase tracking-wider'>
              Contactez-nous
            </h4>
            <p className='text-gray-300'>+243 814 627 868</p>
            <p className='text-gray-300'>infos@cil.com</p>
            <p className='text-gray-300'>protocole@cil.com</p>
          </div>

          {/* FOLLOW US */}
          <div className='space-y-3'>
            <h4 className='text-lg font-semibold uppercase tracking-wider'>
              Suivez-nous
            </h4>
            <div className='flex items-center space-x-4'>
              <Link
                to='#'
                className='hover:text-gray-300 text-2xl transition-colors'
              >
                <CiFacebook />
              </Link>
              <Link
                to='#'
                className='hover:text-gray-300 text-xl transition-colors'
              >
                <FaXTwitter />
              </Link>
              <Link
                to='#'
                className='hover:text-gray-300 text-xl transition-colors'
              >
                <FaInstagram />
              </Link>
              <Link
                to='#'
                className='hover:text-gray-300 text-xl transition-colors'
              >
                <FaYoutube />
              </Link>
              <Link
                to='#'
                className='hover:text-gray-300 text-xl transition-colors'
              >
                <FaLinkedin />
              </Link>
              <Link
                to='#'
                className='hover:text-gray-300 text-xl transition-colors'
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} College Internationale Lepieux.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
