import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SocialContainer, SocialLinks } from "../templates";

const SocialMedias = () => {
  return (
    <SocialContainer className="sm:flex-col sm:mt-0">
      <SocialLinks
        target="_blank"
        href="https://www.instagram.com/fernando_n_o/"
      >
        <BsInstagram className="hover:text-purple-60" />
      </SocialLinks>
      <SocialLinks
        target="_blank"
        href="https://www.linkedin.com/in/fernando-nascimento-oliveira/"
      >
        <BsLinkedin className="hover:text-purple-60" />
      </SocialLinks>
      <SocialLinks target="_blank" href="https://github.com/cifernando">
        <BsGithub className="hover:text-purple-60" />
      </SocialLinks>
    </SocialContainer>
  );
};

export default SocialMedias;
