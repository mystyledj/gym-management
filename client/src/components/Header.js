// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaDumbbell } from "react-icons/fa";

const Header = () => {
  return (
    <Nav>
      <Logo to="/">
        {" "}
        <FaDumbbell /> GymPro{" "}
      </Logo>
      <NavMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/plans">Membership Plans</NavItem>
        <NavItem to="/register">Register</NavItem>
        <NavItem to="/login">Login</NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #282c34;
`;

const Logo = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #61dafb;
  }
`;
