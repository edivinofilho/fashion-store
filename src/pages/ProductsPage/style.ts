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
height: 500px;
display: flex;
align-items: center;
justify-content: center;
gap: 60px;



& > div:nth-child(2){
    
    width: 400px;
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
        background-color: #000000;
        color: white; 
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
`