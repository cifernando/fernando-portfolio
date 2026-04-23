import React from 'react'
import { FooterContainer, FooterContainerLinks, FooterContent, FooterContentLinks, FooterDescription, FooterHr, FooterLink, FooterPage, FooterRights, FooterTitle } from '../templates/footer'

const Footer = () => {
  return (
    <FooterPage>
        <FooterContainer>
            <FooterContent>
            <FooterTitle href="#home">Fernando</FooterTitle>

            <FooterDescription>Senior Software Engineer · React & Node Specialist · São Paulo, Brazil</FooterDescription>

            </FooterContent>

            <FooterHr />

            <FooterContainerLinks>
            <FooterRights>© Copyright 2021. All Rights Reserved.</FooterRights>

            <FooterContentLinks>
                <FooterLink href="#home"> Home </FooterLink>

                <FooterLink href="#about"> About Me </FooterLink>

                <FooterLink href="#projects"> My Projects </FooterLink>
            </FooterContentLinks>
            </FooterContainerLinks>
        </FooterContainer>
    </FooterPage>
  )
}

export default Footer
