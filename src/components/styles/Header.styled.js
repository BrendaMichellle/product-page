import styled from "styled-components";

export const StyledHeader = styled.header `
  font-family: 'Kumbh Sans', sans-serif;
  width: 100%;
  background-color: ${( { theme } )=> theme.colors.body};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: ${(props) => props.cr};
  padding: 15px;

  .right {
    position: absolute;
    right: 10px;
  }
  .logo {
    width: 100px;
    max-width: 138px;
    display: inline;
    margin-left: 12px;
  }
  .user {
    height: 25px;
    width: 25px;
    margin-left: 12px;
  }
  .icon {
    height: 18px; 
    width: 18px;
  }
  .bars {
    height: 15px;
    width: 15px;
  }
`