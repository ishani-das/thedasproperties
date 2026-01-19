import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/space.svg";
import Icon2 from "../../images/online.svg";
import Icon3 from "../../images/real-time.svg";
import Dumbarton from "../../images/dumbarton.jpeg";
import Alexander from "../../images/alexander.webp";
import Pedro from "../../images/pedro.jpg";
import Hamilton from "../../images/hamilton.webp";
import RockSpring from "../../images/rockspring.jpg";
import Mission from "../../images/mission.jpg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Properties</ServicesH1>
      <ServicesWrapper>
        <a
          href="https://www.zillow.com/homedetails/50-Dumbarton-Ave-Redwood-City-CA-94063/82958815_zpid/"
          target="_blank" // opens in new tab
          rel="noopener noreferrer" // security best practice
          style={{ textDecoration: "none", color: "inherit" }} // optional styling
        >
          <ServicesCard>
            <ServicesIcon src={Dumbarton} />
            <ServicesH2>50 Dumbarton</ServicesH2>
            <ServicesP>
              A beautiful n bedroom home with blah blah blah...
            </ServicesP>
          </ServicesCard>
        </a>
        <a
          href="https://www.zillow.com/b/201-alexander-ave-san-jose-ca-9NZK9h/"
          target="_blank" // opens in new tab
          rel="noopener noreferrer" // security best practice
          style={{ textDecoration: "none", color: "inherit" }} // optional styling
        >
          <ServicesCard>
            <ServicesIcon src={Alexander} />
            <ServicesH2>201 Alexander Ave</ServicesH2>
            <ServicesP>
              A beautiful n bedroom home with blah blah blah...
            </ServicesP>
          </ServicesCard>
        </a>
        <a
          href="https://www.redfin.com/CA/San-Jose/647-N-San-Pedro-St-95110/home/1198435"
          target="_blank" // opens in new tab
          rel="noopener noreferrer" // security best practice
          style={{ textDecoration: "none", color: "inherit" }} // optional styling
        >
          <ServicesCard>
            <ServicesIcon src={Pedro} />
            <ServicesH2>647 N San Pedro</ServicesH2>
            <ServicesP>
              A beautiful n bedroom home with blah blah blah...
            </ServicesP>
          </ServicesCard>
        </a>
        <a
          href="https://www.zillow.com/b/1182-w-hamilton-ave-campbell-ca-9VGZHD/"
          target="_blank" // opens in new tab
          rel="noopener noreferrer" // security best practice
          style={{ textDecoration: "none", color: "inherit" }} // optional styling
        >
          <ServicesCard>
            <ServicesIcon src={Hamilton} />
            <ServicesH2>1182 W Hamilton Ave</ServicesH2>
            <ServicesP>
              A beautiful n bedroom home with blah blah blah...
            </ServicesP>
          </ServicesCard>
        </a>
        <a
          href="https://www.zillow.com/homedetails/1804-Rock-Spring-Dr-4-San-Jose-CA-95112/448218311_zpid/"
          target="_blank" // opens in new tab
          rel="noopener noreferrer" // security best practice
          style={{ textDecoration: "none", color: "inherit" }} // optional styling
        >
          <ServicesCard>
            <ServicesIcon src={RockSpring} />
            <ServicesH2>1804 Rock Spring Drive</ServicesH2>
            <ServicesP>
              A beautiful n bedroom home with blah blah blah...
            </ServicesP>
          </ServicesCard>
        </a>
        <a
          href="https://www.redfin.com/CA/Fremont/3379-Mission-View-Dr-94538/home/1111490"
          target="_blank" // opens in new tab
          rel="noopener noreferrer" // security best practice
          style={{ textDecoration: "none", color: "inherit" }} // optional styling
        >
          <ServicesCard>
            <ServicesIcon src={Mission} />
            <ServicesH2>3379 Mission View Dr</ServicesH2>
            <ServicesP>
              A beautiful n bedroom home with blah blah blah...
            </ServicesP>
          </ServicesCard>
        </a>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
