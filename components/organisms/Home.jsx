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
    <ContainerPage>
      <Header>
        <NavContainer>
          <NavTitle>Fernando</NavTitle>
          <ToggleTheme colorTheme={colorTheme} setTheme={setTheme} />
          <NavContent>
            <NavLinkActive>Home</NavLinkActive>
            <NavLink>Sobre Mim</NavLink>
            <NavLink>Projetos</NavLink>
          </NavContent>
        </NavContainer>
      </Header>

      <Main>
        <HomeSection>
          <HomeContent>
            <HomeTitle>Oi, eu sou o Fernando!</HomeTitle>
            <HomeSubtitle>
              Eu sou inerentemente curioso. Acredito que a alteridade com o
              mundo e com quem nele vive é o pilar de tudo. Busco a excelência.
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

        <ImageContainer>
          <Image className="" src="/fernando.jpg" alt="Fernando Photo" />
        </ImageContainer>
      </Main>
    </ContainerPage>
  );
};

export default Home;
