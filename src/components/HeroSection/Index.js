import React, { useState } from "react";
import Video from "../../videos/video3.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  Button,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="vide/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Chegou o CréditoParaTodxs</HeroH1>
        <HeroP>
          Escolha uma nossas ofertas de crédito e em poucos minutos você já pode
          estar realizando seu sonho. Faça uma simulação agora
        </HeroP>

        <Button
          to="/credit"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          smooth={true}
          duration={700}
          spy={true}
          exact="true"
          offset={-80}
        >
          Vamos lá {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
