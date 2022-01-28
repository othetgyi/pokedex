import React from "react";
import { Character } from "../App";
import styled from "styled-components";
import { Card } from "./Card";
import { Link } from "react-router-dom";

const CardsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 960px;
`;

export const Grid: React.FC<{ characters: Character[] }> = ({ characters }) => {
  return (
    <CardsGrid>
      {characters.map((character: any) => (
        <Link to={`/details/${character.name}`}>
          <Card character={character} />
        </Link>
      ))}
    </CardsGrid>
  );
};
