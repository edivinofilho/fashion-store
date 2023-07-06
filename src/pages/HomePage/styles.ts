import { styled } from "styled-components"
import { letterTitle1 } from "../../styles/globalStyle.ts"

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 25px;
    margin-top: 25px;

    div{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 15px;
        align-items: center;
        justify-content: center;
        padding: 0px 15px;

    }

    .imgCover{
        width: clamp(200px,80vw,900px);
    }

    .title{
        ${letterTitle1}
    }

    @media (max-width: 600px){

        align-items: center;

        div{
            flex-direction: column;
        }
    }

`