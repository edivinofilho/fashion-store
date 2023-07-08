import styled from "styled-components"
import { letterMenu, letterPriceSmall } from "../../../styles/globalStyle"

export const StyledTextArea = styled.textarea`
    background-color: grey;
    color: grey;
    padding: 15px;
    width: 100%;
    height: 78px;
    border: grey;

    resize: none;
    height: 110px;
    font: ${letterMenu};
    font-size: 14px;

    &::placeholder{
        color: grey;
    }

     &:hover, &:focus{
        border: 1px solid grey;
        outline: none;
    }
`
export const TextAreaContainer = styled.div`
  p {
    font:${letterPriceSmall};
    color: red;
  }
`