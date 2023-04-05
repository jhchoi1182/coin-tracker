import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "../../Interface/Interface";

const Title = ({ children }: ChildrenProps) => {
  return <TitleText>{children}</TitleText>;
};

export default React.memo(Title);

const TitleText = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
  margin-left: 55px;
`;
