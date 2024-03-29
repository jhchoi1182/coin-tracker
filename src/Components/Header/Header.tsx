import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ChildrenProps } from "../../Interface/Interface";
import Toggle from "./DarkModeToggle/Toggle";
import Title from "./Title";

const Header = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      {pathname === `${process.env.PUBLIC_URL}/` ? (
        <div style={{ width: "25px" }}></div>
      ) : (
        <BackBtn onClick={() => navigate(`${process.env.PUBLIC_URL}/`)}>&#8592;</BackBtn>
      )}
      <Title>{children}</Title>
      <Toggle />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const BackBtn = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
  margin-left: 5px;
  cursor: pointer;
`;
