import { styled, css } from "styled-components";

interface IStyledProps {
    onlyBrand: boolean
}

export const HeaderStyled = styled.header<IStyledProps>`
    width: 100%;
    min-height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 25px 10px;

    div{
        gap: 15px;
        width: 100%;
        max-width: 1440px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

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
    }

    div > .Logo{
        width: 166px;
        height: 24px;
    }

    div > .Cart{
        width: 48px;
        height: 48px;
    }
`