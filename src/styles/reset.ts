import { createGlobalStyle } from "styled-components"

export const ResetStyle = createGlobalStyle`

*{
    margin: 0px;
    border: none;
    padding: 0px;
    box-sizing: border-box;
}

html,
body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}

#root{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.white};
}

`