import { styled } from "styled-components";
import { letterParagraph, letterPriceSmall, letterTitle4 } from "../../styles/globalStyle.ts";


export const LiStyled = styled.li`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .image{
        width: clamp(250px,68vw,332px);
    }

    .container{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .name{
        ${letterTitle4}
    }

    .price{
        ${letterPriceSmall}
    }

    .containerButton{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }

    .containerButton > button {
        width: 60px;
        height: 60px;
        background-color: ${({ theme }) => theme.colors.black};
    }

    .containerButton > button > img{
        width: 29.47px;
        height: 31.46px;
    }

    .containerButton > span{
        ${letterParagraph}
    }

`