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

    ::-webkit-scrollbar-track {
        background: #FFFFFF;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: #000000;
        border-radius: 10px;
    }
}

#root{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
}

main{
    width: 100%;
    max-width: 1440px;
    height: auto;
    padding: 0px 15px;
    margin-top: 25px;
}

a {
    text-decoration: none;
}

button, .button{
    text-decoration: none;
    cursor: pointer;
    color: #000000;
    border-radius: 3px;
}
`