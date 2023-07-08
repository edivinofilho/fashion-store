import { styled } from "styled-components"

export const InputStyled = styled.input`
    background-color: grey;
    color: grey;
    padding: 15px;
    width: 100%;
    height: 78px;
    border: grey;

    &::placeholder{
        color: grey;
    }

     &:hover, &:focus{
        border: 1px solid grey;
        outline: none;
    }
`
