import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Header from "../Components/Header/Header";
import { ICoin } from "../Interface/Interface";

const Coins = () => {
  const { isLoading, data, isError } = useQuery<ICoin[]>(["allCoins"], fetchCoins);

  return (
    <>
      <Container>
        <Helmet>
          <title>코인</title>
        </Helmet>
        <Header>코인</Header>
        {isLoading ? (
          <Loader>로딩 중...</Loader>
        ) : isError ? (
          <Loader>조회 요청 수 시간 당 60회 초과</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link to={`${process.env.PUBLIC_URL}/${coin.id}`} state={coin.name}>
                  <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </>
  );
};

export default Coins;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s;
  }
  :hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
