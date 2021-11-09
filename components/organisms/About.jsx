import React, { useState } from "react";
import Button from "@material-tailwind/react/Button";

const About = ({ items }) => {
  const [activeIndex , setActiveIndex] = useState(0);
  const [showButton , setShowButton] = useState(true);
  return (
    <div className="lg:flex h-screen w-screen" id="about">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-128 lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
            {items[activeIndex].title}{" "}
            <span className="text-indigo-600 dark:text-indigo-400">{items[activeIndex].title2}</span>
          </h2>

          <p className="mt-2 text-lg text-justify text-gray-700 dark:text-white lg:text-base">
            {items[activeIndex].description}
          </p>

          <p className="text-lg text-justify text-gray-700 dark:text-white lg:text-base">
            {items[activeIndex].description2}
          </p>

          <p className="text-lg text-justify text-gray-700 dark:text-white lg:text-base">
            {items[activeIndex].description3}
          </p>

          {showButton && (
            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <Button
              color="purple"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="dark"
              onClick={() => {
                setActiveIndex(1);
                setShowButton(false);
              }}
            >
              {items[activeIndex].button}
            </Button>
            </div>)}
        </div>
      </div>

      <div className="w-full h-full lg:w-1/2 lg:h-auto">
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: `url(${items[activeIndex].image})` } }
        >
          <div className="w-full h-screen"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
