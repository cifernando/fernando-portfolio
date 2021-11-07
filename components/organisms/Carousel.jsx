import React from "react";
import Button from "@material-tailwind/react/Button";
import {
  HomeContent,
  HomeSection,
  HomeSubtitle,
  HomeTitle,
  ImageContainer,
  Main,
  Image,
} from "../templates";
import Pagination from "../molecules/Pagination";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    setActiveIndex(value);
  };

  return (
    <Main>
      <ImageContainer>
        <Image className="" src={items[activeIndex].image} alt="Fernando Photo" />
      </ImageContainer>

      <HomeSection>
        <HomeContent>
          <HomeTitle>Oi, eu sou o Fernando!</HomeTitle>
          <HomeSubtitle>
            Eu sou inerentemente curioso. Acredito que a alteridade com o mundo
            e com quem nele vive é o pilar de tudo. Busco a excelência.
          </HomeSubtitle>
          <Button
            color="purple"
            buttonType="filled"
            size="lg"
            rounded={false}
            block={true}
            iconOnly={false}
            ripple="light"
          >
            Entre em Contato
          </Button>
        </HomeContent>
      </HomeSection>

      <Pagination items={items} onChange={handleChange} />
    </Main>
  );
};

export default Carousel;
