import { styled, css } from "styled-components";

interface IStyledProps {
    onlyBrand: boolean
}

export const HeaderStyled = styled.header<IStyledProps>`
    width: 100%;
    max-width: 1448px;
    min-height: 48px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    padding: 25px 10px;

    ${({ onlyBrand }) => {
        if (onlyBrand === true) {
            return css`
                justify-content: center;
            `
        } else {
            return css`
                justify-content: space-between;
            `
        }
    }}
`