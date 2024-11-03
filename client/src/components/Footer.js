// src/components/Footer.js

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 GymPro. All rights reserved.</p>
      <p>Contact: info@gympro.com | Phone: +91 - 9999999999</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`;
