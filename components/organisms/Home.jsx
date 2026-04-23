import FadeIn from "react-fade-in";
import Button from "@material-tailwind/react/Button";
import useDarkMode from "../../hooks/useDarkMode";
import ToggleTheme from "../../components/atoms/ToggleTheme";
import {
  ContainerPage,
  Header,
  HomeContent,
  HomeSection,
  HomeSubtitle,
  HomeTitle,
  Image,
  ImageContainer,
  Main,
  NavContainer,
  NavContent,
  NavLink,
  NavLinkActive,
  NavTitle,
} from "../templates";

const Home = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <ContainerPage id="home">
      <Header>
        <NavContainer>
          <NavTitle>Fernando</NavTitle>
          <ToggleTheme colorTheme={colorTheme} setTheme={setTheme} />
          <NavContent>
            <NavLinkActive href="#home">Home</NavLinkActive>
            <NavLink href="#about">About Me</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </NavContent>
        </NavContainer>
      </Header>

      <Main>
        <HomeSection>
          <HomeContent>
            <FadeIn transitionDuration="2000">
              <HomeTitle>Hi, I'm Fernando!</HomeTitle>
            </FadeIn>
            <FadeIn transitionDuration="2000" delay="1500">
              <HomeSubtitle>
                I'm inherently curious. I believe that openness to the world
                and to the people in it is the foundation of everything.
                I pursue excellence.
              </HomeSubtitle>
            </FadeIn>
            <FadeIn transitionDuration="2000" delay="3000">
              <Button
                color="purple"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={true}
                iconOnly={false}
                ripple="light"
                onClick={() => {
                  window.open("mailto:nando.no@outlook.com", "_blank");
                }}
              >
                Get in Touch
              </Button>
            </FadeIn>
          </HomeContent>
        </HomeSection>

        <ImageContainer>
          <Image className="" src="/fernando.jpg" alt="Fernando Photo" />
        </ImageContainer>
      </Main>
    </ContainerPage>
  );
};

export default Home;
