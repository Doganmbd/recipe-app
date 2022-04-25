import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
    
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About FrontEnd Developer <span>Mustafa Bilal DOĞAN </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Mustafa Bilal</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, NodeJS,SQL,
           Hibernate .
        </h4>
        <h2>
          <a href="mailto:doganmbdogan@gmail.com">Send email</a> :
          doganmbdogan@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
