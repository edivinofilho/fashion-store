import { styled } from "styled-components"

export const InputStyled = styled.input`
    background-color: #EEEEEE;
    color: #EEEEEE;
    padding: 15px;
    width: 100%;
    height: 78px;
    border: #EEEEEE;

    &::placeholder{
        color: #EEEEEE;
    }

     &:hover, &:focus{
        border: 1px solid #EEEEEE;
        outline: none;
    }
`
