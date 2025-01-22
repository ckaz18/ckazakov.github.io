import newStyled from "@emotion/styled";
import { FC } from "react";
import selfie from '../../../public/selfie.jpg';
import Image from "next/image";


const HeroContainer = newStyled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
  text-align: center;
`;

const HeroTitle = newStyled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const HeroSubtitle = newStyled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;


const Homepage: FC = () => {
  return (
    <HeroContainer>
    <HeroTitle>Hi! My name is Christi Kazakov</HeroTitle>
    <HeroSubtitle>I am a full stack software engineer</HeroSubtitle>
    <Image src={selfie} alt='Selfie' width={250} style={{ borderRadius: '25%', height: 'auto' }} ></Image>
    <HeroSubtitle>This is a work in progress...</HeroSubtitle>
  </HeroContainer>
  );
};

export default Homepage;
