import React from "react";
import styled from "styled-components";

export interface PokemonTypeBadgeTypes {
  type: {
    name: string;
  };
}

const StyledTypeBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTypeBadge = styled.div`
  height: 60px;
  width: 100px;
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

export const TypeBadgeContainer: React.FC<{ type: string }> = ({ type }) => {
  return (
    <StyledTypeBadgeContainer>
      <TypeBadge type={type} />
    </StyledTypeBadgeContainer>
  );
};
