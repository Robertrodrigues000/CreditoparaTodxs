import React, { useState } from "react";
import Video from "../../videos/video3.mp4";
import { ButtonR } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
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
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Cadastre uma nova conta hoje e receba R$ 250,00 reais em créditos no
          seu próximo pagamento
        </HeroP>
        <HeroBtnWrapper>
          <ButtonR
            to="/signin"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Vamos lá {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonR>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
