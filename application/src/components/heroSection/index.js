import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button, ButtonR } from "../ButtonElements";
import Video from "../../videos/bgvideo2.mp4";
import "../../App.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">Your Trusted Real Estate Partner</h1>
        <p className="hero-text">Help us help you find the perfect home. ❤️</p>
        <HeroBtnWrapper>
          {/* <ButtonR
            to="/signin"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            See properties {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonR> */}
          <Button
            to="services" // id of the Properties section
            smooth={true} // smooth scrolling
            duration={500} // scroll duration in ms
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            See properties {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
