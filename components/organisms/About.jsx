import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import Button from "@material-tailwind/react/Button";
import { GiClick } from "react-icons/gi";
import {
  AboutButtonContainer,
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutImageContainer,
  AboutTitle,
  AboutTitleSpan,
} from "../templates/about";

const About = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setShowContent(true);
      }
    });

    intersectionObserver.observe(document.querySelector("#show"));

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <AboutContainer id="about">
      {showContent ? (
        <AboutContent>
          <div className="max-w-xl">
            <FadeIn transitionDuration="3000">
              <AboutTitle>
                {items[activeIndex].title}{" "}
                <AboutTitleSpan>{items[activeIndex].title2}</AboutTitleSpan>
              </AboutTitle>
            </FadeIn>

            <AboutDescription className="mt-2">
              {items[activeIndex].description}
            </AboutDescription>

            <AboutDescription>
              {items[activeIndex].description2}
            </AboutDescription>

            <AboutDescription>
              {items[activeIndex].description3}
            </AboutDescription>

            {showButton && (
              <AboutButtonContainer>
                <FadeIn transitionDuration="3000" delay="2000">
                  <Button
                    color="purple"
                    buttonType="filled"
                    size="lg"
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
                    <GiClick className="text-3xl" />
                  </Button>
                </FadeIn>
              </AboutButtonContainer>
            )}
          </div>
        </AboutContent>
      ) : (
        <AboutContent>
          <div id="show" className="w-3 h-3"></div>{" "}
        </AboutContent>
      )}

      <AboutImageContainer>
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: `url(${items[activeIndex].image})` }}
        />
      </AboutImageContainer>
    </AboutContainer>
  );
};

export default About;
