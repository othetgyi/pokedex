import React from "react";
import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #30a7d7;
  border-radius: 10px;
  padding: 10px;
`;

export const SizeDataContainer = styled.div`
  width: 250px;
`;

export const StyledSizeCategoryText = styled.p`
  color: white;
  font-family: "Arial";
  font-size: 18px;
  margin: 0;
`;

export const StyledSizeDataText = styled.p`
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
    // <SizeDataContainer>
    <div>
      <StyledSizeCategoryText>Category</StyledSizeCategoryText>
      <StyledSizeDataText>{genus}</StyledSizeDataText>
      <StyledSizeCategoryText>Height</StyledSizeCategoryText>
      <StyledSizeDataText>{`${height / 10}m`}</StyledSizeDataText>
      <StyledSizeCategoryText>Weight</StyledSizeCategoryText>
      <StyledSizeDataText>{`${weight / 10}kg`} </StyledSizeDataText>
    </div>
    // </SizeDataContainer>
  );
};
