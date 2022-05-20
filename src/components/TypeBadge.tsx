import React from "react";
import styled from "styled-components";

export interface PokemonTypeBadgeTypes {
  type: {
    name: string;
  };
}

export const StyledTypeBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StyledTypeBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 70px;
  background-color: yellow;
  border-radius: 10px;
`;

const StyledTypeBadgeText = styled.p`
  color: black;
  font-family: "Arial";
`;

export const TypeBadge: React.FC<{ type: string }> = ({ type }) => {
  return (
    <StyledTypeBadge>
      <StyledTypeBadgeText>{type}</StyledTypeBadgeText>
    </StyledTypeBadge>
  );
};
