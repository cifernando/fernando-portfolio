import React from "react";

const About = () => {
  return (
    <div className="lg:flex h-screen" id="about">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-128 lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
            Alegria{" "}
            <span className="text-indigo-600 dark:text-indigo-400">MeuIRMÃO</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
            Se Deus não existe porque as plantas cresce e dá anana, orango e elancia pra nois comer? Explica.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <a
              href="#"
              className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Senta
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
            >
              Aqui
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: 'url(/fernandoHero.jpg)' } }
        >
          <div className="w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
