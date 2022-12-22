import React from "react";
import styled from "styled-components";
import { TypeBadge, TypeBadgeTypes } from "./TypeBadge";

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  font-size: 20px;
  font-family: "Gill Sans", sans-serif;
  height: 300px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PokemonImage = styled.img`
  width: auto;
  max-height: 150px;
`;

export const Card: React.FC<{
  imageSource: string;
  name: string;
  types: TypeBadgeTypes[];
  typeName: string;
}> = ({ imageSource, name, types, typeName }) => {
  return (
    <CardContainer>
      <PokemonImage src={imageSource} alt={name} />
      <h3>{name}</h3>
      <TypeContainer>
        {types.map((t) => (
          <TypeBadge type={typeName} />
        ))}
      </TypeContainer>
    </CardContainer>
  );
};
