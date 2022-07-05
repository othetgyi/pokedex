import React from "react";
import styled, { css } from "styled-components";

export interface PokemonTypeBadgeTypes {
  type: {
    name: string;
  };
}

export const StyledTypeBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
`;

const matchTypeToColour = (type: string) => {
  switch (type) {
    case "normal":
      return css`
        background: #a8a878;
      `;
    case "fire":
      return css`
        background: #f08030;
      `;
    case "water":
      return css`
        background: #6890f0;
      `;
    case "electric":
      return css`
        background: #f8d030;
      `;
    case "grass":
      return css`
        background: #78c850;
      `;
    case "ice":
      return css`
        background: #98d8d8;
      `;
    case "fighting":
      return css`
        background: #c03028;
      `;
    case "poison":
      return css`
        background: #a040a0;
      `;
    case "ground":
      return css`
        background: #e0c068;
      `;
    case "flying":
      return css`
        background: #a890f0;
      `;
    case "psychic":
      return css`
        background: #f85888;
      `;
    case "bug":
      return css`
        background: #a8b820;
      `;
    case "rock":
      return css`
        background: #b8a038;
      `;
    case "ghost":
      return css`
        background: #705898;
      `;
    case "dragon":
      return css`
        background: #7038f8;
      `;
    case "dark":
      return css`
        background: #705848;
      `;
    case "steel":
      return css`
        background: #b8b8d0;
      `;
    case "fairy":
      return css`
        background: #ee99ac;
      `;
    default:
      return css`
        background: black;
      `;
  }
};

const StyledTypeBadge = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 70px;
  border-radius: 10px;
  ${({ type }) => matchTypeToColour(type)}
`;

const StyledTypeBadgeText = styled.p`
  color: white;
  font-family: "Arial";
`;

export const TypeBadge: React.FC<{ type: string }> = ({ type }) => {
  return (
    <StyledTypeBadge type={type}>
      <StyledTypeBadgeText>{type}</StyledTypeBadgeText>
    </StyledTypeBadge>
  );
};
