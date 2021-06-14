import React from "react";
import { animateScroll as scroll} from 'react-scroll'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>
              <FooterLink to="/signin">Como funciona</FooterLink>
              <FooterLink to="/signin">Comentários</FooterLink>
              <FooterLink to="/signin">Carreiras</FooterLink>
              <FooterLink to="/signin">Investidores</FooterLink>
              <FooterLink to="/signin">Termos de Serviço</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Vídeos</FooterLinkTitle>
              <FooterLink to="/signin">Mande seu vídeo</FooterLink>
              <FooterLink to="/signin">Embaixadores</FooterLink>
              <FooterLink to="/signin">Agência</FooterLink>
              <FooterLink to="/signin">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contatos</FooterLinkTitle>
              <FooterLink to="/signin">Email</FooterLink>
              <FooterLink to="/signin">Suporte</FooterLink>
              <FooterLink to="/signin">Destinos</FooterLink>
              <FooterLink to="/signin">Parcerias</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Programas sociais</FooterLinkTitle>
              <FooterLink to="/signin">Crianças</FooterLink>
              <FooterLink to="/signin">Velhinhas</FooterLink>
              <FooterLink to="/signin">Pássaros silvestres</FooterLink>
              <FooterLink to="/signin">Comunismo</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>CréditoParaTodxs</SocialLogo>
            <WebsiteRights>
            Robert R © {new Date().getFullYear()} 
              {" "}Todos os direitos reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/Robertrodrigues000" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/robertrodrigues000/?hl=pt-br" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.github.com/Robertrodrigues000" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/robert-rodrigues-368738207/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
