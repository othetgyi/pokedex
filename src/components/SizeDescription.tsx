import React from "react";
import styled from "styled-components";

export const StyledSizeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #30a7d7;
  border-radius: 10px;
  padding: 10px;
`;

export const SizeDataContainer = styled.div`
  width: 250px;
`;

const StyledSizeCategoryText = styled.p`
  color: white;
  font-family: "Arial";
  font-size: 18px;
`;

const StyledSizeDataText = styled.p`
  color: black;
  font-family: "Arial";
  font-size: 18px;
`;

export const SizeData: React.FC<{
  height: number;
  weight: number;
  genus: string;
}> = ({ height, weight, genus }) => {
  return (
    <SizeDataContainer>
      <StyledSizeCategoryText>Category</StyledSizeCategoryText>
      <StyledSizeDataText>{genus}</StyledSizeDataText>
      <StyledSizeCategoryText>Height</StyledSizeCategoryText>
      <StyledSizeDataText>{`${height / 10}m`}</StyledSizeDataText>
      <StyledSizeCategoryText>Weight</StyledSizeCategoryText>
      <StyledSizeDataText>{`${weight / 10}kg`} </StyledSizeDataText>
    </SizeDataContainer>
  );
};
