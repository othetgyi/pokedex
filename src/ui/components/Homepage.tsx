import styled from "styled-components";
import { Grid } from "./Grid";

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: black;
  font-family: "Arial";
  font-size: 26px;
  line-height: 20px;
`;

const LoadMoreButton = styled.button`
  width: 140px;
  height: 50px;
  font-family: "Arial";
  border-radius: 5px;
  background-color: #30a7d7;
  color: white;
  border: none;
  font-size: 18px;
`;

export const Homepage = () => {
  return (
    <HomepageContainer>
      <Title>Pokédex</Title>
      <Grid />
      <LoadMoreButton>Load more Pokémon</LoadMoreButton>
    </HomepageContainer>
  );
};
