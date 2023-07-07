import { styled } from "styled-components"
import { imgCover, letterTitle1, letterTitle2 } from "../../styles/globalStyle.ts"

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 25px;
    margin-top: 25px;

    .containerHome{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 50px;
    }

    .imgCover{
        ${imgCover}
    }

    .title{
        ${letterTitle1};
        word-break: keep-all;
    }

    h2{
        ${letterTitle2}
    }

    @media (max-width: 600px){



    }
`