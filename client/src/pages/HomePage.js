import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomeContainer>
      <Title>Welcome to GymPro</Title>
      <Subtitle>Your partner in fitness.</Subtitle>
      <Description>
        Choose from our variety of membership plans and get access to
        world-class equipment and personal training. Track your fitness journey
        with ease!
      </Description>
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div`
  text-align: center;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #282c34;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #61dafb;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #555;
`;
