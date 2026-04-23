import React from "react";
import Carrousel from "../molecules/Carrousel";
import { items } from "../data";
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
          My Projects.
        </ProjectsTitle>
        <ProjectsSubtitle>
          Here are some of the projects I've built throughout my journey as a developer.
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
