import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface RouteState {
  state: string;
}

const Coin = () => {
  const { state } = useLocation() as RouteState;
  const [loading, setLoding] = useState(true);

  return (
    <Container>
      <Header>
        <Title>{state || "로딩 중..."}</Title>
      </Header>
      {loading ? <Loader>로딩 중...</Loader> : null}
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

export default Coin;
