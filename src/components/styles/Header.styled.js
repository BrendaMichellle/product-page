import styled from "styled-components";

export const StyledHeader = styled.header `
  background-color: ${( { theme } )=> theme.colors.body};
  color: ${(props) => props.cr};

  &:hover {
    background-color: black;
  }
`