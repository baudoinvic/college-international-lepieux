
import React from "react";
import front from "../../utils/images/front.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import campus from "../../utils/images/campus.png";
import { Cpu, Zap, BookOpen, Sprout } from "lucide-react";

const Home = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(
        "https://challenge-assement.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Subscription failed.");
      }

      toast.success("Thank you for Subscribing ");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div>
      <div className='bg-white'>
        <div className='relative'>
          <div className='w-full h-[580px] sm:h-[580px] bg-gray-200'>
            <img
              src={front}
              alt='Campus view'
              className='w-full h-full object-cover'
            />
          </div>

          <div className='absolute bottom-0 left-0 p-4 sm:p-8 pb-6 sm:pb-12 bg-opacity-70 w-2/5'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 '>
              {t("first.title")}
            </h1>
          </div>
        </div>

        {/* Mission Section */}
        <div className='bg-[#001A38] text-white py-8 sm:py-12 px-6 sm:px-8 flex flex-col md:flex-row justify-between'>
          <div className='md:w-1/2 mb-6 md:mb-0'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
              {t("notre.title")}
            </h2>
            <p className='text-base sm:text-lg mb-6'>
              Notre mission est de former les innovateurs congolais de demain en
              dispensant une éducation d'excellence dans les domaines des
              sciences et des technologies
              {t("lieu.title")}
            </p>
          </div>

          <div className='md:w-2/5 border-[1px] border-solid border-[#c9a85c] p-4 sm:p-6 flex items-center'>
            <p className='text-base sm:text-lg italic'>
              Changer le monde commence ici : à Lepieux, j'apprends à résoudre
              des problèmes concrets et à bâtir l'avenir de mon pays.
            </p>
          </div>
        </div>

        {/* Educational Program Section */}
        <div className='bg-beige-100 py-8 sm:py-12 px-6 sm:px-8'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>
            Programme pédagogique
          </h2>
          <p className='text-base sm:text-lg mb-8 sm:mb-12'>
            Notre cursus de six ans combine théorie et pratique pour préparer
            les élèves aux défis de demain
          </p>

          {/* Four Subject Areas */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12'>
            {/* Electronics */}
            <div className='flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='text-[#c9a85c] mb-4'>
                <Cpu size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-2'>Électronique</h3>
              <p className='text-gray-600'>
                Formation complète en circuits électroniques et systèmes
                embarqués
              </p>
            </div>

            {/* Electricity */}
            <div className='flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='text-[#c9a85c] mb-4'>
                <Zap size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-2'>Électricité</h3>
              <p className='text-gray-600'>
                Formation pratique en installation et maintenance électrique
              </p>
            </div>

            {/* Mathematics & Physics */}
            <div className='flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='text-[#c9a85c] mb-4'>
                <BookOpen size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-2'>
                Mathématiques
                <br />& Physique
              </h3>
              <p className='text-gray-600'>
                Programmes complets pour maîtriser les sciences fondamentales
              </p>
            </div>

            {/* Agronomy */}
            <div className='flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='text-[#c9a85c] mb-4'>
                <Sprout size={48} strokeWidth={1.5} />
              </div>
              <h3 className='text-xl font-bold mb-2'>Agronomie</h3>
              <p className='text-gray-600'>
                Formation en techniques agricoles durables et gestion des
                cultures
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className='flex justify-center'>
            <button className='bg-[#c9a85c] hover:bg-gold-600 text-white font-bold py-2 px-10 rounded'>
              En savoir plus
            </button>
          </div>
        </div>

        {/* Campus Section */}
        <div className='flex flex-col md:flex-row px-6 sm:px-8 mb-12'>
          <div className='w-full md:w-1/2 px-0 py-6 sm:py-8 md:p-12 flex flex-col justify-center'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 md:mb-6'>
              Notre Etablissement
            </h2>
            <p className='text-base md:text-lg'>
              Notre établissement, situé à Kalemie, offre un cadre moderne, sûr
              et encadré, propice à l'épanouissement et à la réussite des
              élèves. Il dispose d'infrastructures de qualité, dont un
              laboratoire informatique équipé pour accueillir jusqu'à 50 élèves
              en simultané, ainsi que des laboratoires d'électronique et
              d'électricité, favorisant l'apprentissage pratique et l'innovation
              dès le secondaire.
            </p>
          </div>

          <div className='md:w-1/2 mt-4 md:mt-0'>
            <img
              src={campus}
              alt='Campus aerial view'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
      </div>

      <div className='px-6 sm:px-8 py-8 sm:py-12 mb-12 mt-8 sm:mt-16'>
        {/* Enhanced Header */}
        <div className='text-center mb-8 sm:mb-12'>
          <h6 className='inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase bg-[#c9a85c] rounded-full mb-3'>
            College Internationale lepieux Events
          </h6>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4'>
            {t("event.title")}
          </h1>

          <p className='text-gray-600 max-w-2xl mx-auto'>
            {t("day.description")}
          </p>
        </div>

        {/* Event Cards with Enhanced Design */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {/* Science Fair Card */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1'>
            <div className='h-3  bg-[#c9a85c]'></div>
            <div className='p-4 sm:p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#c9a85c] text-white mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 sm:h-5 sm:w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-14a2 2 0 10-4 0v1H5a1 1 0 000 2h1v3H5a1 1 0 000 2h1v1a2 2 0 104 0v-1h1a1 1 0 100-2h-1V6h1a1 1 0 100-2h-1V3a2 2 0 00-2-2h-2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h2 className='text-lg sm:text-xl font-bold'>
                  {t("events.scienceFair.title")}
                </h2>
              </div>
              <div className='mb-4 flex items-center text-gray-600'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  ></path>
                </svg>
                <span>{t("events.scienceFair.date")}</span>
              </div>
              <div className='mb-4 flex items-center text-gray-600'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                </svg>
                <span>{t("events.scienceFair.location")}</span>
              </div>
              <p className='text-gray-800 mb-4'>
                {t("events.scienceFair.description")}
              </p>
            </div>
          </div>

          {/* Sports Day Card */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1'>
            <div className='h-3 bg-[#c9a85c]'></div>
            <div className='p-4 sm:p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#c9a85c] text-white mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 sm:h-5 sm:w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h2 className='text-lg sm:text-xl font-bold'>
                  {t("events.sportsDay.title")}
                </h2>
              </div>
              <div className='mb-4 flex items-center text-gray-600'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  ></path>
                </svg>
                <span>{t("events.sportsDay.date")}</span>
              </div>
              <div className='mb-4 flex items-center text-gray-600'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                </svg>
                <span>{t("events.sportsDay.location")}</span>
              </div>
              <p className='text-gray-800 mb-4'>
                {t("events.sportsDay.description")}
              </p>
            </div>
          </div>

          {/* Math Competition Card */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1'>
            <div className='h-3 bg-[#c9a85c]'></div>
            <div className='p-4 sm:p-6'>
              <div className='flex items-center mb-4'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#c9a85c] text-white mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 sm:h-5 sm:w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
                  </svg>
                </div>
                <h2 className='text-lg sm:text-xl font-bold'>
                  {t("events.mathCompetition.title")}
                </h2>
              </div>
              <div className='mb-4 flex items-center text-gray-600'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  ></path>
                </svg>
                <span>{t("events.mathCompetition.date")}</span>
              </div>
              <div className='mb-4 flex items-center text-gray-600'>
                <svg
                  className='w-4 h-4 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                </svg>
                <span>{t("events.mathCompetition.location")}</span>
              </div>
              <p className='text-gray-800 mb-4'>
                {t("events.mathCompetition.description")}
              </p>
            </div>
          </div>
        </div>

        <div className='mt-8 sm:mt-12 text-center'>
          <h3 className='text-xl sm:text-2xl font-bold mb-2'>
            {t("soon.title")}
          </h3>
          <p className='text-gray-600 max-w-lg mx-auto mb-6'>
            {t("soon.description")}
          </p>

          <form
            onSubmit={handleSubscribe}
            className='flex flex-col sm:flex-row gap-2 items-center justify-center'
          >
            <input
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              className='w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder={t("subscription.placeholder")}
              aria-label={t("subscription.aria_label")}
            />
            <button
              className='w-full sm:w-auto px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition-colors'
              style={{ backgroundColor: "#c9a85c" }}
            >
              {t("subscription.button")}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default Home;