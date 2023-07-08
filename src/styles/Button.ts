import { styled, css } from "styled-components"

interface IStyledButtonProps {
    styleTypeButton: "white" | "black"
}

export const ButtonStyled = styled.button<IStyledButtonProps>`

    width: 100%;
    height: 60px;

    ${({ styleTypeButton }) => {
        switch (styleTypeButton) {
            case "white":
                return css`
                    background-color: #FFFFFF;
                    color: #000000;
                    border: 1px solid #000000;

                    &:hover{
                        background-color: #EEEEEE;
                        color: #FFFFFF;
                        border: 1px solid #EEEEEE;
                    }
                `
            case "black":
                return css`
                    background-color: #000000;
                    color: #FFFFFF;
                    border: 1px solid #FFFFFF;

                    &:hover{
                        background-color: #EEEEEE;
                        color: #000000;
                        border: 1px solid #EEEEEE;
                    }
                `
        }
    }}
`