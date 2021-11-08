import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SocialContainer, SocialLinks } from "../templates";

const SocialMedias = () => {
  return (
    <SocialContainer>
      <SocialLinks
        target="_blank"
        href="https://www.instagram.com/fernando_n_o/"
      >
        <BsInstagram />
      </SocialLinks>
      <SocialLinks
        target="_blank"
        href="https://www.linkedin.com/in/fernando-nascimento-oliveira/"
      >
        <BsLinkedin />
      </SocialLinks>
      <SocialLinks target="_blank" href="https://github.com/cifernando">
        <BsGithub />
      </SocialLinks>
    </SocialContainer>
  );
};

export default SocialMedias;
