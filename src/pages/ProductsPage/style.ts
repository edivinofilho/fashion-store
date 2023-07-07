import { styled } from "styled-components";

export const ConteinerTopStyled = styled.div`
width: 100%;
height: 100vh;
.HomeProduct{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
}

`

export const ProductMainStyled = styled.div`
width: 100%;
height: 932px;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 30px;

.ProductContainer{
    display: flex;
    gap: 60px;

    @media(max-width:425px){
        flex-direction: column;
        align-items: center;

    }

    div{
    
    width: clamp(280px, 80vw, 499px);
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;

    button{
        width: 226px;
        height: 55px ;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 23px;
    }

    h4{
        font-family: 700;
        font-size: 1.5rem;
    }

    span{
        font-family: 400;
        font-size: 2rem;
    }
    p{
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 21px;
        
    }
    
}
}

.ProductMain{
    height: clamp(280px, 80vw, 500px);
}


`