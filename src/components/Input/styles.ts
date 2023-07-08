import { styled } from "styled-components"
import { letterPriceSmall } from "../../styles/globalStyle"

export const InputStyled = styled.input`
    background-color: grey;
    color: grey;
    padding: 15px;
    width: 100%;
    height: 78px;
    border: 1px solid grey;

    &::placeholder{
        color: grey;
    }

     &:hover, &:focus{
        border: 1px solid grey;
        outline: none;
    }
`
export const InputContainer = styled.div`
  width: 100%;
  p {
    font:${letterPriceSmall};
    color: red;
  }
`