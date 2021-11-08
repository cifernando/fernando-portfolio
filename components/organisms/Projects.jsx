import React from "react";
import Carrousel from "../molecules/Carrousel";
import items from "../data";
import {
  ContainerProjects,
  Main,
  NavContainer,
  ProjectsContent,
  ProjectsSubtitle,
  ProjectsTitle,
} from "../templates";
import SocialMedias from "../molecules/SocialMedias";

const Projects = () => {
  return (
    <ContainerProjects id="projects">
      <NavContainer className="flex flex-col gap-9">
        <ProjectsTitle>
          Meus Projetos.
        </ProjectsTitle>
        <ProjectsSubtitle>
          Estes são alguns dos projetos que desenvolvi estudando na Trybe.
        </ProjectsSubtitle>
      </NavContainer>
      <Main className="justify-center">
        <ProjectsContent>
          <div>
            <Carrousel items={items} />
          </div>
          <SocialMedias />
        </ProjectsContent>
      </Main>
    </ContainerProjects>
  );
};

export default Projects;
