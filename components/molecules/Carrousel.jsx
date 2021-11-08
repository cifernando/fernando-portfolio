import { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Button from "@material-tailwind/react/Button";
import {
  CarrouselContainer,
  CarrouselContent,
  CarrouselDescription,
  CarrouselImage,
  CarrouselSubtitle,
  Flex,
} from "../templates";

const Carrousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = ({ target: { name } }) => {
    if (name === "next") {
      if (activeIndex === items.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    } else {
      if (activeIndex === 0) {
        setActiveIndex(items.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <CarrouselContainer>
      <CarrouselImage src={items[activeIndex].image} alt="avatar" />

      <CarrouselContent className="flex justify-between">
        <div className="w-1/5 mr-5 flex flex-col justify-between">
          <Flex className="justify-evenly">
            <CarrouselSubtitle>{activeIndex + 1}</CarrouselSubtitle>
            <CarrouselSubtitle>de</CarrouselSubtitle>
            <CarrouselSubtitle>{items.length}</CarrouselSubtitle>
          </Flex>
          <Flex className="justify-between">
            <Button
              color="purple"
              name="prev"
              buttonType="link"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="dark"
              onClick={handleClick}
            >
              <BsArrowLeft className="text-xl" />
            </Button>
            <Button
              color="purple"
              name="next"
              buttonType="link"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="dark"
              onClick={handleClick}
            >
              <BsArrowRight className="text-xl" />
            </Button>
          </Flex>
        </div>
        <div className="w-1/5">
          <CarrouselSubtitle>Projeto</CarrouselSubtitle>
          <CarrouselDescription>
            {items[activeIndex].title}
          </CarrouselDescription>
        </div>
        <div className="w-2/5 invisible sm:visible">
          <CarrouselSubtitle>Ideia</CarrouselSubtitle>
          <CarrouselDescription>{items[activeIndex].idea}</CarrouselDescription>
        </div>
        <div className="w-2/5 flex justify-center">
          <Button
            color="purple"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="dark"
            onClick={() => {
              window.open(
                items[activeIndex].url,
                "_blank"
              );
            }}
          >
            Veja o Projeto
          </Button>
        </div>
      </CarrouselContent>
    </CarrouselContainer>
  );
};

export default Carrousel;
