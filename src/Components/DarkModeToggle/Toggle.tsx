import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../atoms";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

const Toggle = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  return (
    <ToggleContainer>
      <DarkIcon />
      <ToggleBox onClick={() => setIsDark((prev) => !prev)}>
        <ToggleButton isDark={isDark}></ToggleButton>
      </ToggleBox>
      <LightIcon />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 5px;
`;

const ToggleBox = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${(props) => props.theme.textColor};
  border: 1px solid black;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
`;

const ToggleButton = styled.button<{ isDark: boolean }>`
  width: 50%;
  height: 100%;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.accentColor};
  position: absolute;
  top: 0;
  transition: left 0.3s;
  left: ${(props) => (props.isDark ? "0" : "calc(100% - 29px)")};
  cursor: pointer;
`;
