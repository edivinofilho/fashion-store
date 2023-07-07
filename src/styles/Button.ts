import { styled, css } from "styled-components"

interface IStyledButtonProps {
    styleTypeButton: "white" | "black" | "back" ;
}

export const ButtonStyled = styled.button<IStyledButtonProps>`

    width: 100%;
    height: 60px;

    ${({ styleTypeButton }) => {
        switch (styleTypeButton) {
            case "white":
                return css`
                    background-color: ${({ theme }) => theme.colors.white};
                    color: ${({ theme }) => theme.colors.black};
                    border: 1px solid ${({ theme }) => theme.colors.black};

                    &:hover{
                        background-color: grey;
                        color: ${({ theme }) => theme.colors.white};
                        border: 1px solid grey;
                    }
                `
            case "black":
                return css`
                    background-color: ${({ theme }) => theme.colors.black};
                    color: ${({ theme }) => theme.colors.white};
                    border: 1px solid ${({ theme }) => theme.colors.white};

                    &:hover{
                        background-color: grey;
                        color: ${({ theme }) => theme.colors.black};
                        border: 1px solid grey;
                    }
                `
                 case "back":
                    return css`
                        background-color: ${({theme}) => theme.colors.black};
                        color: ${({theme}) => theme.colors.white};
                        border: 1px solid ${({theme}) => theme.colors.white};
                        align-self:end;
                        width: 209px;
                        height: 60px;


                    `
        }
    }}
`