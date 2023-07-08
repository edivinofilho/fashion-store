import styled from "styled-components"
import { letterMenu, letterPriceSmall } from "../../../styles/globalStyle"

export const StyledTextArea = styled.textarea`
    background-color: #EEEEEE;
    color: rgba(0, 0, 0, 0.5);
    padding: 15px;
    width: 100%;
    height: 78px;
    border: #EEEEEE;

    resize: none;
    height: 110px;
    font: ${letterMenu};
    font-size: 14px;

    &::placeholder{
        color:rgba(0, 0, 0, 0.5);
    }

     &:hover, &:focus{
        border: 1px solid #EEEEEE;
        outline: none;
    }
`
export const TextAreaContainer = styled.div`
  p {
    font:${letterPriceSmall};
    color: red;
  }
`