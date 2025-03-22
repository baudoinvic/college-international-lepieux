
import React, { useState } from "react";
import "./Description.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiH4 } from "react-icons/ri";

const Description = () => {
   const { t } = useTranslation();

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="description-page">
      <header className="h-screen flex items-center justify-center text-light text-center px-4">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {t("school.title")}
          </h2>
          <p className="w-full sm:w-3/4 lg:w-2/3 mx-auto mb-5 mt-8">
            {t("school.description")}
          </p>
        </div>
      </header>

      <div className="container py-10 mt-10">
        <div className="max-w-3xl">
          <h2 className="text-lg font-bold mb-6 italic">
            {t("school1.title")}
          </h2>
          <p className="text-lg text-gray-800 mb-6 italic">
            {t("school1.description")}
          </p>
        </div>

        <p>{t("program.description")}</p>

        <div className="w-full">
          {/* Top Row */}
          <div className="flex gap-4">
            {/* Veterinary and Agronomy */}
            <div className="bg-green-500 p-8 flex flex-col items-center justify-center text-center text-white flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4"
              >
                <path d="M2.5 9.5 12 4 21.5 9.5 12 15 2.5 9.5z" />
                <path d="M12 4v10" />
                <path d="M10 14v6h4v-6" />
                <path d="M6 12v5h4v-5" />
                <path d="M18 12v5h-4v-5" />
              </svg>
              <p className="text-sm">{t("option.veterinary")}</p>
            </div>

            {/* Construction */}
            <div className="bg-amber-600 p-8 flex flex-col items-center justify-center text-center text-white flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4"
              >
                <path d="M2 22h20" />
                <path d="M17 22V2" />
                <path d="M7 22V7" />
                <path d="M17 2H7" />
                <path d="M12 22V12" />
              </svg>
              <p className="text-sm">{t("option.construction")}</p>
            </div>

            {/* Mechanics */}
            <div className="bg-blue-600 p-8 flex flex-col items-center justify-center text-center text-white flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4"
              >
                <circle cx="12" cy="12" r="7" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="5" x2="12" y2="3" />
                <line x1="17" y1="7" x2="19" y2="5" />
                <line x1="19" y1="12" x2="21" y2="12" />
                <line x1="17" y1="17" x2="19" y2="19" />
                <line x1="12" y1="19" x2="12" y2="21" />
                <line x1="7" y1="17" x2="5" y2="19" />
                <line x1="5" y1="12" x2="3" y2="12" />
                <line x1="7" y1="7" x2="5" y2="5" />
              </svg>
              <p className="text-sm">{t("option.mechanics")}</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-4 mt-4">
            {/* General Electricity */}
            <div className="bg-yellow-500 p-8 flex flex-col items-center justify-center text-center text-black flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4"
              >
                <path d="M6 18h12" />
                <path d="M15 18v-6h4l-7-7-7 7h4v6h6z" />
              </svg>
              <p className="text-sm">{t("option.electricity")}</p>
            </div>

            {/* Business and Management */}
            <div className="bg-purple-600 p-8 flex flex-col items-center justify-center text-center text-white flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <p className="text-sm">{t("option.business")}</p>
            </div>

            {/* Cutting and Sewing */}
            <div className="bg-red-600 p-8 flex flex-col items-center justify-center text-center text-white flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4"
              >
                <path d="M6 9 L15 3 18 9 15 15 M9 3 L6 9 9 15 M15 3 L9 9 M9 15 L3 9" />
              </svg>
              <p className="text-sm">{t("option.fashion")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-center text-cyan-400 text-xl md:text-lg mb-12">
            {t("desc.title")}
          </h1>

          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-5/12 mb-10 relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 text-gray-300 text-4xl font-light">
                01
              </div>
              <div className="bg-cyan-400 text-white p-2 mb-4">
                <h4 className="font-medium">{t("learning.context.title")}</h4>
              </div>
              <p className="text-sm">{t("learning.context.description")}</p>
            </div>

            {/* Section 04 */}

            <div className="w-full md:w-5/12 mb-10 relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 text-gray-300 text-4xl font-light">
                04
              </div>
              <div className="bg-red-600 text-white p-2 mb-4">
                <h4 className="font-medium">{t("service.action.title")}</h4>
              </div>
              <p className="text-sm">{t("service.action.description")}</p>
            </div>

            {/* Section 02 */}
           
            <div className="w-full md:w-5/12 mb-10 relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 text-gray-300 text-4xl font-light">
                02
              </div>
              <div className="bg-cyan-400 text-white p-2 mb-4">
                <h4 className="font-medium">
                  {t("concept.understanding.title")}
                </h4>
              </div>
              <p className="text-sm">
                {t("concept.understanding.description")}
              </p>
            </div>

            {/* Section 05 */}
            <div className="w-full md:w-5/12 mb-10 relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 text-gray-300 text-4xl font-light">
                05
              </div>
              <div className="bg-blue-800 text-white p-2 mb-4">
                <h4 className="font-medium ">La langue et l'identité</h4>
              </div>
              <p className="text-sm">
                — Les élèves doivent apprendre au moins le français et l'anglais
                ainsi qu'avoir des notions en Kiswahili. Apprendre à communiquer
                de différentes façons est essentiel pour le développement d'une
                compréhension interculturelle et crucial pour la formation de
                son identité.
              </p>
            </div>

            {/* Section 03 */}
            <div className="w-full md:w-5/12 mb-10 relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 text-gray-300 text-4xl font-light">
                03
              </div>
              <div className="bg-orange-300 text-white p-2 mb-4">
                <h4 className="font-medium">
                  Les approches de l'apprentissage
                </h4>
              </div>
              <p className="text-sm">
                — Fil conducteur de tous les groupes de matières de notre
                programme, les approches de l'apprentissage fournissent la base
                d'un apprentissage autonome et encouragent l'application par les
                élèves de leurs connaissances et de leurs compétences dans des
                contextes nouveaux. Le développement et l'application de ces
                compétences aident les élèves à apprendre à apprendre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
