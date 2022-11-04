import styled from "styled-components";
import { Grid } from "./Grid";
import { TypeBadge } from "./TypeBadge";
import { DescriptionComponent } from "./DescriptionComponent";

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dedede;
`;

const Title = styled.h1`
  color: black;
  font-family: "Arial";
  font-size: 26px;
  line-height: 20px;
`;

export const Homepage = () => {
  return (
    <HomepageContainer>
      <Title>Pokédex</Title>
      <Grid />
    </HomepageContainer>
  );
};
