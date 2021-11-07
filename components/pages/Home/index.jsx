import Button from "@material-tailwind/react/Button";
import {
  ContainerPage,
  Header,
  Main,
  NavContainer,
  NavContent,
  NavLink,
  NavLinkActive,
  NavTitle,
  HomeSection,
  HomeContent,
  HomeTitle,
  HomeSubtitle,
  ImageContainer,
  Image,
} from "../../templates";

const Home = () => {
  return (
    <ContainerPage>
      <Header>
        <NavContainer>
          <NavTitle>Fernando</NavTitle>
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
          <Image
            className=""
            src="/fernando.jpg"
            alt="Fernando Photo"
          />
        </ImageContainer>
      </Main>
    </ContainerPage>
  );
};

export default Home;
