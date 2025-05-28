
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className='text-white py-12' style={{ backgroundColor: "#001A38" }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div>
            <h4 className='text-lg font-semibold mb-6 border-b border-white/20 pb-2'>
              College Internationale Lepieux
            </h4>
            <div className='mb-6'>
              <h5 className='text-base font-semibold uppercase tracking-wider mb-2'>
                Où nous sommes
              </h5>
              <p className='text-gray-300'>Quartier Mulengi, Kalemie 3</p>
              <p className='text-gray-300'>
                Kalemie Tanganyika.
                <br />
                République Démocratique Du Congo
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className='md:ml-32'>
            <div className='mb-6'>
              <h5 className='text-lg font-semibold mb-6 border-b border-white/20 pb-2'>
                Contactez-nous
                {t("cantactez.title")}
              </h5>
              <p className='text-gray-300'>+243 814 627 868</p>
              <p className='text-gray-300'>infos@cil.com</p>
              <p className='text-gray-300'>protocole@cil.com</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className='md:ml-24'>
            <h5 className='text-lg font-semibold mb-6 border-b border-white/20 pb-2'>
              {t("connect.title")}
            </h5>
            <div className='flex flex-wrap items-center gap-4'>
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
};

export default Footer;
