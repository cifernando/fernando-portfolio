import React from 'react'
import { FooterContainer, FooterContainerLinks, FooterContent, FooterContentLinks, FooterDescription, FooterHr, FooterLink, FooterPage, FooterRights, FooterTitle } from '../templates/footer'

const Footer = () => {
  return (
    <FooterPage>
        <FooterContainer>
            <FooterContent>
            <FooterTitle href="#home">Fernando</FooterTitle>

            <FooterDescription>Quando é bom não tem melhor. - Erick Jaquin</FooterDescription>

            </FooterContent>

            <FooterHr />

            <FooterContainerLinks>
            <FooterRights>© Copyright 2021. All Rights Reserved.</FooterRights>

            <FooterContentLinks>
                <FooterLink href="#home"> Home </FooterLink>

                <FooterLink href="#about"> Sobre Mim </FooterLink>

                <FooterLink href="#projects"> Meus Projetos </FooterLink>
            </FooterContentLinks>
            </FooterContainerLinks>
        </FooterContainer>
    </FooterPage>
  )
}

export default Footer
