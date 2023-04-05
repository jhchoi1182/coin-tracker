import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "../../Interface/Interface";
import Toggle from "./DarkModeToggle/Toggle";
import Title from "./Title";

const Header = ({ children }: ChildrenProps) => {
  return (
    <HeaderContainer>
      <Title>{children}</Title>
      <Toggle />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
