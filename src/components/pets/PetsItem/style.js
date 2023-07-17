import styled from "styled-components/native";
import theme from "../../../theme";

export const PetItemContainer = styled.View`
  padding: 20px;
  bottom-border: 5px black solid;
  flex-direction: row;
  background-color: ${theme.colors.accent};
`;

export const PetItemAvatarColumn = styled.View`
  align-items: center;
  justify-content: center;
`;
export const PetItemContentColumn = styled.View``;

export const PetItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.primary};
`;
