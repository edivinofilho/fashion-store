import { styled } from "styled-components";
import { letterParagraph } from "../../styles/globalStyle.ts";


export const FooterStyled = styled.footer`
    width: 100%;
    min-height: 156px;
    height: auto;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;

    p{
        padding: 10px;
        text-align: center;
        ${letterParagraph}
    }
`