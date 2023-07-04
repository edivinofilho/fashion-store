import { styled } from "styled-components";
import { letterParagraph } from "../../styles/globalStyle.ts";


export const FooterStyled = styled.footer`
    width: 100%;
    height: 156px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        padding: 10px;
        text-align: center;
        ${letterParagraph}
    }


`